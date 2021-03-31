class Player{
    constructor(){

    }

    getcount(){
        var playercountref = db.ref('playercount');
        playercountref.on("value",function(data){
            playercount = data.val();
        });
    }

    updatecount(count){
        db.ref('/').update({
            playercount : count
        });
    }

    update(name){
        var playerindex = "player" + playercount;
        db.ref(playerindex).set({
            name : name
        });
    }
}