document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const textarea = document.getElementById("message");

  // Lógica para ajustar la altura del textarea
  textarea.addEventListener("input", function () {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });

  // Lógica para manejar el envío del formulario con Formspree
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      console.log("Posible intento de spam detectado");
      return;
    }

    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.showModal(
            "form-modal",
            "Mensaje enviado",
            "Gracias por tu mensaje. Te contactaré pronto!",
            false
          );
          form.reset();
          textarea.style.height = "auto";
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      })
      .catch((error) => {
        window.showModal(
          "form-modal",
          "Error",
          "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
          true
        );
      });
  });
});
