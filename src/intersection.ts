// Interseção
// Interseção é um Type que combina vários Types em um. Exemplo:
let productId:string | number = "1234";
productId = "ABCD"; // Ok
console.log(productId)
productId = 1234; // Ok
console.log(productId)
// productId = (Qualquer outro Type não definido depois dos pontos); // Error