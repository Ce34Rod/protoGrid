// Slide Show
const slideshowImages = document.querySelectorAll(".slideshow-img");
const nextImageDelay = 4000;
let currentImageCounter = 0;
setInterval(nextImage, nextImageDelay);
slideshowImages[currentImageCounter].style.opacity = 1;

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
}
