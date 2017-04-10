function setup() {
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
