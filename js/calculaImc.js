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
function calculaImc(weight, height){
    if (!weightIsValid(weight) && !heightIsValid(height)){
        return "Peso e altura inválidos";
    } else if (!weightIsValid(weight)) {
        return "Peso inválido"
    } else if (!heightIsValid(height)) {
        return "Altura inválida"
    } else {
        return (peso / (altura * altura)).toFixed(2);
    }
}
function weightIsValid(weight){
    if (weight > 0 && weight < 800){
        return true
    } else return false;
}
function heightIsValid(height){
    if (height > 0 && height < 3){
        return true
    } else return false;
}