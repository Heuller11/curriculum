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


$('.flag svg').click(function(){
    $(this).parents('div.wrap-accessories').find('.box').css('display', 'block');
    $('.overlay').css('display', 'block');
})

$('.box svg').click(function(){
    $(this).parent().css('display', 'none');
    $('.overlay').css('display', 'none');
})