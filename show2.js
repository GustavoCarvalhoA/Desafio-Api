window.addEventListener('scroll', function() {
    var div2 = document.getElementById('texto2');
    var resposta2 = document.getElementById('resposta2')
    var distanciaTopo = div2.getBoundingClientRect().top;
    var distanciaTopo3 = resposta2.getBoundingClientRect().top;
    if (distanciaTopo < window.innerHeight * 0.90 || distanciaTopo3 < window.innerHeight *0.90 ) {
        div2.classList.add('visivel');
        div2.classList.remove('escondida');
        resposta2.classList.add('visivel');
        resposta2.classList.remove('escondida');
    } else {
        div2.classList.add('escondida');
        div2.classList.remove('visivel');
        resposta2.classList.add('escondida');
        resposta2.classList.remove('visivel');
        
    }
});