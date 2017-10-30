ons.ready(function() {
    // deviceready event is fired
    // Call whatever Cordova APIs

    $("#hello").click(function(){        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });
        
        function onSuccess(imageURI) {
            var image = document.getElementById('preview');
            image.src = imageURI;
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    });    

    $("#upload").click(function () {
        
                var photofile = $("#photo").prop("files")[0];
                var timestamp = Number(new Date());
                var photoRef = ("photos/" + timestamp + ".png");
        
                console.log(db);
                photoRef.put(photofile).then(function (snapshot) {
                    console.log("Uploaded a blob or file!");            
                    photoRef.getDownloadURL().then(function (url) {
                        // Insert url into an <img> tag to "download"
                        $("#photo1").attr("src", url);
                        
        
                    })
                });
            });


});

