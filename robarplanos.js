//Declarando la funcion principal
//Cuando filtro un arreglo se crea un nuevo arreglo 
//Por cada método se crea una función anónima

function recibirPlanos(n1, n2, n3, n4, n5, n6, n7,n8, n9, n10, callback){
    //Proceso de la funcion principl
    setTimeout(function(){
        let planos=[n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
        let planosFiltrados=planos.filter(function(plano){
            return(plano>=1 && plano<=10)
        }) 
        callback(planosFiltrados)
    },5000)
}

//Llamando la funcion principal
recibirPlanos(10, 6,5, 100, 150, 250, 300, 400, 500, 1000, function(planosFiltrados){
    if(planosFiltrados.length>0){
        console.log("Puedes irte, hay " + planosFiltrados.length + " planos")
    }
    else{
        console.log("Devuelvete")
    }
})