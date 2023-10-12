$(".select-vehicle").click((e) => {
  const vehicle = $(e.target).data("vehicle");

  $("#vehicle")
    .val(vehicle);
    
  $("html")
    .animate({
      scrollTop: $("#contact").offset().top,
    }, 1500)
})