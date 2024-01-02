import Conta from "../types/Conta.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

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
          <strong class="valor">-R$ 36,00</strong>
      </div>
      <time class="data">04/09</time>
      </div>` // monta a estrutura de um item de transação
    }
  }
}