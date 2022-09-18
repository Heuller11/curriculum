$('nav .bi-list').click(function(){
    $('.menu').css('display', 'block');
    $('.overlay').css('display', 'block');
    $('.bi-x-circle').css('display', 'block')
})

$('nav .bi-x-circle').click(function(){
    $('.menu').css('display', 'none');
    $('.overlay').css('display', 'none');
    $('.bi-x-circle').css('display', 'none')
})


$('.info-icon').click(function(){
    var index = $('.timeline-content .description').index($(this).parents('.description'));
    var calculateTop = index < 2 ? (105 + index * 320).toString() + 'px' : (105 + 80 + index * 320).toString() + 'px';
    $('.box-responsive').css({'display': 'block',
                                'top': calculateTop});
    $('.overlay').css('display', 'block');
})

$('.box svg').click(function(){
    $(this).parent().css('display', 'none');
    $('.overlay').css('display', 'none');
})