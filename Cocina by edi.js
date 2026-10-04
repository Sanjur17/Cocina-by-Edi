const PUBLIC_SITE = {
  brand: "Mi Cocina By Edi",
  defaultProduct: "chimichurri"
};

const escapeHtml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/\"/g, "&quot;")
  .replace(/'/g, "&#039;");

const productos = {
  "chimichurri": {
    nombre: "Chimichurri",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Salsa chimichurri casera con hierbas y especias.",
    detalle: "Una salsa sabrosa para acompañar carnes, panes y comidas de la casa.",
    imagen: "Productos/Chimichurri.jpeg"
  },
  "flan": {
    nombre: "Flan casero",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Flan suave con caramelo, preparado al estilo de la casa.",
    detalle: "Un postre tradicional para disfrutar en familia o compartir.",
    imagen: "Productos/Flan.jpeg"
  },
  "pai": {
    nombre: "Pie casero",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Preparación horneada de la casa, ideal para compartir.",
    detalle: "Consulta los sabores y la disponibilidad del día.",
    imagen: "Productos/Pai.jpeg"
  },
  "brownie": {
    nombre: "Brownie casero",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Brownie de chocolate con una cubierta suave.",
    detalle: "Un postre de chocolate ideal para compartir.",
    imagen: "Productos/Brownie.jpeg"
  },
  "cheesecake-maracuya": {
    nombre: "Cheesecake de maracuyá",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Cheesecake cremoso con cobertura frutal de maracuyá.",
    detalle: "Consulta el precio y la disponibilidad del día.",
    imagen: "Productos/Chessecake de Maracuya.jpeg"
  },
  "dulce-zanahoria": {
    nombre: "Torta de zanahoria",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Torta de zanahoria con cobertura cremosa, de sabor casero.",
    detalle: "Consulta el precio y la disponibilidad del día.",
    imagen: "Productos/Dulce de zanahoria.jpeg"
  },
  "volteado-pina": {
    nombre: "Volteado de piña",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Pastel casero de piña con caramelo y cerezas.",
    detalle: "Consulta el precio y la disponibilidad del día.",
    imagen: "Productos/Volteado de Piña.jpeg"
  },
  "ponche": {
    nombre: "Ponche de Mamá Nena",
    precio: "Consultar",
    estado: "Consultar disponibilidad",
    descripcion: "Ponche casero de Mi Cocina By Edi.",
    detalle: "Consulta la presentación, el precio y la disponibilidad.",
    imagen: "Productos/Ponche.jpeg"
  }
};

const inicializarFiltrosProductos = () => {
  const buscador = document.querySelector("[data-busqueda-productos]");
  const filtroCategoria = document.querySelector("[data-filtro-categoria]");
  const menu = document.querySelector("#menu-comidas");

  if (!buscador || !filtroCategoria || !menu) {
    return;
  }

  const tarjetas = [...menu.querySelectorAll(".link-producto")];
  const avisoSinResultados = document.createElement("p");
  avisoSinResultados.className = "sin-resultados";
  avisoSinResultados.setAttribute("role", "status");
  avisoSinResultados.hidden = true;
  menu.append(avisoSinResultados);

  const normalizar = (texto) => texto.trim().toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const filtrar = () => {
    const termino = normalizar(buscador.value);
    let cantidadVisible = 0;

    tarjetas.forEach((tarjeta) => {
      const coincideTexto = normalizar(tarjeta.textContent).includes(termino);
      const coincideCategoria = filtroCategoria.value === "todos"
        || tarjeta.dataset.categoria === filtroCategoria.value;

      tarjeta.hidden = !(coincideTexto && coincideCategoria);
      cantidadVisible += tarjeta.hidden ? 0 : 1;
    });

    avisoSinResultados.hidden = cantidadVisible > 0;
    avisoSinResultados.textContent = cantidadVisible > 0
      ? ""
      : "No encontramos platos con esos filtros. Prueba otra búsqueda.";
  };

  buscador.addEventListener("input", filtrar);
  filtroCategoria.addEventListener("change", filtrar);
};

const renderProducto = () => {
  const params = new URLSearchParams(window.location.search);
  const productoId = params.get("producto") || PUBLIC_SITE.defaultProduct;
  const producto = productos[productoId];
  const contenedor = document.getElementById("detalle-producto");

  if (!contenedor) {
    return;
  }

  if (!producto) {
    contenedor.innerHTML = `
      <div class="detalle-producto-info">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, este producto no existe o fue eliminado.</p>
        <a class="boton-volver" href="Cocina by edi.html">Volver al menú</a>
      </div>
    `;
    return;
  }

  const estado = producto.estado || (producto.disponible ? "Disponible" : "No disponible");
  const claseEstado = producto.estado
    ? "consultar"
    : producto.disponible ? "disponible" : "no-disponible";
  contenedor.innerHTML = `
    <button class="boton-imagen-producto" type="button" aria-label="Ampliar imagen de ${escapeHtml(producto.nombre)}" data-imagen-ampliable>
      <img class="detalle-producto-imagen" src="${escapeHtml(producto.imagen)}" alt="${escapeHtml(producto.nombre)}">
    </button>
    <div class="detalle-producto-info">
      <h2>${escapeHtml(producto.nombre)}</h2>
      <span class="estado ${claseEstado}">${escapeHtml(estado)}</span>
      <p>${escapeHtml(producto.descripcion)}</p>
      <p>${escapeHtml(producto.detalle)}</p>
      <div class="precio-detalle">${escapeHtml(producto.precio)}</div>
      <a class="boton-volver" href="Cocina by edi.html">Volver al menú</a>
    </div>
  `;

  inicializarVisorImagenProducto();
};

const inicializarVisorImagenProducto = () => {
  const disparador = document.querySelector("[data-imagen-ampliable]");
  const visor = document.querySelector("[data-visor-imagen]");
  const imagenAmpliada = visor?.querySelector("img");
  const botonCerrar = visor?.querySelector("[data-cerrar-imagen]");

  if (!disparador || !visor || !imagenAmpliada || !botonCerrar) {
    return;
  }

  disparador.addEventListener("click", () => {
    const imagen = disparador.querySelector("img");
    imagenAmpliada.src = imagen.src;
    imagenAmpliada.alt = imagen.alt;
    visor.showModal();
  });

  botonCerrar.addEventListener("click", () => visor.close());
  visor.addEventListener("cancel", (evento) => {
    evento.preventDefault();
    visor.close();
  });
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && visor.open) {
      visor.close();
    }
  });
  visor.addEventListener("click", (evento) => {
    if (evento.target === visor) {
      visor.close();
    }
  });
};

const inicializarVisorLogo = () => {
  const visor = document.querySelector("[data-visor-logo]");
  const disparador = document.querySelector("[data-logo-ampliable]");
  const botonCerrar = document.querySelector("[data-cerrar-visor]");

  if (!visor || !disparador || !botonCerrar) {
    return;
  }

  disparador.addEventListener("click", () => visor.showModal());
  botonCerrar.addEventListener("click", () => visor.close());
  visor.addEventListener("cancel", (evento) => {
    evento.preventDefault();
    visor.close();
  });
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && visor.open) {
      visor.close();
    }
  });
  visor.addEventListener("click", (evento) => {
    if (evento.target === visor) {
      visor.close();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducto();
  inicializarVisorLogo();
  inicializarFiltrosProductos();
});
