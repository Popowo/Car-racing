var gameState = 0;
var database;
var form1,player1,game1;
var playerCount;
var allPlayers;

function setup(){
createCanvas(400,400);
database = firebase.database()
game1 = new game();
game1.getState();
game1.start();
}

function draw(){
    background("white");
    
    if(playerCount===4){
        game1.update(1);
       
    }

    if(gameState===1){

        clear();
        game1.play();

    }
}


