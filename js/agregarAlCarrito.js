 export function agregarCarrito(carrito){
     
// crear una referencia a la ppildora del carrito
let pildora=document.getElementById("pildora")
pildora.classList.remove("invisible")

console.log(carrito)

// rutina para recorrer el carrito y sumar las cantidades

let contador=0

carrito.forEach(function(producto){

    console.log(producto.cantidad)
    contador=contador+Number(producto.cantidad)

})

pildora.textContent=contador


}