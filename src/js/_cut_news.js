/*

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

*/

this.cutNews = function(el) {
  var elHeight = $(el).height(),
    text = $(el).children(),
    currText,
    textLength = text.length,
    sumHeight = 0;

    for (var i = 0; i < textLength; i++){
        currText = text[i];
        $(currText).addClass('test');
        // debugger;
        if (elHeight < $(currText).outerHeight()){
            cutText(currText, elHeight);
           break;
        }else{
            elHeight = elHeight - $(currText).outerHeight();
        }
    }

function cutText(el,height){
    while ($(el).outerHeight() > height) {
              $(el).text($(el).text().split(" ").slice(0, $(el).text().split(" ").length - 1).join(" ") + "...");

    }

}
 
  //     var $title = $(el).find("p");

  //     while ($title.height() > $(el).height()) {
  //         $title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
  //     }
};

if ($("div").is(".js-news-cut")) {
  $(".js-news-cut").each(function() {
    self.cutNews($(this));
  });
}

if ($("div").is(".gt-read-more-slider-text-inner")) {
  $(".gt-read-more-slider-text-inner").each(function() {
    self.cutNews($(this));
  });
}
