let aluno = [];

function atualizarLista() {
    document.getElementById("lista").innerHTML = aluno.join(", ");
}

function adicionarAluno(event) {
    event.preventDefault();
    NomeAluno = document.getElementById('aluno').value
    aluno.push(NomeAluno);
    atualizarLista();
}

function desfazer() {
    aluno.pop();
    atualizarLista();
}

       