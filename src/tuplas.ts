// Tuplas
// Tupla é um array com um número fixo de elementos cujos Types são conhecidos, mas não precisam ser os mesmos.
let tuple:[number, string] = [1, "a"]; // Dentro do primeiro colchete, definimos o Type de cada elemento da tupla.
// tuple = ["a", 1]; 
// Error tuple = [1, "a", true];
// Error tuple = [1]; //
// Error tuple = [1, "a", 2];
// E por ai vai... Para que a tupla seja
// válida, o número de elementos e os Types dos elementos devem corresponder à
// definição da tupla. Se você tentar adicionar um elemento a mais ou a menos,
// ou se os Types dos elementos não corresponderem à definição da tupla, o
// TypeScript emitirá um erro.
let tuple2:[number, string, boolean] = [1, "a", true];


// Lista de Tuplas
let list:[number, string][] = [[1, "a"], [2, "b"], [3, "c"]];
let list2:Array<[number, string]> = [[1, "a"], [2, "b"], [3, "c"]];