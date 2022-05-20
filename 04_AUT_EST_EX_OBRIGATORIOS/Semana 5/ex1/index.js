// Crie uma página web que permita ao usuário informar dois números, qual operação deseja realizar com esses valores (entre +, -, *, /, // e %) e, quando o usuário indicar que deseja que o cálculo seja realizado (pressionar um botão), mostre o resultado da operação. Por exemplo: se o usuário digitar 7 e 5, a saída deverá ser:

$('#calc').on('click', () =>{
    let number1 = parseInt($('#number1').val());
    let number2 = parseInt($('#number2').val());
    let operation = $('#operation').val();
    let result = $('#result');

    if(number1 === '' || number2 === '' || operation === ''){
        alert('Por favor, preencha todos os campos corretamente!');
    } else {
        if(operation === '+'){
            result.html(`O resultado da soma entre os números ${number1} e ${number2} é: ${number1 + number2}`);
        } else if (operation === '-'){
            result.html(`O resultado da subtração entre os números ${number1} e ${number2} é: ${number1 - number2}`);
        } else if (operation === '*'){
            result.html(`O resultado da multiplicação entre os números ${number1} e ${number2} é: ${number1 * number2}`);
        } else if (operation === '/'){
            result.html(`O resultado da divisão entre os números ${number1} e ${number2} é: ${number1 / number2}`);
        } else if (operation === '%'){
            result.html(`O resultado da sobra da divisão entre os números ${number1} e ${number2} é: ${number1 % number2}`);
        }
    }
});



