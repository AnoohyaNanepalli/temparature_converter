const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const clearbtn = document.getElementById("clear");
celsiusInput.addEventListener("input", convertCelsius);
fahrenheitInput.addEventListener("input", convertFahrenheit);
kelvinInput.addEventListener("input", convertKelvin);
function convertCelsius() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    const kelvinValue = celsiusValue + 273.15;
    fahrenheitInput.value = isNaN(celsiusValue) ? "" : fahrenheitValue;
    kelvinInput.value = isNaN(celsiusValue) ? "" : kelvinValue;
}
function convertFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    const kelvinValue = (fahrenheitValue + 459.67) * 5 / 9;
    celsiusInput.value = isNaN(fahrenheitValue) ? "" : celsiusValue.toFixed(2);
    kelvinInput.value = isNaN(fahrenheitValue) ? "" : kelvinValue.toFixed(2);
}

function convertKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    const celsiusValue = kelvinValue - 273.15;
    const fahrenheitValue = (kelvinValue * 9 / 5) - 459.67;
    celsiusInput.value = isNaN(kelvinValue) ? "" : celsiusValue.toFixed(2);
    fahrenheitInput.value = isNaN(kelvinValue) ? "" : fahrenheitValue.toFixed(2);
}
function clearallvalue(){
    fahrenheitInput.value="";
    kelvinInput.value="";
    celsiusInput.value="";
}