class game{
    constructor(){
}

getState(){

var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){

gameState = data.val();



})

}
    
update(state){

    database.ref('/').update({

        gameState:state

    })

}

async start(){

    if(gameState===0){

        player1 = new player();
        var pcr = await database.ref('playerCount').once("value");
        if(pcr.exists()){

            playerCount = pcr.val();
            player1.getCount()
        }
        form1 = new form();
        form1.display();
    }


}
play(){

form1.hide();

textSize(20);
text("Go! Go! Go! ",120,200);

player.getPlayerInfo();
if(allPlayers!==undefined){
    var displayPosition=130;
    for(var plr in allPlayers){

        if(plr==="player"+player1.index)
        fill("red");
        else{
            fill("black");
            
        }
        
        displayPosition+=20;
        text(allPlayers[plr].name+": "+allPlayers[plr].distance,110,displayPosition);

    }

}
        if(keyDown(UP_ARROW )&& player1.index!==null){

            player1.distance+= 100;
            player1.update();


        }
}

}

