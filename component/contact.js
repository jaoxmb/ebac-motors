const form = $("#contact form");
const name = $("#name");
const email = $("#email");
const tel = $("#tel");
const vehicle = $("#vehicle");
const message = $("#message");

tel.mask("(00) 00000-0000");

form.validate({
	rules: {
		name: {
			required: true,
		},
		email: {
			required: true,
      email: true
		},
    tel: {
      required: true,
      minlength: 15
    },
    vehicle: {
      required: true
    },
    message: {
      required: true
    }
	},
	messages: {
		name: "Você deve inserir o seu nome.",
		email: {
			required: "Você deve inserir um e-mail para entrarmos em contato.",
			email: "Você deve inserir um e-mail valido."
		},
    tel: "Você deve inserir um telefone vaálido.",
    vehicle: "Você deve inserir o seu veiculo de interesse.",
    message: "Você deve inserir uma mensagem."
	},
  submitHandler: (form) => {
    const contact = {
      name: name.val(),
      email: email.val(),
      tel: tel.val(),
      vehicle: vehicle.val(),
      message: message.val()
    }
    console.log(contact);
    
    form.reset();
    alert("Obrigado pelo contato! Responderemos assim que possivel.");
  }
})