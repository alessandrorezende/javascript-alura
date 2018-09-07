var table = document.querySelector("table");
table.addEventListener("dblclick",function(event){
    var alvoDoEvento = event.target; //TD
    var paiDoAlvo =   event.target.parentNode; //TR

    if(alvoDoEvento.tagName == "TD"){ //remover paciente apenas se clicado em um TD
        paiDoAlvo.classList.add("fadeOut");
        setTimeout(function(){
          paiDoAlvo.remove();
        },700); //aguarda meio segundo para remover
    }

});

/*
//não é boa pratica colocar um escutador em cada um dos pacientes a ser removido
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick",function(){
     this.remove();
  });
});
*/
