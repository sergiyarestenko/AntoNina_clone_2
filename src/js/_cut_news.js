this.cutNews = function (el) {
    var parent = el.parent(),
        maxHeight = parent.height(),
        cuttingEl = el.find('p'),
        currHeight,
        cuttingLenght,
        newText;
    parent.children().each(function () {
        maxHeight -= $(this).outerHeight(true);
    });
    maxHeight = maxHeight + el.height() - 20;
    cuttingEl.each(function () {
        currHeight = $(this).outerHeight(true);
        if (currHeight < maxHeight) {
            maxHeight -= currHeight
        } else {
            if (!maxHeight) {
                $(this).css('display', 'none');
            } else {
                cuttingLenght = Math.floor($(this).text().length * maxHeight / currHeight);
                newText = $(this).text().substring(0, cuttingLenght - 5);
                // cutLastSymbol();
                $(this).text((newText) + '...');
                maxHeight = 0;
            }
        }
    });
    //
    // function cutLastSymbol() {
    //     var strLength = newText.length;
    //     if(newText.charAt(strLength - 1) == ' '){
    //         newText= newText.substring(0, strLength - 1);
    //     }else{
    //         newText = newText.substring(0, strLength - 1);
    //         setTimeout(cutLastSymbol)
    //     }
    // }
};
if ($("div").is(".js-news-cut")) {
    $(".js-news-cut").each(function () {
        self.cutNews($(this));
    });
   
}


if ($("div").is(".gt-read-more-slider-text-inner")) {
    $('.gt-read-more-slider-text-inner').each(function () {
        self.cutNews($(this));
    })
}