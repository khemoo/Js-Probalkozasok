









var rangeSlider = document.getElementById("range-slider");
var sliderStatusText = document.getElementById("slider-status-text");

var classes = sliderStatusText.classList;


function ClassToggeler() {
    var result = classes.toggle("red-text");

    if (result === true) {
        sliderStatusText.className = "red-text"
    }
}


rangeSlider.addEventListener ("input", ChangeTextOnSliderChange);

//
// function ToggleRedAndWhiteColor () {
//         var result =
// }




function ChangeTextOnSliderChange() {
    sliderStatusText.innerText = rangeSlider.value;

    if (rangeSlider.value < 1){
        sliderStatusText.innerText = "NO DANGER";
        sliderStatusText.className = "grey-text";
        console.log(rangeSlider.value)
    }
    else if (rangeSlider.value < 25){
        sliderStatusText.className = "green-text";
        sliderStatusText.innerText = "LOW";
        console.log(rangeSlider.value)
    }
    else if (rangeSlider.value < 50){
        sliderStatusText.className = "yellow-text";
        sliderStatusText.innerText = "MEDIUM";
        console.log(rangeSlider.value)
    }
    else if (rangeSlider.value < 75){
        sliderStatusText.innerText = "MEDIUM2";
        sliderStatusText.className = "orange-text";
        console.log(rangeSlider.value)
    }
    else if (rangeSlider.value < 100){
        sliderStatusText.innerText = "HIGH";
        sliderStatusText.className = "red-text";
        console.log(rangeSlider.value)
    }
    else {
        sliderStatusText.innerText = "MAXIMUM DANGER";
        console.log(rangeSlider.value);

        ClassToggeler();

    }
}




//                                 // BESULT SWICH
// switch (rangeSlider) {
// case rangeSlider.value > 26:
//     console.log('Oranges are $0.59 a pound.');
//     console.log(rangeSlider);
//     break;
//
// case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//
// default:
//     console.log('Sorry, we are out');
// }






