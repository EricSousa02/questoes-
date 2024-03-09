// Questão 2

function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function isInFibonacci(num) {
    let fibSeq = fibonacciSequence(100); 
    return fibSeq.includes(num);
}

// Resposta
let numberToCheck = 13;
if (isInFibonacci(numberToCheck)) {
    console.log(numberToCheck + " pertence à sequência de Fibonacci.");
} else {
    console.log(numberToCheck + " não pertence à sequência de Fibonacci.");
}