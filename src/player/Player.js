import { input } from "../Input";
import { GameObject } from "../game/GameObject";
import { GAMEOVER, HERO } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";
import { AnimationClip } from "../animator/AnimationClip";
import { Animator } from "../animator/Animator";
import { Collider } from "../physics/Collider";
import { RigidBody } from "../physics/RigidBody";
import { Friend } from "./Friend";

export class Player extends GameObject {
    constructor() {
        super();
        this.sprite = HERO;
        this.scale = 2;
        this.name = "player";
        this.tag = "player";
        this.followerCount = 0;

        //#region Animation section
        this.playerAnimator = new Animator();
        const walkUpFrameList = [72, 80, 88, 80];
        const walkDownFrameList = [76, 84, 92, 84];
        const walkRightFrameList = [74, 82, 90, 82];
        const walkLeftFrameList = [78, 86, 94, 86];

        const walkUpRightFrameList = [73, 81, 89, 81];
        const walkDownRightFrameList = [75, 83, 91, 83];
        const walkUpLeftFrameList = [79, 87, 95, 87];
        const walkDownLeftFrameList = [77, 85, 93, 85];

        const idleClipFrameList = [84];


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

        this.playerAnimator = new Animator();

        this.collider = new Collider(12, 20, 9, 17, this);
        this.rigidBody = new RigidBody(this.collider);

        this.playerSpeed = 25;
    }
    Update() {
        this.position.x += input.axis.x;
        this.position.y -= input.axis.y;

        this.Animationing();

        let currPos = new Vector2(this.position.x, this.position.y);

        if (!input.isIdle) {
            GameManager.playerLastPos.push(currPos);

        }


    }

    Animationing() {
        if (input.axis.compare(Vector2.UpRight)) {
            this.playerAnimator.Play(this.walkUpRightClip);

        }
        if (input.axis.compare(Vector2.UpLeft)) {
            this.playerAnimator.Play(this.walkUpLeftClip);

        }
        if (input.axis.compare(Vector2.DownRight)) {
            this.playerAnimator.Play(this.walkDownRightClip);

        }
        if (input.axis.compare(Vector2.DownLeft)) {
            this.playerAnimator.Play(this.walkDownLeftClip);

        }

        if (input.axis.compare(Vector2.Up)) {
            this.playerAnimator.Play(this.walkUpClip);

        }
        if (input.axis.compare(Vector2.Down)) {
            this.playerAnimator.Play(this.walkDownClip);

        }
        if (input.axis.compare(Vector2.Right)) {
            this.playerAnimator.Play(this.walkRightClip);

        }
        if (input.axis.compare(Vector2.Left)) {
            this.playerAnimator.Play(this.walkLeftClip);

        }
        if (input.isIdle) {
            this.playerAnimator.Play(this.idleClip);

        }

    }
    OnCollision(col) {
        if (col.parentObj.tag === "conga") {
            GameManager.activeScene.removeObject(col.parentObj);
            this.followerCount++;
            let conga = new Friend(this.followerCount * 35);
            conga.position = new Vector2(this.position.x + 3500, this.position.y + 3500);
            GameManager.score += 10;
            GameManager.spawner.lastObjExists = false;

        }
        if (col.parentObj.tag === "friend" || col.parentObj.tag === "wall") {
            GameManager.Stop();
        }
    }

}


