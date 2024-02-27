import { input } from "../Input";
import { GameManager } from "../game/GameManager";
import { GameObject } from "../game/GameObject";
import { FRIEND, HERO } from "../utility/Sprite";


export class Friend extends GameObject {
    constructor(frameSkip) {
        super();
        this.sprite = FRIEND;
        this.frameSkip = frameSkip ?? 10;
        this.scale = 1.9;
        GameManager.playerFriends.push(this);
    }

    Update() {
        if(GameManager.playerLastPos.length > this.frameSkip){ 
            this.position.x = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip].x;
            this.position.y = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip].y;
        }
    }
}