Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img src="+data_uri+" id='capture_img'>"
    });
}
console.log("ML5 Version-",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P_5N1Fl5E/model.json",ModelLoaded);
function ModelLoaded(){
console.log("Model is Loaded");
}