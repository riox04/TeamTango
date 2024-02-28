import { Collider } from "./Collider";

export class Physics {
    constructor() {

    }

    static Simulate(activeColliders, activeRigidBodies) { 
        // looping eaching rigidbody from activeRB array
        activeRigidBodies.forEach(rbd => {
            // assuming that rigidbody is not colliding with anything
            rbd.contacts = [];
            // now checking collision with all other colliders in the scene and this rigidbody
            activeColliders.forEach(coll => {
                // checking if current collider is same as rigidbody's collider
                // skips when collider is yourself
                if(coll === rbd.collider) {
                    return; //
                }
                // if the collider is not yourself, and is colliding with some other collider
                if(rbd.collider.checkCollisionWith(coll)) {
                    coll.currentColor = "red";
                    rbd.collider.currentColor = "red";
                    rbd.contacts.push(coll);
                    rbd.onCollisionEvent(coll);
                }
                else{
                    coll.currentColor = "green";

                }
            });
            // rigidbody is not colliding with any other collider
            if(rbd.contacts.length === 0) {
                rbd.collider.currentColor = "green";

            }

        });
    }
}
