import { GameManager } from './src/game/GameManager';
import { Gizmos } from './src/gizmos/Gizmos';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const gizmosToggle = document.querySelector("#debug").addEventListener("click", () =>{
  Gizmos.drawColliderGizmos = !Gizmos.drawColliderGizmos;
})
ctx.imageSmoothingEnabled = false;

const main = () => {
  let game = new GameManager(ctx);
  game.Start();
}

main();