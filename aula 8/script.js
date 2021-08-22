function carregar() {

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var comp = document.getElementById('comp')
    var fundo = document.getElementById('fundo')

    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas`

    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        comp.innerText = 'Bom dia!'
        document.body.style.background = '#354124'
        fundo.style.background = '#7a91b2'
    } 
    
    else if (hora >= 12 && hora < 19) {
        img.src = 'tarde.png'
        comp.innerText = 'Boa tarde!'
        document.body.style.background = '#983459'
        fundo.style.background = '#d05b62'
    } 
    
    else {
        img.src = 'noite.png'
        comp.innerText = 'Boa noite!'
        document.body.style.background = '#1e1f50'
        fundo.style.background = '#f25b00'
    }
}