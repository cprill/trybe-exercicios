// Parte I

// Exercicio 1

/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// 1- Modifique a estrutura da função para que ela seja uma arrow function 

/* const testeScopo = (escopo) => {

  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.

}

testeScopo(true); */

// 2- Modifique as concatenações para template literals .

/* const testeScopo = escopo => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }

}

testeScopo(true); 
 */

// Exercicio 2

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

//const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉 

// 1- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const compararNumeros = (a, b) => a - b;
// console.log(`Os números ${oddsAndEvens.sort(compararNumeros)} se encontram ordenados de forma crescente!`);

// 2- Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// Anterior

// Parte II

// Exercicio 1

//Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (n) => {
  let x = n;
  while (n > 1) {
    x = x * (n - 1);
    n -- ; 
  }
  return x;
}

console.log(fatorial(4));