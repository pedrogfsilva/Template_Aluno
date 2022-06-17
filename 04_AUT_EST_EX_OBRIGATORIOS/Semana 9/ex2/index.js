let button = document.getElementById('btncalc');
let result = document.getElementById('result');
let sum = 0;

button.addEventListener('click', () =>{
    let number = document.getElementById('number').value;
    for(let i = 0; i < number.length; i++){
        sum += parseInt(number[i]);
    }

    result.innerHTML = `A soma de todos os digitos do número ${number} é igual a ${sum}`;
});