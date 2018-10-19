enterButton.on('click', function () {
    self.toggleHeaderUser();
})

$('#gt-header-to-main-menu').on('click', function () {
    self.closeHeaderUser()
});

this.toggleHeaderUser = function () {
    if (gtHeader.hasClass('gt-user-open')) {
        self.closeHeaderUser();
    } else {
        self.openHeaderUser();
    }
}




this.openHeaderUser = function () {
    gtHeader.addClass('gt-user-open');
    // body.on('click', function (e) {
    //     var target = e.target;
    //     console.log(target)
    //     if (target.is(enterButton) || target.is(headerUser)) {
    //         console.log('is');
    //         return;
    //     } else {
    //          console.log('closeHeaderUser');
    //         self.closeHeaderUser();
    //     }
    // })

}

this.closeHeaderUser = function () {
    gtHeader.removeClass('gt-user-open')
}