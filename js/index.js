$(document).ready(function(){
    $(".about-img").slick({
      dots: false,
      prevArrow: '<div class="arrow-prev"><img src="./img/left.svg" alt="left"></div>', // property for the previous slide button
      nextArrow: '<div class="arrow-next"><img src="./img/right.svg" alt="right"></div>',// property for next slide button
      infinite: true,//will the slider be infinite true/false
      slidesToShow: 1, // number of slides to display
      slidesToScroll: 1 // how many slides will scroll at a time
    });
  });
