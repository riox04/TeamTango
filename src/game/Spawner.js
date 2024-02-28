import { Collider } from "../physics/Collider";
import { PICKUPABLE } from "../utility/Sprite";
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
            rock.sprite = PICKUPABLE;
            rock.scale = 1.8;
            rock.sprite.frame = 20;
            rock.tag = "conga";
            rock.collider = new Collider(12, 19, 7, 17, rock);

            this.lastObjExists = true;
            return true;
        }
        return false;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}