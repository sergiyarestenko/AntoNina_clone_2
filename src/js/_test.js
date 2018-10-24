body.on('click', function (event) {
    // console.log(event.target);

});





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