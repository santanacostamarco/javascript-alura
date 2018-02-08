var table = document.querySelector("tbody");
table.addEventListener("dblclick",  function(event){
    var linha = event.target.parentNode;
    linha.classList.add("remove");
    setTimeout(function(){
        linha.remove();
    },300);
    
});