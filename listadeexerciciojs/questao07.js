function alunosAprovados(listAlunos){
    //for para fazer o loop da quantidade de alunos
    for(var i = 0; i <listAlunos.length;i++){
        const aluno = listAlunos[i];
        const notas = aluno.notas;

        //const para calcular a media aritmetrica
        const media = notas.reduce((total, notas) => total + notas, 0)/notas.length;

        if(media >=7){
            console.log(`Nome: ${aluno.nome}`);
            console.log(`Media aritmetrica: ${media.toFixed(2)}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log(); //quebra de linha
        }
    }
}


//Lista:
var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];


alunosAprovados(alunos);
