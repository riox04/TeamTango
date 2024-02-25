import '/style.css'
import { resources } from '/src/Resource.js';
import { Sprite } from '/src/Sprite.js';
import { Vector2 } from '/src/Vector2.js';
import { GameLoop } from '/src/GameLoop';
// import { Input,DOWN,UP,LEFT,RIGHT,UP_RIGHT } from '/src/Input.js';
import { Input,DOWN,UP,LEFT,RIGHT,UP_RIGHT } from '/src/InputbyAxis.js';


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
const input = new Input();

const update = (delta) => {
  heroPos.x+=input.direction.x;
  heroPos.y+=input.direction.y;

  console.log(input.direction);

  //work on hero animations
  hero.step(delta);
}

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);

  // center the hero in the cell
  // const heroOffset = new Vector2(-8, -21);
  // const heroPosX = heroPos.x + heroOffset.x;
  // const heroPosY = heroPos.y + 1 + heroOffset.y;

  hero.drawImage(ctx, heroPos.x, heroPos.y);
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();