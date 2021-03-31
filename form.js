class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car racing game");
        title.position(130,10);

        var input = createInput("Name");
        input.position(130,160);
        var button = createButton("Play");
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            playercount+=1;
            player.update(name);
            player.updatecount(playercount);
            var name = input.value();
            var greeting = createElement("h3");
            greeting.html("HELLO" + name);
            greeting.position(130,160);
        })
    }
}