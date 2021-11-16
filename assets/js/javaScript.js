/**
 * Obtener porcentaje de scroll;
 */

window.addEventListener("scroll" ,function(){
    
    progreso();
    
});

function progreso(){
    // scroll top devuelve ls pixeles que hay hasta la parte de arriba del documento
    let scroll = document.documentElement.scrollTop; 
    // scroll height es una medida de la altura del contenido de un elemento , 
    //incluyendo el contenido que no es visible en la pantalla debido al desbordamiento
    // clientHeight es la medida de la pantalla en px
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // progreso devuelve el scrol que hacemos en el doc en terminos de % (hay qe redondear)
    let progreso =  Math.round((scroll / alto) * 100);
    let borde = document.getElementsByClassName("borde")[0];
    progreso = progreso / 20;
   
    if (progreso < 1.0 ) {
        borde.style.boxShadow = `#f10000 0px 0px ${(progreso * 1.2)}px ${progreso}px `;
    }
    if(progreso > 2.0 ) {
        borde.style.boxShadow = `#ecfd00 0px 0px ${(progreso * 2)}px ${(progreso * 2)}px `;
    }
    if(progreso > 3.0 ) {
        borde.style.boxShadow = `#1100fd 0px 0px ${(progreso *4)}px ${(progreso * 2.5)}px `;
    }
    if(progreso > 4.0 ) {
        borde.style.boxShadow = `#27c500 0px 0px ${(progreso * 6)}px ${(progreso * 3)}px `;
    } 
}
/**
 * ScrollReveal
 */
ScrollReveal().reveal('.objetivos',{delay:400});
ScrollReveal().reveal('.perfil',{delay:400});
ScrollReveal().reveal('.estudios',{delay:400});
ScrollReveal().reveal('.experiencia',{delay:400});


/**
 * Slider
 * 
 */

 const slider = document.querySelector("#slider");
 let sliderSection = document.querySelectorAll(".slider__section");
 let sliderSectionLast = sliderSection[sliderSection.length -1];
 
 const btnLeft = document.querySelector("#btn-left");
 const btnRight = document.querySelector("#btn-right");
 
 slider.insertAdjacentElement('afterbegin', sliderSectionLast);
 
 function Next() {
     let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
     slider.style.marginLeft = "-200%";
     slider.style.transition = "all 0.5s";
     setTimeout(function(){
         slider.style.transition = "none";
         slider.insertAdjacentElement('beforeend', sliderSectionFirst);
         slider.style.marginLeft = "-100%";        
     },500);
 }
 
 function Prev() {
     let sliderSection = document.querySelectorAll(".slider__section");
     let sliderSectionLast = sliderSection[sliderSection.length -1];
     slider.style.marginLeft = "0";
     slider.style.transition = "all 0.5s";
     setTimeout(function(){
         slider.style.transition = "none";
         slider.insertAdjacentElement('afterbegin', sliderSectionLast);
         slider.style.marginLeft = "-100%";        
     },500);
 }
 
 btnRight.addEventListener('click',function(){
     Next();
 });
 
 btnLeft.addEventListener('click',function(){
     Prev();
 });
 
 setInterval(function() {
     Next();
 }, 4000);
 
