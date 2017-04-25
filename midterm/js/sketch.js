function setup() {
    createCanvas(640, 640);
   noStroke();
    var w = width/12;
    var h = height/12;
    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            
            if (y < h*4) {
                r = random(0, 255);
                g = random(0,50);
                b = random(0,50);
                
            } 

            else if (y < h*7) {
                r = random(0, 50);
                g = random(0, 255);
                b = random(0,50);
            }

            else if (y < h*12) {
                r = random(0, 50);
                g = random(0,50);
                b = random(0, 255);
            }
            fill(r,g, b);            
            rect(x, y, w, h);
        }
    }
}

function keyPressed() {
    var ellipsex = random (0,640);
    var ellipsey = random (0,640);
    var ellipsesize = random (10,100);
    var r = random(0, 255);
    var g = random(0,255);
    var b = random(0, 255);
    var grayscale = random (0,255);
    var strokesize = random (1,10)
    
    fill (grayscale);
    stroke (r,g,b);
    strokeWeight (strokesize);
    
    ellipse ( ellipsex, ellipsey, ellipsesize);
}

    var colorupdater = 1;
    var colorupdateg = 3;
    var colorupdateb = 5;
    var ellipseR = 0
    var ellipseG = 0
    var ellipseB = 0
    
function draw(){
    textSize (50);
    frameRate(30);
    var deadline = 500
    var time = deadline - frameCount
    ellipseR += colorupdater
    ellipseG += colorupdateg
    ellipseB += colorupdateb
    
    text(time, width/2, height/2);
    if (time < 0){
            remove()
        }
    if (ellipseR >= 255 || ellipseR <= 0) {
      colorupdater *= -1;
    }
    if (ellipseG >= 255 || ellipseG <= 0) {
      colorupdateg *= -1;
    }
    if (ellipseB >= 255 || ellipseB <= 0) {
      colorupdateb *= -1;
    }
        fill(ellipseR, ellipseG, ellipseB)
        if(mouseIsPressed) {
        ellipse (mouseX, mouseY, width/15)
        }
}