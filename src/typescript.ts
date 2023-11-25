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
type Transacao = {             
  tipoTransacao: string;     // Esse bloco define uma estrutura padrão para todo objeto do tipo 'Transacao'
  data: Date;
  valor: number;
}

const novaTransacao: Transacao = {
  tipoTransacao: "Lucas",
  data: new Date(),
  valor: 10
}

