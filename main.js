var song1 = ("Serendipity.mp3");
var song2 = ("Dope.mp3");
status = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    song1 = loadSound("Serendipity.mp3");
    song2 = loadSound("Dope.mp3")
}

function setup() {

    canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
	stroke("#FF0000");
    
    song1.isPlaying()
    status = song1.getStatus()

    if(scoreLeftWrist > 0.2) {
        circle(rightWristX,rightWristY,20);
        song2.stop();
    }

    if(status = song2.stop())
    {
        song1.play();
        document.getElementById("song").innerHTML;
    }

    song2.isPlaying();
    status = song2.getStatus();

    if(scoreRightWrist > 0.2) {
        circle(rightwristX,rightWristY,20);
        song1.stop();
    }

    if(status = song1.stop())
    {
        song2.play();
        document.getElementById("song").innerHTML;
    }

}

function gotPoses() {
    if(results.length > 0)
    {
      console.log(results);
      scoreRightWrist =  results[0].pose.keypoints[10].score;
      scoreLeftWrist =  results[0].pose.keypoints[9].score;
      console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
      
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
  
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
}
}