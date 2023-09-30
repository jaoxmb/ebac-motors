import { handle_menu } from "./component/menu-hamburger.js"

$(document).ready(() => {
  const hamburger = $("#hamburger");
  const slide = $("#slide");

  hamburger.on("click", () => {
    handle_menu();
  });

  slide.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });

})