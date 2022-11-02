const carGallery = (classImage) => {
  const $div = document.createElement("div");
  $div.className = "carGallery";
  $div.innerHTML = `<div class="carGallery-${classImage}"></div>`;
  return $div;
};

export default carGallery;
