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


    // ---------

    $(".dropdown_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_box");
      dropDownBlock = parentBlock.find(".dropdown_slide");
      if(dropDownBlock.is(":hidden")) {
        dropDownBlock.slideDown(300);
      } else {
        dropDownBlock.slideUp(300);
      }
    });    

    $(".rest_btn").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".table_row");
      parentBlock.find("input, textarea").val("");
    });

    // ------

    $(".drpdown_select_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".drpdown_select");
      dropDownBlock = parentBlock.find(".drpdown_select_list");
      if(dropDownBlock.is(":hidden")) {
        dropDownBlock.slideDown(300);
      } else {
        dropDownBlock.slideUp(300);
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".drpdown_select_list").slideUp(300);
      }
    });

    $(document).mouseup(function (e){
        hide_element = $(".drpdown_select_list")
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
          hide_element.slideUp(300);
        }
    });


    // -----

    $(".table_3 .table_row").on("click", function(e) {
        e.preventDefault();
        // innerElem = $(this).find(".inner_link");
        // if(!innerElem) {
          parentBlock = $(this).closest(".table_row_wrapp");
          dropDownBlock = parentBlock.find(".table_row_dropdown");
          if(dropDownBlock.is(":hidden")) {
            dropDownBlock.slideDown(300);
          } else {
            dropDownBlock.slideUp(300);
          }
        // }
    });

    // --------

    $(".dropdown_box_title_2").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_box_wrapp_2");
      var dropdownBlock = parentBlock.find(".dropdown_box_2");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        $(this).addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        $(this).removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".dropdown_box_2").slideUp(300);
        $(".dropdown_box_title_2").removeClass("active");
      }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_box_2")
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
          $(hide_element).slideUp(300);
          parentBlock = $(hide_element).closest(".dropdown_box_wrapp_2");
          parentBlock.find(".dropdown_box_title_2").removeClass("active");
        }
    });

    var value, form, dropdowns;

    $(".dropdown_box_2 p").on("click", function(e) {
      e.preventDefault();
      value = $(this).text();
      parentBlock = $(this).closest(".dropdown_box_wrapp_2");
      parentBlock.find(".dropdown_box_title_2 p").text(value);
      parentBlock.find("input[type='hidden']").val(value);
      $(this).closest(".dropdown_box").slideUp(300);
    });


    $("[data-textarea]").on("keydown", function() {
      textareaName = $(this).attr("data-textarea");
      countTextareaBox = $("[data-count-textarea = '"+textareaName+"']");
      maxVal = parseInt( countTextareaBox.find("[data-count-num]").attr("data-count-num") );
      currentVal = $(this).val().length;
      str = $(this).val();
      console.log(str);
      if(currentVal > maxVal) {
        str.slice(0, -1);
        $(this).val(str);
      }
      countTextareaBox.find(".countSimbols").html(currentVal);
      console.log(maxVal +"   "+ currentVal);
    });

    $(".switchBtn").on("click", function() {
      
    });

});