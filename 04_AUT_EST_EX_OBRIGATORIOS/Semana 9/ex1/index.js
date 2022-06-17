let button = document.getElementById('btncalc');
let result = document.getElementById('result');

button.addEventListener('click', () =>{
    let number = document.getElementById('number').value;
    if(number[0] % 2 === 0){
        result.innerHTML = `O digito ${number[0]} é par!`;
    } else {
        result.innerHTML = `O digito ${number[0]} é impar!`;
    }
});