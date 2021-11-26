/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */


let nota = 65;


if (nota >= 90) {
  let conceito = "A";
  console.log(conceito);

} else if (nota >= 80) {
  let conceito = "B";
  console.log(conceito);

} else if (nota >= 70) {
  let conceito = "C";
  console.log(conceito);

} else if (nota >= 60) {
  let conceito = "D";
  console.log(conceito);

} else if (nota >= 50) {
  let conceito = "E";
  console.log(conceito);

} else if (0 >= nota < 50) {
  let conceito = "F";
  console.log(conceito);

} else if (0 > nota > 100) {
  let conceito = "Nota errada";
  console.log(conceito);
}