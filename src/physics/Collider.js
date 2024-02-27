import { GameManager } from "../game/GameManager";

export class Collider {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.isTrigger = false;
        
        //adds itself to the scene collider 
        GameManager.activeScene.addCollider(this);

    }

    // currentCollider.checkCollisionWith(targetCollider)
    checkCollisionWith(collider) {
        return (this.x < collider.x + collider.width &&
            this.x + this.width > collider.x &&
            this.y < collider.y + collider.height &&
            this.y + this.height > collider.y)
    }

}