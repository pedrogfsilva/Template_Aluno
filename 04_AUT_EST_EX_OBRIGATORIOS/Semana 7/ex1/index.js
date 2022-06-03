$('#add').on('click', () =>{
    var number = $('#num').val();
    $('#result').html(number);

    $('#addOne').on('click', () =>{
        $('#result').html(number++);
    });

    $('#subOne').on('click', () =>{
        $('#result').html(number--);
    });
});