let hour = ['Diurno', 'Noturno'];

$('#button').on('click', () =>{
    let period = hour[parseInt($('#period').val())];
    let qtdPeople = $('#people').val();
    let result = $('#result');
    let total;

    if(period === 'Diurno' && qtdPeople <= 50){
        total = qtdPeople * 200;
        result.html(`O total da compra é: ${total}`);
    } else if(period === 'Diurno' && qtdPeople > 50){
        total = qtdPeople * 120;
        result.html(`O total da compra com 40% de desconto por pessoa é: ${total}`);
    } else if(period === 'Noturno' && qtdPeople <= 50){
        total = qtdPeople * 100;
        result.html(`O total da compra é: ${total}`);
    } else if (period === 'Noturno' && qtdPeople > 50){
        total = qtdPeople * 80;
        result.html(`O total da compra com 20% de desconto por pessoa é: ${total}`);
    }
});