window.onload = function () {
   
   let menu = document.querySelector("#muestra-menu");
   menu.addEventListener("click", muestra);
   let menuizq = document.querySelector(".muestramenu");
   let wrapper = document.querySelector(".wrapper");
   let tapa = document.querySelector(".destapa");
   let navp=document.querySelector("#navpeque");
   let icono = document.querySelectorAll(".fa-solid");
   //funcion para cargar elementos al scrollear
   window.addEventListener('scroll', muestracontenido);

   function muestracontenido() {
      let elementos = document.getElementsByClassName("elemento");
      let tamañoVentana = window.innerHeight;

      for (const elemento of elementos) {

         elemento.getBoundingClientRect().top < tamañoVentana ? setTimeout(() => {
            elemento.classList.add("visible")
         }, 150) : elemento.classList.remove("visible");
      }

   };
  
   function muestra() {
      if (menuizq.style.left == "-100px") {
         icono[0].style.opacity="0";
         icono[1].style.opacity="1";
         menuizq.style.left = "0";
         wrapper.style.left = "100px";
         document.body.style.overflow = "hidden";
         navp.style.backgroundColor = "black";
         navp.style.color = "white";
         tapa.classList.replace("destapa", "tapa");

      } else {
         icono[0].style.opacity="1";
         icono[1].style.opacity="0";
         menuizq.style.left = "-100px";
         wrapper.style.left = "0";
         navp.style.backgroundColor = "rgba(42, 40, 40, 0.816)";
         navp.style.color = "black";
         document.body.style.overflowY = "scroll";
         tapa.classList.replace("tapa", "destapa");

      }
      // tapa.classList.replace("destapa","tapa");
   }


}