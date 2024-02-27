export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vect) {
        this.x += vect.x;
        this.y += vect.y;
    }
    compare(vect) {
        return (this.x === vect.x) && (this.y === vect.y);
    }
    get magnitude() { return Math.sqrt(this.x * this.x + this.y * this.y); }
    get normalized() {
        if (this.compare(Vector2.Empty)) {
            return this;
        }
        return new Vector2(this.x / this.magnitude, this.y / this.magnitude);
    }
    flipY() {
        return new Vector2(this.x, -this.y);
    }
    multiply(num) {
        return new Vector2(this.x * num, this.y * num);
    }
}