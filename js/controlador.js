// impoprtacion de elementos

import{llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"
import{agregarCarrito} from "./agregarAlCarrito.js"
import{verCarrito} from "./verCarrito.js"


//variables globales dela tienda
let producto={}
let carrito=[]


// LLAMO A FUNCION LLENARTIENDA

llenarTienda()


//llamo funcion ampliarInfoProducto

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    producto= ampliarInfoProducto(event)
    console.log(producto)
    modalInfoProducto.show()
    
})
//llamo a la funcion agregar al carrito

let botonAgregarCarrito=document.getElementById("botonAgregarProducto")
botonAgregarCarrito.addEventListener("click", function(){
    
    let cantidadProducto=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidadProducto

    

    //agrego el producto al carrito

    carrito.push(producto)
    //console.log(carrito)

    // oculto modal
    modalInfoProducto.hide()

    // llamar la funcion agregar carrito
    agregarCarrito(carrito)

})
// llamar a funcion ver carrito

    let botonVerCarrito=document.getElementById("botonCarrito")
    botonVerCarrito.addEventListener("click", function (event){
        verCarrito(carrito)

    })
    //detectar clic en el boton de limpiar
    let botonlimpiar=document.getElementById("botonlimpiar")
    botonlimpiar.addEventListener("click",function(){
        
        let contenedorModal=document.getElementById("contenedorCarrito")
        contenedorModal.innerHTML=""
        carrito=[]

        let pildora=document.getElementById("pildora")
        pildora.innerHTML=""
        pildora=[]


    })
    