// Prompt and confirms for password length and characters

var passwordLength = prompt("How many characters would you like your password to be?");

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Your password must be between 8 - 128 characters! How many characters would you like your password to be?");
}

var lowercase = confirm("Would you like to use lowercase letters in your password?");
var uppercase = confirm("Would you like to use uppercase letters in your password?");
var numbers = confirm("Would you like to use numbers in your password?");
var symbols = confirm("Would you like to use symbols in your password?");

// Alert if no character set chosen and resends confirms for each character set

while (!lowercase && !uppercase && !numbers && !symbols) {
  alert("You must select at least one character set!");
  lowercase = confirm("Would you like to use lowercase letters in your password?");
  uppercase = confirm("Would you like to use uppercase letters in your password?");
  numbers = confirm("Would you like to use numbers in your password?");
  symbols = confirm("Would you like to use symbols in your password?");
};

var resultEl = document.getElementById("password");


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
