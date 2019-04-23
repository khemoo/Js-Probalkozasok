

// let whenButtonPressed = 0;
// let aGomb = document.getElementById ( "firstButton" );
//
// aGomb.addEventListener( "click", IncrementaldATitlet );
//
//
// function IncrementaldATitlet() {
//     whenButtonPressed++;
//     document.title = whenButtonPressed;
// }
// aGomb.addEventListener2( "click", IncrementaldATitlet );
//

// 2dik szar





var signupP = document.getElementById("sign-up");
var backToLogin = document.getElementById("back-to-login");

var loginContainer = document.getElementById("login-container-id");
var signupContainer = document.getElementById("sign-up-container-id");

              // password inputok
var signUpPasswordInput = document.getElementById ("sign-up-password");
var signUpRePassword    = document.getElementById ("sign-up-re-password");

var signUpEmailInput = document.getElementById("sign-up-e-mail");
var signUpNameInput = document.getElementById("sign-up-last-name-id");

var signUpGombId = document.getElementById("sign-up-gomb-id");



signupP.addEventListener("click", function () {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
});

backToLogin.addEventListener("click", function () {
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
});


signUpGombId.addEventListener("click", function () {
    console.log("asasfasfasfaf")

    if (signUpPasswordInput.value.length === signUpRePassword.value.length) {
        signUpGombId.style.backgroundColor = "red"
    }
    // signUpGombId.style.backgroundColor = "green"
})



