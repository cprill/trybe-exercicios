document.getElementById('header-container').style.backgroundColor = "rgb(0, 176, 105)";

const emerg = document.getElementsByClassName('emergency-tasks')[0];
emerg.style.backgroundColor = 'rgb(255, 159, 132)';

const urgente = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < urgente.length; i += 1){
  urgente[i].style.backgroundColor = 'rgb(165, 0, 243)';
};

const noEmerg = document.getElementsByClassName('no-emergency-tasks')[0];
noEmerg.style.backgroundColor = 'rgb(249, 219, 94)';


const noUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noUrgente.length; i += 1){
  noUrgente[i].style.backgroundColor = 'rgb(35, 37, 37)';
};

const rodaPe = document.getElementById('footer-container');
rodaPe.style.backgroundColor = 'rgb(0, 53, 51)';

