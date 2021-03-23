const controlDesign = document.querySelector(".control__item--design");
const controlMath = document.querySelector(".control__item--math");
const controlNight = document.querySelector(".control__item--night");

const sliderDesign = document.querySelector(".slider__item--design");
const sliderMath = document.querySelector(".slider__item--math");
const sliderNight = document.querySelector(".slider__item--night");



controlDesign.addEventListener("click", function(evt) {
  evt.preventDefault();
  controlDesign.classList.add("control__item--current");  
  controlMath.classList.remove("control__item--current"); 
  controlNight.classList.remove("control__item--current"); 

  sliderDesign.classList.add("slider__item--current");
  sliderMath.classList.remove("slider__item--current");
  sliderNight.classList.remove("slider__item--current");
});

controlMath.addEventListener("click", function(evt) {
  evt.preventDefault();
  controlMath.classList.add("control__item--current");
  controlDesign.classList.remove("control__item--current"); 
  controlNight.classList.remove("control__item--current"); 

  sliderMath.classList.add("slider__item--current"); 
  sliderDesign.classList.remove("slider__item--current");
  sliderNight.classList.remove("slider__item--current");
});

controlNight.addEventListener("click", function(evt) {
 evt.preventDefault(); 
 controlNight.classList.add("control__item--current"); 
 controlDesign.classList.remove("control__item--current");
 controlMath.classList.remove("control__item--current");

 sliderNight.classList.add("slider__item--current");
 sliderDesign.classList.remove("slider__item--current");
 sliderMath.classList.remove("slider__item--current");
});
