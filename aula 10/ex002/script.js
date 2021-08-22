function clicar() {
    let numtxt = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (numtxt.value.length == 0) {
        alert('Por favor digite um número.')
    } else {
        let num = Number(numtxt.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            tab.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}