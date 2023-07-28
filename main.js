const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = []; 
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; 
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digita a nota mínima:"));

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionaLinha();
    atualizaTabela(); 
    atualizaMediaFinal(); 
})

function adicionaLinha() {
    const inputnomeAtividade = document.getElementById('nome-atividade');
    const inputnotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputnomeAtividade.value)) {
        alert(`A atividade: ${inputnomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputnomeAtividade.value);
    notas.push(parseFloat(inputnotaAtividade.value)); 

    let linha ='<tr>'; 
    linha += `<td>${inputnomeAtividade.value}</td>`; 
    linha += `<td>${inputnotaAtividade.value}</td>`;
    linha += `<td>${inputnotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;  

    linhas += linha;
    }

inputnomeAtividade.value = ''; 
inputnotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');  
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal(); 

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; 
}

function calculaMediaFinal() {
    let somaDasNotas = 0; 

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]; 
    }

    return somaDasNotas / notas.length; 
}