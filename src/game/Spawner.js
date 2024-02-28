import { Collider } from "../physics/Collider";
import { Vector2 } from "../utility/Vector2";
import { Item } from "./Item";

export class Spawner {
    constructor() {
        this.lastObjExists = false;
    }
    Spawn() {

        if (!this.lastObjExists) {

            const spawnPosition = new Vector2(this.getRandomInt(700), this.getRandomInt(500));

            let rock = new Item(spawnPosition);
            rock.tag = "john cena";
            rock.collider = new Collider(20, 20, 0, 7, rock);

            this.lastObjExists = true;
            return true;
        }
        return false;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}