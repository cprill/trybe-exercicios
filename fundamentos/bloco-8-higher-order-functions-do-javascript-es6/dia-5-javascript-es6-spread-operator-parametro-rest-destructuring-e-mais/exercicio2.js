// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const soma = (...args) => args.reduce((acc, curr) => acc + curr, 0);
  
console.log(soma(8, 2, 10));
