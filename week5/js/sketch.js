function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(88, 172, 250);
    
    var ww = width/6;
    var wh = height/2;
    
    for ( var x = ww/4; x < width; x+=ww) {
       for (var y = wh/4; y < height; y+=wh) {
           
           fill(167, 82, 54);
           rect(x, y, ww/2, wh/2);
           fill (mouseX/2, mouseY/2, frameCount%255);
           stroke(167, 82, 54);
           rect(x, y, ww/4, wh/8);
           rect(x, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8, ww/4, wh/8);
           rect(x + ww/4, y + wh/8 * 2, ww/4, wh/8);
           
       }
    }
    for ( var x = ww/4; x < width; x+=ww) {
       for (var y = wh/4; y < height; y+=wh) { 
           
           fill (mouseY/2, mouseX/2, frameCount%255);
           stroke (8, 8, 138)
           ellipse(x+12, y+15, ww/8, wh/12);
           ellipse(x+12, y + wh/8 + 15, ww/8, wh/12);
           ellipse(x + ww/3 + 4, y + wh/8 + 15, ww/8, wh/12);
           ellipse(x + ww/3 +4, y + wh/8 * 2 + 15, ww/8, wh/12);
           ellipse(x + ww/3 + 4, y+15, ww/8, wh/12);
           ellipse(x+12, y + wh/8 * 2 + 15, ww/8, wh/12);
        }
    }
        
}