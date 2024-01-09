import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { ResumoTransacoes } from "./ResumoTransacoes.js";

let saldo: number = JSON.parse(localStorage.getItem('saldo')) || 0;

const transacoes: Transacao[] = JSON.parse(localStorage.getItem('transacoes')
  , (key: string, value: string) => {
    if (key === "data") {
      return new Date(value);
    }

    return value;
  }) || [];

function debitar(valor: number): void {
  if (valor <= 0) {
    throw new Error("O valor a ser debitado deve ser maior que zero!");
  }
  if (valor > saldo) {
    throw new Error("Saldo insuficiente!");
  }

  saldo -= valor;
  localStorage.setItem("saldo", saldo.toString()); // tem que usar toString() pois saldo é um valor numérico
}

function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error("O valor a ser depositado deve ser maior que zero!");
  }

  saldo += valor;
  localStorage.setItem("saldo", saldo.toString());
}

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
  },

 agruparTransacoes(): ResumoTransacoes {
    const resumo: ResumoTransacoes = {
      totalDepositos: 0, 
      totalTransferencias: 0, 
      totalPagamentosBoleto: 0
    };

    transacoes.forEach(transacao => {
      console.log(transacao);
      switch (transacao.tipoTransacao) {
        case TipoTransacao.DEPOSITO:
          resumo.totalDepositos += transacao.valor; 
          break;
      
        case TipoTransacao.PAGAMENTO_BOLETO:
          resumo.totalPagamentosBoleto += transacao.valor; 
          break;

        case TipoTransacao.TRANSFERENCIA:
          resumo.totalTransferencias += transacao.valor; 
          break;
      }
    });

    return resumo;
  },

  getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: Transacao[] = structuredClone(transacoes); // structuredClone literalmente cria um clone (transações no caso)
    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime()); // t2 - t1 (decrescente) //// t1 - t2 (crescente)
    let labelAtualGrupoTransacao: string = ""; // nome do Grupo de transações

    for (let transacao of transacoesOrdenadas) {
      let labelGrupoTransacao: string = transacao.data.toLocaleDateString('pt-br', { month: 'long', year: 'numeric' } );
      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        })
      }
      gruposTransacoes.at(-1).transacoes.push(transacao);
    }

    return gruposTransacoes;
  },

  registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
      depositar(novaTransacao.valor);
    } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
      debitar(novaTransacao.valor)
      novaTransacao.valor *= -1;
    } else {
      throw new Error("Tipo de transação é inválido");
    }

    transacoes.push(novaTransacao);
    console.log(this.getGruposTransacoes());
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
    console.log(this.agruparTransacoes());
  }
}

export default Conta; // default não é obrigatório
