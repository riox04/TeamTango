import { GameLoop } from "./GameLoop.js";
import { GameObject } from "./GameObject.js";
import { resources } from "../utility/Resource.js";
import { Scene } from "./Scene.js";
import { DEFAULT_SPRITE, HERO, Sprite,SKY } from "../utility/Sprite.js";
import { Vector2 } from "../utility/Vector2.js";
import { input } from "/src/Input.js";
import { Player } from "../player/Player.js";
import { Friend } from "../player/Friend.js";

export class GameManager {

    static time;
    static ctx;
    static gameloop;
    static activeScene;
    static playerLastPos = [];
    static playerFriends = [];

    constructor(ctx) {
        GameManager.activeScene = new Scene();
        GameManager.ctx = ctx;
        GameManager.gameloop = new GameLoop(this.Update, this.Render);
        input.Initialize();
    }

    Start() {
        //<---------------------Scene Space-- --------------------->
        //Add  objects to the scene here
        let sky = new GameObject();
        sky.sprite = SKY;
        sky.scale = 2.5;

        let testPlaya1 = new Player();
        testPlaya1.sprite = HERO;

        for (let index = 1; index < 6; index++) {
            let rocks = new Friend(index*35);
            rocks.name = "friend" + index;
        }

        //<-------------------------------------------------------->

        //<-------------------Gizmos Commands---------------------->

        //<-------------------------------------------------------->



        //Starts the game-loop
        GameManager.gameloop.start();
    }

    Update(time) {
        //update global time and frame no
        GameManager.time = time;
        GameManager.activeScene.Update();

    }
    Render() {
        GameManager.activeScene.Render();
    }

}
