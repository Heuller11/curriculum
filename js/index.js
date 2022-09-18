$('nav .bi-list').click(function(){
    $('.menu').css('display', 'block');
    $('.overlay').css('display', 'block');
    $('.closeMenu').css('display', 'block')
})

$('nav .closeMenu, .menu li').click(function(){
    $('.menu').css('display', 'none');
    $('.overlay').css('display', 'none');
    $('.closeMenu').css('display', 'none')
})


$('.info-icon').click(function(){

    var description = $(this).parents('.description');

    var index = $('.timeline-content .description').index(description);
    var calculateTop = index < 2 ? (105 + index * 320).toString() + 'px' : (105 + 80 + index * 320).toString() + 'px';

    
    var activity = $(description).find('.activity');
    var title = $(activity).find('.activity-title').html();
    var text = $(activity).find('p').html();

    var box_elements = $('.box-responsive .box-elements');
    $(box_elements).find('h5').text(title);
    $(box_elements).find('p').text(text);

    $('.box-responsive').css({'display': 'block',
                                'top': calculateTop});
    $('.overlay').css('display', 'block');
})

$('.box-elements svg').click(function(){
    $(this).parents('.box-responsive').css('display', 'none');
    $('.overlay').css('display', 'none');
})