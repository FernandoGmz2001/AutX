const CarInfo = (Titulo, Fuerza, Eficiencia, Interior, Tecnologia, URL) => {
  const $div = document.createElement("div");
  $div.className = "hero-container";
  $div.innerHTML = `
        <div class="hero-title">${Titulo}</div>        
    <div class="hero-info">
      <div class="Fuerza">
      <div class="fuerza description">${Fuerza}</div>
        <div class="fuerza title">Fuerza</div>
      </div>
      <div class="Eficiencia">
      <div class="eficiencia description">${Eficiencia}</div>
        <div class="eficiencia title">Eficiencia</div>
      </div>
      <div class="Interior">
      <div class="interior description">${Interior}</div>
        <div class="interior title">Interior</div>
      </div>
      <div class="tecnologia">
      <div class="tecnologia description">${Tecnologia}</div>
      <div class="tecnologia title">Tecnologia</div>
      </div>
      <div class="btnContainer">
        <button class="btnOrdenar"><a class="linkOrdenar" href="${URL}">Ordenar</a></button>
      </div>
    </div>
`;

  return $div;
};

export default CarInfo;
