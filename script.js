let timer = 20;
let countDownSwitch = false;

function setup() {
  // Canvas & color settings
  createCanvas(200, 200);
}

function draw() {
  // Display timer
  textSize(30);
  text(timer, width/2, 35);
  if (frameCount % 60 == 0 && timer > 0){
  	timer -= 1;
  }
  if (timer == 0){
  	textSize(20);
    text('moving on', width/3, 30);
  }
  
document.getElementById("demo").innerHTML = timer + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
