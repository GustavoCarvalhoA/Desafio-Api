async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try{
        const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
       var rua = document.getElementById('rua') 
       var bairro = document.getElementById('bairro') 
       var cidade = document.getElementById('cidade') 

       rua.innerHTML = data.logradouro;
       bairro.innerHTML = data.bairro;
       cidade.innerHTML = data.localidade;
    } catch (error) {
        alert('CEP não encontrado');
    }
}
async function getPrevisao() {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const horaAtual = new Date().toISOString();
    const texto = "Previsão do tempo na região:";

    try {
        document.getElementById('resposta2').innerHTML = texto;
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=America%2FSao_Paulo&forecast_from=${horaAtual}&forecast_hours=1`
        );
        const data = await response.json();

        if (data && data.hourly && data.hourly.temperature_2m && data.hourly.temperature_2m.length > 0) {
            const temperaturaAtual = data.hourly.temperature_2m[0];
            document.getElementById('resposta2').innerHTML += ` ${temperaturaAtual}ºC`;
        } else {
            document.getElementById('resposta2').innerHTML += `<div>Não há dados de temperatura disponíveis.</div>`;
            alert('coloque ponto no lugar de virgula')
            
        }
    } catch (error) {
        alert(error.message);
    }
}





