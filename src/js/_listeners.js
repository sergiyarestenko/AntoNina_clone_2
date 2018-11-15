
docWindow.resize(function () {
    var resizeTimer;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {

        self.deskTopMenuScroll();
        self.updateImgHolder();

        if (gtHeader.hasClass("gt-open")) self.mobileMenuClose();



        self.footerHeight();

        $(".js-news-cut").each(function () {
            self.cutNews($(this));
        });

    }, 66);
});

this.updatePage = function () {
    self.updateImgHolder();
console.log('update')
}



// loadFunction


self.updateImgHolder();

