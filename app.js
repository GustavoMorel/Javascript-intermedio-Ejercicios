const adjetivos = ['Rojos', 'Azules', 'Eléctricos', 'Misteriosos', 'Divinos', 'Cósmicos'];
const sustantivos = ['Ángeles', 'Estrellas', 'Sueños', 'Océanos', 'Fuegos', 'Susurros'];
const imagenes = ['image/imagen1.jpg', 'image/imagen2.jpg', 'image/imagen3.jpg', 'image/imagen4.png', 'image/imagen5.jpg'];
const colores = ['#ff0000', '#0000ff', '#00ff00', '#ffff00', '#ff00ff'];

function obtenerElementoAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

function generarYMostrarNombre() {
  const nombreBandaElemento = document.getElementById('resultado-banda');
  const imagenBandaElemento = document.getElementById('animales');
  const colorBandaElemento = document.getElementById('coloresBanda');
  const colorCodigoElemento = document.getElementById('coloresCodigo');


  const adjetivo = obtenerElementoAleatorio(adjetivos);
  const sustantivo = obtenerElementoAleatorio(sustantivos);
  const imagen = obtenerElementoAleatorio(imagenes);
  const color = obtenerElementoAleatorio(colores);

  // Mostrar nombre en un div
  nombreBandaElemento.innerHTML = `<p style="color: ${color};">Nombre de Banda Sugerida Aleatoriamente:  ${sustantivo} ${adjetivo}</p>`;

  // Mostrar imagen en otro div
  imagenBandaElemento.innerHTML = `<img src="${imagen}" alt=" ${sustantivo} ${adjetivo}">`;

  // Mostrar color en otro div
  colorBandaElemento.innerHTML = `<p style="color: ${color};">Color: ${color}</p>`;
  colorBandaElemento.style.backgroundColor = color;
  colorCodigoElemento.innerHTML = `<p style="color: ${color};">Código de color sugerido: ${color}</p>`;
}
