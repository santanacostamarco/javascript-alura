(function(){
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var peso = pacientes[i].querySelector(".info-peso").textContent;
        var altura = pacientes[i].querySelector(".info-altura").textContent;
        var imc = calculaImc(peso, altura);
        pacientes[i].querySelector(".info-imc").textContent = imc;
        if (!(imc / 1 == imc)){
            pacientes[i].classList.add("paciente-invalido");
        }
    }
})();

function calculaImc(peso, altura){
    if (!pesoIsValid(peso) && !alturaIsValid(altura)){
        return "Peso e altura inválidos";
    } else if (!pesoIsValid(peso)) {
        return "Peso inválido"
    } else if (!alturaIsValid(altura)) {
        return "Altura inválida"
    } else {
        return (peso / (altura * altura)).toFixed(2);
    }
}