// Crie uma página web que permita ao usuário informar o preço de um produto e, quando o usuário indicar que deseja que o cálculo seja realizado (pressionar um botão), apresente quais notas e quantas notas são necessárias para efetuar o pagamento da compra desse produto. Considere notas para os valores 1, 2, 5, 10, 20, 50, 100 e que é desejável efetuar o pagamento com a menor quantidade possível de notas.

$('#calc').on('click', () =>{
    let productPrice = parseInt($('#productPrice').val());
    let result = $('#result');
    let greeting = '';

    if(productPrice === 1){
        greeting = `É necessário uma nota de um real!`;
    } else if(productPrice === 2){
        greeting = `É necessário uma nota de dois reais`;
    } else if (productPrice === 5){
        greeting = `É necessário uma nota de cinco reais`;
    } else if (productPrice === 10){
        greeting = `É necessário uma nota de dez reais`;
    } else if (productPrice === 20){
        greeting = `É necessário uma nota de vinte reais`;
    } else if(productPrice === 50){
        greeting = `É necessário uma nota de cinquenta reais`;
    } else if (productPrice === 100){
        greeting = `É necessário uma nota de cem reais`;
    }
    result.html(`${greeting}`);
});