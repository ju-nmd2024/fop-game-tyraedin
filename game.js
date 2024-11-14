x = 200;
y = 200;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(25, 14, 20);
  noStroke();

  // rooftop
  fill(200, 200, 200);
  rect(x - 200, y + 200, 600, 200);
  fill(100, 100, 100);
  rect(x - 200, y + 150, 600, 50);

  //1 skyscraper
  fill(70, 70, 70);
  rect(x - 200, y - 50, 100, 200);
  fill(255, 255, 200);
  rect(x - 200, y - 15, 90, 10);
  rect(x - 200, y + 15, 90, 10);
  rect(x - 200, y + 45, 90, 10);
  rect(x - 200, y + 75, 90, 10);
  rect(x - 200, y + 105, 90, 10);
  rect(x - 200, y + 135, 90, 10);

  //skyscraper 3
  fill(85, 50, 75);
  rect(x - 60, y - 90, 110, 240);
  rect(x - 45, y - 110, 80, 20);
  rect(x - 25, y - 130, 40, 20);
  rect(x - 10, y - 155, 10, 25);

  //2 skyscraper
  fill(70, 70, 100);
  rect(x - 120, y + 25, 90, 125);
  fill(x + 55, y + 55, 200);
  rect(x - 110, y + 50, 10, 10);
  rect(x - 90, y + 50, 10, 10);
  rect(x - 70, y + 50, 10, 10);
  rect(x - 50, y + 50, 10, 10);
  rect(x - 90, y + 50, 10, 10);
  rect(x - 110, y + 70, 10, 10);
  rect(x - 90, y + 70, 10, 10);
  rect(x - 70, y + 70, 10, 10);
  rect(x - 50, y + 70, 10, 10);
  rect(x - 90, y + 70, 10, 10);
  rect(x - 110, y + 90, 10, 10);
  rect(x - 90, y + 90, 10, 10);
  rect(x - 70, y + 90, 10, 10);
  rect(x - 50, y + 90, 10, 10);
  rect(x - 90, y + 90, 10, 10);
  rect(x - 110, y + 110, 10, 10);
  rect(x - 90, y + 110, 10, 10);
  rect(x - 70, y + 110, 10, 10);
  rect(x - 50, y + 110, 10, 10);
  rect(x - 90, y + 110, 10, 10);
  rect(x - 110, y + 130, 10, 10);
  rect(x - 90, y + 130, 10, 10);
  rect(x - 70, y + 130, 10, 10);
  rect(x - 50, y + 130, 10, 10);
  rect(x - 90, y + 130, 10, 10);

  //skyscraper 4
  fill(90, 95, 80);
  rect(x + 40, y - 20, 70, 170);
  fill(255, 255, 200);
  rect(x + 50, y + 10, 50, 5);
  rect(x + 50, y + 30, 50, 5);
  rect(x + 50, y + 50, 50, 5);
  rect(x + 50, y + 70, 50, 5);
  rect(x + 50, y + 90, 50, 5);
  rect(x + 50, y + 110, 50, 5);
  rect(x + 50, y + 130, 50, 5);

  //skyscraper 5
  fill(70, 60, 70);
  rect(x + 110, y - 50, 80, 200);
  fill(255, 255, 200);
  rect(x + 125, y - 20, 20, 20);
  rect(x + 155, y - 20, 20, 20);
  rect(x + 125, y + 10, 20, 20);
  rect(x + 155, y + 10, 20, 20);
  rect(x + 125, y + 40, 20, 20);
  rect(x + 155, y + 40, 20, 20);
  rect(x + 125, y + 70, 20, 20);
  rect(x + 155, y + 70, 20, 20);

  //moon
  push();
  translate(x - 140, y - 130);
  rotate(1.5);
  arc(0, 0, 50, 50, 0, PI);
  fill(25, 14, 20);
  ellipse(x - 200, y - 205, 50, 40);
  pop();
  fill(100, 100, 100);
  triangle(x - 200, y + 159, x - 160, y + 150, x - 200, y + 370);
  triangle(x + 384, y + 150, x + 340, y + 150, x + 385, y + 370);
}
