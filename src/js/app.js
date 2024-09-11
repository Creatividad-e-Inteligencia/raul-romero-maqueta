$ = (selector) => document.querySelector(selector);
$$ = (selector) => document.querySelectorAll(selector);

$(".main-menu button").addEventListener("click", function () {
  $(".main-menu ul").classList.toggle("active");
});

const swiper = new Swiper(".swiper-hero", {
  direction: "horizontal",
  autoplay: {
    delay: 5000,
    duration: 1000,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  parallax: true,

  navigation: {
    nextEl: ".swiper-hero .swiper-button-next",
    prevEl: ".swiper-hero .swiper-button-prev",
  },
});

const swiper_reviews = new Swiper(".swiper-reviews", {
  direction: "horizontal",
  autoplay: {
    delay: 5000,
    duration: 1000,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  parallax: true,

  //   Navigation arrows
  navigation: {
    nextEl: ".swiper-reviews-next",
    prevEl: ".swiper-reviews-prev",
  },
});
const swiper_equipo = new Swiper(".swiper-equipo", {
  effect: "flip",
  direction: "horizontal",
  autoplay: false,
  slidesPerView: 1,
  parallax: true,
  //   Navigation arrows
  navigation: {
    nextEl: ".listado-equipo .swiper-reviews-next",
    prevEl: ".listado-equipo .swiper-reviews-prev",
  },
});

$$(".listado-equipo a").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target;
    if (matchMedia("(max-width: 768px)").matches) {
      const parent = target.parentNode.parentNode.parentNode;
      parent.classList.toggle("active");
      // parent.classList.contains("active")
      //   ? parent.classList.remove("active")
      //   : parent.classList.add("active");
    } else {
      const parent = this.parentNode;
      const contenedor = parent.parentNode;
      /** quitar activos */
      contenedor.querySelectorAll(".listado-equipo li").forEach((el) => {
        el.classList.remove("active");
      });

      parent.classList.toggle("active");
      const index = Array.prototype.indexOf.call(contenedor.children, parent);

      swiper_equipo.slideTo(index);
    }
  });
});

// window.addEventListener("load", (event) => {
//   console.log(MicroModal);
//   console.log("page is fully loaded");
//   MicroModal.show("modal-1");
// });

const boton_ver_servicio = $$(".ver-servicio");
boton_ver_servicio.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(JSON.parse(e.currentTarget.dataset.servicio));
    const json = JSON.parse(e.currentTarget.dataset.servicio);
    actualizarModalServicio(json);
    Fancybox.show([{ src: "#modal-1", type: "inline" }]);
  });
});

function actualizarModalServicio(servicio) {
  const modal = $("#modal-1");

  const titulo = modal.querySelector(".titulo-modal");
  titulo.innerHTML = servicio.titulo;

  const imagen = modal.querySelector(".imagen-modal");
  imagen.innerHTML = `<img src="${servicio.imagen}" alt="${servicio.titulo}" class="h-full w-full object-contain filter brightness-0 invert">`;

  const contenido = modal.querySelector(".contenido-modal");
  contenido.innerHTML = servicio.descripcion;
}
