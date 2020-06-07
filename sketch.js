let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  graphics = createGraphics(windowWidth, windowHeight);
  graphics.background(0);
}

function draw() {
  r = map(pwinMouseX, 0, windowWidth, 0, 255);
  b = map(pwinMouseX, 0, windowWidth, 255, 0);
  g = map(pwinMouseY, 0, windowHeight, 0, 230);
  if (mouseIsPressed) {
    graphics.stroke(r,g,b);
    graphics.strokeWeight(4);
    graphics.line(mouseX, mouseY, pwinMouseX, pwinMouseY);
  }
  image(graphics, 0, 0)


}