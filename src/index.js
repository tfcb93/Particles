// import { ParticleSystem } from './ParticleSystem';
import { ExplosionSystem } from './Explosion/ExplosionSystem';
import { WaterfallSystem } from './Waterfall/WaterfallSystem';

let canvas;
let context;

let particleType = 'explosion';
let emissions = 1;

const gravity = [0, .01];

let systems = [];

const load = () => {
    canvas = document.getElementById('main_canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');

    // document.addEventListener();

    document.addEventListener('keydown',(e) => {
        switch(e.key) {
            case 'q':
                particleType = 'explosion';
            break;
            case 'w':
                particleType = 'waterfall';
            break;
            case 'ArrowUp':
                emissions++;
            break;
            case 'ArrowDown':
                if(emissions === -1) break;
                else emissions--;
            break;
            default:
                null;
        }
    });
    
    //canvas.addEventListener();


    canvas.addEventListener('mousedown', (e) => {
        switch(particleType) {
            case 'explosion':
                systems.push(new ExplosionSystem(e.clientX, e.clientY,emissions));
            break;
            case 'waterfall':
                systems.push(new WaterfallSystem(e.clientX, e.clientY));
            break;
            default:
                null;
        }
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
 * Waterfall
 * Excluir sistema após terminar o número de emissões previstas
 */