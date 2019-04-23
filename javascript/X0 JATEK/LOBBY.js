









var gameGlobals     = new GameGlobals();
var lobby           = new Lobby();





function GameGlobals() {

    this.lobbyContainer = document.createElement("div");
    this.lobbyContainer.id  = "lobbyContainer";

    this.inGameContainer = document.createElement( "div" );
    this.inGameContainer.id  = "inGameContainer";
}





function Lobby() {

    this.labelText1         = document.createElement( "p" );
    this.player1Input       = document.createElement( "input");
    this.labelText2         = document.createElement( "p");
    this.player2Input       = document.createElement( "input");
    this.startGameButton    = document.createElement( "button");

    // Listeners

    this.startGameListener = function () {

        gameGlobals.lobbyContainer.style.display = "none";
        gameGlobals.inGameContainer.style.display = "block";

        startInGame.renderGame();
    };



    document.body.appendChild( gameGlobals.lobbyContainer );


    gameGlobals.lobbyContainer.appendChild( this.labelText1 );
    this.labelText1.className    = "labelText1" ;
    this.labelText1.innerText    = "PLAYER 1 Name";


    gameGlobals.lobbyContainer.appendChild( this.player1Input );
    this.player1Input.className    = "playerInputs" ;



    gameGlobals.lobbyContainer.appendChild( this.labelText2 );
    this.labelText2.className     = "labelText1" ;
    this.labelText2.innerText     = "PLAYER 2 Name";


    gameGlobals.lobbyContainer.appendChild( this.player2Input );
    this.player2Input.className    = "playerInputs" ;



    gameGlobals.lobbyContainer.appendChild( this.startGameButton );

    this.startGameButton.id          = "startGameButton";
    this.startGameButton.innerText   = "Start Game!";
    this.startGameButton.addEventListener( "click", this.startGameListener );


}

