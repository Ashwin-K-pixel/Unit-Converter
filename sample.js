
let convertBtn = document.getElementById("btn");
let inputValue = document.getElementById("input");
let bottomContainer = document.getElementsByClassName("bottom-container")[0]; // Accessing the first element

convertBtn.addEventListener("click", function () {
    let userInputValue = inputValue.value;
    conversion(userInputValue);
});

function conversion(value) {
    let metersToFeet = (value * 3.281).toFixed(3);
    let feetToMeter = (value / 3.281).toFixed(3);

    let litresToGallons = (value * 0.264).toFixed(3);
    let gallonsToLitres = (value / 0.264).toFixed(3);

    let kgToPound = (value * 2.204).toFixed(3);
    let poundToKg = (value / 2.204).toFixed(3);

    bottomContainer.innerHTML = `
        <div class="result-container">
            <p class="unit-title"> Length (Meter/Feet) </p>
            <p class="converted-result"> ${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeter} meters </p>
        </div>

        <div class="result-container">
            <p class="unit-title"> Volume (Liters/Gallons) </p>
            <p class="converted-result"> ${value} liters = ${litresToGallons} gallons | ${value} gallons = ${gallonsToLitres} liters </p>
        </div>

        <div class="result-container">
            <p class="unit-title"> Mass (Kilograms/Pounds) </p>
            <p class="converted-result"> ${value} kilos = ${kgToPound} pounds | ${value} pounds = ${poundToKg} kilos </p>
        </div>
    `;
}

