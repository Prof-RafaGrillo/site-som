document.querySelector('#som_tecla_clap').play()

function tocaSom(idElemento){
    document.querySelector(idElemento).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length ){
    const instrumento = listaDeTeclas[contador].classList
    console.log(instrumento)
    listaDeTeclas[contador].onclick = function (){

        tocaSom('#som_tecla_pom');

    }
    
    contador = contador + 1;
    }
    
