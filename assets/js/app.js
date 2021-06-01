const HTML = {
  cep: document.getElementById('cep'),
  rua: document.getElementById('rua'),
  complemento: document.getElementById('complemento'),
  bairro: document.getElementById('bairro'),
  cidade: document.getElementById('cidade'),
  estado: document.getElementById('estado'),
  btnlimpar: document.getElementById('btnlimpar'),
  btnPesquisar: document.getElementById('btnPesquisar'),
}

$(cep).mask('99999-999');

btnPesquisar.addEventListener('click', () => {
  const valorCep = cep.value;
  const url = `https://viacep.com.br/ws/${valorCep}/json/`;

  fetch(url).then(response => {
    return response.json();
  })
    .then(data => {
      if (data.erro) {
        alert('CEP Inválido.');
        return;
      }
      preencherCampos(data);
    })
});

btnlimpar.addEventListener('click', () => {
  cep.value = '';
  rua.value = '';
  complemento.value = '';
  bairro.value = '';
  cidade.value = '';
  estado.value = '';
})

function preencherCampos(data) {
  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}
