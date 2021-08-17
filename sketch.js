var bodyX = 0;
var bodyY = 0;
var bodyW = 150;
var penguin;
var dX = 0;
var dY = 0;

function setup() {
    // put setup code here
    createCanvas(800, 600);
    // create a penguin in the middle
    penguin = new Penguin(floor(width/2), floor(height/2), 150);
    penguin.show();
}

function draw() {
    background(207, 254, 255);
    penguin.show();
    // Every half a second change directions at random
    if (frameCount % 30 == 0) {
      
        if (penguin.x <= 0) {
            dX = 3;
        } else if (penguin.x >= width) {
            dX = -3;
        } else {
            dX = random(-2, 2);
        }

        if (penguin.y <= 0) {
            dY = 3;
        } else if (penguin.y >= height) {
            dY = -3;
        } else {
            dY = random(-2, 2);
        }
    }
    penguin.y += dY;
    penguin.x += dX;
}

function Penguin(x, y, size) {
    
    this.x = x
    this.y = y
    this.size = size
    
    this.show = function () {
        // put drawing code here
        noStroke();

        // Left and right feet
        fill(255, 100, 0);
        triangle(
            this.x - 50, this.y + 55,
            this.x, this.y + 55,
            this.x - 25, this.y,
        );
        triangle(
            this.x     , this.y + 55,
            this.x + 50, this.y + 55,
            this.x + 25, this.y,
        );

        // Wings
        fill(0, 0, 0);
        arc(this.x, this.y - 20, 200, 50, PI, 0);
        
        // body
        fill(0, 0, 0);
        ellipse(this.x, this.y-20, this.size/3+25, 100);
        
        // belly
        fill(255, 255, 255);
        ellipse(this.x, this.y - 20, 50, 75);

        // head
        fill(0, 0, 0);
        ellipse(this.x, this.y-75, this.size/3, 40);

        // beak
        fill(255, 150, 0);
        triangle(
            this.x + 15, this.y - 70,
            this.x - 15, this.y - 70,
            this.x     , this.y - 45,
        );

        // eyes
        fill(255, 255, 255);
        ellipse(this.x - 10, this.y - 80, 10, 10);
        ellipse(this.x + 10, this.y - 80, 10, 10);
        fill(0, 0, 0);
        ellipse(this.x - 10, this.y - 80, 5, 5);
        ellipse(this.x + 10, this.y - 80, 5, 5);
    }
}
