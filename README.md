Password-Generator

This application has been created to ensure the client can generate a secure password for their sensitive data

JavaScript Code

I created four different arrays, one for lowercase letters, uppercase letters, numbers, and symbols

I then created a prompt to have the user input how many characters they wanted to use in their password.
If the user chose a number less than 8 or greater than 128, they would receive another prompt saying their
password had to be between 8 and 128 characters and ask them again how long they want their password to be.

I set up a series of confirmations asking the user to select which sets of characters they wanted to use in
their password (lowercase, uppercase, numbers, and/or symbols). If they selected none of the character sets,
they would receive an alert saying they must choose at least one set and receive the confirmations again.

I then created my functions to generate random characters for the password and then set up a variable to contain the randomly generated characters.

I coded a function to generate the password that uses the lower, upper, number, and symbol properties  contained in the rndFunc variable, along with the pwLength variable for the password length. I set up a variable for the generated password (genPassword). The for loop inside the function runs through the randomly generated characters until the chracter length the user chose is achieved.

I could not figure out how to get the password to be written in the password input.

I added an event listener to the generateBtn so that when the user clicks the button, the password is generated and, once the writePassword function is set up, the generated password will appear in the password input box.