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
    img.file("favicon.png", imgData, {base64: true});
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        
        saveAs(content, "example.zip");
    });
  }

  function pack()
  {
    var zip = new JSZip();
    zip.file("readme.txt","test");
    var docs = zip.folder("documents");
    docs.file("hello.txt", "hello world!");
    var content = zip.generateAsync()
    // location.href="data:application/zip;base64,"+content;
    .then(function (blob) {
        saveAs(blob, "hello.zip");
    });


  }
