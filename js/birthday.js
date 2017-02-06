$(function() {
    var start = $('.start');
    var second = $('.second');
    var third = $('.third');
    var fourth = $(".fourth");
    start.on('click', function(e){
        start.hide();
        $(".second").show();
    });
    second.on('click', function(e){
        $(".third").show();
    });
    third.on('click', function(e){
        $(".fourth").show();
    });
    fourth.on('click', function(e){
        $('body').css('background-image', "url('happybirthday.gif')");
        second.text("Happy Birthday!");
        third.text("Happy Birthday!");
        fourth.text("Happy Birthday!");
    });
});