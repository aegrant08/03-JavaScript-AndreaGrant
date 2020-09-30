// Arrays to generate password
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbol = ["!", "@", "#", "$", "%", "^", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ",", ".", "?", "/", ">", "<", "|"];

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length)) || length < 8 || length > 128) length = Number(prompt("Length must be 8 - 128 characters!"));

let getRndLower = lowercase[Math.floor(Math.random() * lowercase.length)];

let getRndUpper = uppercase[Math.floor(Math.random() * uppercase.length)];

let getRndNumber = number[Math.floor(Math.random() * number.length)];

let getRndSymbol = symbol[Math.floor(Math.random() * symbol.length)];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
