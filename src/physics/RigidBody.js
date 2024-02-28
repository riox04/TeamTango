import { GameManager } from "../game/GameManager";
export class RigidBody {
    constructor(collider) {
        this.collider = collider;
        this.contacts = []; // list of colliders currently in contact with this rigidbody
        GameManager.activeScene.addRigidBody(this);
    }

    onCollisionEvent(coll){
        this.collider.parentObj.OnCollision(coll);

    }
}