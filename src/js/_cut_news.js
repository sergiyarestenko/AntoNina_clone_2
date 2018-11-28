this.cutText = function (el, cutting) {

    $(el).ellipsis({
        lines: cutting, responsive: true,
        callback: makeVisible()
 });


 function makeVisible(){
     $(el).css('opacity','1');
 }

};

function aaa (){
    alert('aaa')
}

if ($("*").is(".js-cut")) {
  $(".js-cut").each(function() {
      var cutting = 3;
      if ($(this).data("cut")) {
          cutting = +$(this).data("cut");
      }
    self.cutText($(this),cutting);
  });
}

