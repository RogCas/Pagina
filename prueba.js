/*document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides');
    let currentIndex = 0;
    let timeout;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block"; // Cambiamos display a "block" para mostrar la imagen
          slide.classList.add('fade-in');
        } else {
          slide.style.display = "none"; // Ocultamos las demás imágenes
          slide.classList.remove('fade-in');
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      timeout = setTimeout(nextSlide, 10000); // Cambia de imagen cada 10 segundos
    }
  
    nextSlide();
  
    slides.forEach((slide, i) => {
      slide.addEventListener('click', function() {
        clearTimeout(timeout); // Detiene el temporizador al hacer clic en una imagen
      });
    });
  });
  */
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides');
    let currentIndex = 0;
    let timeout;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
          slide.classList.add('fade-in');
          if (slide.tagName === 'VIDEO') {
            slide.play();
          }
        } else {
          slide.style.display = "none";
          slide.classList.remove('fade-in');
          if (slide.tagName === 'VIDEO') {
            slide.pause();
            slide.currentTime = 0;
          }
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      startTimeout();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      startTimeout();
    }
  
    function startTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(nextSlide, 20000); // Cambia de imagen o video cada 15 segundos
    }
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    });
  
    showSlide(currentIndex);
    startTimeout();
  });
  