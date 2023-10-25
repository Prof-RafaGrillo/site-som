function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play()
}

function tocaSomClap(){

    document.querySelector('#som_tecla_clap').play()

}
document.querySelector('.tecla_lightsaber').onclick = tocaSomPom
document.querySelector('.tecla_breath').onclick = tocaSomClap