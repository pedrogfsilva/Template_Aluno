$('#change').on('click', () =>{
    let input1 = $('#input1').val();
    let input2 = $('#input2').val();

    let realInput1 = input2;
    let realInput2 = input1;

    $('#input1').val(realInput1);
    $('#input2').val(realInput2);
});