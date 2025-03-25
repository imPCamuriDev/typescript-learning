/**
 * Em TypeScript, "type assertions" (ou "as declarações de Type") são uma forma de informar ao compilador
 * que você sabe mais sobre o Type de uma variável do que ele pode inferir automaticamente.
 * 
 * Isso é útil em situações onde o desenvolvedor tem certeza do Type de um valor, mas o TypeScript
 * não consegue determinar isso por conta própria. Existem duas formas principais de realizar type assertions:
 * 
 * 1. Usando a sintaxe `as Type`: 
 *    ```typescript
 *    let valor: any = "texto";
 *    let tamanho: number = (valor as string).length;
 *    ```
 *    Aqui, estamos dizendo ao TypeScript que a variável `valor`, que é do Type `any`, deve ser tratada como uma string.
 * 
 * 2. Usando a sintaxe de "angle brackets" `<Type>` (não recomendada em arquivos JSX):
 *    ```typescript
 *    let valor: any = "texto";
 *    let tamanho: number = (<string>valor).length;
 *    ```
 * 
 * É importante notar que type assertions não realizam nenhuma conversão de Type em tempo de execução.
 * Elas apenas informam ao compilador como tratar o valor em tempo de compilação.
 * 
 * **Atenção**: Use type assertions com cuidado, pois forçar um Type incorreto pode levar a erros em tempo de execução.
 */

// O exemplo explica que o type assertion é uma forma de informar ao compilador
// que você sabe mais sobre o Type de uma variável do que ele pode inferir
// automaticamente. O exemplo mostra como realizar type assertions em
// TypeScript, usando as sintaxes `as Type` e `<Type>`.
const productName:any = 'Boné';
let itemId = <string> productName;