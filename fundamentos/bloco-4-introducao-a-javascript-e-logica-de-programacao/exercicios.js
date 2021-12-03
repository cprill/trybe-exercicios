/* 
Parte I - Objetos e For/In
Usando o objeto abaixo, faça os exercícios a seguir:
 */

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

Bem-vinda, Margarida
 */

// console.log("Bem-vinda, " + info['personagem'])



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
 */

// info.recorrente = "Sim";

// console.log(info);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

personagem
origem
nota
recorrente
 */

// for (let dados in info) {
//   console.log(dados);
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
 */

// for ( let dados in info) {
//   console.log(info[dados]);
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
 */

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
// };
// info2.recorrente = "Sim";

// for ( let dados in info) {

//   if ( dados === 'recorrente' && info[dados] === 'Sim' && info2[dados] === "Sim" ) {
//     console.log("Ambos recorrentes")
//   } else {
//     console.log(info[dados] + " e " + info2[dados]);
//   }
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
Usando o objeto abaixo, faça os exercícios a seguir:
 */

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
 */

// console.log("O livro favorito de " + leitor['nome'] + " " + leitor['sobrenome'] + " se chama " + "'" + leitor['livrosFavoritos'][0]['titulo'] + "'." );


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
 */

// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editor: 'Rocco',
// });

// console.log(leitor);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
 */

// console.log(leitor['nome'] + " tem " + leitor['livrosFavoritos']['length'] + " livros favoritos.");




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
Parte II - Funções
Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
 */


// function verificaPalindrome(palavra) {
//   //console.log(palavra);
//   let palavraArray = palavra.split("");
//   //console.log(palavraArray);
//   let palavraArray2 = palavraArray.reverse();
//   //console.log(palavraArray2);
//   let palavra2 = palavraArray2.join("");
//   //console.log(palavra2);
//   if ( palavra == palavra2) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(verificaPalindrome("desenvolvimento"));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */


// function localDoMaior(seqArray){

//   for ( let index = 0; index < seqArray.length; index += 1){
//     let contador = 0

//     for ( let index2 = 0; index2 < seqArray.length; index2 += 1){

//       if (seqArray[index] > seqArray[index2]) {
//         contador += 1
//       }

//       if (contador == (seqArray.length - 1 )){
//         console.log("o maior é " + seqArray[index]);
//         return index;
//       }
//     }
//   }
// }
// console.log(localDoMaior([2, 3, 6, 7, 10, 100]));



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
 */


// function localDoMenor(seqArray){
//   let indiceMenor = 0;

//   for ( let index in seqArray){
//     if ( seqArray[indiceMenor] > seqArray[index] ){
//       indiceMenor = index;
//     }
//   }
//   return indiceMenor;
// }

// console.log(localDoMenor([2, 4, 6, 7, 10, 0, -1]));



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* 
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
 */
let lista = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 


function verificaMaiorNome(lista){
let maior = "";
for ( let index of lista ) {
   if (maior.length < index.length ){
    maior = index;
  }
}
return maior;
}

console.log(verificaMaiorNome(lista));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

