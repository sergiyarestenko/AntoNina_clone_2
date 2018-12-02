this.submitEnterForm = function() {
  $("#gt-enter-form")
    .find(".gt-input-wrapper-validator")
    .each(function() {
      $(this).on("mouseenter", function() {
        $(this).removeClass("not-valid");
      });
    });
  // $('#gt-enter-form-submit').on('click', function (e) {
  //     e.preventDefault();
  //     alert('в этом месте я я ожидаю, что ты пошлешь ajax. В случае некорректного ввода присвой класс "not-valid" нужному диву класса gt-input-wrapper-validator');
  // })
};

this.submitRegForm = function() {
  $("#gt-reg-form")
    .find(".gt-input-wrapper-validator")
    .each(function() {
      $(this).on("mouseenter", function() {
        $(this).removeClass("not-valid");
        $(this).removeClass("empty");
      });
    });

//   $("#gt-reg-form-submit").on("click", function(e) {
//     e.preventDefault();
//     var valid = true,
//       nameInput = $("#gt-reg-name"),
//       mailInput = $("#gt-reg-email"),
//       passInput = $("#gt-reg-pass");

//     if ($.trim($(nameInput).val()) == "") {
//       $(nameInput)
//         .parent()
//         .addClass("empty");
//       valid = false;
//     } else if ($(nameInput).val().length > 10) {
//       $(nameInput)
//         .parent()
//         .addClass("not-valid");
//       valid = false;
//     }

//     if ($.trim($(mailInput).val()) == "") {
//       $(mailInput)
//         .parent()
//         .addClass("empty");
//       valid = false;
//     } else if (
//       !/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim.test($(mailInput).val())
//     ) {
//       $(mailInput)
//         .parent()
//         .addClass("not-valid");
//       valid = false;
//     }

//     if ($.trim($(passInput).val()) == "") {
//       $(passInput)
//         .parent()
//         .addClass("empty");
//       valid = false;
//     }

//     if (valid) {
//       $("#gt-reg-form").submit();
//     } else {
//       return false;
//     }
//   });
};




this.submitRestoreForm = function() {
  $("#gt-restore-form")
    .find(".gt-input-wrapper-validator")
    .each(function() {
      $(this).on("mouseenter", function() {
        $(this).removeClass("not-valid");
        $(this).removeClass("empty");
      });
    });
  $("#gt-restore-form-submit").on("click", function(e) {
    e.preventDefault();
    var valid = true,
      mailInput = $("#gt-restore-email");

    if ($.trim($(mailInput).val()) == "") {
      $(mailInput)
        .parent()
        .addClass("empty");
      valid = false;
    } else if (
      !/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/gim.test($(mailInput).val())
    ) {
      $(mailInput)
        .parent()
        .addClass("not-valid");
      valid = false;
    }

    if (valid) {
      $("#gt-restore-form").submit();
    } else {
      return false;
    }
  });
};

if ($("form").is("#gt-enter-form")) {
  self.submitEnterForm();
}
if ($("form").is("#gt-reg-form")) {
  self.submitRegForm();
}
if ($("form").is("#restore-pass")) {
  self.submitRestoreForm();
}
