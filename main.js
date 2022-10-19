var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start() {
    document.getElementById("textbox").innerHTMl = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content=="take my selfie") {
        console.log("Taking Selfie");
        speak();
    }
    
}


function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout( function () {
        take_snapshot();
        save();
    },5000);
}

var camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}

function save() {
    var link = document.getElementById("link");
    image = document.getElementById("selfie_image");
    link.href = image;
    link.click();
}
