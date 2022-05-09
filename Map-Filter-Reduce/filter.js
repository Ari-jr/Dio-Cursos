function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0; // para encontrar números pares utiliza % 2 ===0 e para encontrar número ímpares utiliza % 2 !== 0
}

const meuArray = [1, 25, 36, 56, 85, 3, 7];

console.log(filtraPares(meuArray));