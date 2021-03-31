
var db,playercount= 0,gamestate = 0;
var game,player,form;

function setup(){
    createCanvas(500,500);
    db = firebase.database();
     game = new Game();

     game.getstate();
     game.start();
}

function draw(){
    background("white");

}





