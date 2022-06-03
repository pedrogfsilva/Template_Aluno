let needCreateForm = true;
$('#createForm').on('click', () =>{
    let averageStudent = '';
    let wholeAverage = 0; 
    let examAverage = 0;
    let jobAverage = 0;
    let arrayNumbersExam = [];
    let arrayNumbersJob = [];

    if(needCreateForm){
        var qtdStudents = $('#students').val();
        let output = '<br>';

        for(let i = 0; i < qtdStudents; i++){
            output += `Aluno ${i + 1} - Nota Prova: <input type="number" class="exam"> Nota trabalho: <input type="number" class="job"><br><br>`;
        }
        output += '<input type="submit" value="Relizar cálculos" id="doCalc">'; 
        $('#form').append(`${output}`);

        var notesExam = document.querySelectorAll('input.exam');
        var notesJob = document.querySelectorAll('input.job');
    }

    $('#doCalc').on('click', () =>{
        for(let i = 0; i < qtdStudents; i++){
            averageStudent += `<br>A média do estudante ${i + 1} é ${(parseInt(notesExam[i].value) + parseInt(notesJob[i].value)) / 2}<br>`;
        }
        $('#form').append(`${averageStudent}`);

        for(let i = 0; i < qtdStudents; i++){
            wholeAverage += parseInt(notesExam[i].value) + parseInt(notesJob[i].value);
        }
        wholeAverage = wholeAverage / qtdStudents;
        $('#form').append(`<br>A média geral é igual a ${wholeAverage}<br>`);

        for(let i = 0; i < qtdStudents; i++){
            examAverage += parseInt(notesExam[i].value);
        }
        examAverage = examAverage / qtdStudents;
        $('#form').append(`<br>A média aritimética das notas da prova é ${examAverage}<br>`);

        for(let i = 0; i < qtdStudents; i++){
            jobAverage += parseInt(notesJob[i].value);
        }
        jobAverage = jobAverage / qtdStudents;
        $('#form').append(`<br>A média aritimética das notas do trabalho ${jobAverage}<br>`);

        for(let i = 0; i < qtdStudents; i++){
            arrayNumbersExam.push(notesExam[i].value);
        }
        arrayNumbersExam = arrayNumbersExam.sort((a, b) => a - b);
        $('#form').append(`<br>A menor nota da prova é ${arrayNumbersExam[0]} e a maior nota da prova é ${arrayNumbersExam[arrayNumbersExam.length - 1]}<br>`);

        for(let i = 0; i < qtdStudents; i++){
            arrayNumbersJob.push(notesJob[i].value);
        }
        arrayNumbersJob = arrayNumbersJob.sort((a, b) => a - b);
        $('#form').append(`<br>A menor nota do trabalho é ${arrayNumbersJob[0]} e a maior nota do trabalho é ${arrayNumbersJob[arrayNumbersJob.length - 1]}<br>`);
    });

    needCreateForm = false;
});