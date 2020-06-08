import { Particle } from './Particle';

export class ParticleSystem {
    
    constructor(x, y, emitterCounter) {
        this.x = x;
        this.y = y;
        this.totalParticles = 20;
        this.particles = [];
        this.emitterCounter = emitterCounter; //emitterCounter === -1 will make it emitter infinitely
        this.totalEmissions = 0;
    }

    addParticle() {
        this.particles.push(new Particle(this.x + Math.random() * (20 + 20) - 20, this.y + Math.random() * (20 + 20) - 20, 300, [0,0], [0,0]));
    }

    //Thanks Khan Academy for teaching me it :)
    applyForce(force) {
        this.particles.forEach(particle => {
            particle.applyForce(force);
        });
    }

    applyGravity(gravity) {
        this.particles.forEach(particle => {
            const gravitalForce = [gravity[0] * particle.mass, gravity[1] * particle.mass];
            particle.applyForce(gravitalForce);
        });
    }

    update(gravity=[], force=[]) {
        if(gravity.length) {
            this.applyGravity(gravity);
        }
        if(force.length) {
            this.applyForce(force);
        }
        if(this.particles.length !== this.totalParticles && (this.totalEmissions < this.emitterCounter || this.emitterCounter === -1)) {
            while(this.particles.length < this.totalParticles) {
                this.addParticle();
            }
            this.totalEmissions++;
        } else {
            //funcao de update generica aqui
            //incluir função para aplicar força aqui dentro deste forEach tbm
            let deleteIndexes = [];
            this.particles.forEach((particle, index) => {
                particle.update()
                if(particle.isDead) {
                    deleteIndexes.push(index);
                }
            });
            deleteIndexes.forEach(index => this.particles.splice(index, 1));
        }
    }

    draw(context) {
        this.particles.forEach(particle => particle.draw(context));
    }
}