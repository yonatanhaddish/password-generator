//CREATING AN EMPTY TEMPORARY ARRAY
 var tempSpec= [];
 var tempLower= [];
 var tempUpper= [];
 var tempNum= [];

var generate= function() {

  var charConfirm= window.prompt("How many characters would you like your password to contain?");

  if (charConfirm<8 || charConfirm>128) {
    window.alert("Password length must be between 8 and 128. CHOOSE AGAIN!");
    generate();
  }
  
  else if (charConfirm>=8 && charConfirm<=128) {
    var specialChars= [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126];
    var specChar= window.confirm("Click OK to confirm including SPECIAL characters.");
    if (specChar) {
      tempSpec= tempSpec.concat(specialChars);
    }
    else {
      tempSpec= [];
    }

    var numChar= window.confirm("Click OK to confirm including NUMERIC characters");
    numberNumber= [];
    for (i=0; i<=9; i++) {
    numberNumber[i]= i+48;
    }
    if (numChar) {
      tempNum= tempSpec.concat(numberNumber);
    }
    else {
      tempNum= tempNum.concat(tempSpec);
    }

    var lowerChar= window.confirm("Click OK to confirm including LOWER-CASE characters");
    smallLetter= [];
    for (i=0; i<=25; i++) {
      smallLetter[i]= i+97;
    }
    if (lowerChar) {
      tempLower= tempNum.concat(smallLetter);
      //console.log(tempLower);
    }
    else {
      tempLower= tempLower.concat(tempNum);
      //console.log(tempLower);
    }

    var upperChar= window.confirm("Click OK to confirm including UPPER-CASE characters");
    capitalLetter= [];
    for (i=0; i<=25; i++) {
      capitalLetter[i]= i+65;
    }
    if (upperChar) {
      tempUpper= tempLower.concat(capitalLetter);
      //console.log(tempUpper);
    }
    else {
      tempUpper= tempUpper.concat(tempLower);
      }
  }

  else {
    window.alert("YOU MUST CHOOSE ONLY NUMBERS. CHOOSE AGAIN")
    generate();
  }
  generatedPass(charConfirm);

};

var generatedPass = function(charConfirm) {
  var randomPassword= [];
  var tempPassword= [];

  for (j=0; j<charConfirm; j++) {
    var randomPassword= tempUpper[Math.floor(Math.random()*tempUpper.length)];
    var randomPassword = String.fromCharCode(randomPassword);
    var tempPassword= tempPassword.concat(randomPassword);
  }
  
console.log(tempPassword);
window.alert(tempPassword.join('  '));
console.log(tempPassword.join(''));

}


//smallLetterAscii();
//capitalLetterAscii();
//numberAscii();
//specialCharAscii();
generate();






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
