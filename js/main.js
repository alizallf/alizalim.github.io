// main.js | Aliza Lim


// Handle Mouseover Img Chnange for Work Cards

//Check to see if the DOM is ready
$(document).ready(function() {


  // NAVBAR
  var navBar = $(".navBar");
    var navLinks = navBar.find("a");
    var icon = $(".icon");

    function toggleResponsive() {
        navBar.toggleClass("responsive");
    }

    function handleResize() {
        if ($(window).innerWidth() > 768) {
            navBar.removeClass("responsive");
        }
    }

    function handleScroll() {
        if ($(window).scrollTop() > 0) {
            navBar.addClass("navbar-shadow navbar-solid");
        } else {
            navBar.removeClass("navbar-shadow navbar-solid");
        }
    }

    icon.on("click", toggleResponsive);
    $(window).on("resize", handleResize);
    $(window).on("scroll", handleScroll);

    // Trigger the scroll event on page load to apply the initial style based on the scroll position
    handleScroll();

  // Trigger the scroll event on page load to apply the initial style based on the scroll position
  $(window).trigger("scroll");

      
      $('#ia-img').hover(function() {
        var $img = $(this);
        $img.attr('src', './assets/img/ia-hover.png');
        $img.animate({
          marginTop: "-=16px"
        }, 130);
      }, function() {
        var $img = $(this);
        $img.animate({
          marginTop: "0"
        }, 260, function() {
          $img.attr('src', './assets/img/ia-normal.png');
        });
      });



      $('#nh-img').hover(function() {
        var $img = $(this);
        $img.attr('src', './assets/img/nh-hover.png');
        $img.animate({
          marginTop: "-=16px"
        }, 130);
      }, function() {
        var $img = $(this);
        $img.animate({
          marginTop: "0"
        }, 260, function() {
          $img.attr('src', './assets/img/nh-normal.png');
        });
      });



    $('#fl-img').hover(function() {
        var $img = $(this);
        $img.attr('src', './assets/img/fl-hover.png');
        $img.animate({
          marginTop: "-=16px"
        }, 130);
      }, function() {
        var $img = $(this);
        $img.animate({
          marginTop: "0"
        }, 260, function() {
          $img.attr('src', './assets/img/fl-normal.png');
        });
      });



});
