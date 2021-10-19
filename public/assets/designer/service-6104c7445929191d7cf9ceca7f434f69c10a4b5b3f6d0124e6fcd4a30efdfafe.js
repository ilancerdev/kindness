$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.facility-mobile');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text( i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: false,
        prevArrow: '<div class="slide-arrow prev-arrow white"><img src="/assets/slide-prev-w-fe8606529ee740a3ddd36a87486935811301f31c218fc6bc2b5ca9c90a9bb2e8.svg" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow white"><img src="/assets/slide-next-w-50d3383d2428cdf953b2198cd3617f03244375a52bb07901e041939bf3c8cc80.svg" alt=""></div>',
        autoplay: true,
        autoplaySpeed: 4200, 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="/assets/slide-prev-w-fe8606529ee740a3ddd36a87486935811301f31c218fc6bc2b5ca9c90a9bb2e8.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="/assets/slide-next-w-50d3383d2428cdf953b2198cd3617f03244375a52bb07901e041939bf3c8cc80.svg" alt=""></div>',
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="/assets/slide-prev-w-fe8606529ee740a3ddd36a87486935811301f31c218fc6bc2b5ca9c90a9bb2e8.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="/assets/slide-next-w-50d3383d2428cdf953b2198cd3617f03244375a52bb07901e041939bf3c8cc80.svg" alt=""></div>',
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="/assets/slide-prev-w-fe8606529ee740a3ddd36a87486935811301f31c218fc6bc2b5ca9c90a9bb2e8.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="/assets/slide-next-w-50d3383d2428cdf953b2198cd3617f03244375a52bb07901e041939bf3c8cc80.svg" alt=""></div>',
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
  

});

