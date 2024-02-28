import { DOWN, UP, input } from "../Input";
import { GameObject } from "../game/GameObject";
import { GAMEOVER, HERO } from "../utility/Sprite";
import { GameManager } from "../game/GameManager";
import { Vector2 } from "../utility/Vector2";
import { AnimationClip } from "../animator/AnimationClip";
import { Animator } from "../animator/Animator";
import { Collider } from "../physics/Collider";
import { RigidBody } from "../physics/RigidBody";
import { Friend } from "./Friend";
import { GameLoop } from "../game/GameLoop";

export class Player extends GameObject {
    constructor() {
        super();
        this.sprite = HERO;
        this.scale = 2;
        this.name = "player";
        this.tag = "player";
        this.followerCount = 0;

        const idleFrameArr = [20];
        this.idleAnimClip = new AnimationClip(idleFrameArr, 100, this.sprite);

        const downFrameArr = [12, 20, 28, 20];
        this.downAnimClip = new AnimationClip(downFrameArr, 100, this.sprite);

        const upFrameArr = [8, 16, 24, 16];
        this.upAnimClip = new AnimationClip(upFrameArr, 100, this.sprite);

        const leftFrameArr = [14, 22, 30, 22];
        this.leftAnimClip = new AnimationClip(leftFrameArr, 100, this.sprite);

        const rightFrameArr = [10, 18, 26, 18];
        this.rightAnimClip = new AnimationClip(rightFrameArr, 100, this.sprite);

        this.playerAnimator = new Animator();

        this.collider = new Collider(12, 20, 9, 17, this);
        this.rigidBody = new RigidBody(this.collider);


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
        if (input.isIdle) {
            this.playerAnimator.Play(this.idleAnimClip);
        }
        if (input.axis.compare(Vector2.vectDOWN)) {
            this.playerAnimator.Play(this.downAnimClip);
        }
        if (input.axis.compare(Vector2.vectUP)) {
            this.playerAnimator.Play(this.upAnimClip);
        }
        if (input.axis.compare(Vector2.vectLEFT)) {
            this.playerAnimator.Play(this.leftAnimClip);
        }
        if (input.axis.compare(Vector2.vectRIGHT)) {
            this.playerAnimator.Play(this.rightAnimClip);
        }

    }
    OnCollision(col) {
        if (col.parentObj.tag === "john cena") {
            console.log("player collided with john cena");
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


