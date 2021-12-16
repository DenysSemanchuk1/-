$(function () {
  $(".about__slider").slick({
    slidesToShow: 3,
    infinite: false,
  });
  $(".tv__slider").slick({
    slidesToShow: 3,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "60px",
  });
});
