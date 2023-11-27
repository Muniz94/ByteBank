let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo){ // diferente de null
  elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" })
}