function calculo(){
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let resImc = document.getElementById("resImc")
    let resClassificacao = document.getElementById("resClassificacao")
    let imc = peso / (altura * altura)

  
    if (imc < 18.5) {
        resImc.innerHTML =  `${ imc.toFixed(1)}`
        resClassificacao.innerHTML = "Abaixo do peso"

    } else if (imc >= 18.5 && imc < 24.9) {
        resImc.innerHTML =  `${ imc.toFixed(1)}`
        resClassificacao.innerHTML = "Peso ideal"

    } else if (imc >= 25 && imc < 29.9) {
        resImc.innerHTML =  `${ imc.toFixed(1)}`
        resClassificacao.innerHTML = "Acima do peso"    

    } else if (imc >= 30 && imc < 34.9) {
        resImc.innerHTML =  `${ imc.toFixed(1)}`
        resClassificacao.innerHTML = "Obesidade"

    } else if (imc >= 35) {  
        resImc.innerHTML =  `${ imc.toFixed(1)}`
        resClassificacao.innerHTML = "Obesidade Morbida"

    }
    

}




