this.deskTopMenuScroll = function () {
    if (docWindow.scrollTop() > gtHeader.outerHeight()) {
        gtHeader.addClass("gt-header-scrolled");
    } else {
        gtHeader.removeClass("gt-header-scrolled");
    }
};


if ($("*").is(".gt-top-plane")) {
    $('.gt-header').addClass('gt-header-plane-top')
};



self.deskTopMenuScroll();//_desctop_header_func.js

docWindow.resize(function () {
    self.deskTopMenuScroll();
    if (gtHeader.hasClass("gt-open")) self.mobileMenuClose();

})