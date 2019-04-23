


var firstNameInput = document.getElementById("first-name-input");
var lastNameInput = document.getElementById("last-name-input");
var ageInput = document.getElementById("age-input");
var submitButton = document.getElementById("submit-button");
var completionIndicatorText = document.getElementById("completion-indicator-id");



function inputValidalas() {
    if (firstNameInput.value.length > 1 && lastNameInput.value.length > 1 && ageInput.value.length > 1) {
        completionIndicatorText.innerHTML = "First Name:" + " " + firstNameInput.value + "<br>" + " " +"Last Name:" + " " + lastNameInput.value + "<br>" + " " + "Age:" + " " + ageInput.value;
        firstNameInput.value = null;
        lastNameInput.value = null;
        ageInput.value = null;
        completionIndicatorText.style.color = "black";

    } else {
        completionIndicatorText.innerHTML = "ERROR!!!";
        completionIndicatorText.style.color = "red";
    }
}

submitButton.addEventListener("click", inputValidalas );




firstNameInput.addEventListener("focus", RemoveText );
lastNameInput.addEventListener("focus", RemoveText );
ageInput.addEventListener("focus", RemoveText );


function RemoveText() {
    completionIndicatorText.innerText = "";
    console.log( "futott a FOCUS !!!" );
    console.log( completionIndicatorText.innerText );
}