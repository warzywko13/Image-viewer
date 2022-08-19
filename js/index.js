import openImage from "./components/openImage.js";

/* Settings */
const images = document.querySelectorAll('.image-gallery img');
const imageGallery = document.querySelector('.image-gallery');

images.forEach(
    (img, id) => img.addEventListener('click', () => {
        openImage(imageGallery, images, id);
    })
)
