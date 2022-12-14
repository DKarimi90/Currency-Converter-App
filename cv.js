// Defining different variables to use in this project 
const currencyElementOne = document.getElementById("currency-one"); 
const currencyElementTwo = document.getElementById("currency-two"); 
const amountElementOne = document.getElementById("amount-one"); 
const amountElementTwo = document.getElementById("amount-two"); 

const rateElement = document.getElementById("rate"); 
const switchButton = document.getElementById("switch"); 
const submitButton = document.getElementById("sub")
const element = document.createElement("h4"); 


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
// changing inner text using DOM manipulation 
let paragraph = document.querySelector("P")
paragraph.innerHTML = "Choose Currency and Amount to Get Exchange Rates"

// adding event listener to submit button 
submitButton.addEventListener("click", process)
function process(e) {
    e.preventDefault(); 
    return alert("Details Submitted")

}
process(); 

// adding and appending element through DOM manipulation 
document.body.appendChild(element); 
element.innerHTML = "Login to enjoy the service"
element.style.cssText = "font-family: times; text-align: center; font-weight: bold"; 
const target = document.getElementById("contain"); 
element.style.color = "#023e8a"
document.body.insertBefore(element, target); 












