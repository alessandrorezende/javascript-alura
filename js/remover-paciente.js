var table = document.querySelector("table");
table.addEventListener("dblclick",function(event){
    var alvoDoEvento = event.target; //TR
    var paiDoAlvo =   event.target.parentNode; //TD
    paiDoAlvo.remove();
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
