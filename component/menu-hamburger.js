export const handle_menu = () => {
  const menu = $("#menu");
  const isOpened = menu.css("display") == "none" ? false : true;

  if (isOpened) {
    menu.slideUp();
  } else {
    menu.slideDown();
  }
}