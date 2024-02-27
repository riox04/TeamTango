import { GameManager } from "../game/GameManager";

export class Animator {
    constructor() {
      this.lastFrameStartTime = 0;
    }

    Play(clip) {
      if ((GameManager.time - this.lastFrameStartTime) > clip.frameDuration) {
        this.lastFrameStartTime = GameManager.time;
        clip.refSprite.frame = clip.CurrentFrame;
        clip.shiftFrame();
      }
      
    }
  }