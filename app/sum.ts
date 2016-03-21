// var number1: number;
// var otherNumber: number;
//
// number1 = parseInt(prompt('please enter a number'));
// otherNumber = parseInt(prompt('enter another number'));
// var sum = number + otherNumber;
// alert("the sume of your two numbers is:" + sum);

var findSum = function(first: number, second: number) {
  var sum = first + second;
  alert("The sum of your two numbers is: " + sum);
}

var number1 = parseInt(prompt('please enter a number.'));
var otherNumber = parseInt(prompt('enter another number'));
findSum(number1, otherNumber);
