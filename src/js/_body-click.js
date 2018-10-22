body.on('click', function (e) {
    var target = e.target;

    if (userMenuOpen && !$(target).closest('header').is(' #header')) {

        self.closeHeaderUser();

    }


})