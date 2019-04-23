


                        // INJECT CONTAINER DIV THAT, WILL HOLD ALL OUR CONTENT (WILL BE STATIC)


var generatedContainerDivForPage = document.createElement('div');

generatedContainerDivForPage.setAttribute ( 'id', 'generated-container-div' );

document.body.appendChild( generatedContainerDivForPage );





                        // INJECT BUTTON THAT, INJECTS REST OF THE PAGE, WHEN CLICKED AND DISAPPEARS IN THE END OF THE PROCESS


var generatedHtmlButton = document.createElement ( "button" );

generatedHtmlButton.setAttribute("id", "generated-html-button");

generatedContainerDivForPage.appendChild(generatedHtmlButton);

generatedHtmlButton.innerText = "Generate Ha`ste`me`le`";


generatedHtmlButton.addEventListener("click", GenerateHTML);


                        // FINAL INJECTED PAGE

function GenerateHTML() {


    //   FIRST GENERATE BUTTON DISAPPEARS
    generatedHtmlButton.style.display = "none";
    console.log("volt geci gomb, nincs geci gomb");






    //  DIV CONTAINER FOR ->  UL-LI CONTAINER DIV FOR CLIENT INPUT-NUMBERS - INJECT
    var generatedLiContainerDiv = document.createElement ( "div" );

    generatedLiContainerDiv.setAttribute("id", "generated-li-container-div");

    generatedContainerDivForPage.appendChild(generatedLiContainerDiv);





    //   UL-LI CONTAINER DIV FOR CLIENT INPUT-NUMBERS - INJECT
    var generatedLiContainerUl = document.createElement ( "ul" );


    //      *****     TANULSAG!! ELEM.ID = "...";    NEM MUSZALY SETATTRIBUTEOT HASZNALNI / MIKOR ERI MEG AZT HASZNALNI ?
    generatedLiContainerUl.id = "generated-li-container-ul";
                                                        // id =
    generatedLiContainerDiv.appendChild(generatedLiContainerUl);





    //   INPUT - INJECT
    var generatedInputForNumbers = document.createElement ( "input" );

    generatedInputForNumbers.setAttribute("id", "generated-input-for-numbers");

    //ide meg kell set attributa-al min-max valuet tenni es type=text-et
    generatedContainerDivForPage.appendChild(generatedInputForNumbers);





    //  DIV CONTAINER FOR ->  RESET / ADD LI BUTTONS - INJECT

    var generatedButtonsContainerDiv = document.createElement ( "div" );

    generatedButtonsContainerDiv.setAttribute("id", "generated-buttons-container-div");

    generatedContainerDivForPage.appendChild(generatedButtonsContainerDiv);




    if (generatedInputForNumbers.value) {

        var liElementWithEnteredValue = document.createElement ( "li" );

        liElementWithEnteredValue.setAttribute("class", "generated-li-with-value");

        generatedLiContainerUl.appendChild(liElementWithEnteredValue);
    }





    //   RESET ALL LI`S BUTTON - INJECT
    var generatedHtmlButtonReset = document.createElement ( "button" );

    generatedHtmlButtonReset.setAttribute("id", "generated-html-button-reset");

    generatedButtonsContainerDiv.appendChild(generatedHtmlButtonReset);

    generatedHtmlButtonReset.innerText = "RESET";






    //    MULTIPLY ADD BUTTON - INJECT
    var generatedHtmlButtonAdd = document.createElement ( "button" );

    generatedHtmlButtonAdd.setAttribute("id", "generated-html-button-add");

    generatedButtonsContainerDiv.appendChild(generatedHtmlButtonAdd);

    generatedHtmlButtonAdd.innerText = "ADD";


//    ADD BUTTON EVENT LISTENER

    generatedHtmlButtonAdd.addEventListener("click",AddLiAndValue );




    function AddLiAndValue() {
        //                                                azert ket == -vel, h minden uress  fajta talaljon ide, nem csak az uress halmaz
        if ( !isNaN ( generatedInputForNumbers.value ) && generatedInputForNumbers.value != "" ){

            console.log ( "van value az inputban koma!!" );


            var liElementWithValue = document.createElement("li" );

            liElementWithValue.setAttribute ("class","li-element-with-value" );

            generatedLiContainerUl.appendChild ( liElementWithValue );

            liElementWithValue.innerText = generatedInputForNumbers.value;

            generatedInputForNumbers.value = null;

            console.log(generatedLiContainerUl.length);

        }
        //      *****     TANULSAG!! CHILDELEMENTCOUNT = BARMILYEN(HTML?) ELEM CHILD SZAMAT ADJA VISSZA
        if (generatedLiContainerUl.childElementCount > 9) {

            console.log("MEGTELT AZ UL!!!! KENE VALTANI");
        }


    }


}