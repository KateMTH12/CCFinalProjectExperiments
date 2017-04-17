/*function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(255);
  var x;
  var y;
  x = map(mouseX,0,width,0,255);
  y = map(mouseY,0,height,0,255);
  fill(x,255-x,y);
  ellipse(mouseX,mouseY,20,20);
  textSize(50);
  stroke(0);
  text("케이트",20,50);
}
*/
var mX = 0;
var mY = 0;
var a = 2;
var grow = false;
var rate = 5;
var num = 0;
var n = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

}

function draw() {
  n+=.001;
  background(255);
  /*var x;
  var y;
  x = map(mouseX,0,width,0,255);
  y = map(mouseY,0,height,0,255);*/
  noFill();
  ellipse(mouseX, mouseY, 20, 20);
  mX = mouseX;
  mY = mouseY;
  ellipse(mX, mY, a, a);
  if (grow === true) {
    a += rate;
    if (a >= 200) {
      rate = -rate;
    }
    if (a <= 5) {
      rate = abs(rate);
    }
  }
  
  num = noise(n)*width;
  fill(255,0,0);
  rect(mouseX,0,num,height);
}

function mousePressed() {
  if (grow === false) {
    grow = true;
  } else {
    grow = false;
  }
}
