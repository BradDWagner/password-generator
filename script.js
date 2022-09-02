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


function generatePassword () {


  //create variables to store length
  var passwordLength = window.prompt("How long do you want your password to be?", "Choose a number between 8 and 128");

  //create actions for if user cancels or choses a length that is  either too large or too small
  if (!passwordLength) {
    window.alert("Ok, have a nice day 🙂")
    return;
  }
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.alert("Password length must be a number bewtween 8 and 128.")
    return generatePassword();
  }

  //create array to store characters
  var characters = [];


  //confirm to include lowercase
      //if true pass characters to array
  var lowerCase = window.confirm("Do you want to include lower case letters?");
  if (lowerCase) {
    characters.push("a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }


  //confirm to include uppercase
      //if true pass characters to array
  var upperCase = window.confirm("Do you want to include upper case letters?");
  if (upperCase) {
    characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
  }


  //confirm to include numberic
      //if true pass characters to array
  var numbers = window.confirm("Do you want to include numbers?");
  if (numbers) {
    characters.push("1","2","3","4","5","6","7","8","9","0");
  }


  //confirm to include special characters
      //if true pass characters to array
  var special = window.confirm("Do you want to include special characters?");
  if (special) {
    characters.push(" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "/")
  }


  //restart process if no character set has been selected
  if (characters.length < 1) {
    window.alert("Password must include at least one set of characters");
    generatePassword();
  }

 
  //for loop- for i=o; i<lengthvariable; i++
      //use RNG to select index from character array
  var passArray = [];
  for (i=0; i < passwordLength; i++) {
   
    passArray.push(characters[Math.floor(Math.random() * characters.length)])
  }

  //sets output of the function as the passArray converted into a string.
return passArray.join(""); 
}