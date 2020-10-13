class Game {
    constructor(){

    }

    getState(){
        var gameStateref = db.ref('gameState');
        gameStateref.on('value', function(data){
            gameState = data.val;
        })
    }

    updateState(state){
        db.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState == 0){
            player = new Player();
            var playerCountref = await db.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("THE GAME HAS STARTED", 120,100);
        Player.getPlayerinfo();

        if(allPlayers !== undefined){
            var displayPosition  = 130 ;
            for(var plr in allPlayers){
                if(plr=="player"+player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                displayPosition += 20;
                textSize(15);
                text(allPlayers[plr].name+": "+allplayers[plr].distance, 120, displayPosition);
            }
        }
        if(keyDown("UP_ARROW")&& player.index != null){
            player.distance += 50;
            player.update();
        }
    }
}