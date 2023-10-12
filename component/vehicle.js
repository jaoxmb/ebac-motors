const selectVehicleBtns = $(".select-vehicle");

selectVehicleBtns.on("click", (e) => {
  const vehicle = $(e.target).data("vehicle");

  $("#vehicle").val(vehicle);
  // Go to contact section
  window.location.assign("#contact");
})