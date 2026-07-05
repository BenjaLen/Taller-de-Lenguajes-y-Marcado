// Validación del formulario
const formInsc = document.getElementById("form-insc");
const msgInsc = document.getElementById("msg-insc");

if (formInsc) {
  formInsc.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    if (!nombre) {
      msgInsc.textContent = "Ingresá todos los datos para sumarte.";
      msgInsc.className = "error";
      return;
    }

    msgInsc.textContent = `¡Gracias, ${nombre}! por sumarte al cuidado del medio ambiente.`;
    msgInsc.className = "exito";
    formInsc.reset();
  });
}

//contador artificial" en nosotros

const voluntarios = document.getElementById("voluntarios");
const jornadas = document.getElementById("jornadas");
const arboles = document.getElementById("arboles");
const trayectoria = document.getElementById("trayectoria");

if (voluntarios) {
  //comienza a contar desde 0 hasta el obj deseado
  const contar = (elemento, objetivo) => {
    let numero = 0;
    const duracion = 2000; // dura 2 segundos
    const intervalo = 20;  // actualiza cada 20 ms
    const pasos = duracion / intervalo;
    const incremento = objetivo / pasos;

    const contador = setInterval(() => {
      numero += incremento;
      if (numero >= objetivo) {
        numero = objetivo;
        clearInterval(contador);
      }
      elemento.textContent = "+" + Math.floor(numero);
    }, intervalo);
  };

  // contador del año de trayectoria
  const contarAnio = (elemento, inicio, fin) => {
    let anio = inicio;
    // muestra 2021 apenas carga la página
    elemento.textContent = anio;
    const contador = setInterval(() => {
      anio++;
      elemento.textContent = anio;
      if (anio >= fin) {
        clearInterval(contador);
      }
    }, 400); // 5 cambios × 400 ms ≈ 2 segundos para que termine al mismo tiempo que los otros
  };

  const anioActual = new Date().getFullYear();
  contar(voluntarios, 70);
  contar(jornadas, 15);
  contar(arboles, 500);
  contarAnio(trayectoria, 2021, anioActual);
}
