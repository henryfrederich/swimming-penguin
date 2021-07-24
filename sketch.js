function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  noStroke();
  var bodyX = 200;
  var bodyY = 220;
  var bodyW = 150;
  var faceW = bodyW/3;
  background(207, 254, 255);

  // Left and right feet
  fill(255, 100, 0);
  triangle(150, 275, 200, 275, 175, 220);
  triangle(200, 275, 250, 275, 225, 220);

  // Wings
  fill(0, 0, 0);
  arc(200, 200, 200, 50, PI, 0);
  
  // body
  fill(0, 0, 0);
  ellipse(bodyX, bodyY-20, faceW+25, 100);
  
  // belly
  fill(255, 255, 255);
  ellipse(bodyX, 200, 50, 75);

  // head
  fill(0, 0, 0);
  ellipse(bodyX, bodyY-75, faceW, 40);

  // beak
  fill(255, 150, 0);
  triangle(215, 150, 185, 150, 200, 175);

  // eyes
  fill(255, 255, 255);
  ellipse(190, 140, 10, 10);
  ellipse(210, 140, 10, 10);
  fill(0, 0, 0);
  ellipse(190, 140, 5, 5);
  ellipse(210, 140, 5, 5);
}