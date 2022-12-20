// Defining different variables to use in this project
const currencyElementOne = document.getElementById("currency-one"); 
const currencyElementTwo = document.getElementById("currency-two"); 
const amountElementOne = document.getElementById("amount-one"); 
const amountElementTwo = document.getElementById("amount-two"); 

const rateElement = document.getElementById("rate"); 
// const submitButton = document.getElementById("sub")
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

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de6f4565c7msh0a7195f6b84f392p183b8ajsne33bd4164064',
            'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
        }
    };
    
    fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/KES', options)
        .then(response => response.json())
        .then(data => 
            {
            const rate = data.rates[currencyTwo]; 
        rateElement.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`

        amountElementTwo.value = (amountElementOne.value * rate).toFixed(2); 
        }
        // console.log(data)
)
        
}
calculate(); 

// changing inner text using DOM manipulation 
let paragraph = document.querySelector("P")
paragraph.innerHTML = "Choose Amount and Currency to Get Total Exchanged Amount"

// adding and appending element through DOM manipulation 
document.body.appendChild(element); 
element.innerHTML = "Enjoy the Service"
element.style.cssText = "font-family: times; text-align: center; font-weight: bold"; 
const target = document.getElementById("contain"); 
element.style.color = "#023e8a"
document.body.insertBefore(element, target); 


// adding user authentication 
function getInfo() {
    const username = document.getElementById("Uname").value; 
    const password = document.getElementById("pwd").value; 
    fetch("./db.json")
    .then(res => res.json())
    .then(data => {
        const arr = data.users
        for (i = 0; i<arr.length; i+=1) {
            if(username === arr[i].UserName && password === arr[i].Password) {
                alert("Successfully logged in!")
                window.location.replace("main.html")
                return
            }
        }
        alert("Invalid Username or Password!")
    })
}
getInfo(); 













