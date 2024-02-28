import { GameManager } from "../game/GameManager";
import { Gizmos } from "../gizmos/Gizmos";

export class Collider {
    constructor(width,height,offsetX,offsetY,parentObj) {
        this.x = 0;
        this.y = 0;
        this.width = width ?? 0;    
        this.height = height ?? 0;
        this.isTrigger = false;
        this.currentColor = "green";
        this.offsetX = offsetX ?? 0;
        this.offsetY = offsetY ?? 7;
        //adds itself to the scene collider 
        GameManager.activeScene.addCollider(this);

        this.parentObj = parentObj;
    }

    // currentCollider.checkCollisionWith(targetCollider)
    checkCollisionWith(collider) {
        return (this.x < collider.x + collider.width &&
            this.x + this.width > collider.x &&
            this.y < collider.y + collider.height &&
            this.y + this.height > collider.y)

            
    }

    onDrawGizmos() {
        Gizmos.color = this.currentColor;
        Gizmos.DrawBox(this.x,this.y,this.width,this.height);
    }

}