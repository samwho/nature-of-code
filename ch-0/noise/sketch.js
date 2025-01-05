const width = 800;
const height = 600;
const step = 10;
const time = 0;

let smoothness;
function setup() {
  createCanvas(width, height);
  smoothness = createSlider(0, 1000, 100, 1);
  smoothness.input(recalculate);
  recalculate();
}

function draw() {
}

function recalculate() {
  clear();
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      const xoff = x / smoothness.value() + time;
      const yoff = y / smoothness.value() + time;
      fill(0, map(noise(xoff, yoff), 0, 1, 0, 255));
      rect(x, y, step, step);
    }
  }
}
