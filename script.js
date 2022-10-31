// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// made var for the four catergories of characters and choice of user with those categories
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseChoice;
var numChoice;
var specialChoice;

// Function for determining password length
function determineLength() {
    passwordLength = prompt("Choose how many characters for your password from 8-128 characters");

    if (passwordLength<8){
        alert("Please choose a length between 8-128 characters");
        determineLength();
    }else if (passwordLength>128) {
        alert("Please choose a length between 8-128 characters");
        determineLength();
    }else if (isNaN(passwordLength)){
        alert("Please choose a length between 8-128 characters");
        determineLength();
    }else{
        alert("The upcoming screens will ask you to choose the types of characters to be included in your password. \nChoosing 'No' for all three choices will result in a password containing only lower case letters.");
    }
    return passwordLength;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);