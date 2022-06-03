$('#phone').on('keypress', () =>{
    let number = $('#phone').val();
    if(number[0] === '(' && number[3] === ')' && number[9] === '-' && number.length === 13){
        $('#result').html('O número está no formato desejado!');
        $('#result').css('color', 'green'); 
    } else {
        $('#result').html('Por favor, digite o número no formato desejado!');
        $('#result').css('color', 'red');
    }
});