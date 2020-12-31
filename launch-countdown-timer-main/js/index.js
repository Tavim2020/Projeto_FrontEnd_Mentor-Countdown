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
    var diaDoDia = data.getDate();
    var dataHora = data.getHours();
    var dataMinuto = data.getMinutes();
    var dataSegundo = data.getSeconds();

    dia.innerHTML = diaDoDia;
    hora.innerHTML = dataHora;
    minuto.innerHTML = dataMinuto;

    var cowntdown = dataSegundo;
    var regressivo = 60 - dataSegundo;
    if(regressivo >= 10){
        segundo.innerHTML = regressivo;
        cowntdown++;
        regressivo = regressivo - 1;
    } else{
        segundo.innerHTML = '0' + regressivo;
        cowntdown++;
        regressivo = regressivo - 1;
    }

    var cowntdownMinute = dataMinuto;
    var regressivoMinute = 60 - dataMinuto;
    if(regressivoMinute >= 10){
        minuto.innerHTML = regressivoMinute;
        cowntdownMinute++;
        regressivoMinute = regressivoMinute - 1;
    } else{
        minuto.innerHTML = '0' + regressivoMinute;
        cowntdownMinute++;
        regressivoMinute = regressivoMinute - 1;
    }

    var cowntdownHora = dataHora;
    var regressivoHora = 24 - dataHora;
    if(regressivoHora >= 10){
        hora.innerHTML = regressivoHora;
        cowntdownHora++;
        regressivoHora = regressivoHora - 1;
    } else {
        hora.innerHTML = '0' + regressivoHora;
        cowntdownHora++;
        regressivoHora = regressivoHora - 1;
    }

    var cowntdownDia = diaDoDia;
    var regressivoDia = 31 - diaDoDia;
    if(regressivoDia >= 10){
        dia.innerHTML = regressivoDia;
        cowntdownDia++;
        regressivoDia = regressivoDia - 1;
    } else{
        dia.innerHTML = '0' + regressivoDia;
        cowntdownDia++;
        regressivoDia = regressivoDia - 1;
    }
    
    
// iniciando a animação que faz os números girarem 
    // segundos
    function inicializaRotate(){
            divFour.style.transition = '1s';
            divFour.style.transform = 'rotateX(360deg)';

            function resetDiv(){
                divFour.style.transition = '1s';
                divFour.style.transform = 'rotateX(-360deg)'; 
                setTimeout(inicializaRotate, 1000);
            }

            setTimeout(resetDiv, 1000);
        }
  
    setTimeout(inicializaRotate, 0);


    if(dataSegundo === 59){  
            divTree.style.transition = '1s';
            divTree.style.transform = 'rotateX(360deg)'
    }
    else if(dataSegundo === 30){
        divTree.style.transition = '0s';
        divTree.style.transform = 'rotateX(0deg)'
    }



    if(dataMinuto === 59){  
        function minute(){
            divTwo.style.transition = '1s';
            divTwo.style.transform = 'rotateX(360deg)';
        }
        setTimeout(minute, 59000)
    }
    else if(dataMinuto === 1){
        divTwo.style.transition = '0s';
        divTwo.style.transform = 'rotateX(0deg)'
    }
    

    if(dataHora === 23){  
        function horas(){
            divOne.style.transition = '1s';
            divOne.style.transform = 'rotateX(360deg)';
        }
        setTimeout(horas, 3599000)
    }



    else if(dataHora === 40){
        divOne.style.transition = '0s';
        divOne.style.transform = 'rotateX(0deg)'
    }

    setTimeout(atualiza, 1000);
}


window.addEventListener('load', atualiza);

