export class GameLoop {
    constructor(update, render) {

        this.lastFrameTime = 0; 
        this.accumulatedTime = 0; // counting ti me
        this.timeStep = 1000/200; // 60 frames per second [1000ms for 60 frames]

        this.update = update;
        this.render = render;

        this.rafId = null; // request animation frame function id [// callback that keeps happening]
        this.isRunning = false;
    }

    mainLoop = (timestamp) => {
        if (!this.isRunning) return;

        let deltaTime = timestamp - this.lastFrameTime; 
        this.lastFrameTime = timestamp;

        // Accumulate all the time since the last frame.
        this.accumulatedTime += deltaTime;

        // Fixed time step updates
        // if theres enough accumulated time to run one or more fixed updates, we run them.
        while (this.accumulatedTime >= this.timeStep) {
            this.update(timestamp,deltaTime); // passing the current time
            this.accumulatedTime -= this.timeStep; 
        }

        this.render();

        this.rafId = requestAnimationFrame(this.mainLoop);
    }

    start() {
        if(!this.isRunning){
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if(this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
    }
}