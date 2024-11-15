x = 200;
y = 200;

//* Code taken from Garrits video "Create a night sky"* //
let starx = [];
let stary = [];
let starAlpha = [];

for (let i = 0; i < 400; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starx.push(x);
  stary.push(y);
  starAlpha.push(alpha);
  console.log(starx);
}

function setup() {
  createCanvas(585, 600);
}

function character(x, y) {
  //umbrella body
  push();
  fill(255, 255, 0);
  arc(x, y, 162, 145, PI, 0);
  pop();

  //umbrella arcs
  push();
  noFill();
  arc(x - 66.5, y, 27, 15, PI, 0);
  arc(x - 39.5, y, 27, 15, PI, 0);
  arc(x - 12.5, y, 27, 15, PI, 0);
  arc(x + 14.5, y, 27, 15, PI, 0);
  arc(x + 41.5, y, 27, 15, PI, 0);
  arc(x + 68, y, 27, 15, PI, 0);
  pop();
  //arms
  push();
  strokeWeight(10);
  line(x - 15, y + 65, x, y + 90);
  strokeWeight(10);
  line(x - 65, y + 65, x - 80, y + 90);
  pop();

  //hands
  push();
  fill(240, 240, 215);
  ellipse(x - 80, y + 92, 10, 10);
  ellipse(x, y + 92, 10, 10);
  pop();

  //handle
  push();
  noFill();
  strokeWeight(4);
  line(x, y - 1, x, y + 90);
  arc(x + 10, y + 90, 20, 20, 0, PI);
  pop();

  //top of the umbrella
  push();
  fill(0, 0, 0);
  arc(x, y - 72, 10, 10, PI, 0);
  pop();

  // details
  beginShape();
  noFill();
  vertex(x - 53, y - 4);
  bezierVertex(x - 44, y - 72, x - 11, y - 63, x, y - 78);
  endShape();
  beginShape();
  noFill();
  vertex(x + 55, y - 4);
  bezierVertex(x + 44, y - 72, x + 11, y - 63, x, y - 78);
  endShape();
  line(x + 1, y - 77, x + 1, y - 3);
  beginShape();
  noFill();
  vertex(x + 28, y - 3);
  bezierVertex(x + 20, y - 72, x + 5, y - 63, x, y - 78);
  endShape();
  beginShape();
  noFill();
  vertex(x - 26, y - 3);
  bezierVertex(x - 20, y - 72, x - 5, y - 63, x, y - 78);
  endShape();

  //head
  push();
  fill(240, 240, 215);
  ellipse(x - 40, y + 34, 50, 50);
  pop();

  //body
  push();
  fill(50, 50, 50);
  rect(x - 65, y + 60, 50, 40);
  pop();
  push();
  fill(111, 143, 200);
  rect(x - 65, y + 100, 50, 20);
  pop();
  line(x - 40, y + 100, x - 40, y + 120);
  push();
  fill(200, 200, 200);
  ellipse(x - 55, y + 122, 30, 10);
  ellipse(x - 25, y + 122, 30, 10);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(x - 50, y + 32, 5, 5);
  ellipse(x - 30, y + 32, 5, 5);

  //mouth
  arc(x - 40, y + 45, 10, 10, 0, PI);

  //hair
  hair(x, y);
  hair(x - 20, y - 2);
  hair(x - 10, y - 1);
  push();

  translate(x + 10, y + 20);
  rotate(0.5);
  hair(0, 0);
  pop();

  push();
  translate(x - 40, y - 10);
  rotate(-0.5);
  hair(0, 0);
  pop();
  push();
  translate(x - 46, y - 4);
  rotate(-0.5);
  hair(0, 0);
  pop();

  let speed = 2;
  y = y + speed;
  if (y <= 100) {
    speed = -2;
  } else if (y === 350) {
    speed = 0;
  }
}
function hair(x, y) {
  beginShape();
  vertex(x - 26, y + 1);
  bezierVertex(x - 43, y + 29, x - 9, y + 28, x - 26, y);
  endShape();
}

function draw() {
  background(25, 14, 20);
  push();
  noStroke();

  for (let index in starx) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starx[index], stary[index], 3);
    starAlpha[index] = starAlpha[index] + 0.05;
  }
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
  pop();

  //ted
  character(x + 50, y + 160);
}
