import { menuToggle } from "./component/menu.js"
import { highlight } from "./component/highligh.js";
import { promotions } from "./component/promotions.js";

$(document).ready(() => {
  const hamburger = $("#hamburger");
  const slide = $("#slide");

  hamburger.on("click", () => {
    menuToggle();
  });

  slide.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });

  highlight();
  promotions();
})