import { GameLoop } from "./GameLoop.js";
import { GameObject } from "./GameObject.js";
import { Scene } from "./Scene.js";
import { DEFAULT_SPRITE, HERO, Sprite, SKY, NULL_SPRITE, GAMEOVER } from "../utility/Sprite.js";
import { Vector2 } from "../utility/Vector2.js";
import { input } from "/src/Input.js";
import { Player } from "../player/Player.js";
import { Collider } from "../physics/Collider.js";
import { Spawner } from "./Spawner.js";
import { Gizmos } from "../gizmos/Gizmos.js";

export class GameManager {

    static time;
    static ctx;
    static gameloop;
    static activeScene;
    static playerLastPos = [];
    static playerLastDir = [];
    static playerFriends = [];
    static score = 0;
    static spawner;
    static deltaTime = 0;
    constructor(ctx) {
        GameManager.activeScene = new Scene();
        GameManager.ctx = ctx;
        GameManager.gameloop = new GameLoop(this.Update, this.Render);
        input.Initialize();
        GameManager.spawner = new Spawner();
    }

    Start() {
        //<---------------------Scene Space-- --------------------->
        //Add  objects to the scene here
        let sky = new GameObject();
        sky.sprite = SKY;
        sky.scale = 2;

        let playerOne = new Player();
        playerOne.position = new Vector2(370, 250)
        playerOne.sprite = HERO;

        let raxis = new GameObject();
        raxis.position = new Vector2(799, 0);
        raxis.tag = "wall";
        raxis.collider = new Collider(2, 700, 0, 0, raxis);

        let laxis = new GameObject();
        laxis.position = new Vector2(0, 0);
        laxis.tag = "wall";
        laxis.collider = new Collider(2, 700, 0, 0, laxis);

        let upaxis = new GameObject();
        upaxis.position = new Vector2(0, 0);
        upaxis.tag = "wall";
        upaxis.collider = new Collider(799, 2, 0, 0, upaxis);

        let downaxis = new GameObject();
        downaxis.position = new Vector2(0, 599);
        downaxis.tag = "wall";
        downaxis.collider = new Collider(799, 2, 0, 0, downaxis);

        raxis.sprite = laxis.sprite = upaxis.sprite = downaxis.sprite = NULL_SPRITE;
        //<-------------------------------------------------------->


        //Starts the game-loop
        GameManager.gameloop.start();
    }

    Update(time,deltaTime) {
        //update global time 
        GameManager.time = time;
        GameManager.deltaTime = deltaTime/1000;
        GameManager.activeScene.Update();
        GameManager.activeScene.OnPhysicsUpdate();
        GameManager.spawner.Spawn();
    }
    Render() {
        GameManager.activeScene.Render();
        GameManager.activeScene.DrawGizmos();
        Gizmos.DrawLabel("Score: "+GameManager.score,40,10,40)

    }   

    static Stop(){
        let gameOver = new GameObject();
        gameOver.sprite = GAMEOVER;
        gameOver.position = new Vector2(-105, 0);
        gameOver.scale = 1.65;
        const myTimeout = setTimeout(stoploop,30);

        function stoploop(){
            GameManager.gameloop.stop();
        }
    }



}
