$('#pedro').on('mouseover', () =>{
    $('#pedro').css('width', '100%');
});

$('#pedro').on('mouseout', () =>{
    $('#pedro').css('width', '70%');
});

$('h3').on('mouseover', () =>{
    $('h3').css('color', '#2155CD');
});

$('h3').on('mouseout', () =>{
    $('h3').css('color', '#2155CD');
});

$('#perfil').before('<hr>');

let ajax = new XMLHttpRequest();
ajax.open('GET', '/curriculo', true);

ajax.onreadystatechange = () =>{
    if(ajax.status === 200 && ajax.readyState === 4){
        let response = JSON.parse(ajax.responseText);
        console.log(response);
        $('#firstName').html(response[0].nome);
        $('#lastName').html(response[0].sobrenome);
        $('#education').html(response[0].formacao);
    }
}

ajax.send();