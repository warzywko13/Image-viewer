const indexImage = (changeImageLocation, id, length) => {
  const newIndex = `${id + 1} z ${length}`;

  changeImageLocation.parentNode.querySelector("#img-side").textContent =
    newIndex;
};

export default indexImage;
