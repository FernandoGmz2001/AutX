const Navbar = () => {
  const $nav = document.createElement("nav");
  $nav.className = "section1_navbar";
  $nav.innerHTML = `
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
`;
  return $nav;
};

export default Navbar;
