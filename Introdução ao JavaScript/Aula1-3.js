// Exemplo - utilizando um function para retornar apenas os números pares e ser mostrado no console.log

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} Esse número não é par!`)
        }

    }
    console.log('Os números pares são:', evenNums);

}

let array = [1, 2, 3, 4, 5, 15, 35, 44, 80, 94];

returnEvenValues(array);