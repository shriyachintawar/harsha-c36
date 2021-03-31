var db;
var form,player,game;
var gamestate=0 ;
var playercount=0;
function setup(){
    createCanvas(500,500);
    db = firebase.database();
    
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    
    drawSprites();
}

