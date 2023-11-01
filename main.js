function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}
alert("teste")
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length ){
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    }
    