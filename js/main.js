$(document).ready(function() {
    

    // smooth scroll
    $(function($) {
         $.localScroll({
          duration: 1000,
          hash: false });
         });

    // show/hide mobile menu
    $(".mobile-logo").toggle(function() {
      $(".header-content ul").fadeOut('200', function() {
        
      });
    }, function() {
      $(".header-content ul").fadeIn('200', function() {
        
      });
    });
    

      // mobile menu show
    $(window).resize(function(event) {
      if ($(window).width() < 500)
        {
          $(".mobile-logo").css('display', 'block');
          $(".header-content ul").addClass('mobile-list');
          $(".header-content ul li").addClass('mobile-li');

        }
       else
        {
             $(".mobile-logo").css('display', 'none');
            $(".header-content ul").removeClass('mobile-list');
           $(".header-content ul li").removeClass('mobile-li');
        }
    });

    
    



    // main menu active
    $(".header-content ul li a").click(function(event) {
      $(".header-content ul li a").removeClass('active');
      $(this).addClass('active');
    });


    // skills scrollbar active
    $(".about-progress-bar.color-blue").toggle(function() {
       $(this).find('span').css("width","83%");
    }, function() {
      $(this).find('span').css("width","1%");
    });
    $(".about-progress-bar.color-orange").toggle(function() {
       $(this).find('span').css("width","74%");
    }, function() {
      $(this).find('span').css("width","1%");
    });
    $(".about-progress-bar.color-green").toggle(function() {
       $(this).find('span').css("width","65%");
    }, function() {
      $(this).find('span').css("width","1%");
    });
    $(".about-progress-bar.color-yellow").toggle(function() {
       $(this).find('span').css("width","60%");
    }, function() {
      $(this).find('span').css("width","1%");
    });
    $(".about-progress-bar.color-purple").toggle(function() {
       $(this).find('span').css("width","90%");
    }, function() {
      $(this).find('span').css("width","1%");
    });

    // names moving block
    $(".team-names li").click(function(event) {
      $(".team-names li").removeClass('active');
      $(this).toggleClass('active');
    });
    // link between names&profs
    $(".team-names li.prof-1").click(function(event) {
      $(".staff-person").removeClass('active-change');
      $(".person-1").addClass('active-change');
    });
    $(".team-names li.prof-2").click(function(event) {
      $(".staff-person").removeClass('active-change');
      $(".person-2").addClass('active-change');
    });
      $(".team-names li.prof-3").click(function(event) {
      $(".staff-person").removeClass('active-change');
      $(".person-3").addClass('active-change');
    });
    $(".team-names li.prof-4").click(function(event) {
      $(".staff-person").removeClass('active-change');
      $(".person-4").addClass('active-change');
    });  


      // meta-date activated
      $(".meta-date span").click(function(event) {
       $(".meta-date span").removeClass("active");
       $(this).addClass('active');
      });

      // meta-date + meta-details
      $(".date-2014").click(function(event) {
        $(".meta-details").children('div').removeClass("active");
        $(".details-2014").addClass("active");
      });
      $(".date-2013").click(function(event) {
        $(".meta-details").children('div').removeClass("active");
        $(".details-2013").addClass("active");
      });

      // search form visible
      $(".search-logo span").toggle(function() {
        $(".search-form").fadeIn(300);
      }, function() {
        $(".search-form").fadeOut(300);
      });


      // easter egg
      $(".footer-author").hover(function() {
        $(".meta-author img").fadeIn('400', function() {
          
        });
      }, function() {
        $(".meta-author img").fadeOut('400', function() {
          
        });
      });
      
        

     
    
  














});