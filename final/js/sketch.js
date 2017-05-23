var gameStart = false;
function setup() {
    var canvas = createCanvas(640, 640);
    canvas.parent("container");
    //start
    background("black")
    noStroke()
    fill("red")
    rect(p, p2, width/10, width/10);
    rect(p2, p3, width/10, width/10);
    rect(p3, p2, width/10, width/10);
    rect(p3, p, width/10, width/10);
    fill("blue")
    ellipse(width/2, height/2, width/10);
}


    var p = 0;
    var p2 = 200;
    var p3 = 400;
    var pupdate = 2;
    var p2update = 3;
    var p3update = 4;
    var score = 0;

//game
function draw() {
    
    //gamestart
    if (gameStart) {
    p += pupdate;
    p2 += p2update;
    p3 += p3update;
    background('black');
           //score
    fill("white")
    text(score,width/2, height/2);
    
    //enemies?
    noStroke()
    fill("red")
    rect(p, p2, width/10, width/10);
    rect(p2, p3, width/10, width/10);
    rect(p3, p2, width/10, width/10);
    rect(p3, p, width/10, width/10);
    //updaters
    
      if (p > width || p <= 0) {
      pupdate *= -1.03;
    }
      if (p2 > width || p2 <= 0) {
      p2update *= -1.02;
    }
      if (p3 > width || p3 <= 0) {
      p3update *= -1.01;
    }
    //character?
    fill("blue")
    ellipse(mouseX, mouseY, width/10);
    
    //score
    if (p > width || p <= 0) {
      score += 1;
    }
     if (p2 > width || p2 <= 0) {
      score += 1;
    }
      if (p3 > width || p3 <= 0) {
      score += 1;
      }
    
    //game overs
       if (mouseX > p && mouseX < p + width/10 && mouseY > p2 && mouseY <p2 + width/10) {
      noLoop();
    }
    if (mouseX > p2 && mouseX < p2 + width/10 && mouseY > p3 && mouseY <p3 + width/10) {
      noLoop();
    }
    if (mouseX > p3 && mouseX < p3 + width/10 && mouseY > p2 && mouseY <p2 + width/10) {
      noLoop();
    }
    if (mouseX > p3 && mouseX < p3 + width/10 && mouseY > p && mouseY < p + width/10) {
      noLoop();
    } 
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
      noLoop();
    };
    }
}

//gamestart
function mousePressed() {
    var d = dist(mouseX, mouseY, width/2, height/2);
    if (d < 100) {    
        gameStart = true;
    }
}

