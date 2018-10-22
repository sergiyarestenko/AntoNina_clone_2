this.imgLazyLoadFunc = function (el) {
    var img = el.find('img');
    img.Lazy({
        placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function (element) {
            console.log('error loading ' + element.data('src'));
        },
        afterLoad: function () {
            self.setImgWidthHeightClass(el)
        }
    });
};

this.setImgWidthHeightClass = function (el) {

    var img = el.find('img');
    $(img).removeClass("gt-width");
    $(img).removeClass("gt-height");
    var holderConst = el.outerHeight() / el.outerWidth(),

        imgConst = img.outerHeight() / img.outerWidth();


    if (imgConst > holderConst) {
        $(img).addClass("gt-width");
    } else {
        $(img).addClass("gt-height");
    }

};




if ($("div").is(".gt-img-holder")) {
    $(".gt-img-holder ").each(function () {
        self.imgLazyLoadFunc($(this));
    });

    docWindow.resize(function () {
        var resizeTimer;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            $(".gt-img-holder ").each(function () {
                self.setImgWidthHeightClass($(this));
            });

        }, 66);
    });
}

// ---img-holder//\\--- bg-holder \\\///





this.setBg = function (el) {
    var bg,
        currToken,
        newToken,
        resizeTimer;
    setBg();

    function setBg() {
        if (self.isSmallScreen()) {
            bg = el.attr("data-src-phone");
            currToken = 0;
        } else if (self.isTablet()) {
            bg = el.attr("data-src-tablet");
            currToken = 1;
        } else {
            bg = el.attr("data-src-desctop");
            currToken = 2;
        }
        el.css("background-image", "url('../images/bgs/" + bg + "')");
    }
    docWindow.resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {

            if (self.isSmallScreen()) {
                newToken = 0;
            } else if (self.isTablet()) {
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




if ($('div').is('.gt-bgs-holder')) {
    $('.gt-bgs-holder').each(function () {
        self.setBg($(this));
    })
}