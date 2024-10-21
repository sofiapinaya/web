document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
      // Cambiar para seleccionar el padre del botón que es el "rectángulo"
      const toggleContainer = button.parentElement; 

      toggleContainer.addEventListener('click', function() {
        const content = this.nextElementSibling; // El contenido después del contenedor

        if (content.style.display === 'block') {
          content.style.display = 'none';
          button.textContent = '▼'; // Cambiar la flecha al estado cerrado
        } else {
          content.style.display = 'block';
          button.textContent = '▲'; // Cambiar la flecha al estado abierto
        }
      });
    });
});
