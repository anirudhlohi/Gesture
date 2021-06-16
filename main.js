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
function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img,gotResults);
    
}
function gotResults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        document.getElementById("emotion_name1").innerHTML = prediction1;
        document.getElementById("emotion_name2").innerHTML = prediction2;
        speak();
        if(prediction1 == "Okay"){
            document.getElementById("emoji_1").innerHTML = "&#128077;";
        }
        if(prediction1 == "Clap"){
            document.getElementById("emoji_1").innerHTML = "&#128079;"
        }
        if(prediction1 == "Amazing"){
            document.getElementById("emoji_1").innerHTML = "&#128076;"
        }
        if(prediction1 == "No"){
            document.getElementById("emoji_2").innerHTML = "&#128078;";
        }
        if(prediction2 == "Okay"){
            document.getElementById("emoji_2").innerHTML = "&#128077;"
        }
        if(prediction2 == "Clap"){
            document.getElementById("emoji_2").innerHTML = "&#128079;"
        }
        if(prediction2 == "Amazing"){
            document.getElementById("emoji_2").innerHTML = "&#128076;"
        }
        if(prediction2 == "No"){
            document.getElementById("emoji_2").innerHTML = "&#128078;"
        }
    }

}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data1 = "The first prediction is "+prediction1;
    var speak_data2 = "And the second prediction is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}