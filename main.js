Webcam.set({
    width: 300,
    height:300,
    image_format: 'png',


    constraints: {
        facingMode: "enviroment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');