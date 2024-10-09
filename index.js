function calcular(op) {
    let container2 = document.querySelector('.container2')
    if (container2.style.display !== 'block') {
        container2.style.display = 'block'
    }
    let num1 = Number(document.getElementById('iValor1').value)
    let num2 = Number(document.getElementById('iValor2').value)
    let total = 0
    let valido = true

    if (op == 1) {
        total = num1 + num2
    } else if (op == 2) {
        total = num1 - num2
    } else if (op == 3) {
        total = num1 * num2
    } else if (op == 4 && num2 != 0) {
        total = (num1 / num2).toFixed(2)
    } else if (num2 == 0){
        valido = false
document.getElementById(`resultado`).innerHTML = "Erro!Divisa"
    }