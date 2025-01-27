let gameState = "start"; // Possible states: "start", "game", "end"
let buttonX = 150;
let buttonY = 480;
let buttonWidth = 400;
let buttonHeight = 100;
let x = 500, y = 700; // Initial position of the fairy

// Movement flags
let thrustingLeft = false;
let thrustingRight = false;

function setup() {
    createCanvas(1100, 1100);
}

function draw() {
    if (gameState === "start") {
        startScreen();
    } else if (gameState === "game") {
        gameScreen();
    } else if (gameState === "end") {
        endScreen();
    }
}

function startScreen() {
    background(0, 0, 0);
    fill(255, 255, 255);
    textSize(80);
    text("Fairy the Fighter", 250, 380);

    // Draw a button
    fill(0, 0, 0);
    rect(buttonX + 160, buttonY, buttonWidth, buttonHeight);
    fill(238, 210, 2);
    textSize(50);
    text("Start", buttonX + 320, buttonY + 70);
}

function gameScreen() {
    drawGamebackground(1100,1100);

    // Update fairy position based on movement flags
    if (thrustingLeft) x -= 8;
    if (thrustingRight) x += 8;

    // Draw fairy and monster
    drawFairy(x, y+100);
    drawmonster(350, 60);
    
}

function mousePressed() {
    if (gameState === "start" || gameState === "end") {
        // Check if mouse is over the button
        if (
            mouseX > buttonX &&
            mouseX < buttonX + buttonWidth &&
            mouseY > buttonY &&
            mouseY < buttonY + buttonHeight
        ) {
            if (gameState === "start") {
                gameState = "game"; // Move to game screen
            } else if (gameState === "end") {
                resetGame(); // Reset the game
                gameState = "start"; // Move to start screen
            }
        }
    }
}
function drawGamebackground(){
    // Sky
  fill(135, 206, 235);
  rect(0, 0, width, height / 2);

  // Castle
  fill(200);
  rect(300, 150, 200, 150);
  rect(250, 100, 50, 200);
  rect(500, 100, 50, 200);

  // Castle roofs
  fill(150);
  triangle(300, 150, 400, 50, 500, 150);
  triangle(250, 100, 275, 50, 300, 100);
  triangle(500, 100, 525, 50, 550, 100);

  // Grass
  fill(34, 199, 34);
  rect(0, height / 2, width, height / 2);

}

function drawFairy(x, y) {
  push();
  background(255, 255, 255);
  translate(x - 246, y - 220);
  scale(0.5);

  // Wing One
  noStroke();
  fill(0, 109, 90);
  ellipse(x - 110, y - 40, 70, 260);
  ellipse(x - 45, y - 40, 70, 260);
  fill(86, 169, 160);
  ellipse(x - 110, y - 40, 70, 190);
  ellipse(x - 45, y - 40, 70, 190);

  // Wing Two
  fill(0, 109, 90);
  ellipse(x - 100, y + 40, 50, 210);
  ellipse(x - 55, y + 40, 50, 210);
  fill(80, 166, 160);
  ellipse(x - 100, y + 40, 50, 130);
  ellipse(x - 55, y + 40, 50, 130);

  // Wing Details
  fill(225, 171, 145);
  ellipse(x - 110, y - 90, 30, 60);
  ellipse(x - 40, y - 90, 30, 60);
  fill(255, 179, 9);
  ellipse(x - 130, y - 30, 15, 60);
  ellipse(x - 23, y - 30, 15, 60);
  fill(2, 119, 0);
  ellipse(x - 110, y - 90, 20, 30);
  ellipse(x - 40, y - 90, 20, 30);
  fill(230, 29, 75);
  ellipse(x - 110, y - 90, 8, 20);
  ellipse(x - 40, y - 90, 8, 20);

  // Hair
  fill(168, 126, 50);
  rect(x - 109, y - 90, 70, 260, 50);

  // Body
  fill(255, 224, 178);
  rect(x - 100, y - 80, 50, 70, 50);
  // Eyes
  fill(255);
  ellipse(x - 85, y - 49, 15, 15); // Left eye
  ellipse(x - 65, y - 49, 15, 15); // Right eye
  ellipse(x - 85, y - 49, 5, 15); // Left eye
  ellipse(x - 65, y - 49, 5, 15); // Right eye
  fill(0);
  ellipse(x - 85, y - 49, 9, 10); // Left pupil
  ellipse(x - 65, y - 49, 9, 10); // Right pupil
  fill(255);
  ellipse(x - 83, y - 52, 3, 4); // Left eye
  ellipse(x - 63, y - 52, 3, 4); // Right eye

  // Bangs for Hair
  fill(168, 126, 50);
  rect(x - 103, y - 80, 60, 28, 10);

  fill(255, 224, 178);
  rect(x - 100, y - 17, 50, 130, 50);
  rect(x - 110, y - 12, 70, 20, 50);
  rect(x - 110, y - 12, 20, 90, 50);
  rect(x - 59, y - 12, 20, 90, 50);
  rect(x - 100, y - 17, 50, 180, 50);
  fill(2, 119, 110);
  rect(x - 77, y + 85, 5, 80, 50);

  // Outfit
  fill(348, 128, 99);
  rect(x - 100, y, 50, 120, 50);

  ellipse(x - 84, y + 10, 30, 30, 50);
  ellipse(x - 68, y + 10, 30, 30, 50);
  fill(255, 224, 178);
  rect(x - 110, y + 40, 70, 20, 50);

  // Face

  // Nose
  fill(255, 178, 162);
  triangle(x - 75, y - 50, x - 77, y - 45, x - 73, y - 45);

  // Mouth
  fill(255, 102, 102);
  arc(x - 75, y - 35, 20, 10, 0, PI);

  pop();
}

function drawmonster(x, y) {
  scale(1.1);
  fill(255,0,0);
  //body
  arc(x+100,y+100,190,290,radians(180),radians(0));
  arc(x+100,y+100,190,180,radians(0),radians(180));
  //legs
  fill(0,0,0);
  ellipse(x+50,y+180,60);
  ellipse(x+140,y+180,60);
  //eyes
  fill(255,255,0);
  arc(x+130,y+20,50,60,radians(320),radians(140));
  arc(x+70,y+20,50,60,radians(40),radians(220));
  fill(0,0,0);
  ellipse(x+70,y+36,10,10);
  ellipse(x+130,y+36,10,10);
  //mouse
  strokeWeight(3);
  line (x+35,y+105,x+170,y+105);
  //teeth
  fill (255,255,255);
  strokeWeight(1);
  triangle(x+53,y+107,x+73,y+107,x+63,y+135);
  triangle(x+123,y+107,x+143,y+107,x+133,y+135);
  //horns
  fill (0,0,0);
  triangle(x+51,y-26,x+69,y-37,x+45,y-63);
  triangle(x+148,y-26,x+135,y-37,x+156,y-63);
}



function keyPressed() {
    if (keyCode === LEFT_ARROW) thrustingLeft = true;
    if (keyCode === RIGHT_ARROW) thrustingRight = true;
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) thrustingLeft = false;
    if (keyCode === RIGHT_ARROW) thrustingRight = false;
}

