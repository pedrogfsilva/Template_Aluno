let button = document.getElementById('order');
let result = document.getElementById('result');
let array = [];

button.addEventListener('click', () =>{
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let name3 = document.getElementById('name3').value;

    array.push(name1);
    array.push(name2);
    array.push(name3);

    let newArray = array.sort();

    result.innerHTML = `Aqui estão os nomes em ordem alfabética crescente: ${newArray[0]}, ${newArray[1]}, ${newArray[2]}`;

    name1 = '';
    name2 = '';
    name3 = '';
});