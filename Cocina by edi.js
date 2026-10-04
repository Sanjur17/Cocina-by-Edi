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

const CATEGORIAS_MENU = {
  salsas: "Salsas",
  platos: "Platos principales",
  postres: "Postres",
  bebidas: "Bebidas"
};

const ORDEN_CATEGORIAS = Object.keys(CATEGORIAS_MENU);

const getMenuCartas = () => [...document.querySelectorAll("#menu-comidas .link-producto")];

const crearBotonCategoria = (categoria) => {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "boton-categoria";
  boton.textContent = CATEGORIAS_MENU[categoria] || "Productos";
  boton.setAttribute("data-boton-categoria", categoria);
  boton.addEventListener("click", () => {
    const filtroCategoria = document.querySelector("[data-filtro-categoria]");
    if (filtroCategoria) {
      filtroCategoria.value = categoria;
      filtroCategoria.dispatchEvent(new Event("change", { bubbles: true }));
    }

    const seccion = document.getElementById(`categoria-${categoria}`);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  return boton;
};

const inicializarBotonesCategorias = (tarjetas = getMenuCartas()) => {
  const contenedor = document.querySelector(".categorias-rapidas");
  if (!contenedor) {
    return;
  }

  const categoriasDisponibles = [...new Set(
    tarjetas
      .filter((tarjeta) => !tarjeta.hidden)
      .map((tarjeta) => tarjeta.dataset.categoria)
      .filter(Boolean)
  )];

  contenedor.innerHTML = "";
  ORDEN_CATEGORIAS.forEach((categoria) => {
    if (categoriasDisponibles.includes(categoria)) {
      contenedor.appendChild(crearBotonCategoria(categoria));
    }
  });
};

const crearSeccionCategoria = (categoria, tarjetas) => {
  const seccion = document.createElement("section");
  seccion.className = "categoria-productos";
  seccion.id = `categoria-${categoria}`;

  const titulo = document.createElement("h3");
  titulo.className = "titulo-categoria";
  titulo.textContent = CATEGORIAS_MENU[categoria] || "Productos";

  const contenedor = document.createElement("div");
  contenedor.className = "grid-categoria";
  tarjetas.forEach((tarjeta) => contenedor.appendChild(tarjeta));

  seccion.appendChild(titulo);
  seccion.appendChild(contenedor);
  return seccion;
};

const reordenarProductosPorCategoria = (tarjetas = getMenuCartas()) => {
  const menu = document.querySelector("#menu-comidas");
  if (!menu) {
    return;
  }

  const categoriasAgrupadas = ORDEN_CATEGORIAS.reduce((acc, categoria) => {
    acc[categoria] = [];
    return acc;
  }, {});

  tarjetas.forEach((tarjeta) => {
    const categoria = tarjeta.dataset.categoria || "otros";
    if (!categoriasAgrupadas[categoria]) {
      categoriasAgrupadas[categoria] = [];
    }
    categoriasAgrupadas[categoria].push(tarjeta);
  });

  menu.innerHTML = "";
  ORDEN_CATEGORIAS.forEach((categoria) => {
    if (categoriasAgrupadas[categoria] && categoriasAgrupadas[categoria].length > 0) {
      menu.appendChild(crearSeccionCategoria(categoria, categoriasAgrupadas[categoria]));
    }
  });

  inicializarBotonesCategorias(getMenuCartas());
};

const inicializarMenuProductos = () => {
  reordenarProductosPorCategoria();
};

const inicializarFiltrosProductos = () => {
  const filtroCategoria = document.querySelector("[data-filtro-categoria]");
  const menu = document.querySelector("#menu-comidas");

  if (!filtroCategoria || !menu) {
    return;
  }

  const tarjetas = getMenuCartas();
  const avisoSinResultados = document.createElement("p");
  avisoSinResultados.className = "sin-resultados";
  avisoSinResultados.setAttribute("role", "status");
  avisoSinResultados.hidden = true;
  menu.append(avisoSinResultados);

  const filtrar = () => {
    tarjetas.forEach((tarjeta) => {
      const coincideCategoria = filtroCategoria.value === "todos"
        || tarjeta.dataset.categoria === filtroCategoria.value;

      tarjeta.hidden = !coincideCategoria;
    });

    const tarjetasVisibles = tarjetas.filter((tarjeta) => !tarjeta.hidden);
    if (tarjetasVisibles.length > 0) {
      reordenarProductosPorCategoria(tarjetasVisibles);
      avisoSinResultados.hidden = true;
      avisoSinResultados.textContent = "";
      return;
    }

    menu.innerHTML = "";
    menu.appendChild(avisoSinResultados);
    avisoSinResultados.hidden = false;
    avisoSinResultados.textContent = "No encontramos productos en esta categoría.";
    inicializarBotonesCategorias([]);
  };

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
  inicializarMenuProductos();
  inicializarFiltrosProductos();
});
