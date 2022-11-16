import indexImage from "./indexImage.js";

const createImage = (imageGallery, images, id) => {
  const imageSrc = images[id].attributes.src.value;
  const newLightbox = `<div id="lightbox"> \
                        <div id="box"> \
                            <button id="exit-button">&#xd7;</button>  \
                            <button class="arrow" id="left-arrow">&#xab;</button> \
                            <button class="arrow" id="right-arrow">&#xbb;</button> \
                            <span id="img-side">1 z 2</span>  \
                            <img id="${id}" src="${imageSrc}"> \
                        </div> \
                    </div>`;
  imageGallery.insertAdjacentHTML("beforeend", newLightbox);

  /* Index Image */
  const changeImageLocation = imageGallery.querySelector("#lightbox #box");
  indexImage(changeImageLocation, id, images.length);
};

export default createImage;
