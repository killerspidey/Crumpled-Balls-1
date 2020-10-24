class Ground {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(this.x, this.y, 1600, 20, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 255, 0);
        strokeWeight(3);
        rect(0, 0, 1600, 20);
        pop();
    }
}