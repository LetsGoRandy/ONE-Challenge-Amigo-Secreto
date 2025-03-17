// Lista para armazenar os nomes dos participantes
let amigos = [];

// Função para adicionar um participante à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim();

    // Normaliza o nome para evitar duplicatas com variações
    nomeAmigo = nomeAmigo.charAt(0).toUpperCase() + nomeAmigo.slice(1).toLowerCase();

    if (!nomeAmigo) {
        alert('Digite um nome válido.');
        return;
    }

    if (amigos.some(amigo => amigo.toLowerCase() === nomeAmigo.toLowerCase())) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    input.value = '';
    input.focus();
}

// Função para atualizar a lista de participantes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois participantes para realizar o sorteio.');
        return;
    }

    const shuffledAmigos = [...amigos].sort(() => Math.random() - 0.5);
    const resultado = shuffledAmigos.map((amigo, index) => {
        const nextIndex = (index + 1) % shuffledAmigos.length;
        return `${amigo} tirou ${shuffledAmigos[nextIndex]}`;
    });

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = '';

    resultado.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        resultadoContainer.appendChild(listItem);
    });
}