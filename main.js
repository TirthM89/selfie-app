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
    speak();
}


function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    console.log("speaking");
}

var camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});


