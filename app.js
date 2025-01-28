let listaAmigos = [];
let amigosSorteados = [];

function asignarTextoElemento(subtitulo, texto) {
    let elementoHTML = document.querySelector(subtitulo);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let usuario = document.getElementById('amigo').value.trim();    
    if (usuario === "") {
        alert('Por favor, inserte un nombre');
        return;
    }

    const ocurrencias = listaAmigos.filter(nombre => nombre.includes(usuario)).length;
    if (ocurrencias >= 2) {
        alert('El nombre ya está en la lista dos veces');
        return;
    }

    listaAmigos.push(usuario);
    document.getElementById('amigo').value = "";
    listadoDeAmigos();
}

function listadoDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        item.innerHTML = amigosSorteados.includes(amigo) ? `<s>${index + 1}. ${amigo}</s>` : `${index + 1}. ${amigo}`;
        lista.appendChild(item); 
    });
}

function verificarParidad() {
    if (listaAmigos.length % 2 !== 0) {
        alert('No puede realizar el sorteo con un número impar de nombres. Por favor, añada o elimine un nombre.');
        return false;
    }
    return true;
}

function sortearAmigo() {
    if (!verificarParidad()) {
        return;
    }
    if (amigosSorteados.length === listaAmigos.length) {
        alert('Todos los nombres ya han sido sorteados. ¡El sorteo ha finalizado!');
        return;
    }

    let aleatorio;
    let amigoSorteado;
    do {
        aleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[aleatorio];
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado);
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    listadoDeAmigos();
    if (amigosSorteados.length === listaAmigos.length) {
        alert('Todos los nombres ya han sido sorteados. ¡El sorteo ha finalizado!');
    }
}

function condicionesIniciales() {
    asignarTextoElemento('.main-title', 'Amigo Secreto');
    asignarTextoElemento('.section-title', 'Digite el nombre de sus amigos');
}

document.addEventListener('DOMContentLoaded', condicionesIniciales);
