// es una funcion para llenar dinamicamente la tienda

 export function llenarTienda(){

let productos =[

    {nombre: "cafetera",precio: "300000",foto:" ../imgTienda/tienda1",descripcion: "cafetera para dos personas"},
    {nombre: "pantuflas", precio: "100000", foto: "../imgTienda/tienda2",descripcion: " comodas, material peluche, termicas" },
    {nombre: "taser", precio: "250000", foto: "../imgTienda/tienda3", descripcion: "bateria recargable, 110 voltios"},
    {nombre: "radio AM- FM", precio: "90000", foto: "../imgTienda/tienda4", descripcion: "hermoso radio bluetooh, con auriculares y cargador"},
    {nombre: "tapabocas r-95", precio: "30000", foto: "../imgTienda/tienda5", descripcion: " lindos diseños comodos r-95"},
    {nombre: "kit escolar", precio: "50000",foto: "../imgTienda/tienda6", descripcion: "cuaderno, colores, lapiceros, lindos y tiernos motivos"},
    {nombre: "cubrelecho", precio: "200000",foto: "../imgTienda/tienda7", descripcion:" algodon lindos diseñoa para cama sencilla" },
    {nombre: "grapadora", precio: "25000",foto: "../imgTienda/tienda8", descripcion:" duo grapadoras portatiles faciles de utilizar"},
    {nombre: "cojines", precio: "50000",foto: "../imgTienda/tienda9", descripcion:" duo de cojines 100% algodon cubiertos con tela termica"},
    {nombre: "juego de baño", precio: "150000",foto: "../imgTienda/tienda10", descripcion:" hermosos tapetes para decorar tu baño impermeables"}
]

//Rutina para recorrer el arreglo y crear las tarjetas de cada producto

   //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
   let fila=document.getElementById("fila")

   //2. Necesito recorrer un arreglo
   productos.forEach(function(producto){

    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagenTienda=document.createElement("imgTienda")
    imagenTienda.classList.add("card-img-top")
    imagenTienda.classList.add("p-3")
    imagenTienda.classList.add("h-100")
    imagenTienda.src=producto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    let nombre=document.createElement("h5")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("mx-3")
    nombre.textContent=producto.nombre

    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.classList.add("text-muted")
    precio.textContent="$"+producto.precio

    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")
    botonAmpliarInfo.textContent="Ver producto"


    //VAMOS A ANCLAR (PONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE
    tarjeta.appendChild(imagenTienda)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    

   })








}







