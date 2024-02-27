import { input } from "../Input";
import { GameObject } from "../game/GameObject";
import { HERO } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";
import { AnimationClip } from "../animator/AnimationClip";
import { Animator } from "../animator/Animator";

export class Player extends GameObject {
    constructor() {
        super();
        this.sprite = HERO;
        this.scale = 2;

        const idleFrameArr = [20];
        this.idleAnimClip = new AnimationClip(idleFrameArr, 100, this.sprite);
        
        const walkFrameArr = [12, 20, 28, 20];
        this.walkAnimClip = new AnimationClip(walkFrameArr, 100, this.sprite);

        this.playerAnimator = new Animator();
    }
    Update() {
        this.position.x += input.axis.x;
        this.position.y -= input.axis.y;

        if (input.isIdle){
            this.playerAnimator.Play(this.idleAnimClip);

        }
        else {
            this.playerAnimator.Play(this.walkAnimClip);

        }

        let currPos = new Vector2(this.position.x, this.position.y);

        if (!input.isIdle) {
            GameManager.playerLastPos.push(currPos);
        }
    }
}
