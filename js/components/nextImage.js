import indexImage from "./indexImage.js";

const nextImage = (arrow, images, changeImageLocation) => {
  let id = parseInt(changeImageLocation.attributes.id.value);

  /* Left or Right arrow */
  if (arrow === "right-arrow") {
    id++;
  } else {
    id--;
  }

  /* Change image id */
  if (id > images.length - 1) {
    id = 0;
  } else if (id < 0) {
    id = images.length - 1;
  }

  const newImage = images[id].attributes.src.value;
  changeImageLocation.attributes.src.value = newImage;
  changeImageLocation.attributes.id.value = id;

  indexImage(changeImageLocation, id, images.length);
};

export default nextImage;
