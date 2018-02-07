var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click", function(event){
  event.preventDefault();

  var dadosPaciente = selecionaDados();
  if (!dadosPaciente){
    return;
  } else {
    var novaLinha = document.createElement("tr");
    novaLinha.classList.add("paciente");

    var colunaTabela = {
      nome: document.createElement('td'),
      peso: document.createElement('td'),
      altura: document.createElement('td'),
      gordura: document.createElement('td'),
      imc: document.createElement('td')
    }

    for( var chave in colunaTabela){
      colunaTabela[chave].classList.add("info-"+chave);
      colunaTabela[chave].textContent = dadosPaciente[chave];
      novaLinha.appendChild(colunaTabela[chave]);
    }
    document.querySelector("table#tabela-pacientes").appendChild(novaLinha);
  }
});

function selecionaDados(){
  var form = document.querySelector("#form-add-paciente");
  var dadosForm = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: (form.peso.value/(form.altura.value*form.altura.value)).toFixed(2)
  }
  
  var infoAdd = document.createElement("p");
  form.appendChild(infoAdd);
  if (!dadosForm.nome || !dadosForm.peso || !dadosForm.altura || !dadosForm.gordura){
    infoAdd.textContent = "Precha todos os campos";
    infoAdd.classList.add("info-erro");
    return;
  }
  return dadosForm;
}
