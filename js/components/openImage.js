import createGUI from "./createGUI.js";

export const LIGHTBOX = "lightbox";
export const BOX = "box";
export const ARROW = "arrow";
export const LEFT_ARROW = "left-arrow";
export const RIGHT_ARROW = "right-arrow";
export const EXIT_BUTTON = "exit-button";
export const IMG_SLIDE = "img-side";

const openImage = (gallery) => {
  const images = gallery.querySelectorAll("img");

  /* When user click on photo user show GUI */
  images.forEach((img, id) => {
    img.addEventListener("click", () => {
      createGUI(gallery, images, id);
    });
  });
};

export default openImage;
