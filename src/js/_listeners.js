
docWindow.resize(function () {
    var resizeTimer;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {



        $(docWindow).trigger("customresize");

        self.deskTopMenuScroll();
        // self.updateImgHolder();

        if (gtHeader.hasClass("gt-open")) self.mobileMenuClose();

        self.footerHeight();

        $(".js-news-cut").each(function () {
            self.cutNews($(this));
        });

    }, 66);
});

this.updatePage = function () {
    self.updateImgHolder();
}



// loadFunction


// self.updateImgHolder();

