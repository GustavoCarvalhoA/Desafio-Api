window.addEventListener('scroll', function() {
    var div = document.getElementById('texto');
    var resultado = document.getElementById('resultado')
    var resposta = document.getElementById('resposta')
    var distanciaTopo = div.getBoundingClientRect().top;
    var distanciaTopo2 = resultado.getBoundingClientRect().top;
    var distanciaTopo3 = resposta.getBoundingClientRect().top;
    


    if (distanciaTopo < window.innerHeight * 0.90 || distanciaTopo2 < window.innerHeight *0.90 || distanciaTopo3 < window.innerHeight *0.90 ) {
        div.classList.add('visivel');
        div.classList.remove('escondida');
        resultado.classList.add('visivel');
        resultado.classList.remove('escondida');
        resposta.classList.add('visivel');
        resposta.classList.remove('escondida');

        

    } else {
        div.classList.add('escondida');
        div.classList.remove('visivel');
        resultado.classList.add('escondida');
        resultado.classList.remove('visivel');
        resposta.classList.add('escondida');
        resposta.classList.remove('visivel');
        
    }
});