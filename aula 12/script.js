let lista = []
let res = document.getElementById('res')
let numtxt = document.getElementById('numtxt')

function adicionar() {

    res.innerHTML = ''
    if (numtxt.value.length == 0 || Number(numtxt.value) <= 0 || Number(numtxt.value) > 100) {
        alert('Por favor, digite um número valido.')
    }
    else if (lista.indexOf(Number(numtxt.value)) != -1) {
        alert('Este número já está na lista, por favor digite outro número.')
    } 
    else {
        let num = Number(numtxt.value)
        lista.push(num)
        lista.sort()
        let tab = document.getElementById('tabela')
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado a lista`
        tab.appendChild(item)
        numtxt.value = ''
        numtxt.focus()
    }
}
function finalizar() {
    if (lista.length == 0) {
        alert('Por favor, adicione um número')
    }
    else {
        let soma = 0
        for (let cont = 0; cont < lista.length; cont++) {
            soma += lista[cont]
        }
        res.innerHTML = `Temos ${lista.length} números cadastrados<br>
        O maior valor é: ${lista[lista.length-1]}<br>
        O menor valor é: ${lista[0]}<br>
        A soma de todos os valores é: ${soma}<br>
        A media entre os números é: ${soma / lista.length}`
    }    
}