this.cutText = function (el, cutting) {

    $(el).ellipsis({
        lines: cutting, responsive: true
 });
};

if ($("*").is(".js-cut")) {
  $(".js-cut").each(function() {
      var cutting = 3;
      if ($(this).data("cut")) {
          cutting = +$(this).data("cut");
      }
    self.cutText($(this),cutting);
  });
}

