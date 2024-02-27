import { GameManager } from "./GameManager";
import { Vector2 } from "../utility/Vector2";

export class Scene {

    constructor() {
        this.sceneObjects = [];
        this.activeColliders = [];
        this.activeRigidbodies = [];
    }

    addObject(obj) { this.sceneObjects.push(obj); }
    addCollider(col) { this.activeColliders.push(col); }
    addRigidBody(rbd) { this.activeRigidbodies.push(rbd); }

    Update() {
        this.sceneObjects.forEach(obj => {
            obj.InternalUpdate();
        });
    }
    Render() {

        //, clears the screen
        GameManager.ctx.clearRect(0, 0, 800, 600);

        //draws each object in the scene hierarchy
        this.sceneObjects.forEach(obj => {
            //fires the onRender callback on each GameObject
            obj.OnRender();
            this.Draw(GameManager.ctx, obj);

        });

    }
    Draw(ctx, obj) {
        if (!obj.sprite.resource.isLoaded) {
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;
        const frame = obj.sprite.frameMap.get(obj.sprite.frame);
        if (frame) {
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        const frameSizeX = obj.sprite.frameSize.x;
        const frameSizeY = obj.sprite.frameSize.y;

        ctx.drawImage(
            obj.sprite.resource.image,
            frameCoordX,
            frameCoordY, // Top Y corner
            frameSizeX, // how much to cropt from the sprite sheet x axis
            frameSizeY,
            obj.position.x, // where to palce obj image in the canvas
            obj.position.y, // ^^ 
            frameSizeX * obj.scale, // how large ?? 1
            frameSizeY * obj.scale,
        );
    }

    get objectCount() { return this.sceneObjects.length; }
}

