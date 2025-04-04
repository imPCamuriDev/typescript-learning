/**
 * Uma função em TypeScript é um bloco de código reutilizável que pode ser
 * chamado para realizar uma tarefa específica. As funções podem receber
 * parâmetros e retornar valores, e o TypeScript permite que você defina os
 * tipos desses parâmetros e do valor de retorno, garantindo maior segurança e
 * previsibilidade no código.
 *
 * Exemplos de características das funções em TypeScript:
 * - Tipagem explícita: Você pode especificar os tipos dos parâmetros e do
 *   retorno.
 * - Parâmetros opcionais: Usando o operador `?`, você pode definir parâmetros
 *   que não são obrigatórios.
 * - Parâmetros com valores padrão: Você pode atribuir valores padrão para
 *   parâmetros.
 * - Funções assíncronas: Usando `async` e `await`, você pode trabalhar com
 *   operações assíncronas.
 *
 * A tipagem em funções ajuda a evitar erros comuns, como passar argumentos de
 * tipos inesperados ou esquecer de lidar com valores de retorno.
 */

const sum = (a: number, b: number): number => {
  return a + b;
};
sum(1, 2); // 3
// sum("1", 2);  Argument of type 'string' is not assignable to parameter of type 'number'.

const sum2 = (a: number, b: number) => {
  // Note que atrás do => não tem o tipo de retorno, isso significa que o TypeScript
  // vai inferir o tipo de retorno da função com base no que ela retorna no final da função.
  return a + b;
};

const sum3 = (a: number, b: number): string => {
  return (a + b).toString(); // O TypeScript vai reclamar se você tentar retornar um número ao invés de uma string, por isso a conversão para string.
  // Logo, colocando o mouse em cima do nome da função sum3, você verá que o TypeScript vai inferir que o retorno é uma string.
};

const sum4 = (a: number, b: number): number | string => {
  // Também conseguimos usar Intersection Types
  return a + b;
};

const log = (message: string): void => {
  // void é o tipo de retorno que não retorna nada
  console.log(message);
};

const log2 = (message: string) => {
  // Caso não defina void (: void) o TypeScript vai inferir que o retorno
  // é void desde que no final da sua function não tenha um return
  console.log(message);
};
