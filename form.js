class form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play!!");
        this.greeting = createElement('h1');

    }

    hide(){

        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(140,10);
        this.input.position(130,160);
        this.button.position(200,200);
    

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
        player1.name = this.input.value();
        playerCount+= 1
        player1.index = playerCount;
        player1.update();
        player1.updateCount(playerCount);
        this.greeting.html("Hello! "+ player1.name);
        this.greeting.position(120,200); 
    });

}

        
}


