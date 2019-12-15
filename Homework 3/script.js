// define variable
var charLow = 'abcdefghijklmnopqrstuvwxyz';
var charUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// numbers 
var number = '0123456789';
// special charachters 
var symbol = '!@#$%^&*=-_(){}[]';
// var __ = document.getElementById("targetID")
var charachterNumber = document.getElementById("charachterNumber");
// input variable character amt#

var numBox = document.getElementById("number");
var symBox = document.getElementById("symbol");
var submit = document.getElementById("submit");
var charUpBox = document.getElementById("charUp");
var genPassword = document.getElementById("genPassword");

submit.addEventListener("click", function (event) {
  // lowercase letters are pre selected, numbers and symboys a choice
  var characters = charLow;
  // +- the current value of a variable, and add another value
  // For strings, you concat the current value with another value ex: var n = 3 (n += 2 === 5)

  //  given the box of the item is checked it will return true, else false
  (charUpBox.checked) ? characters += charUp : '';
  (numBox.checked) ? characters += number : '';
  (symBox.checked) ? characters += symbol : '';

  genPassword.value = password(charachterNumber.value, characters);
});
// l = length 
function password(l, characters) {
  // put into empty string
  var finalPass = '';
  for (var i = 0; i < l; i++) {
    // +- the current value of a variable, and add another value, for sample. For strings, you concat the current value with another value ex: var n = 3 (n += 2 === 5)
    finalPass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return finalPass;
}