import '/style.css'
import { resources } from '/src/utility/Resource.js';
import { Sprite } from '/src/utility/Sprite.js';
import { Vector2 } from '/src/utility/Vector2.js';
import { GameLoop } from '/src/game/GameLoop';
import { input } from '/src/Input.js';
import { GameManager } from './src/game/GameManager';

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

const main1 = () => {
  let game = new GameManager(ctx);
  game.Start();
}


// const gameLoop = new GameLoop(update, draw);
// gameLoop.start();
// input.Initialize();

main1();