$(document).ready(function() {
    $(function(){
        $('.colapse-menu-button .c-hamburger').on('click',function(){
          $('.header-navig').slideToggle();
        });
    });
        (function() {

              "use strict";

              var toggles = document.querySelectorAll(".c-hamburger");

              for (var i = toggles.length - 1; i >= 0; i--) {
                  var toggle = toggles[i];
                  toggleHandler(toggle);
              };

              function toggleHandler(toggle) {
                  toggle.addEventListener( "click", function(e) {
                      e.preventDefault();
                      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                  });
              }

   })();
  wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    );
  wow.init();
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1700
            });

            show = false;
        }
    });
    
});