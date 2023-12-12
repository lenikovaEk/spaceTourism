$(function() {
  $('.slider_box').slick({
    prevArrow: '<img class="slider_arrow slider_arrow-left" src="images/arrow-left.svg" alt="arrow">',
    nextArrow: '<img class="slider_arrow slider_arrow-right" src="images/arrow-right.svg" alt="arrow">',
    responsive: [
      {
        breakpoint: 470,
        settings: {
        dots: true,
        
        arrows:false
        }
      }
    ]
  });

  $(".menu a, .footer__menu a,.go-").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu-btn,.menu a').on('click',function(){
    $('.menu__list').toggleClass('active');

  })
});
