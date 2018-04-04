// VAR

var psyMainNav = $('.psy-nav');
var psyRightNav = $('.right-psy-header');



// MAIN CODE
jQuery(function($){
        $(window).on("scroll", function(event){
           if($(window).scrollTop() > 400)
            {
                psyRightNav.removeClass("hidden")
            }
            else
           {
                psyRightNav.addClass("hidden")
           }
        });
});

