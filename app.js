//FIFO 
//Un callback es una llamada de espera 
function iniciar() {
    console.log("Estoy iniciando")
}

function procesar() {
    setTimeout(function(){},5000) //5000 equivale a 5 segundos 
    console.log("Estoy procesando")
}

function terminar() {
    console.log("Estoy terminando")
}

iniciar()
procesar()
terminar()

