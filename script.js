//CREATING AN EMPTY TEMPORARY ARRAY
var tempSpec= [];
var tempLower= [];
var tempUpper= [];
var tempNum= [];

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
  //console.log(numberNumber);
};

//INSERTING SPECIAL CHARACTERS INTO AN ARRAY MANUALLY
var specialCharAscii= function() {
  var specialChars= [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,125];
  //console.log(specialChars);
};


var generate= function() {

  var charConfirm= window.prompt("How many characters would you like your password to contain?");

  if (charConfirm<8 || charConfirm>128) {
    window.alert("Password length must be between 8 and 128. CHOOSE AGAIN!");
    generate();
  }
  
  else {
    var specialChars= [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126];
    var specChar= window.confirm("Click OK to confirm including SPECIAL characters.");
    if (specChar) {
      tempSpec= tempSpec.concat(specialChars);
      //console.log(tempSpec);
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
      //console.log(tempNum);
    }
    else {
      tempNum= tempNum.concat(tempSpec);
      //console.log(tempNum);
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
      //console.log(tempUpper);
      }
  //9console.log(tempUpper);
    
  }
  generatedPass(charConfirm);

};

var generatedPass = function(charConfirm) {

  for (j=0; j<charConfirm; j++) {
    var randomPassword= tempUpper[Math.floor(Math.random()*tempUpper.length)];
    randomPassword[j]= tempUpper;
    var randomPassword = String.fromCharCode(randomPassword);
    console.log(randomPassword);
  }
    window.alert(randomPassword);
    
    

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
