this.setMediaPlayer = function (el) {

    function showVideo() {
        switcher.hide('slow');
        el.find('.gt-video-inner').hide('slow');
        el.find('.gt-video-wrapper').show();
    }

    var videoBlock = el.find('video'),
        switcher = el.find('.gt-video-switch');

    switcher.addClass('gt-bg-hide');


    videoBlock.mediaelementplayer({

        success: function (me, node, instance) {
            showVideo();
            $(me).on('playing', function () {
                self.moveVideoHeader(el)
            });
            $(me).on('pause ended', function () {
                self.unMoveVideoHeader(el)
            });
        }
    });

};

this.moveVideoHeader = function (el) {
    el.find('.gt-video-text').addClass('gt-video-is-playing');
    el.find('.mejs__controls').css('opacity','')

};

this.unMoveVideoHeader = function (el) {
    el.find('.gt-video-text').removeClass('gt-video-is-playing');
    el.find('.mejs__controls').css('opacity','0')

};


this.setMediaPlayerSwitch = function (el) {
    el.find('.gt-video-switch').on('click', function () {
        self.setMediaPlayer(el);
    });
};


this.setMediaPlayerSrc = function () {
    var tag = document.createElement("script");
    tag.type = "text/javascript";
    tag.src = "./js/mediaelement-and-player.min.js";
    var lastScriptTag = $("script")[0];
    lastScriptTag.parentNode.insertBefore(tag, lastScriptTag);
};


if ($("div").is(".gt-video")) {

    // self.setMediaPlayerSrc();

    $('.gt-video').each(function () {
        self.setMediaPlayerSwitch($(this));
    });


}


