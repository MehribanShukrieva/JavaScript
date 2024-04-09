let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"

// find length of a string
console.log(email.length);  //25
console.log(firstName.length); //10

// find character by entering location 
console.log(firstName.charAt(2)); //"v"

// turn chars to Upper case
firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

// to Lower Case
lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"

// search for a char 
console.log(email.search("@")); //10
// if there is not a char that we are looing for it returns -1
console.log(email.search("nonexistent")); // -1

// find what is the index of given char 
console.log(email.indexOf(".")); //21

console.log(email.slice(10+1)); //"@kodluyoruz.org"
console.log(firstName.slice(1,4)); //"ava"

// change the information in string
email = email.replace("kodluyoruz.org", "gmail.com");
console.log(email); //"kodluyoruz@gmail.com"

//boolean function includes()
email.includes("@"); //true
email.includes("$"); //false

//boolean functions startsWith and endsWith
email.startsWith("@"); //false
email.endsWith("org"); //true
