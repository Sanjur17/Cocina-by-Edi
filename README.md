<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; media-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <meta name="robots" content="index,follow">
        <link rel="icon" href="Logo web.jpeg" type="image/jpeg">
        <link rel="stylesheet" href="Estilo Cocina by edi.css">
        <script src="Cocina by edi.js" defer></script>
        <title>Mi Cocina By Edi</title>
    </head>
    <body>
        <div class="cuadro-crema">
            <h2>Mi Cocina By Edi</h2>
            <p>Productos frescos, caseros y con sabor a hogar.</p>
        </div>

        <a href="contactos.html" class="pestana-contacto" aria-label="Ir a contactos">Contactos</a>

        <main class="contenido-web">
            <h1 class="logo">
                <button class="logo-ampliable" type="button" aria-label="Ampliar logo de Mi Cocina By Edi" data-logo-ampliable>
                    <img src="Logo web.jpeg" alt="" class="brand-logo">
                </button>
                <span>Mi Cocina By Edi</span>
            </h1>
            <p>Bienvenidos a nuestra cocina.</p>
            <p>Acá podrás ver nuestras recetas, productos y promociones.</p>

            <div class="filtros-menu" aria-label="Buscar y filtrar el menú">
                <label class="campo-busqueda">
                    <span>Buscar un plato</span>
                    <input type="search" data-busqueda-productos placeholder="Ej.: brownie, flan..." autocomplete="off">
                </label>
                <label class="campo-categoria">
                    <span>Categoría</span>
                    <select data-filtro-categoria>
                        <option value="todos">Todas</option>
                        <option value="salsas">Salsas</option>
                        <option value="platos">Platos principales</option>
                        <option value="postres">Postres</option>
                        <option value="bebidas">Bebidas</option>
                    </select>
                </label>
            </div>

            <section class="menu-comidas" id="menu-comidas" aria-label="Menú de comidas">
                <a class="link-producto" data-categoria="salsas" href="producto.html?producto=chimichurri">
                    <article class="tarjeta-comida">
                        <img src="Productos/Chimichurri.jpeg" alt="Salsa chimichurri casera de Mi Cocina By Edi" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Chimichurri</h3>
                            <p>Salsa casera con hierbas y especias, ideal para acompañar tus comidas.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=flan">
                    <article class="tarjeta-comida">
                        <img src="Productos/Flan.jpeg" alt="Flan casero con caramelo" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Flan casero</h3>
                            <p>Flan suave con caramelo, preparado al estilo de la casa.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=pai">
                    <article class="tarjeta-comida">
                        <img src="Productos/Pai.jpeg" alt="Pai casero horneado" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Pie casero</h3>
                            <p>Preparación horneada de la casa, ideal para compartir.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="bebidas" href="producto.html?producto=ponche">
                    <article class="tarjeta-comida">
                        <img src="Productos/Ponche.jpeg" alt="Ponche de Mamá Nena de Mi Cocina By Edi" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Ponche de Mamá Nena</h3>
                            <p>Ponche casero de la casa, servido bien frío.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=brownie">
                    <article class="tarjeta-comida">
                        <img src="Productos/Brownie.jpeg" alt="Brownies caseros de chocolate" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Brownie casero</h3>
                            <p>Brownie de chocolate con una cubierta suave, ideal para compartir.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=cheesecake-maracuya">
                    <article class="tarjeta-comida">
                        <img src="Productos/Chessecake de Maracuya.jpeg" alt="Cheesecake con cobertura de maracuyá" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Cheesecake de maracuyá</h3>
                            <p>Cheesecake cremoso con cobertura frutal de maracuyá.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=dulce-zanahoria">
                    <article class="tarjeta-comida">
                        <img src="Productos/Dulce de zanahoria.jpeg" alt="Torta de zanahoria con cobertura" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Torta de zanahoria</h3>
                            <p>Torta de zanahoria con cobertura cremosa, de sabor casero.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>

                <a class="link-producto" data-categoria="postres" href="producto.html?producto=volteado-pina">
                    <article class="tarjeta-comida">
                        <img src="Productos/Volteado de Piña.jpeg" alt="Pastel volteado de piña y cerezas" loading="lazy" decoding="async">
                        <div class="info-comida">
                            <h3>Volteado de piña</h3>
                            <p>Pastel casero de piña con caramelo y cerezas.</p>
                            <div class="precio-linea">
                                <span>Precio</span>
                                <strong>Consultar</strong>
                            </div>
                        </div>
                    </article>
                </a>
            </section>
        </main>

        <section class="comercial-final" aria-label="Comercial final">
            <div class="comercial-texto">
                <span class="etiqueta-comercial">Comercial</span>
                <h3>Sabores de hogar, hechos para compartir.</h3>
                <p>Descubre platos caseros, frescos y llenos de cariño en cada bocado.</p>
            </div>
            <a href="Cocina by edi.html#menu-comidas" class="boton-comercial">Ver el menú</a>
        </section>

        <section class="video-comercial" aria-labelledby="titulo-video-comercial">
            <h2 id="titulo-video-comercial">Nuestro comercial</h2>
            <video controls playsinline preload="metadata">
                <source src="Comercial.mp4" type="video/mp4">
                Tu navegador no puede reproducir este video.
            </video>
        </section>

        <dialog class="visor-logo" aria-label="Logo ampliado de Mi Cocina By Edi" data-visor-logo>
            <button class="cerrar-visor-logo" type="button" aria-label="Cerrar logo ampliado" data-cerrar-visor>×</button>
            <img src="Logo web.jpeg" alt="Logo Mi Cocina By Edi">
        </dialog>
    </body>
</html>

