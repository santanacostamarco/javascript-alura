(function(){
    var btnBuscar = document.querySelector("#buscar-paciente");
    var textoBotao = btnBuscar.textContent;
    btnBuscar.addEventListener("click", function(event){
        event.preventDefault();
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "https://api-pacientes.herokuapp.com/paciedsddntes");
        btnBuscar.textContent = "..."
        ajax.addEventListener("load", function(){
            if (ajax.status == 200) {
                var pacientes = JSON.parse(ajax.responseText);
                pacientes.forEach(function(paciente){
                    adicionaNaTabela(paciente);
                });
            } else {
                btnBuscar.textContent = "Algo deu errado";
            }
        });
        ajax.send();
        setTimeout(function(){
            btnBuscar.textContent = textoBotao;
        }, 3000);
    });
})()