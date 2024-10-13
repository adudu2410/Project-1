//Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
console.log(buttonMenuMobile);
if (buttonMenuMobile) {
  const menu = document.querySelector(".header .inner-menu");

  buttonMenuMobile.onclick = () => {
    menu.setAttribute("show", "yes");
  };

  const overlay = document.querySelector(".header .inner-overlay");
  overlay.onclick = () => {
    menu.setAttribute("show", "");
  };
}

//End Button Menu Mobile
