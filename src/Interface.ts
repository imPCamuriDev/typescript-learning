/**
 *  Uma interface em TypeScript é uma estrutura que define um contrato para
 *  objetos. Ela especifica as propriedades e métodos que um objeto deve ter, mas
 *  não implementa nenhum comportamento. Interfaces são usadas para garantir que
 *  diferentes partes do código sigam um padrão consistente e para fornecer
 *  verificação de tipo em tempo de compilação.
 *
 *  As interfaces podem incluir propriedades opcionais, propriedades somente
 *  leitura e métodos. Além disso, elas podem ser estendidas para criar novas
 *  interfaces com base em interfaces existentes.
 *
 * Exemplos de uso:
 * - Definir o formato de um objeto.
 * - Garantir que uma classe implemente métodos específicos.
 * - Fornecer tipagem para funções que recebem objetos como parâmetros.
 *  
 * Quando usar:
 *  As interfaces em TypeScript devem ser utilizadas quando você deseja definir
 *  um contrato para objetos, classes ou funções. Elas são úteis para garantir
 *  que diferentes partes do código sigam um padrão consistente e para fornecer
 *  verificação de tipo em tempo de compilação.
 *
 *  Quando usar interfaces: Definir o formato de objetos: Use interfaces para
 *  descrever a estrutura de um objeto, garantindo que ele tenha propriedades e
 *  métodos específicos.
 *
 *  Garantir que classes implementem métodos específicos: Interfaces podem ser
 *  usadas para forçar que uma classe implemente certos métodos e propriedades.
 *
 *  Propriedades opcionais e somente leitura: Interfaces permitem definir
 *  propriedades opcionais (?) e propriedades somente leitura (readonly).
 *
 *  Extensão de interfaces: Use interfaces para criar novas interfaces baseadas
 *  em outras, promovendo reutilização e consistência.
 *
 *  Definir assinaturas de funções: Interfaces podem ser usadas para descrever o
 *  formato de funções.
 * 
 * Type e Interface são MUITO semelhantes, a utilização de ambos vem do gosto do programador ou do que foi ordenado ao programador.
 * Porém... tem uma coisa que o Type consegue e o Interface não. Vá para a linha 76
 */

interface UserInterface {
  readonly firstName: string; // readonly é exclusivo do interface, não pode ser usado em type
  email: string;
}
const emailUser: UserInterface = {
  firstName: "João",
  email: "joao@gmail.com",
};

// emailUser.firstName = "Maria"; // Não vai funcionar pois a propriedade firstName é somente de leitura
// e, uma vez definida, não pode ser sobescrita/alterada (semelhante a tipo de variavel const)

type Books2 = {
  bookName: string;
  bookPrice: number;
};

interface AuthorInterface {
  books: Books2[];
}

// Também é possível usar Unions com interfaces
const newAuthor: AuthorInterface & UserInterface = {
  books: [
    {
      bookName: "Harry Potter and the Philosopher's Stone",
      bookPrice: 29.99,
    },
  ],
  email: "jk@gmail.com",
  firstName: "J.K.",
};

// Assinar uma intersection a um type
type Grade = number | string;
let grade: Grade;
grade = 10;
console.log(grade)

grade = "A";
console.log(grade)

// Interfaces com funções

interface mathFunc {
    // Declaração da função     | Retorno
    (x: number, y: number)      : number; // Estou falando que toda função que for implementar essa interface precisa receber APENAS number e RETORNAR number
}

const sum5:mathFunc = (x: number, y: number): number => {
    return x + y;
}

const sub:mathFunc = (x: number, y: number) => {
    return x - y;
}