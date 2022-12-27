let dia = document.getElementById('dias')
let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundo = document.getElementById('segundos')
const lancamento = '2022 dec 31'

function countDown(){
    const dataLancamento = new Date(lancamento);
    const dataAtual = new Date();
    
    const totalSegundos = (dataLancamento - dataAtual)/1000;
    
    const finalDias = Math.floor(totalSegundos/60/60/24); 
    const finalHoras = Math.floor(totalSegundos/60/60)%24;
    const finalMinutos = Math.floor(totalSegundos/60)%60;
    const finalSegundos = Math.floor(totalSegundos)%60;
    dia.innerHTML = finalDias + 'D';
    hora.innerHTML = finalHoras + 'H';
    minuto.innerHTML = finalMinutos + 'M';
    segundo.innerHTML = finalSegundos + 'S'; 
}

countDown();
setInterval(countDown, 1000)