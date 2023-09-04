//const abrirModalBtn = document.getElementById("abrirModal");
const btn_proyecto1 = document.getElementById("btn_proyecto1");
const btn_proyecto2 = document.getElementById("btn_proyecto2");
const btn_proyecto3 = document.getElementById("btn_proyecto3");
const btn_proyecto4 = document.getElementById("btn_proyecto4");
const btn_proyecto5 = document.getElementById("btn_proyecto5");
const cerrarModalBtn = document.getElementById("cerrarModal");
const modal = document.getElementById("miModal");
const modaltitle = document.getElementById("modaltitle");
const iframe = document.getElementById("iframe");

btn_proyecto1.addEventListener("click", () => {
  mostrarModal("Proyecto 1 - Menú básico", "./p1/index.html");
});
btn_proyecto2.addEventListener("click", () => {
  mostrarModal("Proyecto 2 - Imágenes apiladas", "./p2/index.html");
});
btn_proyecto3.addEventListener("click", () => {
  "";
  mostrarModal("Proyecto 3 - Barra busqueda", "./p3/index.html");
});
btn_proyecto4.addEventListener("click", () => {
  mostrarModal("Proyecto 4 - Confirmado", "./p4/index.html");
});
btn_proyecto5.addEventListener("click", () => {
  mostrarModal("Proyecto 5 - Card pokemon", "./p5/index.html");
});

cerrarModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function mostrarModal(PNombre, url) {
  modaltitle.innerText = PNombre;
  iframe.src = url;
  modal.style.display = "block";
}
