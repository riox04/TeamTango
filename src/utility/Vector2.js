export class Vector2 {
    static Up = new Vector2(0, 1);
    static Down = new Vector2(0, -1);
    static Right = new Vector2(1, 0);
    static Left = new Vector2(-1, 0);

    static UpRight = new Vector2(1, 1);
    static UpLeft = new Vector2(-1, 1);
    static DownRight = new Vector2(1, -1);
    static DownLeft = new Vector2(-1, -1);

    static Empty = new Vector2(0, 0);
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

