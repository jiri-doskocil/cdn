const headerBottom = document.querySelector('.header-bottom');
const siteName = document.querySelector('.site-name');

if (headerBottom && siteName) {
 siteName.insertAdjacentElement('afterend', headerBottom);
}

//Posunutí drobečkové navigace
$(document).ready(function() {
  function fixBreadcrumbOffset() {
    var headerHeight = $('header').outerHeight();
    $('.breadcrumbs').css('margin-top', headerHeight + 'px');
  }

  fixBreadcrumbOffset();
  $(window).on('resize', fixBreadcrumbOffset);
});

//Konkurenční výhody a text titulní strany HP
$('.welcome-wrapper').addClass('full-width');

//Nejprodávanější produkty
$('.next-to-carousel-banners').insertAfter('.benefit-banners-full-width');

//Swiper HP recenze
new Swiper('.reviews-wrapper', {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    768: { slidesPerView: 1 }
  }
});

//Reviews HP
function initStars() {
  const starContainers = document.querySelectorAll('.review-stars');
  const starImage = 'https://cdn.doskocil.online/img/fbf-wipes/hvezda-bila.svg';

  starContainers.forEach(container => {
    const rating = parseInt(container.dataset.rating, 10) || 0;

    container.innerHTML = '';

    for (let i = 0; i < rating; i++) {
      const img = document.createElement('img');
      img.src = starImage;
      img.alt = 'Hvězdička';
      img.style.width = '20px';
      img.style.height = '20px';
      container.appendChild(img);
    }
  });
}

document.addEventListener('DOMContentLoaded', initStars);
window.addEventListener('load', initStars);
