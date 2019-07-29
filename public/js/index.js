function uploadFile() {
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Please select one file!";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                var file = x.files[i];
                if ('name' in file) {
                    txt += "<br>File name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "Size: " + file.size / 1000 + " KB<br>";
                }
            }
            $("#btn-submit").fadeIn(2000);
        }
    } else {
        if (x.value == "") {
            txt += "Please select one file!";
        } else {
            txt += "The files property is not supported by your browser!";
            txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("result").innerHTML = txt;
}

function submitVideo() {
    alert('Processamento de imagem e registro blockchain...')
}