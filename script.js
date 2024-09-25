let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

images[currentIndex].classList.add('active');

setInterval(showNextImage, 5000);


document.querySelector('.header_menu_image').addEventListener('click', function() {
    document.querySelector('.header_menu').classList.toggle('active');
});