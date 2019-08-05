var elipseX = 0;

var elipseY = 0;

var squareX = 0;

var squareY = 0;



var bounce = false;

var colourswitch = true;

var squarevelocity = { 
  x : 3,
  y : 3
}

var ellipsevelocity = { 
  x : 3,
  y : 3
}

var ebounce = { 
  x : false,
  y : false
}

var sbounce = { 
  x : false,
  y : false
}

// store old timestamp

var col = {
  r: 0,
  g: 0,
  b: 0,
}

function setup() {
  // create a canvas
  createCanvas(1000, 1300);
}

function draw() {

  
  //    swap colours

  if (second() % 3 == 1 && colourswitch == false) {
    colourswitch = true
  }

  if (second() % 3 == 0 && colourswitch) {

    col.r = random(0, 255)
    col.g = random(0, 255)
    col.b = random(0, 255)
    colourswitch = false
  }
  sbounce = { 
    x : false,
    y : false
  }
  
  ebounce = { 
    x : false,
    y : false
  }
  //movement
  if (elipseX > 1000) {
    ebounce.x = true
  } else if (elipseX < 0) {
    ebounce.x = true
  } 
  if (elipseY > 1300) {
    ebounce.y = true
  } else if (elipseY < 0) {
    ebounce.y = true
  }

  if (squareX > 1000) {
    sbounce.x = true
  } else if (squareX < 0) {
    sbounce.x = true
  } 
  if (squareY > 1300) {
    sbounce.y = true
  } else if (squareY < 0) {
    sbounce.y = true
  }
 
  ellipsevelocity.x += random(-3,3)
  ellipsevelocity.y += random(-3,3)
  squarevelocity.x += random(-3,3)
  squarevelocity.y += random(-3,3)

  //bounceyness and randomness
  if (ebounce.x == true){
    ellipsevelocity.x *= -1
    
  }

  if (ebounce.y == true){
    ellipsevelocity.y *= -1
    
  }

  if (sbounce.y == true){
    squarevelocity.y *= -1
    
  }

  if (sbounce.x == true){
    squarevelocity.x *= -1
    
  }

  
  elipseX += ellipsevelocity.x
  elipseY += ellipsevelocity.y
  squareX += squarevelocity.x
  squareY += squarevelocity.y



  // colour the background white
  background(255);
  // select white as a colour
  fill(col.r, col.g, col.b);
  // draw a rectangle
  rect(squareX, squareY, 100, 100);
  //colour of circle
  fill(col.r, col.g, col.b)
  //making the circle
  ellipse(elipseX, elipseY, 100, 100)
}