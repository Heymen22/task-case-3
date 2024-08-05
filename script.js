const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const currentIndexText = document.getElementById('current-index');
const totalImagesText = document.getElementById('total-images');
totalImagesText.textContent = images.length;

document.getElementById('next').addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider();
});

function updateSlider() {
    sliderImage.src = images[currentIndex];
    currentIndexText.textContent = currentIndex + 1;
}