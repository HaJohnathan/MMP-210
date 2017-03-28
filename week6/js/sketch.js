function setup() { 
   createCanvas(640, 480);
    var dlx = 0;
    var dtx = width/16;
    var dbx = width/16;
    var drx = width/8
    var dly = height/12;
    var dty = 0;
    var dby = height/6;
    var dry = height/12;
    var ncx = width/8;
    var ncy = height/6;
    var hcx = 54;
    var hcy = 60;
    var resetx = width;
    var db = color(8, 8, 138);
    var mb = color(46, 100, 254);
    
    background (db);
    fill(mb);
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
        dlx -= resetx;
        dtx -= resetx;
        dbx -= resetx;
        drx -= resetx; 
        dly += ncy;
        dty += ncy;
        dby += ncy;
        dry += ncy;
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
    dlx -= resetx;
        dtx -= resetx;
        dbx -= resetx;
        drx -= resetx; 
        dly += ncy;
        dty += ncy;
        dby += ncy;
        dry += ncy;
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
    dlx -= resetx;
        dtx -= resetx;
        dbx -= resetx;
        drx -= resetx; 
        dly += ncy;
        dty += ncy;
        dby += ncy;
        dry += ncy;
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
    dlx -= resetx;
        dtx -= resetx;
        dbx -= resetx;
        drx -= resetx; 
        dly += ncy;
        dty += ncy;
        dby += ncy;
        dry += ncy;
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
    dlx -= resetx;
        dtx -= resetx;
        dbx -= resetx;
        drx -= resetx; 
        dly += ncy;
        dty += ncy;
        dby += ncy;
        dry += ncy;
    for ( var dlx = 0; dlx < width; dlx += ncx) {
        quad(dlx, dly, dtx, dty, drx, dry, dbx, dby);
        drx += ncx;
        dtx += ncx;
        dbx += ncx;
    }
}
    
    var x = 0;
    var y = 0;
    var x2 = 600;
    var y2 = 440;
    var xupdate = 2;
    var yupdate = 2;
    var xupdate2 = 2;
    var yupdate2 = 2;
    var colorupdater = 1;
    var colorupdateg = 3;
    var colorupdateb = 5;
    var r = 0;
    var g = 0;
    var b = 0;
    
function draw() {
    fill(r, g, b)
    rect(x, 0, width/16, height/12);
    rect(x2, 440, width/16, height/12);
    rect(0, y, width/16, height/12);
    rect(600, y2, width/16, height/12);
    x += xupdate;
    y += yupdate;
    x2 += xupdate2;
    y2 += yupdate2;
    r += colorupdater;
    b += colorupdateb;
    g += colorupdateg;
    
    if (x > width || x <= 0) {
      xupdate *= -1;
    }
    if (y > height || y <= 0) {
      yupdate *= -1;
    }
    if (x2 > width || x2 <= 0) {
      xupdate2 *= -1;
    }
    if (y2 > height || y2 <= 0) {
      yupdate2 *= -1;
    }
	if (r >= 255 || r <= 0) {
      colorupdater *= -1;
    }
    if (g >= 255 || g <= 0) {
      colorupdateg *= -1;
    }
    if (b >= 255 || b <= 0) {
      colorupdateb *= -1;
    }
    noFill()
    ellipse(width/2, height/2, mouseX, mouseX)
    
}