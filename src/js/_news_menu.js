this.manageTouchMenu = function(el) {
  console.log("manageTouchMenu", el);

  var leftArrow = $("#gt-menu-news-left"),
    rightArrow = $("#gt-menu-news-right"),
    isTouch = true,
    leftInterval,
    rightInterval,
    menuWidth = $(el).outerWidth(),
    lastPosition = findLastPosition(),
    startPosition = $(el).offset(),
    menuCurrPosition = startPosition;

  console.log(lastPosition);

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

    moveToleft();
  });

  rightArrow.on("mousedown", function() {
    if (!self.isTablet()) {
      return;
    }
    moveToRight();
  });

  function moveToRight() {
    console.log("moveToRight");

    menuCurrPosition += 1;

    moveMenu();
  }

  function moveToleft() {
    console.log("moveToleft");

    menuCurrPosition -= 1;

    moveMenu();
  }

  function moveMenu() {
    $(el).offset({ left: menuCurrPosition });
  }
};

this.moveTouchMenuLeft = function(el) {};

this.touchMenuRight = function(el) {};

this.moveTouchMenu = function(el) {};

if ($("*").is(".gt-menu-news")) {
  self.manageTouchMenu($(".gt-menu-news"));
}

// function notMobileMenuSwitcher() {
//     var $emMobileTopMenuLeft = $('#em-mobile-top-menu-wrapper-left'),
//         $emMobileTopMenuRight = $('#em-mobile-top-menu-wrapper-right'),
//         emLeftInterval,
//         emRightInterval;

//     function emLeft() {
//         if ($emMobileTopMenuCurrentMarginLeft !== $latsLeftPosition) {
//             $emMobileTopMenuCurrentMarginLeft -= 1;
//             if ($emMobileTopMenuCurrentMarginLeft < $latsLeftPosition) {
//                 $emMobileTopMenuCurrentMarginLeft = $latsLeftPosition;
//             }
//             $($emMobileTopMenu).offset({ left: $emMobileTopMenuCurrentMarginLeft - 30 });//30 - ширина блоков со стрелками
//         }
//     }

//     function emRight() {
//         if ($emMobileTopMenuCurrentMarginLeft !== $lastRightPosition) {
//             $emMobileTopMenuCurrentMarginLeft += 1;
//             if ($emMobileTopMenuCurrentMarginLeft > $lastRightPosition) {
//                 $emMobileTopMenuCurrentMarginLeft = $lastRightPosition;
//             }
//             $($emMobileTopMenu).offset({ left: $emMobileTopMenuCurrentMarginLeft + 30 });
//         }
//     }

//     $($emMobileTopMenuLeft).mousedown(function () {
//         emLeftInterval = setInterval(emRight, 1);
//     });

//     $($emMobileTopMenuLeft).mouseup(function () {
//         clearInterval(emLeftInterval);
//     });

//     $($emMobileTopMenuRight).mousedown(function () {
//         emRightInterval = setInterval(emLeft, 1);
//     });
//     $($emMobileTopMenuRight).mouseup(function () {
//         clearInterval(emRightInterval);
//     });
// }

// function switchOnMobileTopMenu() {
//     var startPos = 0,
//         self = $($emMobileTopMenuWrapper),
//         startOffset = 0;

//     self.bind('touchstart', function (event) {
//         var e = event.originalEvent;

//         startOffset = $($emMobileTopMenu).offset().left;
//         startPos = e.touches[0].pageX;
//         // e.preventDefault();
//     });

//     self.bind('touchmove', function (event) {
//         var e = event.originalEvent,
//             currentOffset = startOffset - startPos + e.touches[0].pageX;

//         if (currentOffset < $latsLeftPosition) {
//             currentOffset = $latsLeftPosition;
//         }
//         if (currentOffset > $lastRightPosition) {
//             currentOffset = $lastRightPosition;
//         }
//         $($emMobileTopMenu).offset({ left: currentOffset });
//         e.preventDefault();
//     });
// }
