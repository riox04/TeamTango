import { input } from "../Input";
import { GameObject } from "../game/GameObject";
import { HERO,FRIEND } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";
import { AnimationClip } from "../animator/AnimationClip";
import { Animator } from "../animator/Animator";
import { Collider } from "../physics/Collider";


export class Friend extends GameObject {
    constructor(frameSkip) {
        super();
        this.sprite = FRIEND;
        this.frameSkip = frameSkip ?? 10;
        this.scale = 1.9;
        GameManager.playerFriends.push(this);
        
        this.tag = "friend";

        const idleFrameArr = [44];
        this.idleAnimClip = new AnimationClip(idleFrameArr, 100, this.sprite);

        const walkFrameArr = [44, 52, 60, 52];
        this.walkAnimClip = new AnimationClip(walkFrameArr, 100, this.sprite);
        
        this.playerAnimator = new Animator();

        this.collider = new Collider(12,20,9,17,this);
    }

    Update() {
        if(GameManager.playerLastPos.length > this.frameSkip){ 
            this.position.x = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip].x;
            this.position.y = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip].y;
        }
        if (input.isIdle){
            this.playerAnimator.Play(this.idleAnimClip);

        }
        else {
            this.playerAnimator.Play(this.walkAnimClip);

        }
    }
}