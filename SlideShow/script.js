
let active = 0; 
let timer = 3000;

let slides = document.querySelectorAll(".slide");
let slideshow = document.querySelector(".slideshow");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let points = document.querySelectorAll(".slides-points span");



function switchClasses() {
     //  remove all points
     points.forEach(point => {point.classList.remove("active"); })
     points[active].classList.add("active");
     
      //  remove all active
     slides.forEach(slide => {slide.classList.remove("active"); })
     slides[active].classList.add("active")     
     
    }
    
    
    let goNext = () => { 
        active = (active == slides.length - 1) ? 0 : active + 1 ;
        switchClasses()
    }
    let goPrev = () => { 
        active = (active == 0) ? slides.length - 1: active - 1;
        switchClasses()
    }
    

    points.forEach((point ,index) => {
        point.addEventListener("click", e => {
            active = index;
            switchClasses();
        })
    })
    
    prev.addEventListener("click", e => {
        goPrev()
    })
    
    next.addEventListener("click", e => {
    goNext();
})

var nextinterval = window.setInterval(goNext, timer);

slides.forEach(slide => {
    slide.addEventListener("mouseover", e => {
        clearInterval(nextinterval);
    })
    slide.addEventListener("mouseout", e => {
        nextinterval = window.setInterval(goNext, timer);
    })
 })
