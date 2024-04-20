document.addEventListener('keydown', function(event) {
  const imagen = document.getElementById('imagen');
  const text = document.getElementById('bluey');
  var anchoDocumento = document.documentElement.scrollWidth;
  var altoDocumento = document.documentElement.scrollHeight;
  if (event.key === 'ArrowRight') {
    // Muestra la imagen y colócala en la posición deseada
    imagen.style.display = 'block';
    text.style.display = 'block';
    imagen.style.top = altoDocumento/3 + 'px'; // Cambia la posición vertical según sea necesario
    imagen.style.left = anchoDocumento/3 + 'px'; // Cambia la posición horizontal según sea necesario
    text.style.top = altoDocumento/5 + 'px'; // Cambia la posición vertical según sea necesario
    text.style.left = anchoDocumento/3 + 'px'; // Cambia la posición horizontal según sea necesario
  } else if (event.key === 'ArrowLeft') {
    // Oculta la imagen
    imagen.style.display = 'none';
    text.style.display = 'none';
  }
});