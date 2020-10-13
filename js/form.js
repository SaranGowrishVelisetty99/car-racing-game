class Form {
    constructor(){
        this.instructions = createElement('h3');
        this.input = createInput();
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }

    hide(){
        this.instructions.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html('<<   Car Racing Game  >>');
        title.position(130,0);

        this.instructions.html('Enter your name:');
        this.instructions.position(130,100);

        this.input.position(130,160);

        this.button.position(250,200);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.instructions.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);
        })
    }
}