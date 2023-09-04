const pedra = document.querySelector('#pedra')
const paper = document.querySelector('#paper')
const tisores = document.querySelector('#tisores')
const resultatJugador = document.querySelector('#resultatJugador')
const resultatMaquina = document.querySelector('#resultatMaquina')
const marcadorResultat = document.querySelector('#marcadorResultat')

let marcadorOponent = 0
let marcadorJugador = 0

pedra.addEventListener('click', ()=> {
    resultatJugador.innerHTML = `✊`
    jugar(1)
})

paper.addEventListener('click', () => {
    resultatJugador.innerHTML = `🖐`
    jugar(2)
})

tisores.addEventListener('click', ()=> {
    resultatJugador.innerHTML = '✌️'
    jugar(3)
})

function jugar(resultatJugador){

    const opcionsContrincant = [1, 2, 3]
    const opcioResultant = opcionsContrincant[Math.round(Math.random()*2)]

    if (opcioResultant == 1) {
        resultatMaquina.innerHTML = '✊'
    } else if (opcioResultant == 2) {
        resultatMaquina.innerHTML = '🖐'
    } else if (opcioResultant == 3) {
        resultatMaquina.innerHTML = '✌️'
    } else {
        console.log("algun error")
    }
    
    if (opcioResultant == resultatJugador ) {
        marcadorResultat.textContent = "Empate"
    } else if (opcioResultant == 1 && resultatJugador == 2 || opcioResultant == 2 && resultatJugador == 3 || opcioResultant == 3 && resultatJugador == 1) {
        marcadorResultat.textContent = "You win"
        marcadorJugador += 1
    } else if (opcioResultant == 1 && resultatJugador == 3 || opcioResultant == 2 && resultatJugador == 1 || opcioResultant == 3 && resultatJugador == 2) {
        marcadorResultat.textContent = "You lose"
        marcadorOponent += 1
    } else {
        console.log("Something went wrong")
    }

    document.querySelector('#marcadorJugador').textContent = marcadorJugador;
    document.querySelector('#marcadorMaquina').textContent = marcadorOponent;
    
}