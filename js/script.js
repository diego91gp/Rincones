window.onload = function () {

   let menu = document.querySelector("#muestra-menu");
   menu.addEventListener("click", muestra);
   let menuizq = document.querySelector(".muestramenu");
   let wrapper = document.querySelector(".wrapper");
   let tapa = document.querySelector(".destapa");
   let navp = document.querySelector("#navpeque");
   let icono = document.querySelectorAll(".fa-solid");

//si apreto los links del submenu del nav vista movil se destapa
if (document.querySelectorAll(".link")!=null){
   for (const link of document.querySelectorAll(".link")) {
      link.addEventListener("click", muestra);
   }
}
  
   //funcion para cargar elementos al scrollear
   window.addEventListener('scroll', muestracontenido);
   //si hago reload a la pagina carga el contenido
   window.onloadeddata = muestracontenido();

if(document.querySelector("#desplegamenupeq")!=null){
   let checkbox = document.querySelector("#desplegamenupeq");

   checkbox.addEventListener('change',()=> {
      if (checkbox.checked) {
         setTimeout(() => {
            checkbox.parentElement.nextElementSibling.style.display = "flex";
         }, 150);
         checkbox.parentElement.parentElement.style.marginBottom = "150px";
      } else {
         checkbox.parentElement.nextElementSibling.style.display = "none";
         checkbox.parentElement.parentElement.style.marginBottom = "0";
      }
   });
}
   
   function muestracontenido() {
      let elementos = document.getElementsByClassName("elemento");
      let tamañoVentana = window.innerHeight;

      for (const elemento of elementos) {
         elemento.getBoundingClientRect().top < tamañoVentana ? setTimeout(() => {
            elemento.classList.add("visible")
         }, 100) : elemento.classList.remove("visible");
      }
   };

   function muestra() {
      if (menuizq.style.left == "-120px") {
         icono[0].style.opacity = "0";
         icono[1].style.opacity = "1";
         menuizq.style.left = "0";
         wrapper.style.left = "100px";
         document.body.style.overflow = "hidden";
         navp.style.backgroundColor = "black";
         navp.style.color = "white";
         tapa.classList.replace("destapa", "tapa");
      } else {
         icono[0].style.opacity = "1";
         icono[1].style.opacity = "0";
         menuizq.style.left = "-120px";
         wrapper.style.left = "0";
         navp.style.backgroundColor = "rgba(42, 40, 40, 0.816)";
         navp.style.color = "black";
         document.body.style.overflowY = "scroll";
         tapa.classList.replace("tapa", "destapa");
      }
   }
}