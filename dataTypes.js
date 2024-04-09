// Print Hello World
console.log("Hello World")

// Define a variable with var
//var serverName="kodluyoruz.org"

// Print variable
//console.log(serverName)

// Define an empty var with let
let serverName;
//console.log(serverName)

// Give data to let variable
serverName="https.//kodluyoruz.org"
console.log(serverName)

// Define a variable keeping data with let
let password="1234";
console.log(password)

// Use the variable before initializing it --> GET AN ERROR
/*console.log(fullName)
let fullName="Mehriban Shukrieva"*/

// The correct way is 
let fullName="Derya Telli";
console.log(fullName)

// Change the data in let
fullName="Mehriban Shukrieva"
console.log(fullName)

// Combining two variable or just combining
fullName+= " "+ fullName
console.log(fullName)
//fullName += " is a Computer Engineering Student"
//console.log(fullName)

// const cannot be empty
// const this=0 --> wrong

// Define const
const USERNAME = "Ahmet";
const SERVER_PASSWORD="1234"

// When defining a boolean value use is/has
let isActive = true 
let hasPassword = false

// Line length < 80

// Define a number and make some operations
let price = 100
let amount = 18
let total = price * amount
console.log(
    "The price is:", price, 
    "\nThe tax is:",amount, 
    "\nTotal:", total
    )

// Power of a number
console.log(2 ** 4)

// Math floor 
console.log("Math Floor:" , Math.floor(1.9)) //-->1

// Math round
console.log("Math Round:" , Math.round(1.9) ) //1.9-->2 or 1.4-->1

// Math Ceil
console.log("Math Ceil:" , Math.ceil(1.9)) //-->2

