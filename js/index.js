var divOne = document.querySelector('#conteudo1');
var divTwo = document.querySelector('#conteudo2');
var divTree = document.querySelector('#conteudo3');
var divFour = document.querySelector('#conteudo4');


function atualiza(){
    var dia = document.querySelector('#dias');
    var hora = document.querySelector('#horas');
    var minuto = document.querySelector('#minutos');
    var segundo = document.querySelector('#segundos');

    var data = new Date();
    var diaAtual = data.getDate();
    var dataHora = data.getHours();
    var dataMinuto = data.getMinutes();
    var dataSegundo = data.getSeconds();


    var regressivo = 60 - dataSegundo;
    if(regressivo >= 10){
        segundo.innerHTML = regressivo;
    } else{
        segundo.innerHTML = '0' + regressivo;
    }

    var regressivoMinute = 60 - dataMinuto;
    if(regressivoMinute >= 10){
        minuto.innerHTML = regressivoMinute;
    } else{
        minuto.innerHTML = '0' + regressivoMinute;
    }

    var regressivoHora = 24 - dataHora;
    if(regressivoHora >= 10){
        hora.innerHTML = regressivoHora;
    } else {
        hora.innerHTML = '0' + regressivoHora;
    }

    var regressivoDia = 31 - diaAtual;
    if(regressivoDia >= 10){
        dia.innerHTML = regressivoDia;
    } else{
        dia.innerHTML = '0' + regressivoDia;
    }
    
    
// iniciando a animação que faz os números girarem 
    // segundos
    function inicializaRotate(){
            divFour.style.transition = '1s';
            divFour.style.transform = 'rotateX(360deg)';

            function reverseDiv(){
                divFour.style.transition = '1s';
                divFour.style.transform = 'rotateX(-360deg)'; 
                setTimeout(inicializaRotate, 1000);
            }

            setTimeout(reverseDiv, 1000);
        }
  
    setTimeout(inicializaRotate, 0);


    // minutos
    if(dataSegundo === 59){  
            divTree.style.transition = '1s';
            divTree.style.transform = 'rotateX(360deg)'
    }
    else if(dataSegundo === 30){
        divTree.style.transition = '0s';
        divTree.style.transform = 'rotateX(0deg)'
    }


    // horas
    if(dataMinuto === 59){  
        function minuteRotate(){
            divTwo.style.transition = '1s';
            divTwo.style.transform = 'rotateX(360deg)';
        }
        setTimeout(minuteRotate, 59000)
    }
    else if(dataMinuto === 1){
        divTwo.style.transition = '0s';
        divTwo.style.transform = 'rotateX(0deg)'
    }
    
    // dias
    if(dataHora === 23){  
        function hoursRotate(){
            divOne.style.transition = '1s';
            divOne.style.transform = 'rotateX(360deg)';
        }
        setTimeout(hoursRotate, 3599000)
    }



    else if(dataHora === 40){
        divOne.style.transition = '0s';
        divOne.style.transform = 'rotateX(0deg)'
    }

    setTimeout(atualiza, 1000);
}


window.addEventListener('load', atualiza);