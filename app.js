var add = function (num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    return num1 + num2;
};
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var words = "The result is: ";
var result = add(number1, number2, printResult, words);
