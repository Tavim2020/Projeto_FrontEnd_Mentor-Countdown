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
    if(dataSegundo === cowntdown){
        segundo.innerHTML = regressivo;
        cowntdown++;
        regressivo = regressivo - 1;
        
    }

    var cowntdownMinute = dataMinuto;
    var regressivoMinute = 60 - dataMinuto;
    if(dataMinuto === cowntdownMinute){
        minuto.innerHTML = regressivoMinute;
        cowntdownMinute++;
        regressivoMinute = regressivoMinute - 1;
    }

    var cowntdownHora = dataHora;
    var regressivoHora = 24 - dataHora;
    if(dataHora === cowntdownHora){
        hora.innerHTML = regressivoHora;
        cowntdownHora++;
        regressivoHora = regressivoHora - 1;
    }

    var cowntdownDia = diaDoDia;
    var regressivoDia = 31 - diaDoDia;
    if(diaDoDia === cowntdownDia){
        dia.innerHTML = regressivoDia;
        cowntdownDia++;
        regressivoDia = regressivoDia - 1;
    }
    

    requestAnimationFrame(atualiza);
}


window.addEventListener('load', atualiza);




function reseta(){
    function rotate(){
        setTimeout(reseta, 1000)
    }
    divFour.style.transition = '1s';
    divFour.style.transform = 'rotateX(180deg)';
    requestAnimationFrame(rotate);
}

requestAnimationFrame(reseta);

function resetDiv(){
    function resetTimeOut(){
        setTimeout(resetDiv, 1000)
    }

    divFour.style.transition = '0s';
    divFour.style.transform = 'rotateX(0deg)';
    requestAnimationFrame(resetTimeOut)
}

setTimeout(resetDiv,1000)
