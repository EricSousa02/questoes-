// Questão 5

function inverterString(string) {
    let inverted = '';
    for (let i = string.length - 1; i >= 0; i--) {
        inverted += string[i];
    }
    return inverted;
}

let stringOriginal = "Hello World!";
let stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);