// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista = []; // pode receber qualquer coisa
const num: number[] = []; // apenas números

// Tipos Personalizados (Type Alias)
type Transacao2 = {             
  tipoTransacao: string;     // Esse bloco define uma estrutura padrão para todo objeto do tipo 'Transacao'
  data: Date;
  valor: number;
}

// Enum (serve para assegurar que não será inserido um valor diferente, sem acento por exemplo)
enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
  data: new Date(),
  valor: 10
}

