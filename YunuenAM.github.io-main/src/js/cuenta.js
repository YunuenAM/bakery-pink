

let usuarios = [
    {nombre: "Alejandro", correo:"alex@gmail.com", contraseña:"123za456&12"},
    {nombre: "María", correo:"maria@outlook.com", contraseña:"123za456&12"},
    {nombre: "Juan", correo:"juan@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Ana", correo:"ana@gmail.com", contraseña:"123za456&12"},
    {nombre: "Pedro", correo:"pedro@gmail.com", contraseña:"123za456&12"},
    {nombre: "Sofía", correo:"sofia@outlook.com", contraseña:"123za456&12"},
    {nombre: "Carlos", correo:"carlos@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Laura", correo:"laura@gmail.com", contraseña:"123za456&12"},
    {nombre: "Javier", correo:"javier@outlook.com", contraseña:"123za456&12"},
    {nombre: "Carmen", correo:"carmen@gmail.com", contraseña:"123za456&12"},
    {nombre: "Luis", correo:"luis@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Marta", correo:"marta@gmail.com", contraseña:"123za456&12"},
    {nombre: "Jorge", correo:"jorge@gmail.com", contraseña:"123za456&12"},
    {nombre: "Lucía", correo:"lucia@gmail.com", contraseña:"123za456&12"},
    {nombre: "Alberto", correo:"alberto@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Rosa", correo:"rosa@outlook.com", contraseña:"123za456&12"},
    {nombre: "Fernando", correo:"fer@gmail.com", contraseña:"123za456&12"},
    {nombre: "Elena", correo:"elena@gmail.com", contraseña:"123za456&12"},
    {nombre: "Diego", correo:"diego@yahoo.com", contraseña:"123za456&12"},
    {nombre: "Sara", correo:"sara@gmail.com", contraseña:"123za456&12"},
    {nombre: "Manuel", correo:"manuel@outlook.com", contraseña:"123za456&12"},
    {nombre: "Cristina", correo:"cris@outlook.com", contraseña:"123za456&12"}
];



function verificarCuenta(event) {
  event.preventDefault(); // Prevents page reload on login button click
  window.localStorage.setItem("usuario", "");
  window.localStorage.setItem("correo", "");
  window.localStorage.setItem("contraseña", "");

  Swal.fire({
    title: 'Welcome',
    text: 'You have successfully logged in!',
    timer: 2000,
    showConfirmButton: false
  }).then((result) => {
    window.location.href = "./index/bienvenida.html";
  });
}


   //Funcion para redirigir a la página de inicio de sesión

   function redirigir(){
      window.location.href = "#";
   }
   
   //Función para redirigir a la página de inicio de sesión

   
   function cerrarSesion(){
      window.localStorage.clear();
      window.location.href = "./";
   }

//seleccion de elementos del DOM

const btnIniciarSesion= document.getElementById("btn-iniciar-sesion");
const btnRegistrarse= document.getElementById("btn-registrarse");
const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

//Agregar evento a los botones

btnIniciarSesion.addEventListener("click", function(event){
    verificarCuenta(event);
});

if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", function(event) {
      cerrarSesion();
    });
  }