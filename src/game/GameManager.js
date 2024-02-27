import { GameLoop } from "./GameLoop.js";
import { GameObject } from "./GameObject.js";
import { Player } from "../player/Player.js";
import { resources } from "../utility/Resource.js";
import { Scene } from "./Scene.js";
import { Sprite } from "../animation/Sprite.js";
import { Vector2 } from "../utility/Vector2.js";
import { Input } from "../input/Input.js";
import { Collider } from "../physics/Collider.js";
import { Gizmos } from "../gizmos/gizmos.js";
export class GameManager {
    
    static time;
    static ctx;
    static gameloop;
    static activeScene;
    constructor(ctx,targetFps){
        GameManager.activeScene = new Scene();
        GameManager.ctx = ctx;
        GameManager.gameloop = new GameLoop(this.Update,this.Render,targetFps);
        Input.Initialize();
    }
    Start(){
        
        //<---------------------Scene Space-- --------------------->
        //Add  objects to the scene here
       
        
        
        

        //<-------------------------------------------------------->

        //<-------------------Gizmos Commands---------------------->
        
        //<-------------------------------------------------------->



        //Starts the game-loop
        GameManager.gameloop.start();
    }

    Update(time) {
        //update global time and frame no
        GameManager.time = time;
        GameManager.currFrameNo += 1;
        GameManager.activeScene.UpdatePhysics();
        GameManager.activeScene.Update();
    }
    Render(){
        GameManager.activeScene.Render();
        GameManager.activeScene.DrawGizmos();
    }

}

