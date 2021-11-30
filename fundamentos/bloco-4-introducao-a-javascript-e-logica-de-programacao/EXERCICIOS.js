/* Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
Copiar */


 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



//++++++++++++++++++++++++++++++
/* 01-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */

/* for ( let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
} */


//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 02-Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */

/* let soma = 0;
for ( let index = 0; index < numbers.length; index += 1){
  soma = soma + (numbers[index]);
}
console.log(soma); */

//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 03-Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

/* let soma = 0;
for ( let index = 0; index < numbers.length; index += 1){
  soma = soma + (numbers[index]);
}
console.log(soma/numbers.length);  */

//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 04-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

/* let soma = 0;
for ( let index = 0; index < numbers.length; index += 1){
  soma = soma + (numbers[index]);
}
let media = (soma/numbers.length);

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
} */

//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 05-Utilizando for , descubra qual o maior valor contido no array e imprima-o; */


/* for ( let index = 0; index < numbers.length; index += 1){
  let contador = 0;
  for ( let paradigma = 0; paradigma < numbers.length; paradigma += 1) {
    
    if ( numbers[index] > numbers[paradigma] ){
      contador += 1;
    }
    if ( contador == (numbers.length - 1) ) {
      console.log(numbers[index]);
    }
  }
} */



//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 06-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

/* let impares = 0;
for ( let index = 0; index < numbers.length; index += 1) {

  if ( (numbers[index] % 2) !== 0 ) {
    console.log(numbers[index] + " é ímpar");
    impares += 1;
  }
}
console.log("O total de números ímpares é :" + impares); */



//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 07-Utilizando for , descubra qual o menor valor contido no array e imprima-o */;

/*  for ( let index = 0; index < numbers.length; index += 1){
  let contador = 0;
  for ( let paradigma = 0; paradigma < numbers.length; paradigma += 1) {
    
    if ( numbers[index] < numbers[paradigma] ){
      contador += 1;
    }
    if ( contador == (numbers.length - 1) ) {
      console.log(numbers[index]);
    }
  }
}  */

//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 08-Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */


/* let lista = [];

  for ( let index = 1; index <= 25; index += 1) {
  lista.push(index);
} */
//console.log(lista);


//++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++
/* 09-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */


/* for ( let contador = 0; contador < lista.length; contador += 1) {
  console.log(lista[contador] / 2);
} */



// BONUS

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//01- Ordene o array numbers em ordem crescente e imprima seus valores;

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}
console.log(numbers) */


//++++++++++++++++++++++
//02- Ordene o array numbers em ordem decrescente e imprima seus valores;

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}
console.log(numbers) */


//++++++++++++++++++++++
/* 03- Agora crie um novo array a partir do array numbers , sem perd�-lo. Cada valor do novo array dever� ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array dever� ser 45, pois � a multiplica��o de 5 (primeiro valor) e 9 (valor seguinte). J� o segundo valor do novo array dever� ser 27, pois � a multiplica��o de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso n�o haja pr�ximo valor, a multiplica��o dever� ser feita por 2. Fa�a isso utilizando o for e o m�todo push . O resultado deve ser o array abaixo: */

    
/* let novoarray = [];
for ( let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length){
        novoarray.push(numbers[index] * numbers[index + 1]);
    } else {
        novoarray.push(numbers[index] * 2);
    }
}
console.log(novoarray); */
