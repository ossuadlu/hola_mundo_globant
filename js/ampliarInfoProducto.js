export function ampliarInfoProducto(event){
    let producto={}

    if(event.target.classList.contains("btn")){
        console.log(event.target.parentElement)
        console.log (event.target.parentElement.querySelector("h5").textContent)
        console.log (event.target.parentElement.querySelector("h6").textContent)
        console.log (event.target.parentElement.querySelector("img").src)

        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h5").textContent,
            precio:event.target.parentElement.querySelector("h6").textContent
           
        }

        let etiquetaNombreProducto=document.getElementById("nombreProducto")
        etiquetaNombreProducto.textContent=producto.nombre

        let etiquetaPrecioProducto=document.getElementById("precioProducto")
        etiquetaPrecioProducto.textContent=producto.precio

        let etiquetaimagenTienda=document.getElementById("imagenProducto")
        etiquetaimagenTienda.src=producto.foto

        let etiquetadescripcionProducto=document.getElementById("descripcionProducto")
        etiquetadescripcionProducto.textContent=producto.descripcion

        return producto
    }
}