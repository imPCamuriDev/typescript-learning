/**
 * OBS: Type é um objeto que representa um tipo de dado.
 *
 * Em TypeScript, "Types" refere-se a um sistema de tipos que permite definir
 * a forma e a estrutura dos dados no código. Ele é usado para garantir que
 * as variáveis, funções e objetos sejam utilizados de maneira consistente
 * e segura, ajudando a evitar erros em tempo de execução.
 *
 * Os tipos podem ser primitivos (como string, number, boolean), complexos
 * (como arrays, objetos) ou personalizados (usando `type` ou `interface`).
 * Eles são uma ferramenta poderosa para fornecer maior robustez e clareza
 * ao desenvolvimento de aplicações.
 */

// O meu objeto User é um tipo que possui duas propriedades: firstName e lastName, ambas do tipo string. (podendo conter mais e com tipos diferentes)
type User1 = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  adult: boolean; // Se ele é maior de 18 anos
  password?: string; // o ponto de interrogação indica que o password é opcional. Em caso de remoção do "?" o compilador ira retornar um erro
  // te obrigando a definir este parametro.
  orders?: string[]; // Array de strings
  // orders: Array<string> // Outra forma de definir um array de strings
  register(): string; // Função que retorna uma string
};

// A minha variavel user é do tipo User que possui as propriedades firstName, lastName, age, email, adult.
const user1: User1 = {
  firstName: "João",
  lastName: "Silva",
  age: 30,
  email: "",
  adult: true,
  register() {
    return "Registrado com sucesso!";
  }
};

// Outro exemplo:

type Order = {
  productId: number;
  quantity: number;
};

type User2 = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  adult: boolean;
  password?: string;
  orders?: Order[]; // É uma lista de Orders
};

const user2: User2 = {
  firstName: "João",
  lastName: "Silva",
  age: 30,
  email: "",
  adult: true,
  orders: [
    // Order 1
    {
      productId: 1,
      quantity: 2,
    },
    // Order 2
    {
      productId: 2,
      quantity: 3,
    },
  ], // Colchetes indica que é um array e as chaves indica que é um objeto, ou seja, uma lista de Objetos Order
};

console.log(user2)

// Propriedades possivelmente nulas (Recomendado ver o vídeo que está no guia)