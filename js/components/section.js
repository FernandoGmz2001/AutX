const Section = (section, hidden, title, btnLink) => {
  const $section = document.createElement("section");
  $section.className = "scroll-area";
  $section.id = section;

  $section.innerHTML = `<nav class="section1_navbar ${hidden}">
        <div class="navbar_logo">
          <h1 class="logo"><a href="/public">AutX</a></h1>
        </div>
        <ul class="section1_menu">
          <li class="section1_menu-item"><a href="/public/sequoia.html">SEQUOIA</a></li>
          <li class="section1_menu-item"><a href="/public/corolla.html">COROLLA HATCHBACK</a></li>
          <li class="section1_menu-item"><a href="/public/grSupra.html">GR SUPRA</a></li>
          <li class="section1_menu-item"><a href="/public/camry.html">CAMRY</a></li>
        </ul>
        <div class="section1_account">
        <div class="section1_account-cuenta"><a href="#">Cuenta</a></div>
        <div class="section1_account-menu"><a href="#">Menú</a></div>
        </div>
        </nav>
  `;

  const $div = document.createElement("div");
  $div.className = "section1_content";
  $div.innerHTML = `
  <div class="section1_content-title">${title}</div>
  <div class="section1_content-button">
  <button class="btnComprar"><a href="${btnLink}">Comprar</a> </button>
  </div>`;
  $section.appendChild($div);

  return $section;
};

export default Section;
