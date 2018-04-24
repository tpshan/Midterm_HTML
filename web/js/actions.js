 $(document).ready(function(){
    var audio = $("audio")[0];
    $('#btn_music').click(function() {
        if($(this).attr('src') === "./image/music_on.png") {
            audio.pause();
            $(this).attr('src', "./image/music_off.png");
        }
        else {
            audio.play();
            $(this).attr('src', "./image/music_on.png");
        }
    });
    
    $('.openOrClose').click(function() {
        var qn = $($(this)).attr('id');

        if($(this).attr('src') === './image/downArrow.png') {
            $(this).attr('src', './image/upArrow.png');
            $(this).attr('alt', 'close');
            $('#a'+qn[1]).slideDown(400);
        }
        else {
            $(this).attr('src', './image/downArrow.png');
            $(this).attr('alt', 'open');
            $('#a'+qn[1]).slideUp(400);
        }
        $('#a'+qn[1]).toggleClass('hide');
    });
});