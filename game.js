let x = 200;
let y = 200;
let characterx = 300;
let charactery = 200;
let state = "start";
let velocityY = 0.2;
let acceleration = 0.2;

function setup() {
  createCanvas(550, 600);
  background(255, 255, 255);
}
function startScreen() {
  background(255, 100, 100);
  characterStart(x + 100, y + 200);
  textSize(50);
  text(" HEY THERE!", 120, 200);
  textSize(30);
  text("WOULD YOU HELP ME LAND?", 70, 250);
  textSize(20);
  text("(CLICK TO BEGIN)", 200, 285);
}

function lostScreen() {
  background(100, 100, 100);
  characterSad(x + 100, y + 200);
  textSize(50);
  text("YOU LOST", 150, 220);
  textSize(30);
  text("(CLICK TO TRY AGAIN)", 120, 250);
}

function wonScreen() {
  background(200, 2, 100);
  characterHappy(x + 100, y + 200);
  textSize(50);
  text("YOU WON", 150, 220);
  textSize(30);
  text("(CLICK TO PLAY AGAIN)", 100, 250);
}
//got help from student Hedda Petersson with the reset game
function resetGame() {
  characterx = 300;
  charactery = 100;
  velocityY = 0.2;
  acceleration = 0.2;
}

function gameScreen() {
  background(25, 14, 20);
  push();
  noStroke();
  //taken from Garrits video "A Night Sky"
  let starx = [];
  let stary = [];
  let starAlpha = [];

  for (let i = 0; i < 100; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starx.push(x);
    stary.push(y);
    starAlpha.push(alpha);
  }

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

  //skyscraper 7
  fill(30, 50, 80);
  rect(x + 260, y - 80, 100, 230);
  fill(150, 150, 150);
  arc(x + 310, y - 80, 100, 70, PI, 0);
  push();
  stroke(150, 150, 150);
  strokeWeight(5);
  line(x + 305, y - 140, x + 305, y - 100);
  fill(150, 150, 150);
  ellipse(x + 305, y - 130, 20, 1);
  ellipse(x + 305, y - 122, 20, 1);
  pop();

  //skyscraper 6
  fill(60, 18, 80);
  rect(x + 180, y + 40, 100, 110);
  fill(255, 255, 200);
  rect(x + 200, y + 60, 20, 10);
  rect(x + 240, y + 60, 20, 10);
  rect(x + 200, y + 80, 20, 10);
  rect(x + 240, y + 80, 20, 10);
  rect(x + 200, y + 100, 20, 10);
  rect(x + 240, y + 100, 20, 10);
  rect(x + 200, y + 120, 20, 10);
  rect(x + 240, y + 120, 20, 10);
  rect(x + 200, y + 140, 20, 10);
  rect(x + 240, y + 140, 20, 10);
  pop();

  // fallling
  if (charactery >= 400) {
    if (velocityY <= 4) {
      state = "won";
    } else if (velocityY > 4) {
      state = "lost";
    }
  }

  //The logic
  charactery = charactery + velocityY;
  velocityY = velocityY + acceleration;

  // controls the character when falling
  if (keyIsDown(32) === true) {
    velocityY -= 0.5;
  }
  character(characterx, charactery);
}

//* Code taken from Garrits video "night sky"* //

