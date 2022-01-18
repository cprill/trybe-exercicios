// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .



const newEmployees = (minhaFunc) => {
  const employees = {
    id1: minhaFunc('Pedro Guerra'),
    id2: minhaFunc('Luiza Drumond'),
    id3: minhaFunc('Carla Paiva'),
  }
  return employees;
};

const minhaFunc = (nomeCompleto) => {
  const nomeModificado = nomeCompleto.replace(' ', '_').toLowerCase();
  const eMail = `${nomeModificado}@trybe.com`;
  return { Nome: nomeCompleto, email: eMail };
};

console.log(newEmployees(minhaFunc));

