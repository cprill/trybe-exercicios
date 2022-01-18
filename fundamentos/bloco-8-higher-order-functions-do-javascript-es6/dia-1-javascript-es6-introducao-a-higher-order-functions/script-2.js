// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

/* const verificaAposta = (chute) => {
  if (chute === sorteio()) {
    return console.log('Parabéns você ganhou');
  }
  return console.log('Tente novamente');
};
const sorteio = () =>{
  const sorteado = 1 + (Math.round(Math.random() * 4));
  console.log(sorteado);
  return sorteado;
}
verificaAposta(2); */


const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));