function character(characterx, charactery) {
  //umbrella body
  push();
  fill(255, 255, 100);
  arc(characterx, charactery, 162, 145, PI, 0);
  pop();

  //umbrella arcs
  fill(255, 255, 0);
  arc(characterx - 66.5, charactery, 27, 15, PI, 0);
  arc(characterx - 39.5, charactery, 27, 15, PI, 0);
  arc(characterx - 12.5, charactery, 27, 15, PI, 0);
  arc(characterx + 14.5, charactery, 27, 15, PI, 0);
  arc(characterx + 41.5, charactery, 27, 15, PI, 0);
  arc(characterx + 68, charactery, 27, 15, PI, 0);

  //arms
  push();
  strokeWeight(10);
  line(characterx - 15, charactery + 65, characterx, charactery + 90);
  strokeWeight(10);
  line(characterx - 65, charactery + 65, characterx - 80, charactery + 90);
  pop();

  //hands
  push();
  fill(240, 240, 215);
  ellipse(characterx - 80, charactery + 92, 10, 10);
  ellipse(characterx, charactery + 92, 10, 10);
  pop();

  //handle
  push();
  noFill();
  strokeWeight(4);
  line(characterx, charactery - 1, characterx, charactery + 90);
  arc(characterx + 10, charactery + 90, 20, 20, 0, PI);
  pop();

  //top of the umbrella
  push();
  fill(0, 0, 0);
  arc(characterx, charactery - 72, 10, 10, PI, 0);
  pop();

  // details
  beginShape();
  noFill();
  vertex(characterx - 53, charactery - 4);
  bezierVertex(
    characterx - 44,
    charactery - 72,
    characterx - 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx + 55, charactery - 4);
  bezierVertex(
    characterx + 44,
    charactery - 72,
    characterx + 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  line(characterx + 1, charactery - 77, characterx + 1, charactery - 3);
  beginShape();
  noFill();
  vertex(characterx + 28, charactery - 3);
  bezierVertex(
    characterx + 20,
    charactery - 72,
    characterx + 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx - 26, charactery - 3);
  bezierVertex(
    characterx - 20,
    charactery - 72,
    characterx - 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();

  //head
  push();
  fill(240, 240, 215);
  ellipse(characterx - 40, charactery + 34, 50, 50);
  pop();

  //body
  push();
  fill(50, 50, 50);
  rect(characterx - 65, charactery + 60, 50, 40);
  pop();
  push();
  fill(111, 143, 200);
  rect(characterx - 65, charactery + 100, 50, 20);
  pop();
  line(characterx - 40, charactery + 100, characterx - 40, charactery + 120);
  push();
  fill(200, 200, 200);
  ellipse(characterx - 55, charactery + 122, 30, 10);
  ellipse(characterx - 25, charactery + 122, 30, 10);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(characterx - 50, charactery + 32, 5, 5);
  ellipse(characterx - 30, charactery + 32, 5, 5);

  //mouth
  arc(characterx - 40, charactery + 45, 10, 10, 0, PI);

  //hair
  hair(characterx, charactery);
  hair(characterx - 20, charactery - 2);
  hair(characterx - 10, charactery - 1);
  hair(characterx - 30, charactery);
  push();

  translate(characterx + 10, charactery + 20);
  rotate(0.5);
  hair(0, 0);
  pop();
  push();
  translate(characterx - 46, charactery - 4);
  rotate(-0.5);
  hair(0, 0);
  pop();
}

function characterSad(characterx, charactery) {
  //umbrella body
  push();
  fill(255, 255, 100);
  arc(characterx, charactery, 162, 145, PI, 0);
  pop();

  //umbrella arcs
  fill(255, 255, 0);
  arc(characterx - 66.5, charactery, 27, 15, PI, 0);
  arc(characterx - 39.5, charactery, 27, 15, PI, 0);
  arc(characterx - 12.5, charactery, 27, 15, PI, 0);
  arc(characterx + 14.5, charactery, 27, 15, PI, 0);
  arc(characterx + 41.5, charactery, 27, 15, PI, 0);
  arc(characterx + 68, charactery, 27, 15, PI, 0);

  //arms
  push();
  strokeWeight(10);
  line(characterx - 15, charactery + 65, characterx, charactery + 90);
  strokeWeight(10);
  line(characterx - 65, charactery + 65, characterx - 80, charactery + 90);
  pop();

  //hands
  push();
  fill(240, 240, 215);
  ellipse(characterx - 80, charactery + 92, 10, 10);
  ellipse(characterx, charactery + 92, 10, 10);
  pop();

  //handle
  push();
  noFill();
  strokeWeight(4);
  line(characterx, charactery - 1, characterx, charactery + 90);
  arc(characterx + 10, charactery + 90, 20, 20, 0, PI);
  pop();

  //top of the umbrella
  push();
  fill(0, 0, 0);
  arc(characterx, charactery - 72, 10, 10, PI, 0);
  pop();

  // details
  beginShape();
  noFill();
  vertex(characterx - 53, charactery - 4);
  bezierVertex(
    characterx - 44,
    charactery - 72,
    characterx - 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx + 55, charactery - 4);
  bezierVertex(
    characterx + 44,
    charactery - 72,
    characterx + 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  line(characterx + 1, charactery - 77, characterx + 1, charactery - 3);
  beginShape();
  noFill();
  vertex(characterx + 28, charactery - 3);
  bezierVertex(
    characterx + 20,
    charactery - 72,
    characterx + 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx - 26, charactery - 3);
  bezierVertex(
    characterx - 20,
    charactery - 72,
    characterx - 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();

  //head
  push();
  fill(240, 240, 215);
  ellipse(characterx - 40, charactery + 34, 50, 50);
  pop();

  //body
  push();
  fill(50, 50, 50);
  rect(characterx - 65, charactery + 60, 50, 40);
  pop();
  push();
  fill(111, 143, 200);
  rect(characterx - 65, charactery + 100, 50, 20);
  pop();
  line(characterx - 40, charactery + 100, characterx - 40, charactery + 120);
  push();
  fill(200, 200, 200);
  ellipse(characterx - 55, charactery + 122, 30, 10);
  ellipse(characterx - 25, charactery + 122, 30, 10);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(characterx - 50, charactery + 32, 5, 5);
  ellipse(characterx - 30, charactery + 32, 5, 5);
  push();
  fill(200, 250, 255);
  hair(characterx, charactery + 35);
  pop();

  //mouth
  arc(characterx - 40, charactery + 45, 10, 10, PI, 0);

  //hair
  hair(characterx, charactery);
  hair(characterx - 20, charactery - 2);
  hair(characterx - 10, charactery - 1);
  hair(characterx - 30, charactery);
  push();

  translate(characterx + 10, charactery + 20);
  rotate(0.5);
  hair(0, 0);
  pop();
  push();
  translate(characterx - 46, charactery - 4);
  rotate(-0.5);
  hair(0, 0);
  pop();
}

function characterHappy(characterx, charactery) {
  //umbrella body
  push();
  fill(255, 255, 100);
  arc(characterx, charactery, 162, 145, PI, 0);
  pop();

  //umbrella arcs
  fill(255, 255, 0);
  arc(characterx - 66.5, charactery, 27, 15, PI, 0);
  arc(characterx - 39.5, charactery, 27, 15, PI, 0);
  arc(characterx - 12.5, charactery, 27, 15, PI, 0);
  arc(characterx + 14.5, charactery, 27, 15, PI, 0);
  arc(characterx + 41.5, charactery, 27, 15, PI, 0);
  arc(characterx + 68, charactery, 27, 15, PI, 0);

  //arms
  push();
  strokeWeight(10);
  line(characterx - 15, charactery + 65, characterx, charactery + 90);
  strokeWeight(10);
  line(characterx - 65, charactery + 65, characterx - 80, charactery + 90);
  pop();

  //hands
  push();
  fill(240, 240, 215);
  ellipse(characterx - 80, charactery + 92, 10, 10);
  ellipse(characterx, charactery + 92, 10, 10);
  pop();

  //handle
  push();
  noFill();
  strokeWeight(4);
  line(characterx, charactery - 1, characterx, charactery + 90);
  arc(characterx + 10, charactery + 90, 20, 20, 0, PI);
  pop();

  //top of the umbrella
  push();
  fill(0, 0, 0);
  arc(characterx, charactery - 72, 10, 10, PI, 0);
  pop();

  // details
  beginShape();
  noFill();
  vertex(characterx - 53, charactery - 4);
  bezierVertex(
    characterx - 44,
    charactery - 72,
    characterx - 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx + 55, charactery - 4);
  bezierVertex(
    characterx + 44,
    charactery - 72,
    characterx + 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  line(characterx + 1, charactery - 77, characterx + 1, charactery - 3);
  beginShape();
  noFill();
  vertex(characterx + 28, charactery - 3);
  bezierVertex(
    characterx + 20,
    charactery - 72,
    characterx + 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx - 26, charactery - 3);
  bezierVertex(
    characterx - 20,
    charactery - 72,
    characterx - 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();

  //head
  push();
  fill(240, 240, 215);
  ellipse(characterx - 40, charactery + 34, 50, 50);
  pop();

  //body
  push();
  fill(50, 50, 50);
  rect(characterx - 65, charactery + 60, 50, 40);
  pop();
  push();
  fill(111, 143, 200);
  rect(characterx - 65, charactery + 100, 50, 20);
  pop();
  line(characterx - 40, charactery + 100, characterx - 40, charactery + 120);
  push();
  fill(200, 200, 200);
  ellipse(characterx - 55, charactery + 122, 30, 10);
  ellipse(characterx - 25, charactery + 122, 30, 10);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(characterx - 50, charactery + 32, 7, 2);
  ellipse(characterx - 30, charactery + 32, 7, 2);

  //mouth
  arc(characterx - 40, charactery + 45, 20, 20, 0, PI);

  //hair
  hair(characterx, charactery);
  hair(characterx - 20, charactery - 2);
  hair(characterx - 10, charactery - 1);
  hair(characterx - 30, charactery);
  push();

  translate(characterx + 10, charactery + 20);
  rotate(0.5);
  hair(0, 0);
  pop();
  push();
  translate(characterx - 46, charactery - 4);
  rotate(-0.5);
  hair(0, 0);
  pop();
}
function characterStart(characterx, charactery) {
  //umbrella body
  push();
  fill(255, 255, 100);
  arc(characterx, charactery, 162, 145, PI, 0);
  pop();

  //umbrella arcs
  fill(255, 255, 0);
  arc(characterx - 66.5, charactery, 27, 15, PI, 0);
  arc(characterx - 39.5, charactery, 27, 15, PI, 0);
  arc(characterx - 12.5, charactery, 27, 15, PI, 0);
  arc(characterx + 14.5, charactery, 27, 15, PI, 0);
  arc(characterx + 41.5, charactery, 27, 15, PI, 0);
  arc(characterx + 68, charactery, 27, 15, PI, 0);

  //arms
  push();
  strokeWeight(10);
  line(characterx - 15, charactery + 65, characterx, charactery + 90);
  strokeWeight(10);
  line(characterx - 65, charactery + 65, characterx - 80, charactery + 40);
  pop();

  //hands
  push();
  fill(240, 240, 215);
  ellipse(characterx - 80, charactery + 40, 10, 10);
  ellipse(characterx, charactery + 92, 10, 10);
  pop();

  //handle
  push();
  noFill();
  strokeWeight(4);
  line(characterx, charactery - 1, characterx, charactery + 90);
  arc(characterx + 10, charactery + 90, 20, 20, 0, PI);
  pop();

  //top of the umbrella
  push();
  fill(0, 0, 0);
  arc(characterx, charactery - 72, 10, 10, PI, 0);
  pop();

  // details
  beginShape();
  noFill();
  vertex(characterx - 53, charactery - 4);
  bezierVertex(
    characterx - 44,
    charactery - 72,
    characterx - 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx + 55, charactery - 4);
  bezierVertex(
    characterx + 44,
    charactery - 72,
    characterx + 11,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  line(characterx + 1, charactery - 77, characterx + 1, charactery - 3);
  beginShape();
  noFill();
  vertex(characterx + 28, charactery - 3);
  bezierVertex(
    characterx + 20,
    charactery - 72,
    characterx + 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();
  beginShape();
  noFill();
  vertex(characterx - 26, charactery - 3);
  bezierVertex(
    characterx - 20,
    charactery - 72,
    characterx - 5,
    charactery - 63,
    characterx,
    charactery - 78
  );
  endShape();

  //head
  push();
  fill(240, 240, 215);
  ellipse(characterx - 40, charactery + 34, 50, 50);
  pop();

  //body
  push();
  fill(50, 50, 50);
  rect(characterx - 65, charactery + 60, 50, 40);
  pop();
  push();
  fill(111, 143, 200);
  rect(characterx - 65, charactery + 100, 50, 20);
  pop();
  line(characterx - 40, charactery + 100, characterx - 40, charactery + 120);
  push();
  fill(200, 200, 200);
  ellipse(characterx - 55, charactery + 122, 30, 10);
  ellipse(characterx - 25, charactery + 122, 30, 10);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(characterx - 50, charactery + 32, 5, 5);
  ellipse(characterx - 30, charactery + 32, 5, 5);

  //mouth
  arc(characterx - 40, charactery + 45, 10, 10, 0, PI);

  //hair
  hair(characterx, charactery);
  hair(characterx - 20, charactery - 2);
  hair(characterx - 10, charactery - 1);
  hair(characterx - 30, charactery);
  push();

  translate(characterx + 10, charactery + 20);
  rotate(0.5);
  hair(0, 0);
  pop();
  push();
  translate(characterx - 46, charactery - 4);
  rotate(-0.5);
  hair(0, 0);
  pop();
}

function hair(x, y) {
  beginShape();
  vertex(x - 26, y + 1);
  bezierVertex(x - 43, y + 29, x - 9, y + 28, x - 26, y);
  endShape();
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "won") {
    wonScreen();
    resetGame();
  } else if (state === "lost") {
    lostScreen();
    resetGame();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "lost") {
    state = "game";
  } else if (state === "won") {
    state = "game";
  }
}
