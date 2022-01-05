function createStateOptions() {
  let states = document.getElementById('estado');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    states.appendChild(option);
  }
}
createStateOptions();


function verificaDatas() {
  if (datas.value[0] + datas.value[1] > 10) {
    alert("Eu sou um alert!");
  } 

}

let datas = document.getElementById('input-data-inicio');
//datas.addEventListener()

function enviando(event) {
  event.preventDefault();
  verificaDatas();
}


let vai = document.getElementById('vai')
vai.addEventListener('click', enviando)
