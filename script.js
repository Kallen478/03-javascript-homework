// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// arrays of possible characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// function to generate the password
function generatePassword() {
  var passwordLength = prompt("How many characters do you want to have in your password?");
    // validation for password length
    if(passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length of 8-128 characters.");
    
    }
    else {
    // choose password criteria
    var criteria;
    var confirmLowercase = confirm("Would you like to use any lowercase letters?");
    var confirmUppercase = confirm("Would you like to use any uppercase letters?");
    var confirmNumeric = confirm("Would you like to use any numbers?");
    var confirmSpecial = confirm("Would you like to use any special characters?");
    }
    // no criteria chosen
    if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
      alert("Please make at least 1 criteria choice for the password.");
    }
    // 1 criteria choice
    else if (confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
      criteria = lowercase;
    }
    else if (!confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {
      criteria = uppercase;
    }
    else if (!confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {
      criteria = numeric;
    }
    else if (!confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {
      criteria = special;
    }
    // 2 criteria choices
    else if (confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {
      criteria = lowercase.concat(uppercase);
    }
    else if (confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {
      criteria = lowercase.concat(numeric);
    }
    else if (confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {
      criteria = lowercase.concat(special);
    }
    else if (!confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {
      criteria = uppercase.concat(numeric);
    }
    else if (!confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {
      criteria = uppercase.concat(special);
    }
    else if (!confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {
      criteria = numeric.concat(special);
    }
    // 3 criteria choices
    else if (confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {
      criteria = lowercase.concat(uppercase, numeric);
    }
    else if (confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {
      criteria = lowercase.concat(uppercase, special);
    }
    else if (confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {
      criteria = lowercase.concat(numeric, special);
    }
    else if (!confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {
      criteria = uppercase.concat(numeric, special);
    }
    // choose all criteria
    else if (confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {
      criteria = lowercase.concat(uppercase, numeric, special);
    }
    // make a random array of characters that will be converted to a string and pushed
    var generator = [];
    var securePassword = "";
    // performs the randomization 
    for(var i = 0; i < passwordLength; i++) {
      var randomCharacters = criteria[Math.floor(Math.random() * criteria.length)];
      generator.push(randomCharacters);
    }
    // returns the randomly generated secure pasword
    securePassword = generator.join("");
    return securePassword;
    
}  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
