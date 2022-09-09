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