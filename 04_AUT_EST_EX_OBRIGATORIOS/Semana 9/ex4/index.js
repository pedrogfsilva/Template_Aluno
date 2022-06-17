let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click', () =>{
    let n = parseInt(document.getElementById('lastNumber').value);
    let i = 0;
    let atual = 1;
    let antepenultimo = 0;
    let penultimo;
    while(i < n){
        penultimo = atual;
        atual = antepenultimo + penultimo;
        antepenultimo = penultimo;
        result.innerHTML += atual + ' ';
        i++
    }
});