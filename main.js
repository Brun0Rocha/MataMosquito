var altura = 0
var largura = 0
var vidas = 1

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    // console.log(largura, altura)

}

ajustarTamanhoPalcoJogo()

function posicaoAleatoria() {

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.querySelector('#v' + vidas).src = "/imagens/coracao_vazio.png"
            vidas++
        }
    }
    var posicionX = Math.floor(Math.random() * largura) - 100
    var posicionY = Math.floor(Math.random() * altura) - 100

    posicionX = posicionX < 0 ? 0 : posicionX
    posicionY = posicionY < 0 ? 0 : posicionY

    // console.log(posicionX, posicionY)


    var mosquito = document.createElement('img')
    mosquito.src = '/imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicionX + 'px'
    mosquito.style.top = posicionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
    
}


setInterval(function(){
    posicaoAleatoria()

}, 2000)

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosca1'
        
        case 1:
            return 'mosca2'
                
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

