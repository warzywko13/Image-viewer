import createImage from "./createImage.js";
import nextImage from "./nextImage.js";
import closeImage from "./closeImage.js";

const openImage = (imageGallery, images, id) => {
    /* Create Image */
    createImage(imageGallery, images, id);

    /* Next Image */
    const next = arrow => {
        const changeImageLocation = imageGallery.querySelector('#lightbox #box img');
        nextImage(arrow.id, images, changeImageLocation);
    }
    const arrows = imageGallery.querySelectorAll('#lightbox #box .arrow');
    arrows.forEach(
        arrow => arrow.addEventListener('click', next, arrow)
    );

    /* Close Image */
    const exit = () => {
        const lightbox = imageGallery.querySelector('#lightbox');
        closeImage(lightbox);
    }
    const exitButton = imageGallery.querySelector('#lightbox #box #exit-button');
    exitButton.addEventListener('click', exit);

    /* Key Handle */
    const handleKey = (e) => {
        const key = e.keyCode;
        switch (key) {
            case 27:
                exit();
                break;
            case 39:
                next({ id: 'right-arrow' });
                break;
            case 37:
                next({ id: 'right-arrow' });
                break;
        }
    }
    document.onkeydown = handleKey;

    /* Click Handle */
    const handleClick = (e) => {
        if (!e.target.attributes.id) {
            return
        }

        const target = e.target.attributes.id.value;
        if (target === 'lightbox') exit();
    }
    document.onclick = handleClick;

}

export default openImage;