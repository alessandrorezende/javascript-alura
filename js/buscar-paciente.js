var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    //chamada de serviço em javascript
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //escutador para verificar se já retornou a resposta
    xhr.addEventListener("load", function() {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    });
    //envio da requisição
    xhr.send();
});
