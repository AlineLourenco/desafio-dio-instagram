const aviso = document.querySelector('a[href^="#"]');

function removerConta() {
  alert('Não é possível remover essa conta!');
}

aviso.addEventListener('click', removerConta);

const recado = document.querySelector('p a');

function trocarConta() {
  alert('Serviço temporariamente indisponível!')
}

recado.addEventListener('click', trocarConta);

