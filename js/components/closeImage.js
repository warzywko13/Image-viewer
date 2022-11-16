const closeImage = (lightbox) => {
  lightbox.remove();
  document.onkeydown = null;
  document.onclick = null;
};

export default closeImage;
