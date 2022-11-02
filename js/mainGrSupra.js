import CarInfo from "./components/carInfo.js";
import midSection from "./components/midSection.js";
import Navbar from "./components/navbar.js";
import carGalleryRounded from "./components/carGalleryRounded.js";
import { supraDescription } from "./data/carsDescriptions.js";

const main = document.querySelector("#main");
const body = document.querySelector("body");
const carGalleryContainer = document.querySelector(".carGallery-container");

main.style.backgroundImage =
  "linear-gradient(180deg,rgba(0, 0, 0, 0) 80%,rgba(0, 0, 0, 1) 100%),url(/resources/Supra/supra-1.png)";

main.appendChild(Navbar());
main.appendChild(
  CarInfo(
    "GR SUPRA",
    "437 Hp/583 Lb.-Ft.",
    "22/20 MPG (2WD/4WD comb.) *",
    "6 pulg. Tercera fila deslizante",
    "14-In. Touchscreen",
    "#"
  )
);
carGalleryContainer.appendChild(midSection());
carGalleryContainer.appendChild(carGalleryRounded());

supraDescription.forEach((item) => {
  const $div = document.createElement("div");
  $div.className = "carGalleryMultiple";
  $div.style.flexDirection = `${item.RowDirection}`;
  $div.innerHTML = `
        <div class="carGalleryMultiple-img">
          <img src="/resources/${item.Image}" alt="" />
        </div>
        <div class="carGalleryMultiple-info">
        <h1>${item.Title}</h1>
          <p>
          ${item.Description}
          </p>
        </div>`;
  body.appendChild($div);
});
