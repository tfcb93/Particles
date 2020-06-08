// import { ParticleSystem } from './ParticleSystem';
import { ExplosionSystem } from './Explosion/ExplosionSystem';

let canvas;
let context;

const gravity = [0, .01];

let systems = [];

const load = () => {
    canvas = document.getElementById('main_canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');

    //canvas.addEventListener();

    canvas.addEventListener('mousedown', (e) => {
        systems.push(new ExplosionSystem(e.clientX, e.clientY,-1));
    });


}

const loop = () => {
    update();
    draw();

    requestAnimationFrame(loop);
}

const update = () => {
    systems.forEach(system => system.update(gravity));
}

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    systems.forEach(system => system.draw(context));
}


load();
loop();


/**
 * Arrumar projeto para poder fazer as particulas extenderem da particula principal assim como seus sistemas
 * Realizar testes
 */