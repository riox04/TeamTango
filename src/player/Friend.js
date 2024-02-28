import { GameObject } from "../game/GameObject";
import { FRIEND } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";
import { AnimationClip } from "../animator/AnimationClip";
import { Animator } from "../animator/Animator";
import { Collider } from "../physics/Collider";
import { input } from "../Input";


export class Friend extends GameObject {
    constructor(frameSkip) {
        super();
        this.sprite = FRIEND;
        this.frameSkip = frameSkip ?? 10;
        this.scale = 1.9;
        GameManager.playerFriends.push(this);

        this.tag = "friend";

        //#region Animation section
        this.playerAnimator = new Animator();
        const walkUpFrameList = [40, 48, 56, 48];
        const walkDownFrameList = [44, 52, 60, 52];
        const walkRightFrameList = [42, 50, 58, 50];
        const walkLeftFrameList = [46, 54, 62, 54];

        const walkUpRightFrameList = [41, 49, 57, 49];
        const walkDownRightFrameList = [43, 51, 59, 51];
        const walkUpLeftFrameList = [45, 53, 61, 53];
        const walkDownLeftFrameList = [45, 53, 61, 53];

        const idleClipFrameList = [52];

        this.walkUpClip = new AnimationClip(walkUpFrameList, 150, this.sprite);
        this.walkDownClip = new AnimationClip(walkDownFrameList, 150, this.sprite);
        this.walkLeftClip = new AnimationClip(walkLeftFrameList, 150, this.sprite);
        this.walkRightClip = new AnimationClip(walkRightFrameList, 150, this.sprite);

        this.walkUpRightClip = new AnimationClip(walkUpRightFrameList, 150, this.sprite);
        this.walkUpLeftClip = new AnimationClip(walkUpLeftFrameList, 150, this.sprite);
        this.walkDownRightClip = new AnimationClip(walkDownRightFrameList, 150, this.sprite);
        this.walkDownLeftClip = new AnimationClip(walkDownLeftFrameList, 150, this.sprite);

        this.idleClip = new AnimationClip(idleClipFrameList, 100, this.sprite);
        //#endregion

        this.collider = new Collider(12, 20, 9, 17, this);
    }

    Update() {
        if (GameManager.playerLastPos.length > this.frameSkip) {
            const targetPos = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip];
            const targetLastPos = GameManager.playerLastPos[GameManager.playerLastPos.length - this.frameSkip - 1];

            let dirVector = new Vector2((targetPos.x - targetLastPos.x), -(targetPos.y - targetLastPos.y));

            this.HandleAnimation(dirVector);

            this.position = targetPos;

        }
    }
    HandleAnimation(inputDir) {
        if (inputDir.compare(Vector2.UpRight)) {
            this.playerAnimator.Play(this.walkUpRightClip);

        }
        if (inputDir.compare(Vector2.UpLeft)) {
            this.playerAnimator.Play(this.walkUpLeftClip);

        }
        if (inputDir.compare(Vector2.DownRight)) {
            this.playerAnimator.Play(this.walkDownRightClip);

        }
        if (inputDir.compare(Vector2.DownLeft)) {
            this.playerAnimator.Play(this.walkDownLeftClip);

        }

        if (inputDir.compare(Vector2.Up)) {
            this.playerAnimator.Play(this.walkUpClip);

        }
        if (inputDir.compare(Vector2.Down)) {
            this.playerAnimator.Play(this.walkDownClip);

        }
        if (inputDir.compare(Vector2.Right)) {
            this.playerAnimator.Play(this.walkRightClip);

        }
        if (inputDir.compare(Vector2.Left)) {
            this.playerAnimator.Play(this.walkLeftClip);

        }
        if (input.isIdle) {
            this.playerAnimator.Play(this.idleClip);

        }

    }
}