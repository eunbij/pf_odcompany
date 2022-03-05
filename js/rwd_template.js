$(function(){
    $(document).ready(function(){
        $('.slide_gallery').bxSlider({
            mode: 'fade',
            speed: 300,
            pager: false,
            sideWidth: 1440,
            stopAutoOnClick: true,
            auto: true,
            autoHover: true,
            autoControls: true
        });
    });

    $('.gnb a, .promotion_list a, .work_section a, .blog_section a').click(function(e){
        e.preventDefault();
    });
});