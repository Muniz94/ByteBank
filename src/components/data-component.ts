import { formatarData } from "../utils/formatters";
import { FormatoData } from "../types/FormatoData";
import Conta from "../types/Conta";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

function renderizarData(): void {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}

const DataComponente = {
    atualizar: function () {
        renderizarData();
    },
};

export default DataComponente;
