// JavaScript
/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();

    })
})
*/

$(document).ready(function () {
  $("#cep").mask("00000-000");

  $("#btn-buscar-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const botao = $(this);

    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    // Ajax jquery

    /* $.ajax(endpoint).done(function (resposta) {
      const logradouro = resposta.logradouro;
      const bairro = resposta.bairro;
      const cidade = resposta.localidade;
      const estado = resposta.uf;
      const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
      $("#endereco").val(endereco);

      setTimeout(function () {
        $(botao).find("i").removeClass("d-none");
        $(botao).find("span").addClass("d-none");
      }, 1000);
    });
    */

    // Fetch API
    
    fetch(endpoint)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $("#endereco").val(endereco);

      })
      .catch(function(erro) {
        alert('ocorrou um erro!!')
      })
      .finally(function() {
        setTimeout(function () {
          $(botao).find("i").removeClass("d-none");
          $(botao).find("span").addClass("d-none");
        }, 1000);
      })
  });
  $('#form-pedido').submit(function(event) {
    event.preventDefault();
    
    if ($('#nome').val().length == 0) {
      throw new Error('Digite o nome');
    }
  })
});
