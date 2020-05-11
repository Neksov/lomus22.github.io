var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoHeight: true,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
  },
})
new WOW().init();

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})