$(document).ready(function(){
// executed after the page has finished loading

    $('#navigationMenu li .normalMenu').each(function(){

        // for each menu bar item create a duplicate hyperlink and position it above the current one
        $(this).before($(this).clone().removeClass().addClass('hoverMenu'));
    });

    $('#navigationMenu li').hover(function(){

        // hover to create animation
        $(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);
    },

    function(){
        // animation that plays when hover out
        $(this).find('.hoverMenu').stop().animate({marginTop:'-25px'},200);

    });
});