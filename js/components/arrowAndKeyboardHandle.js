import setIndexCurrentImage from "./setIndexCurrentImage.js";
import {
  LIGHTBOX,
  BOX,
  ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  EXIT_BUTTON,
} from "./openImage.js";

const arrowAndKeboardHandle = (gallery, img) => {
  const getBox = gallery.querySelector(`#${BOX}`);

  /* Changing Slide */
  const nextSlide = (arrow) => {
    const changeImageLocation = getBox.querySelector("img");
    let id = parseInt(changeImageLocation.attributes.id.value);
    const galleryLength = img.length;

    /* Left or Right arrow */
    if (arrow === RIGHT_ARROW) {
      id++;
    } else {
      id--;
    }

    /* Change image id */
    if (id > galleryLength - 1) {
      id = 0;
    } else if (id < 0) {
      id = galleryLength - 1;
    }

    const newImage = img[id].attributes.src.value;
    changeImageLocation.attributes.src.value = newImage;
    changeImageLocation.attributes.id.value = id;

    setIndexCurrentImage(gallery, img, id);
  };

  /* Arrow Functionality */
  const arrows = getBox.querySelectorAll(`.${ARROW}`);
  arrows.forEach((arrow) =>
    arrow.addEventListener("click", ({ target }) => nextSlide(target.id))
  );

  /* Keyboard Functionality */
  document.addEventListener("keydown", (e) => {
    const key = e.keyCode;
    switch (key) {
      case 27:
        exit();
        break;
      case 39:
        nextSlide(RIGHT_ARROW);
        break;
      case 37:
        nextSlide(LEFT_ARROW);
        break;
      default:
        return;
    }
  });

  /* Close LightBox */
  const exitLightbox = () => {
    const lightbox = gallery.querySelector(`#${LIGHTBOX}`);
    lightbox.remove();
    document.onkeydown = null;
    document.onclick = null;
  };

  /* Exit Button And Click Behind Photo */
  const handleClick = ({ target }) => {
    const targetId = target.attributes.id;

    if (!targetId) {
      return;
    }

    const targetValue = targetId.value;
    if (targetValue === LIGHTBOX || targetValue === EXIT_BUTTON) {
      exitLightbox();
    }
  };
  document.addEventListener("click", handleClick);
};

export default arrowAndKeboardHandle;
