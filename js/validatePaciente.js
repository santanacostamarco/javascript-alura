function pesoIsValid(peso){
    if (peso > 0 && peso < 800){
        return true;
    } else return false;
}
function alturaIsValid(altura){
    if (altura > 0 && altura < 3){
        return true;
    } else return false;
}
function nomeIsValid(name){
    if (name != ""){
        return true;
    } else return false;
}
function gorduraIsValid(gordura){
    if (gordura > 0 && gordura < 100){
        return true;
    } else return false;
}
function pacienteIsValid(paciente){
    if (!nomeIsValid(paciente.nome) || !pesoIsValid(paciente.peso) || !alturaIsValid(paciente.altura) || !gorduraIsValid(paciente.gordura)) {
        return false;
    } else return true;
}
function validaPaciente(paciente){
    var erros = [];
    if (!nomeIsValid(paciente.nome)) erros.push("Nome");
    if (!pesoIsValid(paciente.paso)) erros.push("Peso");
    if (!alturaIsValid(paciente.altura)) erros.push("Altura");
    if (!gorduraIsValid(paciente.gordura)) erros.push("Gordura");
    return erros;
}