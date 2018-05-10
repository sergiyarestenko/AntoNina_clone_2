this.initTopCards = function () {
    var topBlock = $('.gt-top'),
        cards = topBlock.find('.gt-top-card');

    cards.each(function () {
        $(this).on('mouseover',function () {
            $(this).addClass('gt-active');
        })
    });

    topBlock.on('mouseleave',function () {
        cards.removeClass('gt-active');
    })
};

if ($("div").is(".gt-top-card-wrapper")){
    self.initTopCards();
}