let pedroPhoto = document.getElementsByTagName('img')[0];

pedroPhoto.addEventListener('mouseover', () =>{
    pedroPhoto.style.width = '100%';
});

pedroPhoto.addEventListener('mouseout', () =>{
    pedroPhoto.style.width = '70%';
});

// let container = document.getElementsByClassName('container')[0];
// let row = document.createElement('hr');

// container.appendChild(row);

$('#perfil').before('<hr>');