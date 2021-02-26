let slides = document.querySelectorAll('.portfolio__slide')

let activeSlide = 0
setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i]
        slide.style = 'opacity:0'
    }
    let currentSlide=slides[activeSlide]
    currentSlide.style='opacity:1'
    activeSlide++
    if(activeSlide>=slides.length){
        activeSlide=0
    }
}, 3000)

