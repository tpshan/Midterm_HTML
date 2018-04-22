 $(document).ready(function(){
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