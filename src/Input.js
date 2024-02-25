export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP_RIGHT = "UP_RIGHT";

export class Input {
    constructor() {

        this.heldDirections = [];

        document.addEventListener('keydown', (e) => {
            if (e.code === "KeyW" && e.code === "KeyD") {
                this.onArrowPressed(UP_RIGHT);
            }
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
            if (e.code === "KeyW" && e.code === "KeyD") {
                this.onArrowReleased(UP_RIGHT);
            }
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
        return this.heldDirections[0];
    }

    onArrowPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }
A
    onArrowReleased(direction) {
        const index = this.heldDirections.indexOf(direction);
        if (index === -1) {
            return;
        }
        // Remove this key from the list
        this.heldDirections.splice(index, 1);
    }

}

///// update for main js
// const update = () => {
//     if(input.direction === DOWN) {
//       heroPos.y += 1;
//     }
//     if(input.direction === UP) {
//       heroPos.y -= 1;
//     }
//     if(input.direction === LEFT) {
//       heroPos.x -= 1;
//     }
//     if(input.direction === RIGHT) {
//       heroPos.x += 1;
//     }
//     if(input.direction === UP_RIGHT) {
//       heroPos.x += 1;
//       heroPos.y += 1;
//     }
//     console.log(input.direction);
//   }