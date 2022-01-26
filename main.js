song1="";
song2="";

function preload() {
    song1=loadSound("Upwind.mp3");
    song2=loadSound("Courtesy_Call.mp3");

}

function setup() {
    canvas=createCanvas(600 , 500);
    canvas.center();
    //camera
    video = createCapture(VIDEO);
    video.hide();
}

function draw(params) {
    image(video , 0 , 0 , 600 , 500)
}