
import { ParticleSystem } from './../ParticleSystem';
import { Waterfall } from './Waterfall';

export class WaterfallSystem extends ParticleSystem {
    
    constructor(x, y) {
        super(x, y, -1);
        this.totalParticles = 100;
    }

    addParticle() {
        this.particles.push(new Waterfall(this.x + (Math.floor(Math.random() * (20 + 20)) - 20),this.y + (Math.floor(Math.random() * (5 + 5)) - 5),500,[0,0],[0,0]));
    }
}

/**
 * I will probably need to change the update function here
 */