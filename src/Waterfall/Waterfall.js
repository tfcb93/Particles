import { Particle } from "../Particle";


export class Waterfall extends Particle {

    constructor(x, y, lifetime, acceleration, velocity) {
        super(x, y, lifetime, acceleration, velocity);
        this.mass = Math.floor(Math.random() * (20 - 1) + 1);
        this.color = [Math.floor(Math.random() * 40), Math.floor(Math.random() * (191 - 127)) + 127, Math.floor(Math.random() * (255 - 157) + 157)];
    }
}