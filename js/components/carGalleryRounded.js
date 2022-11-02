const carGalleryRounded = () => {
  const $div = document.createElement("div");
  $div.className = "carGalleryRounded";
  $div.innerHTML = `
   <video class="video" autoplay muted loop id="myVideo">
      <source src="/resources/sequoia video.mp4" type="video/mp4" />
    </video>`;
  return $div;
};

export default carGalleryRounded;
