export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP_RIGHT = "UP_RIGHT";
import { Vector2 } from '/src/Vector2.js';


export class Input {
    constructor() {

        this.inputAxis = new Vector2(0,0);

        document.addEventListener('keydown', (e) => {
            // if (e.code === "KeyW" && e.code === "KeyD") {
            //     this.onArrowPressed(UP_RIGHT);
            // }
            if (e.code === "ArrowUp" || e.code === "KeyW") {
                this.onArrowPressed(UP);
            }
            if (e.code === "ArrowDown" || e.code === "KeyS") {
                this.onArrowPressed(DOWN);
            }
            if (e.code === "ArrowLeft" || e.code === "KeyA") {
                this.onArrowPressed(LEFT);
            }
            if (e.code === "ArrowRight" || e.code === "KeyD") {
                this.onArrowPressed(RIGHT);
            }
            
        })

        document.addEventListener('keyup', (e) => {
            // if (e.code === "KeyW" && e.code === "KeyD") {
            //     this.onArrowReleased(UP_RIGHT);
            // }
            if (e.code === "ArrowUp" || e.code === "KeyW") {
                this.onArrowReleased(UP);
            }
            if (e.code === "ArrowDown" || e.code === "KeyS") {
                this.onArrowReleased(DOWN);
            }
            if (e.code === "ArrowLeft" || e.code === "KeyA") {
                this.onArrowReleased(LEFT);
            }
            if (e.code === "ArrowRight" || e.code === "KeyD") {
                this.onArrowReleased(RIGHT);
            }
            
            
        })
    }

    get direction() {
        return  this.inputAxis;
    }

    onArrowPressed(direction) {
        if (direction === UP ) {
            this.inputAxis.y = -1;
        }
        if (direction === DOWN) {
            this.inputAxis.y = 1;
        }
        if (direction === LEFT) {
            this.inputAxis.x = -1;
        }
        if (direction === RIGHT) {
            this.inputAxis.x = 1;
        }   
    }

    onArrowReleased(direction) {
        if (direction === UP ) {
            this.inputAxis.y = 0;
        }
        if (direction === DOWN) {
            this.inputAxis.y = 0;
        }
        if (direction === LEFT) {
            this.inputAxis.x = 0;
        }
        if (direction === RIGHT) {
            this.inputAxis.x = 0;
        }   
    }


}