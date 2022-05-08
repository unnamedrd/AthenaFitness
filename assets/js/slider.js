

$(window).load(function () {
    $(".owl-carousel").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      nav: true,
      navigation: false,
      dots: true,
      navText: ["prev", "next"],
      pagination: true,
      autoPlay: true,
    });
});