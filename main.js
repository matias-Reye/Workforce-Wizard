/* Funcion que cambia las slide */
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    slides[index].classList.add("active");
    currentSlide = index;
  }

  // Mostrar el primer slide al cargar la página
  showSlide(currentSlide);

  // Cambiar de slide automáticamente cada 10 segundos (en lugar de 5)
  setInterval(function () {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 10000); // Cambiado a 10000 milisegundos (10 segundos)
});

/* Funcion que calcula la rotacion laboral */
document.addEventListener("DOMContentLoaded", function () {
  const salarioAnualInput = document.getElementById("salarioAnual");
  const tipoTrabajoSelect = document.getElementById("tipoTrabajo");
  const calcularButton = document.getElementById("calcular");
  const resultadoP = document.getElementById("resultado");

  calcularButton.addEventListener("click", function () {
    const salarioAnual = parseFloat(salarioAnualInput.value);
    const tipoTrabajo = parseFloat(tipoTrabajoSelect.value);

    if (isNaN(salarioAnual) || isNaN(tipoTrabajo)) {
      resultadoP.textContent = "Por favor, ingrese valores válidos.";
    } else {
      const perdida = salarioAnual * tipoTrabajo;
      const perdidaRedondeada = Math.round(perdida); // Redondear al peso chileno más cercano
      resultadoP.textContent = `Pérdida por rotación laboral: $${perdidaRedondeada}`;
    }
  });
});
