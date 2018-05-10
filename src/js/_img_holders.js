this.imgHolderFunc = function (el) {
    $(el).removeClass("gt-width");
    $(el).removeClass("gt-height");
    $(el).removeClass("gt-visible");
    var holderConst = el.outerHeight() / el.outerWidth(),
        img = el.find('img'),
        imgConst = img.outerHeight() / img.outerWidth();

    if (imgConst > holderConst) {
        $(el).addClass("gt-width");
    }
    else {
        $(el).addClass("gt-height");
    }
    img.Lazy({
        placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        }
    });
};


this.setBg = function (el) {



    var bg,
        currToken,
        newToken,
        resizeTimer;
    setBg();

    function setBg() {
        if (token667.is(":visible")) {
            bg = el.attr("data-src-phone");
            currToken = 0;
        } else if (token1024.is(":visible")) {
            bg = el.attr("data-src-tablet");
            currToken = 1;
        } else {
            bg = el.attr("data-src-desctop");
            currToken = 2;
        }
        el.css("background-image",  "url('../assets/images/bgs/" + bg + "')");

    }

    docWindow.resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            if (token667.is(":visible")) {
                newToken = 0;
            } else if (token1024.is(":visible")) {
                newToken = 1;
            } else {
                newToken = 2;
            }
            if (newToken > currToken) {
                setBg();
            }
        }, 250);
    });
};


// todo resize TimeOut;


if ($('div').is('.gt-bgs-holder')) {

    $('.gt-bgs-holder').each(function () {

        self.setBg($(this));
    })

}
self.setBg($('#gt-footer'));




    if ($("div").is(".gt-img-holder-abs")) {
        $(".gt-img-holder-abs").each(function () {
            self.imgHolderFunc($(this));
        });
    }



docWindow.resize(function () {

    if ($("div").is(".gt-img-holder-abs")) {
        $(".gt-img-holder-abs").each(function () {
            $(this).removeClass("gt-width");
            $(this).removeClass("gt-height");
            self.imgHolderFunc($(this));
        });
    }
});
