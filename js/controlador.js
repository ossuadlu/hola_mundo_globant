// impoprtacion de elementos

import{llenarTienda} from "./llenarTienda.js"
import {ampliarInfoProducto} from "./ampliarInfoProducto.js"

// lLAMO A FUNCION LLENARTIENDA

llenarTienda()

//llamo funcion ampliarInfoProducto

let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))

let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click",function(event){

    ampliarInfoProducto(event)
    modalInfoProducto.show()
    
})