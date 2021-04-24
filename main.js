
function preload(){

}
function setup() {
  canvas = createCanvas(245, 245);
  canvas.position(600, 360)
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5.version);
classifier=ml5.imageClassifier("mobileNet",modelLoaded);

}
function draw(){
image(video, 0, 0, 245, 245)
classifier.classify(video, gotResult)

}
function modelLoaded(){
  console.log("model has been loaded");
}
function gotResult(error,result){
  if (error){
    console.log(error);
  }
  else {
    console.log(result);
    Objects=result[0].label
    Confidence=result[0].confidence.toFixed(2)*100+"%";
    document.getElementById("object").innerHTML=Objects;
    document.getElementById("confidence").innerHTML=Confidence;
  }
}
