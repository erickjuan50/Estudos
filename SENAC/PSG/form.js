const INPUT_CEP = document.getElementById('add-cep');
const INPUT_ADDRESS = document.getElementById('add-address');
const INPUT_NEIGHBORHOOD = document.getElementById('add-neighborhood');
const INPUT_NUMBER = document.getElementById('add-number');
const INPUT_CITY = document.getElementById('add-city');
const INPUT_UF = document.getElementById('add-uf');

INPUT_CEP.addEventListener('blur', () => {
  let cep = INPUT_CEP.value;
  
  if (cep.length !== 9){
    alert('Digite um CEP Válido!');
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(json => {
          INPUT_NEIGHBORHOOD.value = json.bairro;
          INPUT_ADDRESS.value = json.logradouro;
          INPUT_CITY.value = json.localidade;
          INPUT_UF.value = json.uf;
      })
} );






function formatarCEP(input) {
  var cep = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  var tamanho = cep.length;

  if (tamanho == 0) {
      input.value = '';
  } else if (tamanho < 6) {
      input.value = cep;
  } else {
      input.value = cep.substring(0, 5) + '-' + cep.substring(5);
  }
}

function formatarCPF(input) {
  var cpf = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  var tamanho = cpf.length;

  if (tamanho == 0) {
      input.value = '';
  } else if (tamanho < 4) {
      input.value = cpf;
  } else if (tamanho < 7) {
      input.value = cpf.substring(0, 3) + '.' + cpf.substring(3);
  } else if (tamanho < 10) {
      input.value = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6);
  } else {
      input.value = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9);
  }
}

function formatarCelTel(input) {
  var numeroTelefone = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  var tamanho = numeroTelefone.length;

  // Aplica a formatação baseada no tamanho do número de telefone
  if (tamanho == 0) {
      input.value = '';
  } else if(tamanho > 0 && tamanho < 3) {
      input.value = '(' + numeroTelefone;
  } else if(tamanho >= 3 && tamanho < 8) {
      input.value = '(' + numeroTelefone.substring(0, 2) + ') ' + numeroTelefone.substring(2);
  } else if(tamanho >= 8 && tamanho < 13) {
      input.value = '(' + numeroTelefone.substring(0, 2) + ') ' + numeroTelefone.substring(2, 7) + '-' + numeroTelefone.substring(7);
  } else {
      // Se o número de telefone tiver mais de 13 dígitos, mantenha apenas os 13 primeiros
      input.value = '(' + numeroTelefone.substring(0, 2) + ') ' + numeroTelefone.substring(2, 7) + '-' + numeroTelefone.substring(7, 13);
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.money-mask');
    
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        value = (value / 100).toFixed(2) + '';
        value = value.replace('.', ',');
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        this.value = 'R$ ' + value;
      });
    });
  });