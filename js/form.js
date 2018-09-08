var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var tabela = document.querySelector("#tabela-pacientes");

    var erros = validaPaciente(paciente);

    if(erros.length > 0 ){
      exibeMensagemErro(erros);
      return;
    }

    tabela.appendChild(montaTr(paciente));
    form.reset();
    //limpar as mensagens de erro apos adicionar paciente na tabela
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc :  calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0 ) erros.push("Nome não pode ser em branco!");
  if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco!");
  if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco!");
  if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco!");
  if(!validaPeso(paciente.peso)) erros.push("Peso invalido!");
  if(!validaAltura(paciente.altura)) erros.push("Altura invalida!");

  return erros;
}

function exibeMensagemErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
  });
}
