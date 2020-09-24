var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ",", ".", "?", "/", ">", "<", "|"];

var confirmLowercase = confirm("Will this password include lowercase letters?")
var confirmUppercase = confirm("Will this password include uppercase letters?")
var confirmNumber = confirm("Will this password include numbers?")
var confirmSpecialCharacters = confirm("Will this password include special characters?")
// Assignment Code - html reference goes  at bottom of code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
