var elipseX = 0;

var elipseY = 0;

var bounce = false;

var col = {
  r: 0,
  g: 0,
  b: 0,
}

function setup() {
  // create a canvas
  createCanvas(1270, 1300);
}

function draw() {
  
  col.r = random(0, 255)
  col.g = random(0, 255)
  col.b = random(0, 255)

  //movement
  if (elipseX > 1270) {
    bounce = true}
  else if (elipseX< 0) {bounce = false}

  
  if (bounce ==  true) { elipseX = elipseX -  3}
  if (bounce == false) { elipseX = elipseX + 3}
  if (bounce ==  true) { elipseY  = elipseY - 3}
  if (bounce == false) { elipseY= elipseY + 3}
  
  // colour the background white
  background(255);
  // select white as a colour
  fill (col.r,col.g,col.b);
  // draw a rectangle
  rect(0, 150, 100, 100);
  //colour of circle
  fill(col.r,col.g,col.b)
  //making the circle
  ellipse(elipseX, elipseY, 100, 100)
}
