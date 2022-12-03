import { LIGHTBOX, BOX, IMG_SLIDE } from "./openImage.js";

const setIndexCurrentImage = (gallery, img, id) => {
  const changeImageLocation = gallery.querySelector(`#${LIGHTBOX} #${BOX}`);
  const currentPhotoID = id + 1;
  const galleryImgLength = img.length;

  const newIndex = `${currentPhotoID} z ${galleryImgLength}`;

  changeImageLocation.parentNode.querySelector(`#${IMG_SLIDE}`).textContent =
    newIndex;
};

export default setIndexCurrentImage;
