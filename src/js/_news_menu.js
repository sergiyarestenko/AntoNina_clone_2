//  http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya

this.manageTouchMenu = function(el) {
  var leftArrow = $("#gt-menu-news-left"),
    rightArrow = $("#gt-menu-news-right"),
    menuParent = $(el).parent(),
    leftInterval,
    rightInterval,
    menuWidth = findMenuSize(),
    lastPosition = findLastPosition(),
    startPosition = $(el).offset().left,
    menuCurrPosition = startPosition,
    touchStartPosition;

  function findMenuSize() {
    var lastChild = $(el)
      .children("li")
      .last();
    return $(lastChild).position().left + $(lastChild).outerWidth();
  }

  function findLastPosition() {
    var parentWidth = $(el)
      .parent()
      .outerWidth();

    return parentWidth - menuWidth;
  }

  if ($(leftArrow).is(":visible")) {
    isTouch = false;
  }

  leftArrow.on("mousedown", function() {
    if (!self.isTablet()) {
      return;
    }

    leftInterval = setInterval(moveToleft, 1);
  });

  leftArrow.on("mouseup", function() {
    clearInterval(leftInterval);
  });

  rightArrow.on("mousedown", function() {
    if (!self.isTablet()) {
      return;
    }
    rightInterval = setInterval(moveToRight, 1);
  });
  rightArrow.on("mouseup", function() {
    clearInterval(rightInterval);
  });

  function moveToRight() {
    menuCurrPosition += 1;
    moveMenu();
  }

  function moveToleft() {
    menuCurrPosition -= 1;
    moveMenu();
  }

  function moveMenu() {
    if (menuCurrPosition > startPosition) menuCurrPosition = startPosition;
    if (menuCurrPosition < lastPosition) menuCurrPosition = lastPosition;
    $(el).offset({ left: menuCurrPosition });
  }

  // touch
  menuParent.bind("touchstart", function(event) {
    var e = event.originalEvent;
    touchStartPosition = e.touches[0].pageX;
  });

  menuParent.bind("touchmove", function(event) {
    var e = event.originalEvent,
      moving = e.touches[0].pageX - touchStartPosition;

    touchStartPosition = e.touches[0].pageX;
    menuCurrPosition += moving;
    moveMenu();
    e.preventDefault();
  });

  $(docWindow).on('customresize',function(){
    menuCurrPosition = startPosition;
    moveMenu();
  })




};





if ($("*").is(".gt-menu-news")) {
  self.manageTouchMenu($(".gt-menu-news"));
}
