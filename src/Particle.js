export class Particle {
    
    constructor(x, y, lifetime, acceleration = [0, 0], velocity = [0, 0]) {
        this.x = x;
        this.y = y;
        this.acceleration = acceleration;
        this.velocity = velocity;
        this.mass = 1;
        this.color = [1,1,1];
        this.visibility = 1.0; //this should be in frames;
        this.age = 0; //this should be in frames as well;
        this.lifetime = lifetime;
        this.isDead = false;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x-5,this.y-5,10,10);
        context.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.visibility})`;
        context.fill();
    }

    applyForce(force = [0, 0]) {
        this.acceleration[0] += force[0] / this.mass;
        this.acceleration[1] += force[1] / this.mass;
    }

    update() {
        //I need to apply the acceleration over the velocity when it's update;
        this.velocity[0] += this.acceleration[0];
        this.velocity[1] += this.acceleration[1];

        //I need to check if this particle get's over its life time;
        if(this.age >= this.lifetime || this.visibility <= 0) {
            this.isDead = true;
        }
        this.visibility -= 0.01;
        this.lifetime++;
        this.x += this.velocity[0];
        this.y += this.velocity[1];
    }
}