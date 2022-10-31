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

//Function for determining whether or not to include uppercase letters in pasword
function determineUppercase(){
    uppercaseChoice = prompt("Would you like your password to include uppercase letters? \n(Yes or No)");
    uppercaseChoice = uppercaseChoice.toLowerCase();

    if (uppercaseChoice === null || uppercaseChoice === ""){
        alert("Please choose Yes or No");
        return uppercaseChoice;
    
    }else if (uppercaseChoice === "yes" || uppercaseChoice === "y"){
        uppercaseChoice = true;
        return uppercaseChoice;

    }else if (uppercaseChoice === "no" || uppercaseChoice === "n"){
        uppercaseChoice = false;
        return uppercaseChoice;

    }else {
        alert("Please choose Yes or No");
        determineUppercase(); 
    }
    return uppercaseChoice;
}

//Function for determining whether or not to include numbers in password
function determineNumber(){
    numChoice = prompt("Would you like your password to include numbers? \n(Yes or No)");
      numChoice = numChoice.toLowerCase();
  
      if (numChoice === null || numChoice === ""){
        alert("Please choose Yes or No");
        determineNumber();
  
      }else if (numChoice === "yes" || numChoice ==="y"){
        numChoice = true;
        return numChoice;
  
      }else if (numChoice === "no" || numChoice ==="n"){
        numChoice = false;
        return numChoice;
      
      }else {
        alert("Please choose Yes or No");
        determineNumber();
      }
      return numChoice;
  }

//Function for determining whether or not to include special characters in password
function determineSpecial(){
    specialChoice = prompt("Would you like your password to include special characters? \n(Yes or No)");
      specialChoice = specialChoice.toLowerCase();
  
      if (specialChoice === null || specialChoice === ""){
        alert("Please choose Yes or No");
        determineSpecial();
  
      }else if (specialChoice === "yes" || specialChoice ==="y"){
        specialChoice = true;
        return specialChoice;
  
      }else if (specialChoice === "no" || specialChoice ==="n"){
        specialChoice = false;
        return specialChoice;
      
      }else {
        alert("Please choose Yes or No");
        determineSpecial();
      }
      return specialChoice;
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