import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";
import Conta from "../types/Conta.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener ("submit", function(event) {
  event.preventDefault();
  if (!elementoFormulario.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
  }

  const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
  const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
  const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

  let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
  let valor: number = inputValor.valueAsNumber; // os inputs.value são strings por isso deve-se converter
  let data: Date = new Date(inputData.value);

  const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  }

  Conta.registrarTransacao(novaTransacao);

  elementoFormulario.reset();
})