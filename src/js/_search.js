///////search-block
var searchBlock = $('#gt-search-block');
var searchBlockInput = $('#gt-search-block-input');


$('.gt-open-search').each(function () {
    $(this).on('click', function () {
        self.openSearchBlock();
        self.setPseudoBlurListener();
    });

});

$('#gt-search-block-close').on('click', function () {
    self.closeSearchBlock();
    self.destroyPseudoBlurListener();
});


this.setPseudoBlurListener = function () {
    searchBlock.on('click',function (e) {
        var target = $(e.target),
            clear = $('#gt-search-block-clear');
        if( target.is( clear) || target.is(clear.find('*'))){
            self.clearSearchBlockInput()
        }else{
            self.showCrossInSearchBlock();
        }
    })
};
this.destroyPseudoBlurListener = function () {
    searchBlock.off();
};


this.searchReady = function () {
        searchBlock.addClass('gt-ready');

};
this.searchUnready = function () {
    searchBlock.removeClass('gt-ready');

};

this.openSearchBlock = function () {
    self.fixBody();
    searchBlock.addClass('gt-open');
};
this.closeSearchBlock = function () {
    self.unfixBody();
    self.clearSearchBlockInput();
    searchBlock.removeClass('gt-open');
};


this.showCrossInSearchBlock = function () {
    if ($.trim(searchBlockInput.val())) {
        if (!searchBlockInput.hasClass('gt-dirty')) {
            searchBlockInput.addClass('gt-dirty');
            self.searchReady();
        }
    } else {
        if (searchBlockInput.hasClass('gt-dirty')) {
            searchBlockInput.removeClass('gt-dirty');
            self.searchUnready();


        }
    }
};

this.clearSearchBlockInput = function () {
    searchBlockInput.val('');
    self.searchUnready();
    if (searchBlockInput.hasClass('gt-dirty')) {
        searchBlockInput.removeClass('gt-dirty')
    }
};