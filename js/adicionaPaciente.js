var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-add-paciente");
    document.querySelector("#tabela-pacientes").appendChild(createTr(form));
});

function createTd(val, cls){
    var td = document.createElement("td");
    td.classList.add(cls);
    td.textContent = val;
    return td;
}

function createTr(form){
    var pacienteTr = document.createElement("tr");
    var peso = form.querySelector("#peso").value;
    var altura = form.querySelector("#altura").value;
    var imc = calculaImc(peso, altura);
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(createTd(form.querySelector("#nome").value, "info-nome"));
    pacienteTr.appendChild(createTd(peso, "info-peso"));
    pacienteTr.appendChild(createTd(altura, "info-altura"));
    pacienteTr.appendChild(createTd(form.querySelector("#gordura").value, "info-gordura"));
    pacienteTr.appendChild(createTd(imc, "info-imc"));
    if (!(imc / 1 == imc)){
        pacienteTr.classList.add("paciente-invalido");
    }
    
    return pacienteTr;
}