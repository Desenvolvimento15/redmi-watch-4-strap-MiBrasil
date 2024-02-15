$(document).ready(function() {
  const $slides = $('#slides');
  const $dotsContainer = $('#dots-container');
  const $textItem = $('#text-item');

  const slideTexts = ["Roxo Claro", "Azul", "Verde"];

  let currentSlide = 0;

  function showSlide(index) {
    $slides.css('transform', `translateX(${-index * 100}%)`);
    $textItem.text(slideTexts[index]);

    $('.dot').each(function(i, dot) {
      $(dot).toggleClass('active', i === index);
    });
  }

  function createDots() {
    for (let i = 0; i < slideTexts.length; i++) {
      const $dot = $('<span>').addClass('dot').on('click', () => showSlide(i));
      $dotsContainer.append($dot);
    }
  }

  function autoPlay() {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideTexts.length;
      showSlide(currentSlide);
    }, 3000); // Altera o slide a cada 3 segundos
  }

  createDots();
  showSlide(currentSlide);
  autoPlay();
});
