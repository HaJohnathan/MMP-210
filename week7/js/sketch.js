function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    if (frameCount % 15== 0) {
    var r = random(0,255);
    var b = random(0,255);
    background(r, 0, b);
    }
    
    var ww = width/6;
    var wh = height/2;
    var x = 10, y = 10;
    for (var i = 0; i < 7; i++) {
        for (var h = 0; h < 3; h++) {
            drawWindow(x + 90 * i, y + 150 * h, ww, wh);
        }
    }
}

function drawWindow(x , y, ww, wh) {
           fill(167, 82, 54);
           rect(x, y, ww/2, wh/2);
           fill (mouseX/2, mouseY/2, frameCount%255);
           stroke(167, 82, 54);
           rect(x, y, ww/4, wh/8);
           rect(x, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8 * 2, ww/4, wh/8);
           fill (mouseY/2, mouseX/2, frameCount%255);
           stroke (8, 8, 138)
           ellipse(x+12, y+15, ww/8, wh/12);
           ellipse(x+12, y + wh/8 + 15, ww/8, wh/12);
           ellipse(x + ww/3 + 4, y + wh/8 + 15, ww/8, wh/12);
           ellipse(x + ww/3 +4, y + wh/8 * 2 + 15, ww/8, wh/12);
           ellipse(x + ww/3 + 4, y+15, ww/8, wh/12);
           ellipse(x+12, y + wh/8 * 2 + 15, ww/8, wh/12);
}
