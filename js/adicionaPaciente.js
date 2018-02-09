var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-add-paciente");
    var paciente = {
        nome: form.querySelector("#nome").value,
        peso: form.querySelector("#peso").value,
        altura: form.querySelector("#altura").value,
        gordura: form.querySelector("#gordura").value
    }
    var notice = document.querySelector("#notice");
    notice.innerHTML = "";

    var pacienteValidado = validaPaciente(paciente);
    if (pacienteValidado.length > 0){
        
        var p = document.createElement("p");
        p.textContent = "Paciente inválido! Por favor verifique os seguintes dados:";
        var ul = document.createElement("ul");
        pacienteValidado.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
        notice.classList.remove("form-success");
        notice.classList.add("form-error");
        notice.appendChild(p);
        notice.appendChild(ul);
    } else {
        adicionaNaTabela(paciente);
        var p = document.createElement("p");
        p.textContent = "Paciente incluído com sucesso!";
        notice.classList.remove("form-error");
        notice.classList.add("form-success");
        notice.appendChild(p);
    }
    form.reset();
});
function adicionaNaTabela(paciente){
    document.querySelector("#tabela-pacientes tbody").appendChild(createTr(paciente));
}
var createTd = function (val, cls){
    var td = document.createElement("td");
    td.classList.add(cls);
    td.textContent = val;
    return td;
}

function createTr(paciente){
    var pacienteTr = document.createElement("tr");
    var imc = calculaImc(paciente.peso, paciente.altura);
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(createTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(createTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(createTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(createTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(createTd(imc, "info-imc"));
    
    return pacienteTr;
}