// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let inputAmigo = document.getElementById('nombreAmigo');  
let listaDeAmigos = [];
let ulListaDeAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');

function agregarAmigo() {
    if (!inputAmigo.value){
        alert("Por favor, inserte un nombre.");
    }   else{
            //alert('Input con información');
                if(listaDeAmigos.includes(inputAmigo.value)){
                    alert('Nombre existente, intenta nuevamente');
                } else {
                    listaDeAmigos.push(inputAmigo.value); //Actualiza array de amigos
                    ulListaDeAmigos.innerHTML += '<h1><li>' + inputAmigo.value + '</li></h1>'; //agrega nombre del amigo al HTML
                    inputAmigo.value = ""; //Limpia INPUT de amigo
                    inputAmigo.focus();
                }

            }
};

function sortearAmigo() {
    console.log(listaDeAmigos);
    if(listaDeAmigos.length>=0){
        numeroAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        amigoSecreto = listaDeAmigos[numeroAleatorio];
        console.log(numeroAleatorio);
        //ulResultado.textContent = 'Amigo Secreto sorteado es: ' + amigoSecreto;
        ulResultado.innerHTML = 'Amigo Secreto sorteado es: ' + amigoSecreto;

    } else{
        alert('No hay amigos para sortear');
    }
};

function asignaTextos(elementoHTML, textual) {
    let titulo = document.querySelector(elementoHTML);
    titulo.innerHTML = textual;
}

asignaTextos('h1','Juego del AmIgO SECRETO');
asignaTextos('h2','Ingrese el nombre de un amigo');