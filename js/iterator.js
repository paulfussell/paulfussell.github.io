function myFunction() {
    var x = document.getElementById("form");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;




    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("img");
    img.file("", imgData, {base64: true});
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, "example.zip");
    });
  }

  function pack()
  {
    var zipo = new JSZip();
    zip.file("readme.txt","test");


  }
