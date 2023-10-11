export const SelectVehicle = (vehicle) => {
  $("#vehicle").val(vehicle | "");
  // Go to contact section
  window.location.href += "#contact";
}