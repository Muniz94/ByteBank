let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo) { // diferente de null
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoDataAcesso) { // diferente de null
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}
