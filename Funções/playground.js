const alunos = [
    {
        nome: 'André',
        nota: 6,
        turma: '1B'
    },
    {
        nome: 'Miguel',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Livia',
        nota: 5,
        turma: '2C'
    }
];

function alunosAprovados (arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].nota >= media){
            aprovados.push(arr[i.nome]);
        }
    }
}