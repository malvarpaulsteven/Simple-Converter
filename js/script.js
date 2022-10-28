
const feetToMeters = () => {
    let input = document.getElementById("inputValue").value;
    let result = input / 3.281;

    document.getElementById("resultContainer").value = result;
    alert("The length of " + `${input}` + " feet/foot " + " in meter is " + `${result}` + ".");
}

const feetToInches = () => {
    let input = document.getElementById("inputValue").value;
    let result = input * 12;

    document.getElementById("resultContainer").value = result;
    alert("The length of " + `${input}` + " feet/foot " + " in inches is " + `${result}` + ".");
}

const feetToCm = () => {
    let input = document.getElementById("inputValue").value;
    let result = input * 30.48;

    document.getElementById("resultContainer").value = result;
    alert("The length of " + `${input}` + " feet/foot " + " in cm is " + `${result}` + ".");
}

const resetInputField = () => {
    document.getElementById("myForm").reset();
}