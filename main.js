dk_song_1="";
dk_song_2="";

function preload() {
    dk_song_1=loadSound("dkumar.mp3");
    dk_song_2=loadSound("dkumar2.mp3");
}

function setup() { 
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 600, 500);
}
