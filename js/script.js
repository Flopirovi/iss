function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje-enviado');
  const formulario = document.querySelector('form');

  mensaje.style.display = 'block';
  formulario.reset();

  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 4000);
}
