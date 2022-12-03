import setIndexCurrentImage from "./setIndexCurrentImage.js";
import arrowAndKeboardHandle from "./arrowAndKeyboardHandle.js";

import {
  LIGHTBOX,
  BOX,
  ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  EXIT_BUTTON,
  IMG_SLIDE,
} from "./openImage.js";

const createGUI = (gallery, img, id) => {
  const imgSrc = img[id].attributes.src.value;
  const newLightbox = `<div id="${LIGHTBOX}"> \
                        <div id="${BOX}"> \
                            <button id="${EXIT_BUTTON}">&#xd7;</button>  \
                            <button class="${ARROW}" id="${LEFT_ARROW}">&#xab;</button> \
                            <button class="${ARROW}" id="${RIGHT_ARROW}">&#xbb;</button> \
                            <span id="${IMG_SLIDE}">1 z 2</span>  \
                            <img id="${id}" src="${imgSrc}"> \
                        </div> \
                    </div>`;
  gallery.insertAdjacentHTML("beforeend", newLightbox);

  /* Index Images */
  setIndexCurrentImage(gallery, img, id);

  /* Handle Arrow and Keyboard Click */
  arrowAndKeboardHandle(gallery, img);
};

export default createGUI;
