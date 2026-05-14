const btnTopo = document.getElementById("scrollToTop");

// Evento de clique para scroll suave
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Controla a visibilidade/opacidade do botão ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnTopo.style.opacity = "1";
    btnTopo.style.pointerEvents = "auto";
  } else {
    btnTopo.style.opacity = "0.7";
  }
});
