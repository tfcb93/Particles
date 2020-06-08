import { Particle } from './../Particle';

export class Explosion extends Particle {
    
    constructor(x, y, lifetime, acceleration, velocity) {
        super(x, y, lifetime, acceleration, velocity);
        this.mass = 10;
        this.color = [Math.floor(200 + Math.random() * 55), Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)]
    }

    //Draw and update can be override in another way, just need to change inside the same method name
    // draw(context) {}
    // update() {}

}