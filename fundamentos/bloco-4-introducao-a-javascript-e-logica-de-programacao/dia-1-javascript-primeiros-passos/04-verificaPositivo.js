// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = 8;

if (a > 0){
  console.log("positive");
  return "positive";
} if (a < 0) {
  console.log("negative");
  return "negative";
} else {
  console.log("zero");
  return "zero";
}