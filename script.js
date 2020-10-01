// Arrays for generating random password
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbols = ['!@#$%^&*()-_=+<>.?/|'];

// Prompt for password length
var pwLength = prompt('How many characters would you like your password to be?');

// Alert if password too short or too long and prompt given again
if (pwLength < 8 || pwLength > 128) {
  prompt('You must have between 8 - 128 characters in your password. How many characters would you like in your password?');
}

// Selection of character sets to use in password
var cfLowercase = confirm('Would you like to use lowercase letters in your password?');
var cfUppercase = confirm('Would you like to use uppercase letters in your password?');
var cfNumbers = confirm('Would you like to use numbers in your password?');
var cfSymbols = confirm('Would you like to use symbols in your password?');

// Alert if no character set chosen and selections provided again
if (cfLowercase != true && cfUppercase != true && cfNumbers != true && cfSymbols != true) {
  alert('You must choose one character set to use!');
  cfLowercase = confirm('Would you like to use lowercase letters in your password?');
  cfUppercase = confirm('Would you like to use uppercase letters in your password?');
  cfNumbers = confirm('Would you like to use numbers in your password?');
  cfSymbols = confirm('Would you like to use symbols in your password?');
};

// DOM elements

var rndFunc = {
  lower: getRndLower,
  upper: getRndUpper,
  number: getRndNumbers,
  symbol: getRndSymbol
}
// Function to generate random password
function generatePassword(lower, upper, number, symbol, pwLength) {
  var genPassword = '';
  var count = lower + upper + number + symbol;
  var array = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // loop to generate and return a random password

  for (var i = 0; i < length; i += count) {
    array.forEach(type => {
      var funcName = Object.keys(type)[0];
      genPassword += rndFunc[funcName]();
    });

    var passwordResult = genPassword.slice(0, length);

    return passwordResult;

  }
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); {
  passwordText.Value = writePassword();
}

// functions to get random characters for generate random password function

var getRndLower = lowercase[Math.floor(Math.random() * lowercase.length)];
var getRndUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
var getRndNumbers = numbers[Math.floor(Math.random() * numbers.length)];
var getRndSymbol = symbols[Math.floor(Math.random() * symbols.length)];




