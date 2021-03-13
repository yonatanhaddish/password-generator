//CREATING AN EMPTY TEMPORARY ARRAY
var tempChar= [];

//INSERTING LOWERCASE ASCII INTO AN ARRAY
var smallLetterAscii= function() {
  smallLetter= [];

  for (i=0; i<=25; i++) {
    smallLetter[i]= i+97;
  }
  console.log(smallLetter);
};

//INSERTING UPPERCASE ASCII INTO AN ARRAY
var capitalLetterAscii= function() {
  capitalLetter= [];

  for (i=0; i<=25; i++) {
    capitalLetter[i]= i+65;
  }
  console.log(capitalLetter);
};

//INSERTING NUMBERS ASCII IN TO AN ARRAY
var numberAscii= function() {
  numberNumber= [];

  for (i=0; i<=9; i++) {
    numberNumber[i]= i+48;
  }
  console.log(numberNumber);
};

//INSERTING SPECIAL CHARACTERS INTO AN ARRAY MANUALLY
var specialCharAscii= function() {
  var specialChars= [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,125];
  console.log(specialChars);
};





//smallLetterAscii();
//capitalLetterAscii();
//numberAscii();
//specialCharAscii();







// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
