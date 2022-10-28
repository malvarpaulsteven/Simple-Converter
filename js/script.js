
const feetToMeters = () => {
    let feet = document.getElementById("inputValue").value;
    let meters = 3.281;
    const result = feet / meters;

    document.getElementById("resultContainer").value = result.toFixed(4);
    alert("The length of " + `${feet}` + " feet/foot " + " in meter is " + `${result.toFixed(4)}` + ".");
}

const feetToInches = () => {
    let feet = document.getElementById("inputValue").value;
    let inches = 12;
    const result = feet * inches;

    document.getElementById("resultContainer").value = result.toFixed(4);
    alert("The length of " + `${feet}` + " feet/foot " + " in inches is " + `${result}` + ".");
}

const feetToCm = () => {
    let feet = document.getElementById("inputValue").value;
    let cm = 30.48
    const result = feet * cm;

    document.getElementById("resultContainer").value = result.toFixed(4);;
    alert("The length of " + `${feet}` + " feet/foot " + " in cm is " + `${result.toFixed(4)}` + ".");
}

const resetInputField = () => {
    document.getElementById("myForm").reset();
}