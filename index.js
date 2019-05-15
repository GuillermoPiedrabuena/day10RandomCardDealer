  let numbers=[1,2,3,4,5,6,7,8,9,10,'Queen','King','Jack','Ace'];
  let pintas = ['corazon','espada','trebol','diamante'];
window.addEventListener('load', () => {
    let indexNumbers = Math.floor(Math.random()*numbers.length);
    let indexPintas = Math.floor(Math.random()*pintas.length);

    let varPinta = document.getElementsByClassName("pinta");
    for (i=0;i<varPinta.length;i++){
       varPinta[i].innerHTML=pintas[indexPintas];
    }
    let varNumbers = document.getElementById("numero");
    varNumbers.innerHTML = numbers[indexNumbers];
    console.log(varPinta);
});