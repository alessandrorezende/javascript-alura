/*var titulo =document.querySelector(".titulo");
 console.log(titulo);
 console.log(titulo.textContent);
 titulo.textContent = "Aparecida Nutricionista."
 */

/*#paciente1 - usado (#) para id do elemento */
/*.paciente1 - usado (.) para class do elemento */
/*querySelector retorna apenas o primeiro elemento*/
/*querySelectorAll retorna todos os elementos*/
//-----------------------------------------------------------------
function calculaIMC(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
//-----------------------------------------------------------------
var pacientes = document.querySelectorAll(".paciente"); //retorna o campo

for(var i=0; i< pacientes.length; i++){
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent; //retornar o valor dentro do campo
  var altura = paciente.querySelector(".info-altura").textContent;
  var imc = paciente.querySelector(".info-imc");

  var validoPeso = validaPeso(peso);
  var validoAltura = validaAltura(altura);

  if(!validoPeso){
     imc.textContent = "Peso invalido!";
     // paciente.style.backgroundColor = "lightcoral"; //não fazer assim fora do padrao
     paciente.classList.add("paciente-erro"); //adicionando uma class que criei no CSS
  }
  if(!validoAltura){
     imc.textContent = "Altura invalida!";
     paciente.classList.add("paciente-erro");
  }
  if(validoPeso && validoAltura){
    imc.textContent = calculaIMC(peso,altura);
  }
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
