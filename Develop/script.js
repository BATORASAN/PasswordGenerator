// Assignment Code.
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numericCheck;
var specialCheck;
var userChoice;

// Set length of password anywhere between 8 and 128 characters. Functions prevent invalid input.
function createPass() {
  var start = prompt(
    "Set length of password anywhere between 8 and 128 characters."
  );

  if (!start) {
    alert("You must enter a valid number between 8 and 128.");
  } else if (start < 8 || start > 128) {
    start = parseInt(alert("You must enter a valid number between 8 and 128."));
  } else {
    // Boolean that stores user choices.
    lowercaseCheck = confirm("Would you like to use lowercase letters?");
    uppercaseCheck = confirm("Would you like to use uppercase letters?");
    numericCheck = confirm("Would you like to use numbers?");
    specialCheck = confirm("Would you like to use special characters?");

    if (lowercaseCheck) {
      userChoice += lowercaseChar;
    }
    if (uppercaseCheck) {
      userChoice += uppercaseChar;
    }
    if (numericCheck) {
      userChoice += numericChar;
    }
    if (specialCheck) {
      userChoice += specialChar;
    }

    // Generates random password based on user choices.
    for (var i = 0; i < start; i++) {
      password += userChoice.charAt(
        Math.floor(Math.random() * userChoice.length)
      );
    }
    return password;
  }
}

// Write password to the #password input.
function writePassword() {
  var password = "";
  var password = createPass();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
