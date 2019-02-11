

let whenButtonPressed = 0;
let aGomb = document.getElementById ( "firstButton" );

aGomb.addEventListener( "click", IncrementaldATitlet );



function IncrementaldATitlet() {
    whenButtonPressed++;
    document.title = whenButtonPressed;
}






aGomb.addEventListener2( "click", IncrementaldATitlet );

