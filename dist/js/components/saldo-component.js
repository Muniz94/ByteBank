import { formatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
function renderizarSaldo() {
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
