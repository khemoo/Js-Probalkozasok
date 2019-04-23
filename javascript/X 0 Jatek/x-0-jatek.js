//
//
//
//
//
//
// var startInGame = new StartInGame();
//
//
//
// function StartInGame() {
//
//     var player1 = 0;
//     var player2 = 1;
//
//
//     // var playerTurn = random!!!!!;
//     var currentPlayer = player1;
//
//
//     var gameDataStructure = [
//
//         [-1, -1, -1 ],
//         [-1, -1, -1 ],
//         [-1, -1, -1 ]
//
//     ];
//
//
//
//
//     function updateBoard( y, x, player ) {
//         gameDataStructure[y][x] = player;
//     }
//
//
//
//     this.renderGame = function () {
//
//         gameGlobals.inGameContainer.innerHTML = null;
//
//         for ( var i = 0; i < gameDataStructure.length; i++ ){
//
//             var row = document.createElement( "ul" );
//
//             row.classList.add( "row-style" );
//             gameGlobals.inGameContainer.appendChild( row );
//
//
//
//             for ( var j = 0; j < gameDataStructure[i].length; j++ ) {
//
//                 var rect = document.createElement( "li" );
//                 rect.classList.add( "rect-style" );
//
//                 //              A rectre teszunk X es Y nevu Data
//                 //                attributeokat, az [i] es [j] index ertekeivel.
//                 rect.setAttribute( "data-Y", i.toString() );
//                 rect.setAttribute( "data-X", j.toString() );
//                 row.appendChild( rect );
//
//                 //        Itt kerul fel a 2 class, attol fuggoen h milyen
//                 //          ertek van a 2D halmazban, az e.target(mostasni) elemen.
//                 if ( gameDataStructure[i][j] === 1 ) {
//                     rect.classList.add( "X-style" );
//                 }
//
//                 if ( gameDataStructure[i][j] === 0) {
//                     rect.classList.add( "O-style" );
//                 }
//                 //          Feltesszuk a mostani (e.taget) rect-re a click listenert.
//                 rect.addEventListener( "click", rectListener );
//             }
//         }
//     };
//
//
//
//     function rectListener(e) {
//
//             // console.log( e.target );
//             // console.log( gameDataStructure );
//             console.log( gameDataStructure[player1][player2]);
//
//
//         var rect = e.target;
//
//         //                Kiszedjuk a rectbol, a Data Attribute ertekeket, amik
//         //                  levannak mentve az mindenik 2D array elemere. Igy meg
//         //                    tudjuk az elem poziciojat a 2D halmazban, y = [i]
//         //                es x = [j].
//         var y = parseInt( rect.getAttribute( "data-Y" ) );
//         var x = parseInt( rect.getAttribute( "data-X" ) );
//
//
//         //                Lecsekkolja hogy "ures-e"(vagyis nincs benne -1) ez a negyzet (e.target - a rect-en),
//         //                    mielott kesobb elkezdene updatelni a Boardot az Uj ertekkel.
//         //
//         if ( gameDataStructure[y][x] !== -1 ){
//
//             alert( "Ne csalj szarhazi!" );
//
//             return;
//         }
//
//
//         updateBoard( y, x, currentPlayer );
//
//         renderGame();
//
//         //            Player valtas az updateBoard es a renderGame() utan.
//         //              Ez lessz hasznalva a kovetkezo jatek "KORBEN" "currentPlayernek"
//         if ( currentPlayer === player1 ) {
//             currentPlayer = player2;
//         } else {
//             currentPlayer = player1;
//         }
//         console.log( "Vannak-e meg lepesek? ->", areStepsRemaining() );
//
//         egyenloSorok();
//     }
//
//
//
//     function areStepsRemaining()  {
//
//         //                    Lecsekkolja hogy valahol a Boardban, akarhol van valahol -1es,
//         //                      ha van akkor meg vannak steppek es True a return value. Ha nincs tobb -1,
//         //                        akkor nincs tobb lepes es False-ot returnol.
//
//         return !( gameDataStructure[0].indexOf( -1 ) === -1 &&
//                   gameDataStructure[1].indexOf( -1 ) === -1 &&
//                   gameDataStructure[2].indexOf( -1 ) === -1);
//     }
//
//
//
//     function egyenloSorok() {
//
//         //            Nyeres csekkolas, az adatstrukturaban(gameDataStructure) talalhato ertekek alapjan.
//         //               Ugy kezdodik, h ha nem -1 az ertek a figyelt pozicion, akkor megy tovabb es csekkolja h
//         //                  az ertek (ami nem volt -1) az egyenlo ennek es ennek a pontnak az ertekevel az adatstrukturaban.
//         //                      Ha egyenloek ezek a szamok, akkor azt jelenti hogy nyero pozicioban vannak!
//         //                          Nyeres van! - ez a valtozat true volt!! (kiirjuk h meik valtozat volt ez).
//
//         if (gameDataStructure[0][0] !== -1 &&
//             gameDataStructure[0][0] === gameDataStructure[0][1] &&
//             gameDataStructure[0][0] === gameDataStructure[0][2]) {
//             console.log("Nyerunk az elso soron!");
//         }else if (
//             gameDataStructure[0][0] !== -1 &&
//             gameDataStructure[0][0] === gameDataStructure[1][1] &&
//             gameDataStructure[0][0] === gameDataStructure[2][2]
//         ) {
//             console.log("Nyertunk az elso elemtol atlosan!");
//         }else if (
//             gameDataStructure[0][0] !== -1 &&
//             gameDataStructure[0][0] === gameDataStructure[1][0] &&
//             gameDataStructure[0][0] === gameDataStructure[2][0]
//         ) {
//             console.log("Nyerunk fuggolegesen az elso elemtol lefele!");
//         }else if (
//             gameDataStructure[0][1] !== -1 &&
//             gameDataStructure[0][1] === gameDataStructure[1][1] &&
//             gameDataStructure[0][1] === gameDataStructure[2][1]
//         ){
//             console.log("Nyerunk fuggolegesen a masodik sorban!");
//         }else if (
//             gameDataStructure[0][2] !== -1 &&
//             gameDataStructure[0][2] === gameDataStructure[1][2] &&
//             gameDataStructure[0][2] === gameDataStructure[2][2]
//         ) {
//             console.log("Nyerunk fuggolegesen a harmadik sorban!");
//         }else if (
//             gameDataStructure[0][2] !== -1 &&
//             gameDataStructure[0][2] === gameDataStructure[1][1] &&
//             gameDataStructure[0][2] === gameDataStructure[2][0]
//         ) {
//             console.log("Nyertunk atlosan a harmadik elemtol az elso soron!");
//         }else if (
//             gameDataStructure[1][0] !== -1 &&
//             gameDataStructure[1][0] === gameDataStructure[1][1] &&
//             gameDataStructure[1][0] === gameDataStructure[1][2]
//         ) {
//             console.log("Nyertunk vizszintesen a masodik soron!");
//         }else if (
//             gameDataStructure[2][0] !== -1 &&
//             gameDataStructure[2][0] === gameDataStructure[2][1] &&
//             gameDataStructure[2][0] === gameDataStructure[2][2]
//         ) {
//             console.log("Nyertunk vizszintesen a harmadik soron!");
//         }
//         else {
//             console.log("Meg semmi nyeres, gyenge melo...");
//         }
//
//     }
//
//
//
//
// }