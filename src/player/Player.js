import { input } from "../Input";
import { GameObject } from "../game/GameObject";
import { HERO } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";

export class Player extends GameObject {
    constructor() {
        super();
        this.sprite = HERO;
        this.scale = 2;
    }
    Update () {
        this.position.x += input.axis.x;
        this.position.y -= input.axis.y;

        let currPos = new Vector2(this.position.x, this.position.y);

        if(!input.isIdle) {
            GameManager.playerLastPos.push(currPos);
        }
        

    }
}
