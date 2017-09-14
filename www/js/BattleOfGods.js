let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;

const GokuSigueVivo = () => 0
const AmbosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
const AmbosMuertos = () => vidaGoku === 0 && vidaSuperman === 0
 
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

while(AmbosSiguenVivos()){
    round++;
    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
    if(golpeGoku > golpeSuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
        vidaSuperman -= golpeGoku
        console.log(`Superman queda en ${vidaSuperman} de vida`)
    }else{
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
        vidaGoku -= golpeSuperman
        console.log(`Goku queda en ${vidaGoku} de vida`)
        if(vidaGoku <= 20){
            const Genkidama = 100;
            console.log("Goku pide ayuda a los humanos para hacer la Genkidama" + Genkidama),
            vidaSuperman -= Genkidama
            console.log(`Superman queda en ${vidaSuperman} de vida`)
        }
    }
    
}

if(GokuSigueVivo()){
    console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`)
} else{
    console.log(`Superman gana la pelea. Su vida es de: ${vidaSuperman}`)
}