// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get the placeholder element
var passwordPlaceholder = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwords = generatePasswords(); // Call the generatePasswords function
  passwordPlaceholder.value = passwords; // Display the generated passwords in the textarea
}

  // Prompt for the desired length of passwords
  function generatePasswords(){
  var passwordLength = prompt("Please enter the desired length for the passwords.");
  
  // Validate the password length input
  if (passwordLength === null || isNaN(passwordLength)) {
    alert("Please enter a valid number for the password length.");
    return generatePasswords();
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be bwtween 7-129.");
    return;
  }
  passwordLength = parseInt(passwordLength);
  // console.log(passwordLength);
  
  // Confirm the types of characters from user input
  var useLowercase = confirm("Do you want lowercase characters in your passwords?");
  var useUppercase = confirm("Do you want uppercase characters in your passwords?");
  var useNumber = confirm("Do you want numbers in your passwords?");
  var useSymbol = confirm("Do you want special characters in your passwords?");

  // Check if at least one character type is selected
  if (!(useLowercase || useUppercase || useNumber || useSymbol)) {
    alert("You must select at least one character type.");
    return;
  }
  // Define character sets based on user choices
  var lowercasePW = "abcdefghijklmnopqrstuvwxyz";
  var uppercasePW = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberPW = "0123456789";
  var symbolPW = "!@#$%^&*()_+{}[]|:;<>,.?/";

  var allPW = "";
  
  if (useLowercase) {
    allPW += lowercasePW;
  }
  if (useUppercase) {
    allPW += uppercasePW;
  }
  if (useNumber) {
    allPW += numberPW;
  }
  if (useSymbol) {
    allPW += symbolPW;
  }

  var passwords = [];

  // Generate the passwords
  for (var p = 0; p < passwordLength; p++) {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allPW.length);
      password += allPW.charAt(randomIndex);
    }
    passwords.push(password);
    
  }
   return password;
  }

