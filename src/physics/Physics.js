export class Physics {
    constructor() {

    }

    static Simulate(activeColliders, activeRigidBodies) {
        activeRigidBodies.forEach(rbd => {
            activeColliders.forEach(coll => {
                if(coll === rbd.coll) {

                }
            });

        });
    }
}
