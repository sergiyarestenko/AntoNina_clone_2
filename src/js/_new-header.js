this.deskTopMenuScroll = function () {
    if (docWindow.scrollTop() > gtHeader.outerHeight()) {
        gtHeader.addClass("gt-scrolled");
    } else {
        gtHeader.removeClass("gt-scrolled");
    }
};



this.mobileMenuOpen = function () {
    self.fixBody();
    gtHeader.addClass("gt-open");
    mobileMenuSwitch.addClass("gt-open");
};


this.mobileMenuClose = function () {
    self.unfixBody();
    mobileMenuSwitch.removeClass("gt-open");
    gtHeader.removeClass("gt-open");
};


this.toggleHeaderUser = function () {
    if (gtHeader.hasClass('gt-user-open')) {
        self.closeHeaderUser();
    } else {
        self.openHeaderUser();
    }
}

this.openHeaderUser = function () {
    gtHeader.addClass('gt-user-open');
    self.mobileMenuOpen();

    setTimeout(function () {
        userMenuOpen = true;
    }, 500)
}

this.closeHeaderUser = function () {
    gtHeader.removeClass('gt-user-open');
    if (!self.isTablet()) {
        self.mobileMenuClose();
    }
    userMenuOpen = false;
}


mobileMenuSwitch.on("click", function () {
    if ($(this).hasClass("gt-open")) {
        self.mobileMenuClose();
    } else {
        self.mobileMenuOpen();
    }
});


$('#gt-header-to-main-menu').on('click', function () {
    self.closeHeaderUser()
});

enterButton.on('click', function () {
    self.toggleHeaderUser();
})


self.deskTopMenuScroll(); //_desctop_header_func.js