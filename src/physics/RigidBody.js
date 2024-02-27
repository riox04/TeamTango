export class RigidBody {
    constructor(collider) {
        this.collider = collider;
        this.contacts = [];
    }
}