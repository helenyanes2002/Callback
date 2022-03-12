//Un parametro es una variable local 

//Un callback es una funcion secudaria que sirve como parametro de la 
//funcion principal y solo se llama si el proceso de la funcion principal
//ha ejecutado

//Declarando la funcion principal 
function principal(nombre,callback){

    setTimeout(function(){
        //Proceso (qué hace está función)
        console.log("hola "+nombre)
        callback()
    }, 4000)
}

//Llamando la funcion principal
principal("Helen Yanes",function(){
    console.log("Cómo estás? soy el callback")
})