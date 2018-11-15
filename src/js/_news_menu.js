this.manageTouchMenu = function(el) {
    var leftArrow = $('#gt-menu-news-left'),
        rightArrow = $('#gt-menu-news-right'),
        leftInterval,
        rightInterval;


    leftArrow.on('mousedown',function(){
        if (!self.isTablet()) {
          return;
        }

    })

    rightArrow.on("mousedown", function() {
      if (!self.isTablet()) {
        return;
      }
    });

};



this.moveTouchMenu = function(el){
   
}

if ($("ul").is(".gt-menu-news")) {
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