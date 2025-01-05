const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;
const TOWARD_MOUSE = 4;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.step = 2;
    this.size = 2;
  }

  show() {
    fill(0);
    circle(this.x, this.y, this.size);
  }

  walk() {
    let choice = random([
      UP,
      DOWN,
      LEFT,
      RIGHT,
      TOWARD_MOUSE,
      TOWARD_MOUSE,
    ]);

    if (choice === UP) {
      this.y -= this.step;
    } else if (choice === DOWN) {
      this.y += this.step;
    } else if (choice === LEFT) {
      this.x -= this.step;
    } else if (choice === RIGHT) {
      this.x += this.step;
    } else if (choice === TOWARD_MOUSE) {
      const deltaX = mouseX - this.x;
      const deltaY = mouseY - this.y;

      if (deltaX > 0) {
        this.x += this.step;
      } else if (deltaX < 0) {
        this.x -= this.step;
      }

      if (deltaY > 0) {
        this.y += this.step;
      } else if (deltaY < 0) {
        this.y -= this.step;
      }
    }
  }
}

let walker;
function setup() {
  createCanvas(800, 600);
  background(220);
  walker = new Walker();
}

function draw() {
  walker.walk();
  walker.show();
}
