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