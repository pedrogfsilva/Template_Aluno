// Crie uma página web que permita ao usuário informar uma string correspondente a uma lista de números inteiros na qual os elementos são separados por uma vírgula e qual dos valores é o valor-foco. Quando o usuário indicar que deseja que o cálculo seja realizado (pressionar um botão), mostre a lista ordenada de forma crescente e qual a posição (primeiro, segundo, terceiro etc) do valor-foco. Use um algoritmo de ordenação (mesmo que um simples, como o Bubble Sort) para ordenar a lista e use a busca binária para identificar a posição do valor-foco.

$('#calc').on('click', () =>{
    let numbers = $('#numbers').val();
    let focusNumber = parseInt($('#focusNumber').val());
    let result = $('#result');
    let result2 = $('#result2');
    let realNumbers = JSON.parse("[" + numbers + "]");

    let finalNumbers = realNumbers.sort((a, b) => a - b);

    result.html(`Aqui estão os números ordenados em ordem crescente: ${finalNumbers}`);
    result2.html(`Aqui está a posição do seu número foco: ${findingFocusNumber(focusNumber, realNumbers)}`);
});

function findingFocusNumber(focusNumber, array){
    let position = '';
    for(let i = 0; i < array.length; i++){
        if(array[i] === focusNumber){
            position = array.indexOf(focusNumber);
        }
    }
    return position;
}