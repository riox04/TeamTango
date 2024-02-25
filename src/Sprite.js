import { Vector2 } from "/src/Vector2.js";

export class Sprite {
    constructor({
        resource,
        frameSize,
        hFrames, // frame pos horizontally
        vFrames, // frame pos vertically
        frame, // which frame we want to show
        scale,
        position,
    }) {
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16, 24);
        this.hFrames = hFrames ?? 1; // ?? is default operator
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0, 0);
        this.buildFrameMap();
    }

    buildFrameMap() {
        let frameCount = 0;
        for (let v = 0; v < this.vFrames; v++) {
            for (let h = 0; h < this.hFrames; h++) {
                this.frameMap.set(
                    frameCount,
                    new Vector2(16 * h, 24 * v)
                )
                frameCount++;
            }
        }
    }

    drawImage(ctx, x, y) {
        if (!this.resource.isLoaded) {
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;
        const frame = this.frameMap.get(this.frame);
        if (frame) {
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        const frameSizeX = this.frameSize.x;
        const frameSizeY = this.frameSize.y;

        ctx.drawImage(
            this.resource.image,
            frameCoordX,
            frameCoordY, // Top Y corner
            frameSizeX, // how much to cropt from the sprite sheet x axis
            frameSizeY,
            x, // where to palce this image in the canvas
            y, // ^^ 
            frameSizeX * this.scale, // how large ?? 1
            frameSizeY * this.scale,
        );
    }
}
