$(function() {
  
    var slideContainer = $('.slide-container');
    
    slideContainer.slick();
    
    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);
    
    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.clash-card img').fadeOut(1000);
    });
    
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.clash-card img').fadeIn(200);
    });
    
  })();
  

/* const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.wrapper');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

showSlide(0);

const prevButton = document.createElement('button');
prevButton.innerHTML = 'Anterior';
prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
slideContainer.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.innerHTML = 'Siguiente';
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
slideContainer.appendChild(nextButton); */
