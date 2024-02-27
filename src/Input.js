import { Vector2 } from "./utility/Vector2.js";

export const UP = "UP";
export const DOWN = "DOWN";
export const LEFT = "LEFT";
export const RIGHT = "RIGHT";

export class Input {

    constructor() {
        this.rawAxis = new Vector2(0, 0);
        this.horizontalStack = [];
        this.verticalStack = [];
    }

    Initialize() {
        console.log("Initialized Input Module");
        document.addEventListener('keydown', (e) => {

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

    onArrowPressed(direction) {
        let indxH = this.horizontalStack.indexOf(direction);
        let indxV = this.verticalStack.indexOf(direction);

        if ((direction === LEFT || direction === RIGHT) && (indxH === -1)) { // push only if there is nothing in the hstack (-1)
            this.horizontalStack.push(direction);
        }
        if ((direction === UP || direction === DOWN) && (indxV === -1)) {
            this.verticalStack.push(direction);
        }
    }

    onArrowReleased(direction) {
        let indxH = this.horizontalStack.indexOf(direction);
        let indxV = this.verticalStack.indexOf(direction);

        if (indxH !== -1) {
            this.horizontalStack.splice(indxH, 1);
        }
        if (indxV !== -1) {
            this.verticalStack.splice(indxV, 1);
        }
    }

    get axis() {
        if (this.horizontalStack.length > 0) {
            let lastHorizontalElement = this.horizontalStack[this.horizontalStack.length - 1];

            if (lastHorizontalElement === RIGHT) {
                this.rawAxis.x = 1;
            }
            if (lastHorizontalElement === LEFT) {
                this.rawAxis.x = -1;
            }
        }
        else { // empty stack === no key is being pressed
            this.rawAxis.x = 0;
        }


        let lastVerticalElement;
        if (this.verticalStack.length > 0) {
            lastVerticalElement = this.verticalStack[this.verticalStack.length - 1];

            if (lastVerticalElement === UP) {
                this.rawAxis.y = 1;
            }
            if (lastVerticalElement === DOWN) {
                this.rawAxis.y = -1;
            }
        }
        else {
            this.rawAxis.y = 0;
        }

        return this.rawAxis;
    }
    //Addons
    get getMovementAxis() {

    }
}

export const input = new Input();
