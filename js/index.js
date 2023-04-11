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


//   var content = document.getElementById('q');
//   window.addEventListener('scroll', function() {
//   var scrolledY = window.scrollY;
//   var scrolledX = window.scrollX;

//   if (scrolledY > 350 && scrolledY < 360) {
//     // content.style.marginTop = 150 + 'px';
//     content.style.position = "fixed";
//     content.style.top = scrolledY * 0.001 + 'px';
//     // content.style.left = -(scrolledY - 625) * 0.55 + 'px';

//   }
//   if (scrolledY <= 360) {
//     content.style.position = "initial";

//   // }
//   // if (scrolledY >= 3112) {

//   //   content.style.position = "absolute";
//   //   content.style.top = 3112 + 'px';

//   }


// });