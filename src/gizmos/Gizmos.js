import { GameManager } from "../game/GameManager";

export class Gizmos {
    constructor(){}
    static color  = "yellow";
    static thickness =  2;
    static drawColliderGizmos = false;
    static drawRigibodyGizmos = false;
    static drawGameBodyGizmos = false;
    static drawGameBodyProperties = false;

    static DrawCircle(x,y,radius){
        GameManager.ctx.strokeStyle = Gizmos.color;
        GameManager.ctx.lineWidth = Gizmos.thickness;
        GameManager.ctx.beginPath();
        GameManager.ctx.arc(x,y, radius, 0, 2 * Math.PI);
        GameManager.ctx.stroke();
    }
    static DrawBox(x,y,width,height,fillColor = "none",scale = 1){
        if(fillColor == "none") {
            GameManager.ctx.strokeStyle = Gizmos.color;
            GameManager.ctx.lineWidth = Gizmos.thickness;
            GameManager.ctx.strokeRect(x,y,width * scale ,height *scale);
        }  
        else{
            GameManager.ctx.fillStyle = Gizmos.color;
            GameManager.ctx.fillRect(x,y,width * scale ,height *scale);
        }
    }
    static DrawLabel(text,size = 10,x,y){
        GameManager.ctx.font = size+ "px Arial";
        GameManager.ctx.fillText(text,x,y);
    }
}