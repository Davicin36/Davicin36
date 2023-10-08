function aleatorio( min , max ) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1){
        resultado = "piedra"
    }else if (jugada == 2){
        resultado = "papel"
    }else if (jugada == 3){
        resultado = "tijera"
    }else if (jugada == 4){
        resultado = "lagarto"
    }else if (jugada == 5){
        resultado = "spock"
    }else {
        resultado = "FALLASTE";
    }; return resultado
}
let jugador=0
let pc=0
let vencer=0
let perder=0

//1 piedra gana a 3 y 4, 2 para papel gana a 1 y 5, 3 para tijera gana a 2 y 4, 4 para lagarto gana a 2 y 5, 5 para spock gana a 1 y 3

while( vencer<3 && perder<3) {
    pc=aleatorio (1,5)
    jugador=prompt ("Elige: 1 para 🥌, 2 para 🧻, 3 para ✂, 4 para 🦎, 5 para 🖖")
    alert ("pc elige: " + eleccion(pc))
    alert ("Elegiste: " + eleccion(jugador))

// COMBATE
    if (pc==jugador){
        alert("EMPATE")
    }else if (jugador == 1 && pc == 3){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 1 && pc == 4){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 2 && pc == 1){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 2 && pc == 5){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 3 && pc == 2){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 3 && pc == 4){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 4 && pc == 2){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 4 && pc == 5){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 5 && pc == 1){
            alert("GANASTE")
            vencer = vencer + 1
    }else if (jugador == 5 && pc == 3){
            alert("GANASTE")
            vencer = vencer + 1
    }else {
            alert("PERDISTE")
            perder = perder + 1
    }
}

alert ("Ganaste "+ vencer +" veces. Perdiste "+ perder +" veces.")

