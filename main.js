function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(550,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('snapshot.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}