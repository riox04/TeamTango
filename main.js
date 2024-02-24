import '/style.css'
import { resources } from '/src/Resource.js';
import { Sprite } from '/src/Sprite.js';


const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180)
})

const person = new Sprite({
  resource: resources.images.person,
  frameSize: new Vector2(32,32),
  hframes:3,
  vFrames:8,
  frame: 1
})

const heroPos = new Vector2(16 * 5, 16 * 5);

const draw = () => {
  skySprite.drawImage(ctx, 0, 0);

  heroPos.drawImage(ctx, heroPos.x, heroPos,y);
}

// simple game loop
setInterval(() => {
  draw()
}, 300)