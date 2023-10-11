const form = $("#contact form");

form.on("submit", (e) => {
  e.preventDefault();
  const name = $("#name");
  const email = $("#email");
  const tel = $("#tel");
  const vehicle = $("#vehicle");
  const message = $("#message");

  const contact = {
    name: name.value(),
    email: email.value(),
    tel: tel.value(),
    vehicle: vehicle.value(),
    message: message.value()
  }

  console.log(contact);
})