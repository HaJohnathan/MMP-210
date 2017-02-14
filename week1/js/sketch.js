function setup() {
    createCanvas(720, 540);
    background('lightblue');
    fill('#f5c297')
    arc(100, 230, 150, 150, HALF_PI, PI + 1.57)
    arc(500, 230, 150, 150, PI + 1.57, HALF_PI)
    ellipse(300, 300, 500)
    triangle(300, 275, 325, 325, 275, 325)
    arc(300, 280, 250, 250, 0 + 1, PI - 1);
    fill('white')
    ellipse(200, 200, 65, 55);
    ellipse(400, 200, 65, 55);
    stroke('purple')
    fill('red')
    ellipse(200, 200, 45, 50)
    fill('purple')
    ellipse(400, 200, 45, 50)
    fill('black')
    ellipse(200, 200, 5, 50)
    ellipse(400, 200, 5, 50)
    stroke('black')
    arc(200, 160, 65, 15, PI, TWO_PI);
    arc(400, 160, 65, 15, PI, TWO_PI);
    arc(300, 120, 350, 150, PI, TWO_PI);
}