//
//
//
// var gameGlobals    = new GameGlobals();
// var lobby   = new Lobby();
//
//
//
//
// function Lobby() {
//
//     this.labelText1         = document.createElement( "p" );
//     this.player1Input       = document.createElement("input");
//     this.labelText2         = document.createElement("p");
//     this.player2Input       = document.createElement("input");
//     this.startGameButton    = document.createElement("button");
//
//     // Listeners
//
//     this.startGameListener = function () {
//
//         gameGlobals.inGameContainer.style.display = "none";
//         gameGlobals.gameContainer.style.display = "block";
//
//         gameGlobals.StartInGame();
//     };
//
//
//
//     document.body.appendChild( gameGlobals.inGameContainer );
//
//
//     gameGlobals.inGameContainer.appendChild( this.labelText1 );
//     this.labelText1.className    = "labelText1" ;
//     this.labelText1.innerText    = "PLAYER 1 Name";
//
//
//     gameGlobals.inGameContainer.appendChild( this.player1Input );
//     this.player1Input.className    = "playerInputs" ;
//
//
//
//     gameGlobals.inGameContainer.appendChild( this.labelText2 );
//     this.labelText2.className     = "labelText1" ;
//     this.labelText2.innerText     = "PLAYER 2 Name";
//
//
//     gameGlobals.inGameContainer.appendChild( this.player2Input );
//     this.player2Input.className    = "playerInputs" ;
//
//
//
//     gameGlobals.inGameContainer.appendChild( this.startGameButton );
//
//     this.startGameButton.id          = "startGameButton";
//     this.startGameButton.innerText   = "Start GameGlobals!";
//     this.startGameButton.addEventListener( "click", this.startGameListener );
//
//
//     // Testing
//
//     this.logMessage = function () {
//         console.log( "Lobby says: Go fuck yourself.")
//     }
// }
//
//
//
// function GameGlobals() {
//
//     this.inGameContainer = document.createElement("div");
//     this.inGameContainer.id  = "inGameContainer";
//
//     this.gameContainer = document.createElement( "div" );
//     this.inGameContainer.id  = "gameContainer";
//
//
//
//     this.StartInGame = function () {
//         console.log( "IN GAME STARTED" );
//
//         lobby.logMessage();
//     }
//
// }
//
//
//
//
//
//
