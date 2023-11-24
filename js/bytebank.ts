let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo){ // diferente de null
  elementoSaldo.textContent = saldo.toString();
}


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener ("submit", function(event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
  const inputValor = elementoFormulario.querySelector('#valor');
  const inputData = elementoFormulario.querySelector('#data');

  let tipoTransacao = inputTipoTransacao.value;
  let valor = inputValor.value; // os inputs.value são strings por isso deve-se converter
  let data = inputData.value;

  if (tipoTransacao == "Depósito") {
    saldo += valor; // aqui tem que converter para não concatenar ao invés de somar
  } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
    saldo -= valor;
  } else {
    alert("Tipo de transação é inválido");
    return;
  }

  elementoSaldo.textContent = saldo;

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data
  }

  elementoFormulario.reset();
})

