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
}
sum(1, 2); // 3
// sum("1", 2);  Argument of type 'string' is not assignable to parameter of type 'number'.