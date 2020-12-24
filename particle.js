class Particle {
    constructor(x,y,z) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.z = z;
        this.body = Bodies.circle(this.x, this.y, this.z/2, options);
        World.add(world, this.body);
    }

    display() {
        var position = this.body.position;

        push();
        //position.x = mouseX;
        //position.y = mouseY;
        translate(position.x, position.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill(random(0, 255), random(0, 255), random(0, 255));       
        ellipse(0, 0, this.z, this.z);
        pop();
    }
}