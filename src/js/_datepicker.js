this.setDatePicker = function(el){
    $(el).datepicker({
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        onSelect:function(){
            self.setDatePickerValue(el);
            console.log($(el).val());
        }
    });

    self.manageDatePicker(el);

}
this.setDatePickerValue = function(el){
    $(el)
      .parent()
      .find(".gt-search-text").val($(el).val());
}
this.manageDatePicker = function(el) {
  $(el)
    .next(".gt-datepicker-icon")
    .on("click", function() {
        $(el).datepicker('show')
    });
};


if ($("input").is(".datepicker")) {
    $(".datepicker").each(function() {
    self.setDatePicker($(this));
  });
}