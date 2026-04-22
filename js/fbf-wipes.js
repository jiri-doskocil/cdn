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
