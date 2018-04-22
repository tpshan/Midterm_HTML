$(document).ready(function(){

    var imgList =[];
    for(i=0; i<3; i++) {
        imgList[i] = "./image/PAGE1/P1_"+(i+1)+".png";
    }

    var img_index = 0;

    function dotColor() {
        for(i=0; i<3; i++) {
            var d = '#dot'+(i+1);
            if(i===img_index) {
                $(d).css('background','#acdef5');
            }
            else {
                $(d).css('background','#fff');
            }
        }
    }

    setInterval( function(){
        $("#home_img").attr('src', imgList[img_index]);
        dotColor();
        if(img_index===2) {img_index=0;}
        else {img_index++;}
    }, 2000);

    $('.dots li').click(function() {
        var dotN = $($(this)).attr('id');
        img_index = Number(dotN[3])-1;
        $("#home_img").attr('src', imgList[img_index]);
        dotColor();
    });

});
