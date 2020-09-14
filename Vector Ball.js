var b;
var b2;

function setup() {
    createCanvas(800, 600);
    b = new Ball(random(width), random(height), 100);
    b2 = new Ball(150, 150, 100);
  }
  
  
function  draw() {
    background(0);
    if(b.distance(b2)) {
        b.moveAway();
        b2.moveAway();
        console.log(b.distance(b2));
    }
    b.move();
    b.bounce();
    b.show();
    b2.move();
    b2.bounce();
    b2.show();
    
    
  }



class Ball {
    constructor(x,y,r) {
        this.s = new createVector(x, y);
        this.v = new createVector(10, -5);
        this.r = r;
    }

    distance(other) {
        let d = sqrt((this.s.x-other.s.x)*(this.s.x-other.s.x)+(this.s.y-other.s.y)*(this.s.y-other.s.y))*2;
        let radsum = this.r + other.r;
        return (d <= radsum);
    }

    move() {
        this.s.add(this.v);

    }

    moveAway() {
        this.v.x = this.v.x * -1
        this.v.y = this.v.y * -1
    }

    bounce() {
        if((this.s.x > (width-this.r)) || (this.s.x < this.r)) {
            this.v.x = this.v.x * -1
        }
        if((this.s.y > (height-this.r)) || ((this.s.y < this.r))){
            this.v.y = this.v.y * -1
        }
    }

    show() {
        ellipseMode(CENTER);
        stroke(255);
        strokeWeight(4);
        fill(255,255,255);
        ellipse(this.s.x, this.s.y, this.r);
      }
}