import carGallery from "./components/carGallery.js";
import CarInfo from "./components/carInfo.js";
import midSection from "./components/midSection.js";
import Navbar from "./components/navbar.js";
import carGalleryRounded from "./components/carGalleryRounded.js";
import carGalleryMultiple from "./components/carGalleryMultiple.js";

const sequoia = document.querySelector("#main");
const carGalleryContainer = document.querySelector(".carGallery-container");
sequoia.appendChild(Navbar());
sequoia.appendChild(CarInfo("SEQUOIA"));
carGalleryContainer.appendChild(midSection());
carGalleryContainer.appendChild(carGallery("img1"));
carGalleryContainer.appendChild(carGalleryRounded());

carGalleryContainer.appendChild(
  carGalleryMultiple(
    "initial",
    "sequoia-4-gallery.png",
    "Potencia",
    "i-FORCE MAX Twin Turbo V6 Hybrid Powertrain With an impressive 437horsepower and 583 lb.-ft. of torque, Sequoia's i-FORCE MAX Twin Turbo V6 Hybrid engine helps ensure that performance is never compromised."
  )
);

carGalleryContainer.appendChild(
  carGalleryMultiple(
    "row-reverse",
    "sequoia-gallery-5.png",
    "Eficiencia",
    "i-FORCE MAX Twin Turbo V6 Hybrid Powertrain With an impressive 437horsepower and 583 lb.-ft. of torque, Sequoia's i-FORCE MAX Twin Turbo V6 Hybrid engine helps ensure that performance is never compromised."
  )
);

carGalleryContainer.appendChild(
  carGalleryMultiple(
    "initial",
    "sequoia-gallery-6.png",
    "Capacidad",
    "i-FORCE MAX Twin Turbo V6 Hybrid Powertrain With an impressive 437horsepower and 583 lb.-ft. of torque, Sequoia's i-FORCE MAX Twin Turbo V6 Hybrid engine helps ensure that performance is never compromised."
  )
);
