//0. IMPORTO LIBRERIA DE AUTENTICACION
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

//1. Para registrar a una persona en su app
let botonRegistro=document.getElementById("botonregistro")

 // 1.1 creo referencia global a la ventana modal
let modalLogin=new boostrap.Modal(document.getElementById("modallogin"))
let mensajelogin=document.getElementById("mensajelogin")

botonRegistro.addEventListener("click",function(event){
    event.preventDefault()
    
    //obtenemos el valor de cada input del formulario
    let email=document.getElementById("cajaemail").value
    let password=document.getElementById("cajapassword").value

    //VALIDAR EL FORMULARIO


    //AGREGAR LA RUTINA PARA LLEVAR LOS DATOS FIREBASE
    //(HABLAR CON EL BACK)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    mensajelogin.textContent= "registro exitoso"
    modalLogin.show()
    console.log("TODO BN PAPA")
    })

    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

        mensajelogin.textContent=`Error: ${errorCode} : ${errormessege}`
        modalLogin.show()
        console.log("ERROR")

    });

})