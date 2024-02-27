import '/style.css'
import { resources } from '/src/Resource.js';
import { Sprite } from '/src/Sprite.js';
import { Vector2 } from '/src/utility/Vector2.js';
import { GameLoop } from '/src/game/GameLoop';
import { input } from '/src/Input.js';
import { Animations } from '/src/Animations.js';
import { FrameIndexPattern } from '/src/FrameIndexPattern.js';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180)
})

const hero = new Sprite({
  resource: resources.images.person,
  frameSize: new Vector2(16, 24),
  hFrames: 8,
  vFrames: 12,
  frame: 20
})

const heroPos = new Vector2(16 * 5, 16 * 5);

const update = (delta) => {
  heroPos.x += input.axis.x;
  heroPos.y -= input.axis.y;

  console.log(input.horizontalStack.join(", "));

}

const draw = () => {
  // skySprite.drawImage(ctx, 0, 0);

  hero.drawImage(ctx, heroPos.x, heroPos.y);
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
input.Initialize();