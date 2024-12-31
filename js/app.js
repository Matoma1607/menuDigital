function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Función para destacar el botón del carrusel según la sección visible
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".menu-section");
  const buttons = document.querySelectorAll(".menu-button");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  buttons.forEach((button) => {
    if (button.getAttribute("onclick").includes(currentSection)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

// Función para ajustar el diseño del carrusel en dispositivos móviles
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".menu-carousel");
  const isSmallScreen = window.innerWidth < 768;

  if (isSmallScreen) {
    carousel.classList.add("carousel-dark");
  } else {
    carousel.classList.remove("carousel-dark");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      carousel.classList.add("carousel-dark");
    } else {
      carousel.classList.remove("carousel-dark");
    }
  });
});

// Seleccionamos el botón
const scrollTopButton = document.getElementById('scrollTopButton');

// Mostrar el botón cuando se haga scroll hacia abajo
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
};

// Función para volver arriba
scrollTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

