import { Explosion } from './Explosion';
import { ParticleSystem } from './../ParticleSystem';

export class ExplosionSystem extends ParticleSystem {
    
    constructor(x, y, emitterCounter) {

        super(x, y, emitterCounter);
        this.totalParticles = 20;
        //this.emitterCounter = emitterCounter;
    }

    addParticle() {
        let velocity = [Math.floor(Math.random() * (2 + 2) - 2), Math.floor(Math.random() * (2 + 2) - 2)];
        while(velocity[0] === 0.0 || velocity[0] === 0.0 ) {
            velocity = [Math.floor(Math.random() * (1 + 1) - 1), Math.floor(Math.random() * (1 + 1) - 1)];
        }
        const acc = [0,0];
        this.particles.push(new Explosion(this.x + Math.random() * (20 + 20) - 20, this.y + Math.random() * (20 + 20) - 20, 300, acc, velocity));
    }
}