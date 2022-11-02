const CarInfo = (title) => {
  const $div = document.createElement("div");
  $div.className = "hero-container";
  $div.innerHTML = `
        <div class="hero-title">${title}</div>        
    <div class="hero-info">
      <div class="Fuerza">
      <div class="fuerza description">437 Hp/583 Lb.-Ft.</div>
        <div class="fuerza title">Fuerza</div>
      </div>
      <div class="Eficiencia">
      <div class="eficiencia description">22/20 MPG (2WD/4WD comb.) *</div>
        <div class="eficiencia title">Eficiencia</div>
      </div>
      <div class="Interior">
      <div class="interior description">6-In. Sliding Third Row</div>
        <div class="interior title">Interior</div>
      </div>
      <div class="tecnologia">
      <div class="tecnologia description">14-In. Touchscreen</div>
      <div class="tecnologia title">Tecnologia</div>
      </div>
      <div class="btnContainer">
        <button class="btnOrdenar"><a class="linkOrdenar">Ordenar</a></button>
      </div>
    </div>
`;

  return $div;
};

export default CarInfo;
