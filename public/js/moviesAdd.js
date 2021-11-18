let botonAgregar = document.querySelector(".botonAgregar");
let title = document.querySelector("#title");
let calificacion = document.querySelector("#calificacion");
let premios = document.querySelector("#premios");
let fecha = document.querySelector("#fecha");
let duracion = document.querySelector("#duracion");
let genero = document.querySelector("#genero");
let error = document.querySelectorAll(".error");
let inputs = document.querySelectorAll("input");
let listado = document.querySelector("div.listado ul")
let errores = []

window.addEventListener("load", function(){
    let title = this.document.querySelector("#title");

    title.focus()
})

botonAgregar.addEventListener("click", function(e){
    e.preventDefault()
})

inputs.forEach( input => {
    input.addEventListener("blur", function(){
        if ( input.value === "") {
            input.classList.add("isInvalid")
            input.classList.remove("isValid")
        } else { 
            input.classList.remove("isInvalid");
            input.classList.add("isValid")}
    })
    }
)

botonAgregar.addEventListener("click", function(){
    listado.innerHTML=""
    if(title.value === ""){
        errores.push("el titulo esta vacio")
    } 
    if(calificacion.value === "") {
        errores.push("debe completar la calificacion")
    }
    if(premios.value === "") {
        errores.push("debe completar los premios")
    }
    if(fecha.value === "") {
        errores.push("debe completar la fecha")
    }
    if(duracion.value === "") {
        errores.push("debe completar la duracion")
    }
    if(genero.value === "") {
        errores.push("debe completar el genero")
    }

    if(errores.length>0){

        for(let i=0; i<errores.length; i++){
           listado.innerHTML += "<li>"+errores[i]+"</li>"
        }
    }
    errores=[]
})


