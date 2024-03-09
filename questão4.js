// Questão 4

//resposta: 

/*
1. *Primeira ida:*
   - Ligue o primeiro interruptor e aguarde alguns minutos.
   - Desligue o primeiro interruptor e ligue o segundo interruptor.
   - Deixe o terceiro interruptor desligado.

2. *Segunda ida:*
   - Vá até a sala das lâmpadas.
   - A lâmpada acesa está conectada ao primeiro interruptor.
   - Toque a lâmpada que ainda está quente.
   - A lâmpada que estava desligada e quente está conectada ao segundo interruptor.
   - A lâmpada que estava desligada e fria está conectada ao terceiro interruptor.
*/

const lampadas = [false, false, false]; 
const interruptores = [false, false, false]; 


function primeiraIda() {

    interruptores[0] = true;

    setTimeout(function() {
       
        interruptores[0] = false;
        interruptores[1] = true;
    }, 3000);
}

function segundaIda() {
  
    const lampadaAcesa = lampadas.findIndex(lampada => lampada === true);
    console.log("A lampada acesa esta conectada ao interruptor " + (lampadaAcesa + 1));

    const lampadaQuente = lampadas.findIndex(lampada => lampada === true && interruptores[lampada] === false);
    console.log("A lampada que estava desligada e quente esta conectada ao interruptor " + (lampadaQuente + 1));
  
    const lampadaFria = lampadas.findIndex(lampada => lampada === false && interruptores[lampada] === false);
    console.log("A lampada que estava desligada e fria esta conectada ao interruptor " + (lampadaFria + 1));
}

primeiraIda();
setTimeout(segundaIda, 5000); 