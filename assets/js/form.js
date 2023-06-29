function sendForm() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tel: document.getElementById("tel").value,
    assunto: document.getElementById("assunto").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_fai9n3r", "template_eatykro", params)
    .then(function (res) {
      alert("Mensagem enviada com sucesso");
    });
}
