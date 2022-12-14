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
    // statements for choices outside of valid options
    if (passwordLength<8) {
        alert("Please choose a length between 8-128 characters");
        determineLength();
    }else if (passwordLength>128) {
        alert("Please choose a length between 8-128 characters");
        determineLength();
    }else if (isNaN(passwordLength)) {
        alert("Please choose a length between 8-128 characters");
        determineLength();
    //statement for choices within valid options
    }else{
        alert("The upcoming screens will ask you to choose the types of characters to be included in your password. \nChoosing 'No' for all three choices will result in a password containing only lower case letters.");
    }
    return passwordLength;
}

//Function for determining whether or not to include uppercase letters in pasword
function determineUppercase() {
    uppercaseChoice = prompt("Would you like your password to include uppercase letters? \n(Yes or No)");
    uppercaseChoice = uppercaseChoice.toLowerCase();
    
    // statement for blank option
    if (uppercaseChoice === null || uppercaseChoice === "") {
        alert("Please choose Yes or No");
        return uppercaseChoice;
    // statements for choices within valid options
    }else if (uppercaseChoice === "yes" || uppercaseChoice === "y") {
        uppercaseChoice = true;
        return uppercaseChoice;

    }else if (uppercaseChoice === "no" || uppercaseChoice === "n") {
        uppercaseChoice = false;
        return uppercaseChoice;
    // statement for choices outside of valid options
    }else {
        alert("Please choose Yes or No");
        determineUppercase(); 
    }
    return uppercaseChoice;
}

//Function for determining whether or not to include numbers in password
function determineNumber() {
    numChoice = prompt("Would you like your password to include numbers? \n(Yes or No)");
      numChoice = numChoice.toLowerCase();
      // statement for blank option
      if (numChoice === null || numChoice === "") {
        alert("Please choose Yes or No");
        determineNumber();
      // statements for choices within valid options
      }else if (numChoice === "yes" || numChoice ==="y") {
        numChoice = true;
        return numChoice;
  
      }else if (numChoice === "no" || numChoice ==="n") {
        numChoice = false;
        return numChoice;
      // statement for choices outside of valid options
      }else {
        alert("Please choose Yes or No");
        determineNumber();
      }
      return numChoice;
  }

//Function for determining whether or not to include special characters in password
function determineSpecial() {
    specialChoice = prompt("Would you like your password to include special characters? \n(Yes or No)");
      specialChoice = specialChoice.toLowerCase();
      // statement for blank option
      if (specialChoice === null || specialChoice === "") {
        alert("Please choose Yes or No");
        determineSpecial();
      // statement for choices within valid options
      }else if (specialChoice === "yes" || specialChoice ==="y") {
        specialChoice = true;
        return specialChoice;
  
      }else if (specialChoice === "no" || specialChoice ==="n") {
        specialChoice = false;
        return specialChoice;
      // statement for choices outside of valid options
      }else {
        alert("Please choose Yes or No");
        determineSpecial();
      }
      return specialChoice;
  }

//Function for generating a random password based on information provided from previous functions
function generatePassword() {
    determineLength();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseChoice);
    determineNumber();
    console.log(numChoice);
    determineSpecial();
    console.log(specialChoice);

    var characters = lowercaseChar;
    var password;
    // statement for yes to all 3 choices
    if (uppercaseChoice && numChoice && specialChoice) {
        characters += uppercaseChar + numChar + specialChar;
    // statements for yes to 2 choices
    }else if (uppercaseChoice && numChoice) {
        characters += uppercaseChar + numChar;

    }else if (numChoice && specialChoice) {
        characters += numChar + specialChar;

    }else if (uppercaseChoice && specialChoice) {
        characters += uppercaseChar + specialChar;
        // statements for yes to 1 choice
    }else if (uppercaseChoice) {
        characters += uppercaseChar;

    }else if(numChoice) {
        characters += numChar;

    }else if (specialChoice) {
        characters += specialChar;
    // statement for 0 choices (lowercase only)
    }else{
        characters === lowercaseChar;
    }
    // loops through character choices randomly for the length chosen 
    for(var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
    }

// Write password to the #password input
function writePassword() {
    var password;
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);