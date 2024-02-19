const carousel = document.querySelector('.carousel');
let currentIndex =0;

function showNexImage(){
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}


function updateCarousel(){
    const traslateValue = currentIndex * 100;
    carousel.style.transform = `translateX(${traslateValue}vw)`;
}

setInterval(showNexImage, 3000);