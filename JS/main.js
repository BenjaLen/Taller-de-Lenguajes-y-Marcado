const formInsc = document.getElementById("form-insc");
const msgInsc = document.getElementById("msg-insc");

formInsc.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();


  if (!nombre) {
    msgInsc.textContent = "Ingresá todos los datos para sumarte.";
    msgInsc.className = "error";
    return;
  }


  msgInsc.textContent =
    `¡Gracias, ${nombre}! por sumarte al cuidado del medio ambiente.`;
  msgInsc.className = "exito";
  formInsc.reset();
});