import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData";
import { formatarData, formatarMoeda } from "../utils/formatters";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = ""; // limpa o elemento para renderizar novamente (atualizado)
    let htmlRegistroTransacoes = '';
    for (let grupoTransacao of gruposTransacoes) { // pega cada grupo de transações
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) // pega cada transação do grupo de transações
         {
            htmlTransacaoItem += `<div class="transacao-item"> 
      <div class="transacao-info">
          <span class="tipo">${transacao.tipoTransacao}</span>
          <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
      </div>
      <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
      </div>`; // monta a estrutura de um item de transação
        }
    }
}
