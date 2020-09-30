// Arrays for generating random password
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', '>', '.', '?', '/', '|'];
// Prompt and confirms for password length and characters

var passwordLength = prompt("How many characters would you like your password to be?");

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Your password must be between 8 - 128 characters! How many characters would you like your password to be?");
}

var conLowercase = confirm("Would you like to use lowercase letters in your password?");
var conuUppercase = confirm("Would you like to use uppercase letters in your password?");
var conNumbers = confirm("Would you like to use numbers in your password?");
var conSymbols = confirm("Would you like to use symbols in your password?");

// Alert if no character set chosen and resends confirms for each character set

while (!lowercase && !uppercase && !numbers && !symbols) {
  alert("You must select at least one character set!");
  lowercase = confirm("Would you like to use lowercase letters in your password?");
  uppercase = confirm("Would you like to use uppercase letters in your password?");
  numbers = confirm("Would you like to use numbers in your password?");
  symbols = confirm("Would you like to use symbols in your password?");
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  passwordText.value = writePassword(lowercase, uppercase, numbers, symbols, passwordLength);
};

// function to generate password




