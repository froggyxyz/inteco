$('#projects__slider').slick({
  arrows: false,
  dots: true,
  dotsClass: 'projects__dots',
  slidesToScroll: 1,
  slidesToShow: 1,
});
$('#principles__slider').slick({
  arrows: false,
  dots: true,
  dotsClass: 'principles__dots',
  slidesToScroll: 1,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1339,
      settings: {
        dots: false,
        dotsClass: '',
      },
    },
  ],
});
$('#company__slider').slick({
  arrows: false,
  dots: true,
  dotsClass: 'company__dots',
  slidesToScroll: 1,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        dots: false,
      },
    },
  ],
});
