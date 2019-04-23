




                    // range slider
var rangeInput          = document.querySelector("input");

                    // 10 Boxes to Change
var greenClass          = document.getElementsByClassName("green-class");

                    // widt % slider div
var widthPercentSlider  = document.getElementById("vw-slider");

                    // TOGGLE ME DIV BUTTON
var toggleMeDivButton   = document.getElementById("toggle-me-div");


var resetButton = document.getElementById ("reset-button" );

// var interval = null;







                // Listening to rangeInput.value
rangeInput.addEventListener("input", function () {
    console.log(rangeInput.value);

                // variable to parseInt(... / 10) from 100 to 10 increments
    var indexForBoxesFromInputValue = parseInt(rangeInput.value / 10);
    // var setIntervalContainer = null;
    // console.log(indexForBoxesFromInputValue);

                // Remove all classes - FIRST STEP
    for (var i = 0; i < greenClass.length; i++) {
        greenClass[i].classList.remove("green-active");
        greenClass[i].classList.remove ("yellow-active");
        greenClass[i].classList.remove ("red-active");
    }

                // Add green-active class based on rangeInput-s value stored in indexForBoxesFromInputValue
    for ( i = 0; i < indexForBoxesFromInputValue; i++) {

        if  ( indexForBoxesFromInputValue <=3 ) {
            greenClass[i].classList.add ( "green-active" );

        } else if ( indexForBoxesFromInputValue > 3 && indexForBoxesFromInputValue < 8 ) {
            greenClass[i].classList.add ( "yellow-active" );

        } else if (indexForBoxesFromInputValue < 10 ) {
            greenClass[i].classList.add ( "red-active" );

        } else {
            console.log("MAXON VAGYOK KOMA!");

            // setInterval ( greenClass[i].classList.add("red-class"),500 );
        }
    }




                    // WIDTH SLIDER LOGIC
    widthPercentSlider.style.width = rangeInput.value + "%";
    // console.log( widthPercentSlider.style.width );

});



                // TOGGLE ME DIV BUTTON EVENT LISTENER + CALLBACK
    toggleMeDivButton.addEventListener ("click", function () {

    toggleMeDivButton.classList.toggle ("green-active" );

});



                // RESET BUTTON

resetButton.addEventListener ("click", function () {


    for (var i = 0; i < greenClass.length; i++) {

        greenClass[i].classList.remove ("green-active" );
        greenClass[i].classList.remove ("yellow-active" );
        greenClass[i].classList.remove ("red-active" );

    }

    rangeInput.value = "0";

    widthPercentSlider.style.width = "0";

    // body.appendChild("div");
    // body.innerHTML = + "div";
    // console.log(body.innerHTML);
});




                                // ALL THIS ^ WITH HTML INJECTION (CLEAN BODY, WITHOUT HTML ELEMENTS)

//                --- Those html elements which you want to use, to inject into your html file, firstly, they need
//                   to be created and saved inside some variables.

                    // document.body    appendChild

var ul                  = document.createElement ("ul" );

var multiplyButton      = document.createElement ("button" );
var li                  = document.createElement ("li" );

var numbersArray        = [12,234,42,43,12,65,12,5,2,23];




document.body.appendChild ( multiplyButton );


var ulContainerDiv  = document.createElement ("div" );
document.body.appendChild ( ulContainerDiv );


multiplyButton.addEventListener ( "click", function () {


        var ul    = document.createElement ( "ul" );
        ulContainerDiv.appendChild ( ul );

        for ( var i = 0; i < numbersArray.length; i++ ) {


            var li   = document.createElement ("li" );
            ul.appendChild      ( li );
            li.setAttribute     ("class","multiply-li-item" );

            numbersArray[i] *= 2;
            li.innerText = numbersArray[i];



        }

    });





                    // li.innerText = numbersArray * 2;
                    // numbersArray *= 2;

                    // li.innerText = numbersArray[i] * 2;
                    // numbersArray[i] *= 2;

























































                    // HUNOR CODE - BLINKING MODULE
//
// rangeInput.addEventListener("input", function () {
//
//     if ( interval ) window.clearInterval( interval );
//
//     var indexForBoxesFromInputValue = parseInt( rangeInput.value / 10 );
//
//     editClass(
//         greenClass,
//         greenClass.length,
//         ["green-active", "yellow-active", "red-active"],
//         "remove"
//     );
//
//     widthPercentSlider.style.width = rangeInput.value + "%";
//
//     if ( indexForBoxesFromInputValue === greenClass.length ) {
//
//         interval = setInterval( function() {
//
//             editClass( greenClass, greenClass.length, ["red-active"], "toggle" );
//
//         }, 300 );
//
//     } else {
//
//         if ( indexForBoxesFromInputValue < 4 ) {
//             editClass(
//                 greenClass,
//                 indexForBoxesFromInputValue,
//                 ["green-active"],
//                 "add"
//             );
//
//         } else if ( indexForBoxesFromInputValue < 8 ) {
//             editClass(
//                 greenClass,
//                 indexForBoxesFromInputValue,
//                 ["yellow-active"],
//                 "add"
//             );
//
//         } else editClass(
//             greenClass,
//             indexForBoxesFromInputValue,
//             ["red-active"],
//             "add"
//         );
//
//     }
//
// });
//
//
//
// function editClass( elemList, limit, classNames, action ) {
//
//     Array.prototype.slice.call( elemList, 0, limit )
//         .forEach( function ( elem ) {
//
//             elem.classList[action].apply( elem.classList, classNames )
//
//         })
//
// }







