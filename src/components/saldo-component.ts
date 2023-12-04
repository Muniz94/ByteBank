import { formatarMoeda } from "../utils/formatters";
import Conta from "../types/Conta";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

function renderizarSaldo(): void {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponente = {
    atualizar: function () {
        renderizarSaldo();
    },
};

export default SaldoComponente;
