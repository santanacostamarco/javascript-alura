(function(){
    var campoFiltro = document.querySelector("#filter");
    campoFiltro.addEventListener("input", function(){
        var input = RegExp(this.value, "i");
        var linhas = document.querySelectorAll(".paciente");
        for (var i = 0; i < linhas.length; i++){
            var linha = linhas[i];
            var nome = linha.querySelector(".info-nome").textContent;
            if (!input.test(nome)){
                linha.classList.add("invisible");
            } else {
                linha.classList.remove("invisible");
            }
        }
    });
}())