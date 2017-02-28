function setup() {
    var db = '#151F60';
    var lb = color(88, 172, 250);
    var r = '#A81515';
    var bl = 'black';
    var w = 'white';
    var g = '#B8AE17';
    var hp = HALF_PI
    var thp = PI + HALF_PI
    var fp = PI
    var cent1 = 300
    var cent2 = 300
    var aw = 700
    var ah = 700
    var ts = 50
    var tx = 275
    var ty = 325
    createCanvas (600, 600);
    background (db);
    noStroke()
    fill(bl);
    ellipse( cent1, cent2, aw, ah)
    aw -= 100
    ah -= 100
    fill(w);
    ellipse( cent1, cent2, aw, ah)
    aw -= 100
    ah -= 100
    fill(lb);
    ellipse( cent1, cent2, aw, ah)
    fill(db);
    aw -= 100
    ah -= 100
    ellipse( cent1, cent2, aw, ah)
    fill(g)
    aw -= 320
    ah -= 320
    cent1 += 160
    ellipse( cent1, cent2, aw, ah)
    cent1 -= 320
    ellipse( cent1, cent2, aw, ah)
    cent1 += 160
    cent2 -= 160
    ellipse( cent1, cent2, aw, ah)
    cent2 += 320
    ellipse( cent1, cent2, aw, ah)
    cent1 += 80
    cent2 -= 23
    ellipse( cent1, cent2, aw, ah)
    cent1 -= 160
    ellipse( cent1, cent2, aw, ah)
    cent2 -= 275
    ellipse( cent1, cent2, aw, ah)
    cent1 += 160
    ellipse( cent1, cent2, aw, ah)
    cent1 += 60
    cent2 += 59
    ellipse( cent1, cent2, aw, ah)
    cent2 += 160
    ellipse( cent1, cent2, aw, ah)
    cent1 -= 275
    cent2 -= 4
    ellipse( cent1, cent2, aw, ah)
    cent2 -= 155
    ellipse( cent1, cent2, aw, ah)
    fill(r);
    textSize(ts);
    text("Ha", tx, ty)
}