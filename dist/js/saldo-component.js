let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) { // diferente de null
    elementoSaldo.textContent = saldo.toString();
}
