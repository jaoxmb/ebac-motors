const form = $("#contact form");

form.on("submit", (e) => {
  e.preventDefault();
  const name = $("#name");
  const email = $("#email");
  const tel = $("#tel");
  const vehicle = $("#vehicle");
  const message = $("#message");

  const contact = {
    name: name.val(),
    email: email.val(),
    tel: tel.val(),
    vehicle: vehicle.val(),
    message: message.val()
  }

  console.log(contact);
})