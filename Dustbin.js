class Dustbin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.angle = 0;

        this.leftWall = Bodies.rectangle(this.x - this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true });
        Matter.Body.setAngle(this.leftWall, this.angle);
        World.add(world, this.leftWall);

        this.bottomWall = Bodies.rectangle(this.x, this.y, this.width, this.thickness, { isStatic: true });
        World.add(world, this.bottomWall);

        this.rightWall = Bodies.rectangle(this.x - this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true });
        Matter.Body.setAngle(this.rightWall, -1 * this.angle);
        World.add(world, this.rightWall);
    }
    display() {
        var pos1 = this.leftWall.position;
        var pos2 = this.bottomWall.position;
        var pos3 = this.rightWall.position;

        push();
        translate(pos1.x, pos1.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0, 0, this.thickness, this.height);
        pop();

        push();
        translate(pos2.x, pos2.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rect(0, 0, this.width, this.thickness);
        pop();

        push();
        translate(pos3.x, pos3.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1 * this.angle);
        rect(0, 0, this.thickness, this.height);
        pop();
    }
}