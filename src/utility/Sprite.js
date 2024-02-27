import { resources } from "/src/utility/Resource";
import { Vector2 } from "/src/utility/Vector2.js";

export class Sprite {
    constructor({
        resource,
        frameSize,
        hFrames, // frame pos horizontally
        vFrames, // frame pos vertically
        frame, // which frame we want to show
        scale,
        position, // where to draw it (top left corner)
        animations,
    }) {
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16, 24);
        this.hFrames = hFrames ?? 1; // ?? is default operator
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0, 0);
        this.animations = animations ?? null;
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

    step(delta) {
        if(!this.animations){
            return;
        }
        this.animations.step(delta);
        this.frame = this.animations.frame;
    }

}

export const DEFAULT_SPRITE = new Sprite({
    resource: resources.images.default,
    frameSize: new Vector2(16, 16)
});

export const HERO  = new Sprite({
    resource: resources.images.person,
    frameSize: new Vector2(16, 24),
    hFrames: 8,
    vFrames: 12,
    frame: 20,
});

export const FRIEND  = new Sprite({
    resource: resources.images.person,
    frameSize: new Vector2(16, 24),
    hFrames: 8,
    vFrames: 12,
    frame: 52,
});


export const SKY = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320, 180)
});