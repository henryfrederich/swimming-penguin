var bodyX = 0;
var bodyY = 0;
var bodyW = 150;
var faceW = bodyW/3;
var dX = 0;
var dY = 0;

function setup() {
  // put setup code here
  createCanvas(800, 600);
  bodyX = floor(width/2);
  bodyY = floor(height/2);
}

function draw() {
  // put drawing code here
  noStroke();
  background(207, 254, 255);

  // Left and right feet
  fill(255, 100, 0);
  triangle(
    bodyX - 50, bodyY + 55,
    bodyX, bodyY + 55,
    bodyX - 25, bodyY,
  );
  triangle(
    bodyX     , bodyY + 55,
    bodyX + 50, bodyY + 55,
    bodyX + 25, bodyY,
  );

  // Wings
  fill(0, 0, 0);
  arc(bodyX, bodyY - 20, 200, 50, PI, 0);
  
  // body
  fill(0, 0, 0);
  ellipse(bodyX, bodyY-20, faceW+25, 100);
  
  // belly
  fill(255, 255, 255);
  ellipse(bodyX, bodyY - 20, 50, 75);

  // head
  fill(0, 0, 0);
  ellipse(bodyX, bodyY-75, faceW, 40);

  // beak
  fill(255, 150, 0);
  triangle(
    bodyX + 15, bodyY - 70,
    bodyX - 15, bodyY - 70,
    bodyX     , bodyY - 45,
  );

  // eyes
  fill(255, 255, 255);
  ellipse(bodyX - 10, bodyY - 80, 10, 10);
  ellipse(bodyX + 10, bodyY - 80, 10, 10);
  fill(0, 0, 0);
  ellipse(bodyX - 10, bodyY - 80, 5, 5);
  ellipse(bodyX + 10, bodyY - 80, 5, 5);
  
  // Every half a second change directions at random
  if (frameCount % 30 == 0) {
    
    if (bodyX <= 0) {
        dX = 3;
    } else if (bodyX >= width) {
        dX = -3;
    } else {
        dX = random(-2, 2);
    }

    if (bodyY <= 0) {
        dY = 3;
    } else if (bodyY >= height) {
        dY = -3;
    } else {
        dY = random(-2, 2);
    }
  }
  bodyY += dY;
  bodyX += dX;
}