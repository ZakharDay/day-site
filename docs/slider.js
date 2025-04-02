/******/ (() => { // webpackBootstrap
function initSlider(slider) {
  console.log('slider', slider);
}
document.addEventListener('DOMContentLoaded', function () {
  var sliders = document.querySelectorAll('.slider');
  if (sliders) {
    sliders.forEach(function (slider) {
      initSlider(slider);
    });
  }
});
/******/ })()
;