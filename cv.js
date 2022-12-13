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
    const currencyTwo = currencyElementTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/8d089b379c00953bf716e84a/latest/${currencyOne}`)
    .then(response => response.json())
    .then(data => {
        const rate = data.conversion_rates[currencyTwo]; 
        rateElement.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`

        amountElementTwo.value = (amountElementOne.value * rate).toFixed(2); 
    })

}
calculate(); 

// added event listener to the switch button so it swap the currencies 
switchButton.addEventListener("click", swap)
function swap() {
    const temp = currencyElementOne.value; 
    currencyElementOne.value = currencyElementTwo.value; 
    currencyElementTwo.value = temp; 
    calculate()
}
swap(); 
let paragraph = document.querySelector("P")
paragraph.innerHTML = "Choose Currency and Amount to Get Exchange Rates"







