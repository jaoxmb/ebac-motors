const form = $("#contact form");
const name = $("#name");
const email = $("#email");
const tel = $("#tel");
const vehicle = $("#vehicle");
const message = $("#message");

tel.mask("(00) 00000-0000");


form.on("submit", (e) => {
  e.preventDefault();

  const contact = {
    name: name.val(),
    email: email.val(),
    tel: tel.val(),
    vehicle: vehicle.val(),
    message: message.val()
  }

  console.log(contact);
})