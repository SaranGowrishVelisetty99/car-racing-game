var player, game, form;
var db, gameState=0, playerCount;
var allPlayers;

function setup(){
    db = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount== 4){
        game.updateState(1);
    }

    if(gameState==1){
        clear();
        game.play();
    }
    drawSprites();
}