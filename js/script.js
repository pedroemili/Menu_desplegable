// Obtener la referencia a la etiqueta de imagen dentro del botón
var imagen = document.querySelector(".dropbtn img");

// Obtener la imagen original
var imagenOriginal = imagen.src;

// Cambiar imagen al pasar el mouse sobre el botón
document.querySelector(".dropbtn").addEventListener("mouseover", function() {
    // Cambiar la imagen
    imagen.src = "oni.jpg";
});

// Cambiar imagen cuando el mouse sale del botón
document.querySelector(".dropbtn").addEventListener("mouseout", function() {
    // Restaurar la imagen original
    imagen.src = imagenOriginal;
});
