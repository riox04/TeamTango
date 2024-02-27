import { Vector2 } from "../utility/Vector2.js";
import { DEFAULT_SPRITE } from "../utility/Sprite.js";
import { GameManager } from "./GameManager.js";
import {input} from "../Input.js"
export class GameObject {

    constructor(objScale){
        this.name = "default-object";
        this.tag = "default";
        this.sprite  = DEFAULT_SPRITE;
        this.position = new Vector2(0,0);
        this.center = new Vector2(0,0);
        this.size = this.sprite.frameSize;
        this.scale  =  objScale ?? 1;
        this.collider;
        this.rigidBody;

        //adds itslef to the scene oject list to get drawn
        GameManager.activeScene.addObject(this);

    }   

    //(do-not-override) needs for updating internal variables like center etc
    InternalUpdate(){
        //Updates the center coords of the game object.
        this.center = new Vector2(this.position.x + (this.scale * this.size.x/2),this.position.y + (this.scale * this.size.y/2));

        //calls update event for the childrens
        this.Update();
    }
    //(overrideable)
    Update(){

    }

    //extra callback if you wanna do some fancy rendering per object basis
    OnRender(){

    }

    //called everytime physics update happens
    OnPhysicsUpdate(){        
        this.collider?.OnPhysicsUpdate(); 
    }
    OnCollision(col){
    }
}
   
