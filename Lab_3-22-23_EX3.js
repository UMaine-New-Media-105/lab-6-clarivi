//Write a sketch in which two sprites are drawn using functions. One sprite is a character (such as Mario) and the other is an item (such as coin). You should be able to move the character using the arrow keys. The item sprite should spawn randomly and the goal will be to move the character to get the item. When the character gets the item, you make the character animate.
//Add to the previous script where the item disappears after the character gets it.
//Spawn the item 5 items randomly until the character gets them all.

function setup() {
  createCanvas(400, 400);
  xPos = 0;
  yPos = 0;
  speedY = 0;
  speedX = 0;
  x1 = random(1, 350);
  x2 = random(1, 400);
  x3 = random(1, 400);
  x4 = random(1, 400);
  x5 = random(1, 400);
  y1 = random(1, 400);
  y2 = random(1, 400);
  y3 = random(1, 400);
  y4 = random(1, 400);
  y5 = random(1, 400);
}

function draw() {
  background("rgb(141,118,150)");
  drawPlayer(xPos, yPos);
  xPos = xPos + speedX;
  yPos = yPos + speedY;
  drawItem(x1, y1);
  drawItem(x2, y2);
  drawItem(x3, y3);
  drawItem(x4, y4);
  drawItem(x5, y5);
}

function drawPlayer(x, y) {
  push();
  strokeWeight(2)
  fill("grey");
  translate(x, y);
  rect(0, 0, 50, 60);
  line(15, 15, 20, 20);
  line(35, 15, 30, 20);
  ellipse(30, 30, 20, 8);
  fill("black");
  ellipse(30, 40, 2);
  pop();
}

function drawPlayerAlt(x, y) {
  push();
  fill("grey");
  translate(x, y);
  rect(0, 0, 50, 60);
  line(15, 15, 20, 20);
  line(35, 15, 30, 20);
  ellipse(30, 30, 20, 8);
  fill("black");
  ellipse(30, 40, 5, 10);
  pop();
}

function drawItem(x, y) {
  itemCollected = 0;
  if (
    x > xPos + 20 + 25 ||
    x < xPos - 20 + 25 ||
    y > yPos + 20 + 30 ||
    y < yPos - 20 + 30)
  {
    itemCollected = 1;
  }
  if (itemCollected === 1) {
    push();
    translate(x, y);
    fill("tan");
    ellipse(0, 0, 30);
    fill("red");
    ellipse(0, 0, 25);
    fill("yellow");
    ellipse(0, 0, 20);
    pop();
  } else drawPlayerAlt(xPos, yPos);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    speedY = -1.5;
    speedX = 0;
  } else if (keyCode === DOWN_ARROW) {
    speedY = 1.5;
    speedX = 0;
  } else if (keyCode === LEFT_ARROW) {
    speedX = -1.5;
    speedY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    speedX = 1.5;
    speedY = 0;
  } else {
    speedX = 0;
    speedY = 0;
  }
}
