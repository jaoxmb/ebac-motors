import "./component/highligh.js";
import "./component/promotions.js";
import "./component/contact.js";
import "./component/vehicle.js";
import "./component/menu.js";

$(document).ready(() => {
  const slide = $("#slide");

  slide.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
})