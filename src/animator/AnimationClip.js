export class AnimationClip {
  constructor(frameArray, frameDuration, refSprite, name) {
    this.frameArray = frameArray;
    this.frameDuration = frameDuration;
    this.refSprite = refSprite;
    this.name = name ?? " ";

    this.frameIndex = 0;
  }

  shiftFrame() {
    this.frameIndex++;

    if (this.frameIndex >= this.frameArray.length) {
      this.frameIndex = 0;
    }
  }
  get CurrentFrame() {
    return this.frameArray[this.frameIndex];
  }

}