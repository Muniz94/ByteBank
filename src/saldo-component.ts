let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo){ // diferente de null
  elementoSaldo.textContent = formatarMoeda(saldo)
}

if (elementoDataAcesso){ // diferente de null
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(dataAcesso);
}