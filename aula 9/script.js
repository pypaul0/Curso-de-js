function clicar() {

    var agora = new Date()
    var anoSistema = agora.getFullYear()
    var msg = document.getElementById('msg')
    var anotxt = document.getElementById('ano')
    var anoClient = Number(anotxt.value)
    var idade = anoSistema - anoClient
    var img = document.createElement('img')
    var foto = img.setAttribute('id', 'foto')

    if (anotxt.value.length == 0 || anoClient > anoSistema) {
        alert('ERROR')
    } else {
        var sexo = document.getElementsByName('sexo')
        var gen = ''
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade <= 11) {
                img.setAttribute('src', 'cm.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'jm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'am.png')
            } else {
                img.setAttribute('src', 'im.png')
            }
        } else {
            gen = 'Mulher'
            if (idade >=0 && idade <= 11) {
                img.setAttribute('src', 'cf.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'jf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'af.png')
            } else {
                img.setAttribute('src', 'if.png')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${gen} com ${idade} anos`
        msg.appendChild(img)
    } 
}
