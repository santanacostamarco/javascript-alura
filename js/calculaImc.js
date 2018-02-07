
var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++){
  var pacienteAtual = pacientes[i];
  var peso = pacienteAtual.querySelector(".info-peso").textContent;
  var altura = pacienteAtual.querySelector(".info-altura").textContent;
  if(!validaPeso(peso)){
    pacienteAtual.querySelector(".info-imc").textContent = "Peso inválido!"
    pacienteAtual.classList.add("paciente-invalido");
  } else if(!validaAltura(altura)){
    pacienteAtual.querySelector(".info-imc").textContent = "Altura inválida!"
    pacienteAtual.classList.add("paciente-invalido");
  } else {
    pacienteAtual.querySelector(".info-imc").textContent = (peso/(altura*altura)).toFixed(2);
  }
}
