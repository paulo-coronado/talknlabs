function uploadFile() {
    var x = document.getElementById("myFile");
    var txt = "";

    if ('files' in x) {
        if (x.files.length != 1) {
            txt = "Please select one file!";
        } else {
            var file = x.files[0];
            console.log(x.value);
            // submitVideo()
            if ('name' in file) {
                txt += "File name: <code>" + file.name + "</code><br>";
            }
            if ('size' in file) {
                txt += "File size: <code>" + file.size / 1000 + " KB</code>";
            }
            $("#btn-submit").fadeIn(2000);
        }
    } else {
        if (x.value == "") {
            txt += "Please select one file!";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: <code>" + x.value + '</code>'; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("result").innerHTML = txt;
}

function submitVideo() {
    alert('Processamento de imagem e registro blockchain...');
    // NOTE post para a escrita do .mp4 no public (com erro do multer caso o upload de um nao video)
}

function setName() {
    localStorage.setItem("user-name", document.getElementById("index-name").value);
}

document.getElementById("file").addEventListener("click", myFunction);

function myFunction() {
  console.log('cheguei');
}