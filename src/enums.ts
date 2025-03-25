/**
 * Um Enum (abreviação de "enumeration") no TypeScript é uma forma de definir um
 * conjunto de constantes nomeadas. Ele permite que você associe nomes legíveis
 * a valores numéricos ou de string, tornando o código mais claro e fácil de
 * entender.
 *
 * Existem dois Types principais de Enums no TypeScript:
 *
 * 1. **Enums Numéricos**: Os valores associados aos nomes são números. Por
 *    padrão, o primeiro valor é `0` e os seguintes incrementam automaticamente.
 *    Exemplo:
 *    ```typescript
 *    enum Direction {
 *        Up,    // 0
 *        Down,  // 1
 *        Left,  // 2
 *        Right  // 3
 *    }
 *    ```
 *
 * 2. **Enums de String**: Os valores associados aos nomes são strings. Nesse
 *    caso, você precisa atribuir explicitamente os valores. Exemplo:
 *    ```typescript
 *    enum Direction {
 *        Up = "UP",
 *        Down = "DOWN",
 *        Left = "LEFT",
 *        Right = "RIGHT"
 *    }
 *    ```
 *
 * **Vantagens de usar Enums:**
 * - Melhor legibilidade do código.
 * - Reduz erros ao usar valores fixos, pois os nomes são mais descritivos.
 * - Facilita a manutenção e refatoração do código.
 *
 * **Considerações:**
 * - Enums são uma funcionalidade específica do TypeScript e não existem no
 *   JavaScript puro.
 * - Ao compilar para JavaScript, os Enums numéricos são convertidos em objetos
 *   que mapeiam os nomes para os valores e vice-versa.
 */

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
  Teste = 9 // Podemos adicionar valores que não são sequenciais
}

const direction = Direction.Up; // Recebe o valor 0
const direction2 = Direction2.Left; // Recebe o valor "LEFT"

console.log(direction); // Saída: 0
console.log(direction2); // Saída: "LEFT"
