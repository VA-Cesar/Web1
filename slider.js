let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlides();
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlides();
});

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
    });
}

// Inicializa el slider
updateSlides();
