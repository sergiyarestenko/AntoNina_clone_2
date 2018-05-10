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




