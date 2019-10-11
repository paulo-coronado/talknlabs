const MODEL_URL = '../model_web/'
const LABELS_URL = MODEL_URL + 'labels.json'
const MODEL_JSON = MODEL_URL + 'model.json'

const VIDEO = '../video.mp4'

var counter = 0
var time = 0
var timeDiff = 0
var startTime = null
var endTime = null
var earnings = 0
var isStart = true
var id = ''
var timestamp = ''

$('document').ready(() => {
  var videoRef = $('#video')
  var canvasRef = $('#canvas')

  $.ajax({
    url: VIDEO,
    type: 'HEAD',
    error: function () {
      // File do not exist
      Swal.fire({
        title: 'Erro',
        html: 'Faça <b>upload</b> de um vídeo para verificar resultados!',
        type: 'error',
        footer: "<a href='../main.html'>Faça upload aqui!</a>"
      })
    },
    success: function () {
      // File exist
      $("#loading").delay(4000).hide(0)
      $("#video-player").delay(4000).fadeIn()
      builder(videoRef, canvasRef)
    }
  });

})

const TFWrapper = model => {
  const calculateMaxScores = (scores, numBoxes, numClasses) => {
    const maxes = []
    const classes = []
    for (let i = 0; i < numBoxes; i++) {
      let max = Number.MIN_VALUE
      let index = -1
      for (let j = 0; j < numClasses; j++) {
        if (scores[i * numClasses + j] > max) {
          max = scores[i * numClasses + j]
          index = j
        }
      }
      maxes[i] = max
      classes[i] = index
    }
    return [maxes, classes]
  }

  const buildDetectedObjects = (
    width,
    height,
    boxes,
    scores,
    indexes,
    classes
  ) => {
    const count = indexes.length
    const objects = []
    for (let i = 0; i < count; i++) {
      const bbox = []
      for (let j = 0; j < 4; j++) {
        bbox[j] = boxes[indexes[i] * 4 + j]
      }
      const minY = bbox[0] * height
      const minX = bbox[1] * width
      const maxY = bbox[2] * height
      const maxX = bbox[3] * width
      bbox[0] = minX
      bbox[1] = minY
      bbox[2] = maxX - minX
      bbox[3] = maxY - minY
      objects.push({
        bbox: bbox,
        class: classes[indexes[i]],
        score: scores[indexes[i]]
      })
    }
    return objects
  }

  const detect = input => {
    const batched = tf.tidy(() => {
      const img = tf.browser.fromPixels(input)
      // Reshape to a single-element batch so we can pass it to executeAsync.
      return img.expandDims(0)
    })

    const height = batched.shape[1]
    const width = batched.shape[2]

    return model.executeAsync(batched).then(result => {
      const scores = result[0].dataSync()
      const boxes = result[1].dataSync()

      // clean the webgl tensors
      batched.dispose()
      tf.dispose(result)

      const [maxScores, classes] = calculateMaxScores(
        scores,
        result[0].shape[1],
        result[0].shape[2]
      )

      const prevBackend = tf.getBackend()
      // run post process in cpu
      tf.setBackend('cpu')
      const indexTensor = tf.tidy(() => {
        const boxes2 = tf.tensor2d(boxes, [
          result[1].shape[1],
          result[1].shape[3]
        ])
        return tf.image.nonMaxSuppression(
          boxes2,
          maxScores,
          20, // maxNumBoxes
          0.5, // iou_threshold
          0.5 // score_threshold
        )
      })
      const indexes = indexTensor.dataSync()
      indexTensor.dispose()
      // restore previous backend
      tf.setBackend(prevBackend)

      return buildDetectedObjects(
        width,
        height,
        boxes,
        maxScores,
        indexes,
        classes
      )
    })
  }
  return {
    detect: detect
  }
}

const builder = (videoRef, canvasRef) => {
  const modelPromise = tf.loadGraphModel(MODEL_JSON)
  const labelsPromise = fetch(LABELS_URL).then(data => data.json())
  Promise.all([modelPromise, labelsPromise])
    .then(values => {
      const [model, labels] = values
      detectFrame(videoRef.get(0), canvasRef.get(0), model, labels)
    })
    .catch(error => {
      console.error(error)
    })
}

const detectFrame = (video, canvas, model, labels) => {
  TFWrapper(model)
    .detect(video)
    .then(predictions => {
      renderPredictions(canvas, predictions, labels)
      requestAnimationFrame(() => {
        detectFrame(video, canvas, model, labels)
      })
    })
}

// NOTE This code runs for every frame
const renderPredictions = (canvas, predictions, labels) => {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  // Font options.
  const font = '16px sans-serif'
  ctx.font = font
  ctx.textBaseline = 'top'

  // 
  ctx.beginPath()
  ctx.strokeStyle = "#00FF00"
  ctx.moveTo(0, 320)
  ctx.lineTo(800, 320)
  ctx.stroke()

  // Only runs if an object was detected (forEach)
  predictions.forEach(prediction => {
    if (isStart) {
      startTime = new Date()
      isStart = false
    }
    endTime = new Date()

    timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    time = Math.round(timeDiff);

    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const width = prediction.bbox[2]
    const height = prediction.bbox[3]
    const label = labels[parseInt(prediction.class)]

    // This code runs if a car is detected
    if (parseInt(y + height / 2) > 315 && parseInt(y + height / 2) < 325) {
      counter++
      earnings += Number($('#fare').val())
      $('#earnings').html('R  $ ' + (earnings).toFixed(2).toString())
      $("#counter").html(counter.toString())
      $('#progressbar').attr('aria-valuenow', (counter / time).toFixed(2)).css('width', ((counter / time).toFixed(2) * 100).toString() + '%')
      $('#traffic-rate').html((counter / time).toFixed(2))

      function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
      }

      id = uuidv4().substring(0, 23)
      timestamp = endTime.toLocaleString()

      $.ajax({
        url: 'http://localhost:3000/send',
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
          id: id,
          timestamp: timestamp
        }),
        success: function (data) {
          console.log(data);
        }
      })

      var nodeTime = document.createElement("LI")
      var nodeID = document.createElement("LI")
      var nodeDivider = document.createElement("LI")
      var divider = document.createElement("hr")
      divider.classList.add("log-divider")
      var textnodeTime = document.createTextNode("Timestamp: " + timestamp)
      var textnodeID = document.createTextNode("ID: " + id)
      nodeTime.appendChild(textnodeTime)
      nodeID.appendChild(textnodeID)
      nodeDivider.appendChild(divider)
      nodeTime.classList.add("collapse-item")
      nodeID.classList.add("collapse-item")
      document.getElementById("log").prepend(nodeDivider)
      document.getElementById("log").prepend(nodeTime)
      document.getElementById("log").prepend(nodeID)
      // $('#log').html('<a class="collapse-item">Timestamp: ' + endTime.toLocaleString() + '</a><a class="collapse-item">ID: ' + uuidv4().substring(0, 23) + '</a>')
    }

    // Draw the bounding box
    ctx.strokeStyle = '#0062ff'

    // Draw the label background
    ctx.fillStyle = '#0062ff'

    ctx.lineWidth = 4
    ctx.strokeRect(x, y, width, height)

    const textWidth = ctx.measureText(label).width
    const textHeight = parseInt(font, 10) // base 10
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
  })

  // NOTE Style for each detection
  predictions.forEach(prediction => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const label = labels[parseInt(prediction.class)]
    // Draw the text last to ensure it's on top
    ctx.fillStyle = '#ffffff'
    ctx.fillText(label, x, y)
  })
}