function clicar() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)
    var num3 = Number(document.getElementById('num3').value)
    var res = document.getElementById('res')
    res.innerHTML = `Contando... </br>`
    if (num1 != null && num2 != null && num3 >= 0) {
        if (num3 == 0) {
            alert('O passo não pode ser 0, irei considerar passo 1')
            num3 = 1
        }
        if (num1 < num2) {
            for (;num1 <= num2; num1 += num3) {
                res.innerHTML += `${num1} `
                res.innerHTML += '👉'
            }
        res.innerHTML += '🏴'
        }
        else if (num1 > num2){
            for (;num1 >= num2; num1 -= num3) {
                res.innerHTML += `${num1} `
                res.innerHTML += '👉'
            }
        res.innerHTML += '🏴'
        }
    }
    else {
        res.innerHTML = 'Impossivel contar.'
    }
}