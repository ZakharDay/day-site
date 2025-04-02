function initSlider(slider) {
  console.log('slider', slider)
}

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider')

  if (sliders) {
    sliders.forEach((slider) => {
      initSlider(slider)
    })
  }
})
