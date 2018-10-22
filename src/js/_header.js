


// if ($("*").is(".gt-top-plane")) {
//     $('.gt-header').addClass('gt-header-plane-top')
// };




docWindow.resize(function () {
    self.deskTopMenuScroll();
    if (gtHeader.hasClass("gt-open")) self.mobileMenuClose();

})