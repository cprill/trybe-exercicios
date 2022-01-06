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
  if (  datas.value[0] + datas.value[1] > 32) {
    alert("Data incorreta!");
  };

  if ( datas.value[3] + datas.value[4] > 13) {
    alert("Data incorreta!");
  }

  if ( datas.value[6] + datas.value[7] + datas.value[8] + datas.value[9] + datas.value[10] < 0) {
    alert("Data incorreta!");
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
