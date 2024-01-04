import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
  const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
  elementoRegistroTransacoesExtrato.innerHTML = ""; // limpa o elemento para renderizar novamente (atualizado)
  let htmlRegistroTransacoes: string = '';

  for (let grupoTransacao of gruposTransacoes) { // pega cada grupo de transações
    let htmlTransacaoItem: string = "";
    for (let transacao of grupoTransacao.transacoes) // pega cada transação do grupo de transações
    {
      htmlTransacaoItem += `<div class="transacao-item"> 
      <div class="transacao-info">
          <span class="tipo">${transacao.tipoTransacao}</span>
          <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
      </div>
      <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
      </div>` // monta a estrutura de um item de transação
    }

  htmlRegistroTransacoes += `
    <div class="transacoes-group">
      <strong class="mes-group">${grupoTransacao.label}</strong>
      ${htmlTransacaoItem}
    </div>
  `
  }

  if (htmlRegistroTransacoes === '') {
    htmlRegistroTransacoes = '<div>Não há transações registradas.</div>'
  }

  elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}