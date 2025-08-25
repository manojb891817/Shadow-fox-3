let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 4000); // Change every 4 seconds

// Auto-scroll testimonials
const testimonialContainer = document.querySelector('.testimonial-container');
if (testimonialContainer) {
    setInterval(() => {
        testimonialContainer.scrollBy({ left: 320, behavior: 'smooth' });
        if (testimonialContainer.scrollLeft + testimonialContainer.clientWidth >= testimonialContainer.scrollWidth) {
            testimonialContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 4000);
}

