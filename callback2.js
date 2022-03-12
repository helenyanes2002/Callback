//Procesos asincronos se ejecuta una cosa y luego otra 

//Declaro la funcion pincipal 
function crearUsuario(nombre, edad, callback){
    setTimeout(function(){
        //Proceso principal
        let usuario={
            nombreUsuario: nombre,
            edadUsuario: edad
        }
        //Llamando al callback
        callback(usuario)
    }, 8000)
}

//Llamo a la funcion principal
crearUsuario("Carolina", 30, function(usuario){
    if(usuario.edadUsuario>=18){
        console.log("Bienvenido")
    }else{
        console.log("ups no puedes ingresar")
    }
})