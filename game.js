class Game{
    constructor(){

    }

    getstate(){
        var gamestateref =  db.ref('gamestate')
        gamestateref.on("value",function(data){
            gamestate = data.val()
        })
    }
    update(state){
    db.ref('/').update({

        gamestate:state
    })    
    }
start(){
    if(gamestate===0 )
    {
        player = new Player();
        player.getcount();
        form = new Form()
form.display();
    }
}


}