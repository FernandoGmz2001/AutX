const carGalleryMultiple = (RowDirection, Image, InfoTitle, Info) => {
  const $div = document.createElement("div");
  $div.className = "carGalleryMultiple";
  $div.style.flexDirection = `${RowDirection}`;
  $div.innerHTML = `
      <div class="carGalleryMultiple-img">
        <img src="/resources/${Image}" alt="" />
      </div>
      <div class="carGalleryMultiple-info">
      <h1>${InfoTitle}</h1>
        <p>
        ${Info}
        </p>
      </div>`;
  return $div;
};

export default carGalleryMultiple;
