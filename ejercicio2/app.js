function identificarEmocion() {
    // Obtener el texto del input
    var texto = document.getElementById('inputTexto').value.toLowerCase();

    // Array de emociones y sus palabras clave
    var emociones = {
        'feliz': ['feliz', 'alegre', 'contento'],
        'triste': ['triste', 'melancólico', 'deprimido'],
        'emocionado': ['emocionado', 'excitado', 'entusiasmado', 'emocionante'],
        'enamorado': ['enamorado', 'amoroso', 'apasionado', 'enamoradísimo', 'amor'],
        'sorprendido': ['sorprendido', 'asombrado', 'maravillado', 'sorpresa']
    };

    // Identificar la emoción
    var emocionIdentificada = Object.keys(emociones).find(function(emocion) {
        return emociones[emocion].some(function(palabra) {
            return texto.includes(palabra);
        });
    });

    // Mostrar el resultado
    var resultadoEmocion = document.getElementById('resultadoEmocion');
    var imagenEmocion = document.getElementById('imagenEmocion');

    if (emocionIdentificada) {
        resultadoEmocion.textContent = 'Emoción identificada: ' + emocionIdentificada;
        imagenEmocion.src = 'image/' + emocionIdentificada + '.jpg'; // Ruta actualizada
        imagenEmocion.style.display = 'block';
    } else {
        resultadoEmocion.textContent = 'No se pudo identificar ninguna emoción.';
        imagenEmocion.style.display = 'none';
    }
}