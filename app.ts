const add = (num1: number, num2: number, showResult: boolean, phrase: string) =>{
    const result = num1 + num2;
    if (showResult){
        console.log(phrase + result)
    }

    return num1 + num2
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const words = "The result is: ";

const result = add(number1, number2, printResult, words)
