nose_x=0;
nose_y=0;


function preload(){
moustache=loadImage('https://i.postimg.cc/kMhJSXwQ/moustache-reak.png');
}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();


poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model initialized");
}

function draw(){
image(video, 0, 0, 500,400)
image(moustache, nose_x, nose_y, 50,50);
}

function take_snapshot(){
save('myPicture.png');
}

function gotPoses(results){
    if(results.length>0){
console.log(results);


 nose_y=results[0].pose.nose.y - 55;
 nose_x=results[0].pose.nose.x - 105;
    }
}