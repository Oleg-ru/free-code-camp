const num = 5;

function factorialCalculator(num) {
    let result = 1;
    do {
        result*= num;
        num--;
    } while (num > 1);
    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg);