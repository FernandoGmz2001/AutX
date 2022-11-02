import Section from "./components/section.js";

const app = document.querySelector("#app");

app.appendChild(Section("section1", "show", "SEQUOIA", "/public/sequoia.html"));
app.appendChild(
  Section("section2", "hidden", "COROLLA HATCHBACK", "/public/Corolla.html")
);
app.appendChild(
  Section("section3", "hidden", "GR SUPRA", "/public/GrSupra.html")
);
app.appendChild(Section("section4", "hidden", "CAMRY", "/public/Camry.html"));
