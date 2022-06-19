song= "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("Dope.mp3");
    song.setVolume(1);
    song.rate(1);

    song1 = loadSound("Serendipity.mp3");
    song1.setVolume(1);
    song1.rate(1);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initia;ized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song1.play();
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = resilts[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
    }
}