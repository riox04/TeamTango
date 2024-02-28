import { GameObject } from "./GameObject";

export class Item extends GameObject {
    constructor(itempos){
        super();
        this.position = itempos;
    }

    OnCollision(col){
        if(col.parentObj.tag == ""){
            GameManager.score += 1;
        }

    }

}
