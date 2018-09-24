//функция, определяющая зарегиствированный пользователь или нет

// предусмотреть выход из аккаунта


var GoToTrip = function () {

    var self = this,
        body = $(document.body),
        doc = $(document),
        docWindow = $(window),
        bodyPosition = {
            top: false,
            left: false
        },
        token360 = $("#gt-is-360"),
        token480 = $("#gt-is-480"),
        token667 = $("#gt-is-667"),
        token768 = $("#gt-is-768"),
        token1024 = $("#gt-is-1024"),
        token1231 = $("#gt-is-1231"),
        gtHeader = $("header"),
        gtFooter = $("footer"),
        gtWrapper = $("#gt-wrapper"),
        upButton = $("#gt-up"),
        mobileMenuSwitch = $("#gt-mobile-menu-switch"),
        enterButton = $('.gt-enter'),
        enterWrapper = $('#gt-header-enter-wrapper'),
        enterForm = $('#gt-header-enter'),
        enterChose = $('#gt-header-enter-chose'),
        enterClose = $('#gt-header-enter-close');
    $("html").niceScroll({
        cursorborder: '1px solid #6d6d6d',
        mousescrollstep: '60',
        bouncescroll: true,
        cursorcolor: '#6d6d6d'
    })


    this.fixBody = function () {
        if (bodyPosition.top || bodyPosition.left) return;
        bodyPosition.top = doc.scrollTop();
        bodyPosition.left = body.offset().left;
        body.css({
            position: "fixed",
            left: bodyPosition.left + "px",
            top: -1 * bodyPosition.top + "px"
        });
    };
    
    this.unfixBody = function () {
        body.css({
            position: "",
            left: "",
            top: ""
        });
        doc.scrollTop(bodyPosition.top);
        bodyPosition.top = false;
        bodyPosition.left = false;
    };


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

    
    this.mobileMenuClose = function () {
        self.unfixBody();
        mobileMenuSwitch.removeClass("gt-open");
        gtHeader.removeClass("gt-open");
    };
    
    this.mobileMenuOpen = function () {
        self.fixBody();
        gtHeader.addClass("gt-open");
        mobileMenuSwitch.addClass("gt-open");
    };
    
    
    
    mobileMenuSwitch.on("click", function () {
        if ($(this).hasClass("gt-open")) {
            self.mobileMenuClose();
        } else {
            self.mobileMenuOpen();
        }
    });
    this.openEnterForm = function () {
        enterWrapper.addClass('gt-open');
        setTimeout(show);
        function show() {
            $('#gt-header-registered').addClass('gt-open');
            enterForm.addClass('gt-open');
            enterClose.addClass('gt-open');
        }
    };
    this.closeEnterForm = function () {
        enterClose.removeClass('gt-open');
        enterForm.removeClass('gt-open');
        $('#gt-header-registered').removeClass('gt-open');
        self.closeRestorePass();
        setTimeout(hide, 750);
        function hide() {
            enterWrapper.removeClass('gt-open');
        }
    };
    this.changeEnterRegistration = function (event) {
        if (enterForm.hasClass($(event.target).attr("class")))
            return;
        enterForm.removeClass("gt-chosen-enter").removeClass("gt-chosen-registration").addClass($(event.target).attr("class"));
    };
    this.openRestorePass = function () {
        $('#gt-enter-pass-restore-wrapper').addClass('gt-open')
    };
    this.closeRestorePass = function () {
        $('#gt-enter-pass-restore-wrapper').removeClass('gt-open')
    };
    enterButton.each(function () {
        $(this).on('click', self.openEnterForm)
    });
    enterClose.on('click', self.closeEnterForm);
    enterChose.on('click', function (event) {
        self.changeEnterRegistration(event);
    });
    
    $('#gt-enter-form-restore-pass').on('click',self.openRestorePass);
    $('#gt-enter-pass-restore-submit').on('click',self.closeRestorePass);

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
        }
        else {
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
            },250);
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
            if (token667.is(":visible")) {
                bg = el.attr("data-src-phone");
                currToken = 0;
            } else if (token1024.is(":visible")) {
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
    
                if (token667.is(":visible")) {
                    newToken = 0;
                } else if (token1024.is(":visible")) {
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

    this.createSlider = function (currSlider, position) {
        var sliderTimeOut,
            screenConst = 1,
            baseWidth,
            arrowsReady = false,
            inner = currSlider.find(".gt-slider-inner"),
            container = currSlider.find(".gt-slider-container"),
            innerCount = inner.length,
            currPosition = position || 0,
            arrow = currSlider.hasClass("gt-slider-has-arrow"),
            dots = currSlider.hasClass("gt-slider-has-dots"),
            numPanel = currSlider.hasClass("gt-slider-num"),
            tram = currSlider.hasClass("gt-slider-tram"),
            tramAnimation = +currSlider.attr('data-duration') || 300,
            fade = currSlider.hasClass("gt-slider-fade"),
            hasClone = currSlider.hasClass("gt-slider-has-clone");
        if (fade) {
            fadeSliderMove(position);
        }
        if (tram) {
            findScreenConst();
            setBaseWidth();
            tramSliderMove();
        }
        if (arrow) {
            currSlider.append('<div class="gt-slider-arrow-holder"></div>');
            createArrows();
        }
        if (dots) {
            createDots();
        }
        if (innerCount > screenConst) {
            createTouch();
        }
        if (hasClone) {
            createCloneListeners();
        }
    
        function createCloneListeners() {
            currSlider.find('.gt-slider-inner-cover').each(function () {
                $(this).on('click', function () {
                    createCloneSlider($(this).parent().index())
                })
            })
        }
    
        function createArrows() {
            if (innerCount > screenConst) {
                var numInner = '';
                if (numPanel) {
                    numInner = '<div class="gt-slider-arrow-num"><i class="gt-slider-num-curr"></i><i>из</i><i class="gt-slider-num-max"></i></div>'
                }
                currSlider.find(".gt-slider-arrow-holder").html(
                    '<span class = "gt-slider-arrow left">' +
                    "</span>" + numInner +
                    '<span class = "gt-slider-arrow right">' +
                    "</span>"
                );
                createArrowsListeners();
                showNum();
            }
            arrowsReady = true;
        }
    
        function destroyArrows(clone) {
            var el = clone || currSlider;
            el.find(".left").off();
            el.find(".right").off();
            el.find(".gt-slider-arrow-holder").html("");
            arrowsReady = false;
        }
    
        function createArrowsListeners() {
            currSlider.find(".left").on("click", function () {
                oneMoveFunction(false);
            });
            currSlider.find(".right").on("click", function () {
                oneMoveFunction(true);
            });
            if (numPanel) showNum()
        }
    
        function createDots() {
            currSlider.append('<div class="gt-slider-nav"></div>');
            var nav = currSlider.find(".gt-slider-nav"),
                spans = "";
            for (var i = 0; i < innerCount; i++) {
                spans += "<span data-num = " + i + "></span>";
            }
            nav.html(spans);
            nav.find("span").first().addClass("gt-active");
            currSlider.find(".gt-slider-nav span").on("click", function () {
                oneMoveFunction(true, +$(this).attr("data-num"));
            });
        }
    
        function oneMoveFunction(bul, num) {
            var clone,deleted;
            if (num || num === 0) {
                currPosition = num;
            }
    
            else if (bul) {
                currPosition++;
            } else {
                currPosition--;
            }
    
    
            if (fade) {
                if (currPosition > innerCount - screenConst) {
                    currPosition = 0;
    
                }
                if (currPosition < 0) {
                    currPosition = innerCount - screenConst;
    
                }
                fadeSliderMove();
            }
    
            if (tram) {
                if (currPosition > innerCount - screenConst) {
                    clone =  container.children().first().clone();
                    deleted = container.children().first();
                    if(currSlider.hasClass('gt-view-cards-slider')){
                        self.destroyViewCardListeners(deleted);
                        self.createViewCardListeners(clone);
                    }
                    container.css('left', (-(currPosition - 2) * baseWidth) + 'px');
                    container.append(clone);
                    deleted.remove();
                    currPosition--;
    
                }
                if (currPosition < 0) {
                    clone = container.children().last();
                    deleted = container.children().last();
                    if(currSlider.hasClass('gt-view-cards-slider')){
                        self.destroyViewCardListeners(deleted);
                        self.createViewCardListeners(clone);
                    }
                    container.css('left', (-(currPosition + 2) * baseWidth) + 'px');
                    container.prepend(clone.clone());
                    deleted.remove();
                    currPosition++;
                    tramSliderMove();
    
                } else {
                    tramSliderMove();
                }
    
            }
    
            if (numPanel) showNum();
            if (dots) {
                var allDots = currSlider.find(".gt-slider-nav span");
                allDots.removeClass("gt-active");
                $(allDots[container.find('.gt-open').attr('data-count')]).addClass("gt-active");
            }
        }
    
        function tramSliderMove() {
            container.children().removeClass('gt-open');
            container.animate({left: -currPosition * baseWidth}, tramAnimation);
            container.children().eq(currPosition).addClass('gt-open');
        }
    
        function fadeSliderMove(position) {
            var index = position || currPosition;
            $(inner).removeClass('gt-open');
            $(inner[index]).addClass('gt-open');
        }
    
        function showNum() {
            currSlider.find('.gt-slider-num-curr').text(+(container.find('.gt-open').attr('data-count')) + 1);
            currSlider.find('.gt-slider-num-max').text(innerCount);
        }
    
        function createTouch() {
            var initialPoint = 0,
                finalPoint = 0;
            currSlider.on("touchstart", function (event) {
                var e = event.originalEvent;
                initialPoint = Math.abs(e.touches[0].pageX);
            });
            currSlider.on("touchend", function (event) {
                var e = event.originalEvent;
                finalPoint = Math.abs(e.changedTouches[0].pageX);
                if (Math.abs(initialPoint - finalPoint) > 50) {
                    if (initialPoint > finalPoint) {
                        oneMoveFunction(true);
                    } else {
                        oneMoveFunction(false);
                    }
                }
            });
        }
    
        function destroyTouch(clone) {
            var el = clone || currSlider;
            el.off();
        }
    
        function findScreenConst() {
            if (currSlider.attr("data-count")) {
                screenConst = parseInt(currSlider.attr("data-count"));
                if ($(token768).is(":visible")) screenConst = 3;
                if ($(token667).is(":visible")) screenConst = 2;
                if ($(token360).is(":visible")) screenConst = 1;
            }
        }
    
        function setBaseWidth() {
            baseWidth = currSlider.outerWidth() / screenConst;
            currSlider.find(".gt-slider-container").outerWidth((innerCount + 1) * baseWidth);
            inner.each(function () {
                $(this).outerWidth(baseWidth);
                $(this).attr('data-count', $(this).index());
            });
        }
    
        function createCloneSlider(clickPosition) {
            if ($("div").is("#gt-clone")) return;
            self.fixBody();
            var bodyWrapper = $("#gt-body-wrapper"),
                html =  '<div id = "gt-clone-wrapper"   class="container">' +
                            '<div id = "gt-clone" class="gt-slider gt-slider-clone gt-slider-fade gt-slider-num  gt-slider-has-arrow">' +
                                '<div id = "gt-clone-close" class = "gt-slider-clone-close"></div>' +
                                '<div  id = "gt-clone-container" class="gt-slider-container"></div>' +
                            '</div>' +
                        '</div>';
            bodyWrapper.append(html);
            bodyWrapper.show();
            var cloneSlider = $('#gt-clone'),
                inners = currSlider.find(".gt-slider-inner").clone(true);
            inners.each(function () {
                $(this).outerWidth('');
                $('#gt-clone-container').append($(this));
            });
            self.createSlider(cloneSlider, clickPosition);
            $("#gt-clone-close").on("click", function () {
                destroyCloneSlider(cloneSlider);
            });
        }
    
        function destroyCloneSlider(cloneSlider) {
            destroyArrows(cloneSlider);
            destroyTouch(cloneSlider);
            $("#gt-clone-close").off();
            $("#gt-clone-wrapper").remove();
            $("#gt-body-wrapper").hide();
            self.unfixBody();
        }
    
        //////////resizeSlider
        function resizeSlider() {
            if (!sliderTimeOut) {
                sliderTimeOut = setTimeout(function () {
                    sliderTimeOut = null;
                    resizeFunc();
                }, 132);
            }
        }
    
        docWindow.resize(resizeSlider);
    
        function resizeFunc() {
            destroyTouch();
            if (tram) {
                findScreenConst();
                setBaseWidth();
                resizeMove();
                tramSliderMove();
            }
            if (arrowsReady) {
                destroyArrows();
                createArrows()
            }
            if (innerCount > screenConst) {
                createTouch();
            }
    
    
        }
    
        function resizeMove() {
            if (currPosition > innerCount - screenConst)
                currPosition = innerCount - screenConst;
            if (innerCount <= screenConst) currPosition = 0;
    
    
        }
    
    };
    if ($("div").is(".gt-slider")) {
        $(".gt-slider").each(function () {
            self.createSlider($(this));
        })
    }
    this.manageGtActiveUlMenu = function (el) {
        if (el.tagName != "li")
            el = $(el).closest("li");
    
        $(el).closest($("ul")).find("li").removeClass("gt-active");
        $(el).addClass("gt-active");
    };
    
    //
    // if ($("*").is(".gt-hundred-menu")) {
    //     $(".gt-hundred-menu").on("click", function (event) {
    //         event.preventDefault();
    //         self.manageGtActiveUlMenu(event.target);
    //     });
    // }
    
    
    if ($("*").is(".gt-button-menu")) {
        $(".gt-button-menu").on("click", function (event) {
            event.preventDefault();
            self.manageGtActiveUlMenu(event.target);
        });
    }
    
    if ($("*").is(".gt-menu-news_video_items")) {
        $(".gt-menu-news-video-items").on("click", function (event) {
            event.preventDefault();
            self.manageGtActiveUlMenu(event.target);
        });
    }

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
    this.fixArticleScrollTablePosition = function (currTable) {
        var table = currTable,
            tableParent = table.parent(),
            tableHeight = table.outerHeight(),
            tableParentTop = tableParent.position().top,
            tableParentBottom = tableParentTop + tableParent.outerHeight(),
            tableWidth = table.outerWidth(),
            windowTop = doc.scrollTop();
    
        if (tableParentTop + 90 > windowTop) {
            if (table.hasClass("gt-fixed")) {
                table.removeClass("gt-fixed");
                table.css({
                    left: "",
                    width: ""
                });
            }
        }
    
        if (tableParentTop < windowTop + 90) {
            if (!table.hasClass("gt-fixed")) {
                table.css({
                    left: table.offset().left + "px",
                    width: tableWidth
                });
                table.addClass("gt-fixed");
            }
            if (windowTop - tableParentBottom + tableHeight + 90 >= 0) {
                table.addClass("gt-fixed-bottom");
            } else {
                table.removeClass("gt-fixed-bottom");
            }
        }
    };
    
    
    this.createArticteScrollTable = function () {
        if (!$("div").is(".gt-article")) return;
        var articles = $(".gt-article"),
            table = $("#gt-article-scroll-table"),
            html = "";
        articles.each(function () {
            html += '<div class = "gt-article-scroll"   data-href= "' + $(this).attr("id") + '" ><div class = "gt-article-scroll-shadow"></div><p>' +
                $(this).find("h2").text() +
                "</p></div>";
        });
        table.html(html);
        table.find('.gt-article-scroll').each(function () {
            $(this).on('click', function () {
                self.scrollToArticle($(this).attr('data-href'));
            });
        });
    };
    
    this.scrollToArticle = function (attr) {
        $('html').animate({
            scrollTop: $('#' + attr).offset().top - 110
        }, 1100);
    
    };
    
    this.showArtidleShadow = function () {
        $(".gt-article").each(function () {
            var currPosition = $(this).position().top,
                elHeight = $(this).outerHeight(),
                windowPosition = $(document).scrollTop(),
                x = 0;
            if (currPosition > windowPosition) {
                x = 0;
            } else {
                x = (windowPosition - currPosition) / elHeight;
            }
            if (x > 1) x = 1;
            var currShadow = $(".gt-article-scroll")[$(this).index()];
            $(currShadow)
                .find(".gt-article-scroll-shadow")
                .css("width", x * 100 + "%");
        });
    };
    
    
    if ($('div').is('.gt-article-table-wrapper')) {
        $('.gt-article-table-wrapper').each(function () {
            var currTable = $(this);
            var shadow = false,
                scroll = true,
                scrollTimeout;
            if ($('div').is(".gt-article-scroll-table")) {
                shadow = true;
                self.createArticteScrollTable();
                self.showArtidleShadow();
            }
            function scrollThrottler() {
                if (!scroll) return;
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(function () {
                        scrollTimeout = null;
                        self.fixArticleScrollTablePosition(currTable);
                        if (shadow) {
                            self.showArtidleShadow();
                        }
                    });
                }
            }
            checkTableHeight();
            docWindow.scroll(scrollThrottler);
            docWindow.resize(function () {
                checkTableHeight();
                scrollThrottler()
            });
            function checkTableHeight() {
                if (currTable.outerHeight() > currTable.parent().outerHeight()) {
                    scroll = false;
                    currTable.css({
                        'position': 'relative',
                        'right': '15px'
                    });
                } else {
                    scroll = true;
                    currTable.css({
                        'position': '',
                        'right': ''
                    });
                }
            }
        })
    }
    this.setCurrTime = function () {
        self.currTime();
        var t = setInterval(self.currTime, 30000);
    };
    this.currTime = function () {
        $(".gt-curr-time").each(function () {
            var date = new Date();
            if ($(this).attr("data-gmt")) date.setUTCHours(+$(this).attr("data-gmt"));
            var hours = date.getHours(),
                minutes = date.getMinutes(),
                weekday = date.getDay(),
                day = date.getDate(),
                month = date.getMonth(),
                year = date.getFullYear(),
                weekdays = [
                    "Воскресенье",
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота"
                ],
                monthes = [
                    "января",
                    "февраля",
                    "марта",
                    "апреля",
                    "мая",
                    "июня",
                    "июля",
                    "августа",
                    "сентября",
                    "октября",
                    "ноября",
                    "декабря"
                ];
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            weekday = weekdays[weekday];
            month = monthes[month];
            if ($(".gt-curr-time-time"))
                $(".gt-curr-time-time").html(hours + ":" + minutes);
            if ($(".gt-curr-time-date"))
                $(".gt-curr-time-date").html(
                    weekday + ", " + day + " " + month + " " + year
                );
        });
    };
    if ($("div").is(".gt-curr-time")) {
        self.setCurrTime();
    }

    if ($("div").is(".gt-inner-scroll")) {
        $('.gt-inner-scroll').each(function () {
            $(this).niceScroll({
                cursoropacitymin: '1',
                cursoropacitymax: '1',
                cursorwidth: '2px',
                cursorborder: 'none',
                mousescrollstep: '60',
                background: "#CECECE",
                railoffset: 'left',
                zindex: "auto",
                cursorcolor: "#CECECE"
            });
        })
    }
    // _inner_scroll  must be before _tab_slider - !important

    this.tabSlider = function () {
        var tabSliders = $(".gt-tabs");
        tabSliders.each(function () {
            var currTabs = $(this);
            currTabs.find(".gt-tabs-button").each(function () {
                $(this).on("click", function () {
                    self.tabSliderAction(currTabs, $(this).index());
                });
            });
            self.tabSliderAction(currTabs,0,true);
        });
    };
    
    this.tabSliderAction = function (el, num ,init) {
        var buttons = $(el.find(".gt-tabs-button")),
            main =  $(el.find(".gt-tabs-main"))
        el.find('.gt-inner-scroll-tab').each(function () {
            $('#' + $(this).attr('data-scroll')).hide();
        });
        buttons.removeClass("active");
        main.removeClass("active");
        $(buttons[num]).addClass("active");
        $(main[num]).addClass("active");
    
        if($('#' + $(main[num]).find('.gt-inner-scroll-tab').attr('data-scroll')).find('.gt-scroll-cursor').height() != 0 || init){
            $('#' + $(main[num]).find('.gt-inner-scroll-tab').attr('data-scroll')).show();
        }
    };
    
    if ($("div").is(".gt-tabs")) {
        self.tabSlider();
    }

    this.columnPartnership = function () {
        $("#gt-partnership").addClass('gt-partnership-column');
    };
    this.rowPartnership = function () {
        $("#gt-partnership").removeClass('gt-partnership-column');
    };
    
    
    if ($("*").is("#gt-partnership")) {
        $('#gt-partnership-row').on('click', self.columnPartnership);
        $('#gt-partnership-column').on('click', self.rowPartnership);
    
        if ($("*").is("#gt-partnership-menu")) {
            $("#gt-partnership-menu").find('div').each(function () {
                $(this).on('click', function () {
                    self.scrollToArticle($(this).attr('data-href'));
                });
            });
        }
    }

    this.createSelectWrapper = function (currSelect) {
        var selectOption = currSelect.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500,
            placeholder;
    
        if (!currSelect.attr('data-name') || currSelect.attr('data-name') == undefined || currSelect.attr('data-name') == null) {
            placeholder = $(selectedOption[0]).text();
        } else {
            placeholder = currSelect.attr('data-name');
        }
        currSelect.hide();
    
        currSelect.wrap('<div class="select gt-select"></div>');
    
        $('<div>', {
            class: 'select__gap',
            html: '<p>' + placeholder + '</p>'
        }).insertAfter(currSelect);
        var selectGap = currSelect.next('.select__gap');
        $('<ul>',{
            class: 'select__list'
        }).insertAfter(selectGap);
    
        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item',
                html: $('<span>',{
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        var selectItem = selectList.find('li');
    
        selectList.slideUp(0);
        selectGap.on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                selectList.slideDown(dur);
    
                selectItem.on('click', function(){
                    var chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());
    
                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });
    };
    
    if ($("select").is(".js-gt-select")) {
        $('.js-gt-select').each(function(){
            self.createSelectWrapper($(this))
        })
    }
    this.initTopCards = function () {
        var topBlock = $('.gt-top'),
            cards = topBlock.find('.gt-top-card');
    
        cards.each(function () {
            $(this).on('mouseover',function () {
                $(this).addClass('gt-active');
            })
        });
    
        topBlock.on('mouseleave',function () {
            cards.removeClass('gt-active');
        })
    };
    
    if ($("div").is(".gt-top-card-wrapper")){
        self.initTopCards();
    }
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


    this.footerHeight = function () {
        var footerHeight = gtFooter.outerHeight();
        if (footerHeight > docWindow.height() - 50) {
            gtFooter.css("position", "static");
            gtWrapper.css("margin-bottom", "");
            upButton.css("position", "static");
        } else {
            gtFooter.css("position", "");
            upButton.css("position", "");
            gtWrapper.css("margin-bottom", gtFooter.outerHeight() + "px");
        }
    };
    
    self.footerHeight();//_footer_height.js
    
    docWindow.resize(function () {
        self.footerHeight();
    
    
    })
/////////////////////does not work

    this.createViewCardListeners = function (el) {
        el.find('.gt-view-cards-icons-visit').on('click',function (event) {
            self.closeShareViewCard(el);
            event.stopPropagation();
            self.clickVisitViewCard(el);
        });
        el.find('.gt-view-cards-icons-pin-plus').on('click',function (event) {
            self.closeShareViewCard(el);
            event.stopPropagation();
            self.clickSeenViewCard(el);
    
        });
        el.find('.gt-view-cards-icons-bookmarks').on('click',function (event) {
            self.closeShareViewCard(el);
            event.stopPropagation();
            self.clickMarkViewCard(el);
    
        });
        el.find('.gt-view-cards-icons-share').on('click',function (eventg) {
            event.stopPropagation();
            self.clickShareViewCard(el);
        });
        el.find('.gt-view-cards-icons-share').find('a').on('click',function (event,el) {
            event.preventDefault();
    
            self.viewCardSocial(el);
        });
        el.on('click  mouseleave',function () {
            $(el).find('.gt-view-cards-icons-share').parent().removeClass('gt-active');
            self.closeShareViewCard(el);
    
        })
    };
    
    this.destroyViewCardListeners = function (el) {
        el.find('.gt-view-cards-icons-visit').off();
        el.find('.gt-view-cards-icons-pin-plus').off();
        el.find('.gt-view-cards-icons-bookmarks').off();
        el.find('.gt-view-cards-icons-share').off();
        el.find('.gt-view-cards-icons-share').find('a').off();
        el.off();
    
    };
    
    
    this.viewCardSocial = function (el) {
        self.closeShareViewCard(el);
    };
    
    
    
    this.openShareViewCard = function (el) {
        $(el).addClass('gt-active');
    };
    this.closeShareViewCard = function (el) {
        $(el).removeClass('gt-active');
    
    };
    
    
    this.clickShareViewCard = function (el) {
    
        var button = el.find('.gt-view-cards-icons-share').parent();
        if(button.hasClass('gt-active')){
            button.removeClass('gt-active');
            self.closeShareViewCard(el);
    
        }else{
            button.addClass('gt-active');
            self.openShareViewCard(el);
        }
    };
    this.clickVisitViewCard = function (el) {
        if(el.hasClass('gt-active')) return;
        var button = el.find('.gt-view-cards-icons-visit').parent();
        if(button.hasClass('gt-active')){
            button.removeClass('gt-active');
            console.log('click not visited now');
        }else{
            button.addClass('gt-active');
            console.log('click visit');
        }
    };
    
    this.clickSeenViewCard = function (el) {
        if(el.hasClass('gt-active')) return;
        var button = el.find('.gt-view-cards-icons-pin-plus').parent();
        if(button.hasClass('gt-active')){
            button.removeClass('gt-active');
            console.log('click not seen now');
        }else{
            button.addClass('gt-active');
            console.log('click seen');
        }
    };
    this.clickMarkViewCard = function (el) {
        if(el.hasClass('gt-active')) return;
        var button = el.find('.gt-view-cards-icons-bookmarks').parent();
        if(button.hasClass('gt-active')){
            button.removeClass('gt-active');
            console.log('click delete bookmark');
        }else{
            button.addClass('gt-active');
            console.log('click add bookmark');
        }
    };
    
    
    
    
    if ($("*").is(".gt-view-cards-inner")) {
    
        $('.gt-view-cards-inner').each(function () {
            self.createViewCardListeners($(this));
        })
    
    
    }
    // проверка на наличие - обсудить с беком поведегте
    
    
    
    $('#gt-enter-form-facebook').on('click', function () {
        self.socialEnter('facebook')
    });
    $('#gt-enter-form-twitter').on('click', function () {
        self.socialEnter('twitter')
    });
    $('#gt-enter-form-google').on('click', function () {
        self.socialEnter('google')
    });
    
    $('#gt-reg-form-facebook').on('click', function () {
        self.socialRegistration('facebook')
    });
    $('#gt-reg-form-twitter').on('click', function () {
        self.socialRegistration('twitter')
    });
    $('#gt-reg-form-google').on('click', function () {
        self.socialRegistration('google')
    });
    
    this.socialRegistration = function (token) {
    
        alert("Регистрация через " + token)
    
    };
    this.socialEnter = function (token) {
    
        alert("Вход через " + token)
    
    };
   this.cutNews = function (el) {
       var parent = el.parent(),
           maxHeight = parent.height(),
           cuttingEl = el.find('p'),
           currHeight,
           cuttingLenght,
           newText;
       parent.children().each(function () {
           maxHeight -= $(this).outerHeight(true);
       });
       maxHeight = maxHeight + el.height() - 20;
       cuttingEl.each(function () {
           currHeight = $(this).outerHeight(true);
           if (currHeight < maxHeight) {
               maxHeight -= currHeight
           } else {
               if (!maxHeight) {
                   $(this).css('display', 'none');
               } else {
                   cuttingLenght = Math.floor($(this).text().length * maxHeight / currHeight);
                   newText = $(this).text().substring(0, cuttingLenght - 5);
                   // cutLastSymbol();
                   $(this).text((newText) + '...');
                   maxHeight = 0;
               }
           }
       });
       //
       // function cutLastSymbol() {
       //     var strLength = newText.length;
       //     if(newText.charAt(strLength - 1) == ' '){
       //         newText= newText.substring(0, strLength - 1);
       //     }else{
       //         newText = newText.substring(0, strLength - 1);
       //         setTimeout(cutLastSymbol)
       //     }
       // }
   };
   if ($("div").is(".js-news-cut")) {
       $(".js-news-cut").each(function () {
           self.cutNews($(this));
       });
       docWindow.resize(function () {
           $(".js-news-cut").each(function () {
               self.cutNews($(this));
           });
       });
   }
   this.cutReadMoreSlider = function () {
       var cuttings = $(".gt-read-more-slider-text-inner");
       cuttings.each(function () {
           self.cutting($(this), 160);
       });
   };
   this.cutting = function (el, num) {
       var newsText = el.text();
       if (newsText.length > num) {
           newsText = newsText.slice(0, num) + "...";
           el.text(newsText);
       }
   };
   if ($("p").is(".gt-read-more-slider-text-inner")) {
       self.cutReadMoreSlider();
   }

///////////////////////////////

    this.pageUp = function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    };
    this.upPageButton = function () {
        if ($(document).scrollTop() > 30) {
            upButton.addClass("gt-visible");
        } else {
            upButton.removeClass("gt-visible");
        }
    };
    upButton.on("click", self.pageUp);
    docWindow.scroll(function () {
        self.upPageButton();//_up_button.js
        if ($(".gt-header-menu").is(":visible")) {
            self.deskTopMenuScroll();
        }
    });

    body.on('click', function (event) {
        // console.log(event.target);
    
    });
    
    
    if ($("*").is(".gt-menu-news")) {
        $('.gt-menu-news').find('a').on('click', function (event) {
            event.preventDefault();
            $('.gt-menu-news').find('li').removeClass('gt-active');
            $(this).parent().addClass('gt-active');
            console.log('temp func')
        })
    
        // todo temp func
    }
    
    
    if ($("div").is("#gt-pre-release")) {
        body.addClass('gt-pre-release');
        $('.gt-header-logo a').on('click',function () {
            return false;
        })
    $('.gt-header-menu').find('li').each(function () {
        if( !$(this).hasClass('gt-enter')){
            $(this).hide();
        }
    })
    
    
    }


};
$(document).ready(

    function () {
        var goToTrip = new GoToTrip();
    }
);