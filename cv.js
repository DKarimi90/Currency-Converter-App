// Defining different variables to use in this project 
const currencyElementOne = document.getElementById("currency-one"); 
const currencyElementTwo = document.getElementById("currency-two"); 
const amountElementOne = document.getElementById("amount-one"); 
const amountElementTwo = document.getElementById("amount-two"); 

const rateElement = document.getElementById("rate"); 
const switchButton = document.getElementById("switch"); 

// Adding event listeners to various variables 
currencyElementOne.addEventListener("change", calculate); 
currencyElementTwo.addEventListener("change", calculate); 
amountElementOne.addEventListener("input", calculate); 
amountElementTwo.addEventListener("input", calculate); 
// declaring the function and fetching data from the API 

function calculate() {
    const currencyOne = currencyElementOne.value;
    const currencyTWO = currencyElementTwo.value;

}
calculate(); 






