function setup() {
    var ellipsesize = 0
    createCanvas (600, 600);
}

function draw() {
    ellipse(300, 300, mouseX, mouseX)
if (mouseY > 100) 
    fill ("white")
if (mouseY > 200) 
    fill ("red")
if (mouseY > 300) 
    fill ("blue")
if (mouseY > 400) 
    fill ("purple")
if (mouseY > 500) 
    fill ("green")
if (mouseY > 600) 
    fill ("black")
}