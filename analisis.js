document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.grid');
  
    // Crear las celdas del grid
    for (let i = 0; i < 40; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
  
    // Función para mostrar imagen y texto al presionar la flecha derecha
    document.addEventListener('keydown', function(event) {
      const key = event.key;
  
      // Verificar si se presionó la flecha derecha
      if (key === 'ArrowRight') {
        // Ocultar cualquier imagen y texto previamente mostrados
        document.querySelectorAll('.image').forEach(function(element) {
          element.classList.remove('image');
        });
        document.querySelectorAll('.text').forEach(function(element) {
          element.classList.remove('text');
          element.textContent = "";
        });
  
        // Mostrar imagen en las celdas de la columna 4 a 6 y fila 4 a 6
        for (let i = 3; i < 6; i++) {
          for (let j = 3; j < 6; j++) {
            const cell = document.querySelector(`.grid > .cell:nth-child(${i * 8 + j + 1})`);
            cell.classList.add('image');
          }
        }
  
        // Mostrar texto diferente en cada celda de la columna 4 a 6 y fila 2 a 3
        const texts = ["Texto 1", "Texto 2", "Texto 3", "Texto 4", "Texto 5", "Texto 6"];
        let index = 0;
        for (let i = 1; i < 3; i++) {
          for (let j = 3; j < 6; j++) {
            const cell = document.querySelector(`.grid > .cell:nth-child(${i * 8 + j + 1})`);
            cell.classList.add('text');
            cell.textContent = texts[index];
            index++;
          }
        }
      }
    });
  });