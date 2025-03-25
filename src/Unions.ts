/**
 * Em TypeScript, "Unions" (uniões) permitem que uma variável, parâmetro ou retorno de função
 * aceite múltiplos tipos de dados. Isso é feito utilizando o operador `|` (pipe) para combinar
 * dois ou mais tipos. Por exemplo, uma variável pode ser declarada como `string | number`,
 * indicando que ela pode conter valores do tipo string ou number.
 *
 * Essa funcionalidade é útil para criar código mais flexível e expressivo, permitindo que
 * diferentes tipos de dados sejam tratados de forma segura e controlada. O TypeScript
 * garante que apenas os tipos especificados na união sejam utilizados, ajudando a evitar
 * erros em tempo de execução.
 *
 * Exemplo:
 * ```typescript
 * let valor: string | number;
 * valor = "Texto"; // válido
 * valor = 42;      // válido
 * valor = true;    // erro: 'boolean' não faz parte da união
 * ```
 */

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  adult: boolean;
};

type Books = {
  bookName: string;
  bookPrice: number;
};

type Author = {
  books: Books[];
};

const author: Author & User = {
  // Aqui é onde eu defino que o objeto author é uma UNIÃO de Author e User
  // Somente o books vem do objeto Author
  books: [
    {
      bookName: "Harry Potter and the Philosopher's Stone",
      bookPrice: 29.99,
    },
  ],

  // Daqui para baixo, eu estou definindo parametros que vem do objeto User
  email: "author@gmail.com",
  adult: true,
  age: 56,
  firstName: "J.K.",
  lastName: "Rowling",
};

console.log(author);
