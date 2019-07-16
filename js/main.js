$(document).ready(function () {
 $('.slider-wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  });
 $('.text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="arrow-prev"><img src="img/comment/prevArrow.png"></button>',
  nextArrow: '<button type="button" class="arrow-next"><img src="img/comment/nextArrow.png"></button>',
 });
});