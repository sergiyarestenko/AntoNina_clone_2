body.on('click', function (event) {
    // console.log(event.target);

});


if ($("*").is(".gt-menu-news")) {
    $('.gt-menu-news').find('a').on('click', function (event) {
        event.preventDefault();
        $('.gt-menu-news').find('li').removeClass('gt-active');
        $(this).parent().addClass('gt-active');
        console.log('temp func')
    })

    // todo temp func
}


if ($("div").is("#gt-pre-release")) {
    body.addClass('gt-pre-release');
    $('.gt-header-logo a').on('click',function () {
        return false;
    })
$('.gt-header-menu').find('li').each(function () {
    if( !$(this).hasClass('gt-enter')){
        $(this).hide();
    }
})


}