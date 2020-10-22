// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // generatePassword function should be below

  // ******* function logic starts here *******
  // THEN I am presented with a series of prompts for password criteria
  
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  
  // ******* 1 PROMPT *******
  // ******* REQUIRES VALIDATION *******
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // we need a prompt that asks for the passoword length from the user
  // check if the input is > 8 and < 128

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // each prompt requires validation
  // probably use a function to turn the length(string) into a number

  // ******* 4 COMFIRMS *******
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // we need a confirm that asks the user if they want to use lowercase
  // we need a confirm that asks the user if they want to use uppercase
  // we need a confirm that asks the user if they want to use numeric
  // we need a confirm that asks the user if they want to use special characters
  // 1 collectionValidCharacters - array of numbers, letters and characters that can be used.
  // 2 computer picks a random valid character 8 times and goes in a variable called password
  // 3 collectionValidCharacters[Math.floor(Math.random() * collectionValidCharacters.length)]
  // 4 var myrandomness = "";
  // 5 myrandomness = myrandomness + collectionValidCharacters[Math.floor(Math.random() * collectionValidCharacters.length)]
  
  // ******* end of data collection *******
  // using the number from above and the 4 booleans
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // all the info is gathered (went through all prompts)
  // all the HARD logic goes here


  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // do an alert with the password, or just check to see is my variable has a password


  // ******* end of function logic *******



}

// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
