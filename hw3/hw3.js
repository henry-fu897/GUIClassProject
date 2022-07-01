var multiEllipse = []

function setup() {
    createCanvas(400, 400)
    for (var i = 0; i < 10; i++) {
        // trying to put the ellipses in bound
        var x = random(abs(width - 40));
        var y = random(abs(height - 40));
        multiEllipse.push(new ellipses(x, y));
    }

}

function mousePressed() {
    for (var i = 0; i < multiEllipse.length; i++) {
        multiEllipse[i].clicked();
    }
}

function draw() {
    background(220)
    for (var i = 0; i < multiEllipse.length; i++) {
        multiEllipse[i].display();
    }
}

function ellipses(x, y) {
    this.x = x;
    this.y = y;
    this.col = color('blue');

    this.display = function() {
        stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, random(25, 35), random(30, 40));
    }

    this.clicked = function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 17) {
             this.col = color('red');
        }
    }

}