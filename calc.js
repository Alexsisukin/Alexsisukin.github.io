

var fields92125 = {

    'block1': {
        'text_info': 'text-21',
        'sub_text': 'text-26',
        'bank': 'selector-1',
        'city': 'selector-32',
        'what_to_insure': 'input_checkbox-54',
        'credit_sum': 'input_text-2'
    },
    'block2': {
        'property_information': 'text-6',
        'object_insure': 'selector-7',
        'age_home': 'selector-9',
        'gas_availability': 'selector-8',
        'wood_availability': 'selector-10'
    },
    'block3': {
        'text_info': 'text-13',
        'sex_owner': 'input_radio-14',
        'age_owner': 'selector-33',
        'invalid': 'selector-16',
        'profession': 'selector-28'
    },
    'block4': {
        'text_info': 'text-45',
        'name': 'input_text-18',
        'phone': 'input_text-24',
        'comment': 'input_text-25',
        'email': 'input_text-19',
        'button': 'button-20'
    },
    'result': {
        'pre_button': 'button-52',
        'result': 'total-8',
        'post_button': 'button-64'
    }

};

var error_message92125 = new Object();
error_message92125[fields92125.block1.bank] = {
    'msg': 'Мы можем рассчитать стоимость полиса только для Сбербанка',
    'require': 'Другой банк'
};

error_message92125[fields92125.block1.city] = {
    'msg': 'К сожалению, мы не работаем в вашем городе и не сможем оформить полис',
    'require': 'Другой город'
};

error_message92125[fields92125.block2.age_home] = {
    'msg': 'Сожалеем, но мы не оформляем полисы для объектов в домах старше 70 лет',
    'require': 'до 1947'
};

error_message92125[fields92125.block3.age_owner] = {
    'msg': 'Сожалеем, мы не можем оформить страховой полис для лиц старше 60 лет',
    'require': '1957 и старше'
};

error_message92125[fields92125.block3.invalid] = {
    'msg': 'Расчет невозможен. Пожалуйста, позвоните нам для индивидуального расчета тарифа.',
    'require': 'Да'
};

error_message92125[fields92125.block3.profession] = {
    'msg': 'Расчет невозможен. Пожалуйста, позвоните нам для индивидуального расчета тарифа.',
    'require': 'Да'
};


function hideShowBlock(action, block) {
    var elem = '';
    $.each(block, function (index, value) {
        elem = $('#' + value);
        if (elem.length === 0) {
            return true;
        }
        while (true) {
            elem = elem.parent();
            if (elem.prop("tagName") === 'LI') {
                if (action === 'show') {
                    elem.show();
                    appNormalise();
                } else {
                    elem.hide();
                }
                break;
            }
        }

    });

}

hideShowBlock('hide', fields92125.block2);
hideShowBlock('hide', fields92125.block3);
hideShowBlock('hide', fields92125.block4);
//hideShowBlock('hide', fields92125.result);

$('#input_checkbox-54-0-des').change(function () {
    if ($('#input_checkbox-54-0-des').prop("checked")) {
        hideShowBlock('show', fields92125.block2);
        hideShowBlock('show', fields92125.result);
        removeAlertObject52();
        removeAlertObject64();
    } else {
        hideShowBlock('hide', fields92125.block2);
        if (!($('#input_checkbox-54-1-des').prop("checked"))) {
            //hideShowBlock('hide', fields92125.result);
            hideShowBlock('hide', fields92125.block4);
        }
    }
});
$('#input_checkbox-54-1-des').change(function () {
    if ($('#input_checkbox-54-1-des').prop("checked")) {
        hideShowBlock('show', fields92125.block3);
        hideShowBlock('show', fields92125.result);
        removeAlertObject52();
        removeAlertObject64();
    } else {
        hideShowBlock('hide', fields92125.block3);
        if (!($('#input_checkbox-54-0-des').prop("checked"))) {
            hideShowBlock('hide', fields92125.block4);
            //  hideShowBlock('hide', fields92125.result);
        }
    }
});

$('select').change(function () {
    var textSelected = $('#' + fields92125.block1.city).find("option:selected").text();
    if (textSelected !== error_message92125[fields92125.block1.city].require) {
        removeAlertCity52();
        removeAlertCity64();
    } else {
        hideShowBlock('hide', fields92125.block4);
        SAVER.getResultBy('id', 8).formula = String(0);
        RECALC.go();
    }
    if (!checkParams()) {
        hideShowBlock('hide', fields92125.block4);
        $('#total-8').find('.js-result-sum-value').find('p').text(0);
        SAVER.getResultBy('id', 8).formula = String(0);
        RECALC.go();
    }
});
$('#' + fields92125.result.pre_button).on('click', 'button', function () {
    var home_checkbox = $('#input_checkbox-54-0-des').prop("checked");
    var man_checkbox = $('#input_checkbox-54-1-des').prop("checked");
    var textSelected = $('#' + fields92125.block1.city).find("option:selected").text();
    if (textSelected === error_message92125[fields92125.block1.city].require) {
        //cityAlert52();
        //return;
    }
    if (!home_checkbox && !man_checkbox) {
        objectAlert52();
        removeoffertaInResult();
        return;
    }
    if (checkParams()) {
        var home = 0;
        var man = 0;
        if (home_checkbox) {
            home = ($('#total-12').find('div.js-result-sum-value').text().replace(/ +/g, ""))/1;
            console.log(home);
        }
        if (man_checkbox) {
            man = ($('#total-13').find('div.js-result-sum-value').text().replace(/ +/g, ""))/1;
            console.log(man);
        }
        if ((man + home) > 0) {
            removeAlertPresBotton64();
        }
        SAVER.getResultBy('id', 8).formula = String(home + man);
        RECALC.go();
        offertaInResult();
    }
});

$('#' + fields92125.result.post_button).on('click', 'button', function () {
    var home_checkbox = $('#input_checkbox-54-0-des').prop("checked");
    var man_checkbox = $('#input_checkbox-54-1-des').prop("checked");
    var result = $('#total-8').find('.js-result-sum-value').find('p').text().replace(/\D+/g, "") / 1;
    if (result === 0) {
        alertPresPreButton64();
        return;
    }
    var textSelected = $('#' + fields92125.block1.city).find("option:selected").text();
    if (textSelected === error_message92125[fields92125.block1.city].require) {
        cityAlert64();
        return;
    }
    if (!home_checkbox && !man_checkbox) {
        objectAlert64();
        hideShowBlock('hide', fields92125.block4);
        return;
    }
    if (checkParams()) {
        var home = 0;
        var man = 0;
        if (home_checkbox) {
            home = ($('#total-12').find('div.js-result-sum-value').text().replace(/ +/g, ""))/1;
        }
        if (man_checkbox) {
            man = ($('#total-13').find('div.js-result-sum-value').text().replace(/ +/g, ""))/1;
        }
        SAVER.getResultBy('id', 8).formula = String(home + man);
        RECALC.go();
        hideShowBlock('show', fields92125.block4);
    }
});

function checkParams() {
    var error = 0;
    $.each(error_message92125, function (index, value) {
        var textSelected = $('#' + index).find("option:selected").text();
        if ($('#' + index).is(':hidden')) {
            return true;
        }
        if (index === 'selector-32') {
            return true;
        }

        if (value.require === textSelected) {
            error++;
            alertFields92125(value.msg, index);
        } else {
            hideAlertFields92125(index);
        }
    });
    if (error === 0) {
        return true;
    } else {
        removeoffertaInResult();
        return false;
    }
}


function cityAlert64() {
    var str = '<div id="city_big_alert64" class="ub-grid padding-lr-24  userselectnone" style="padding-top: 31px; padding-bottom: 1px; display: block;">' +
        '<div class="field field-text"><div class="field-body">' +
        '<div class="field-body__item">' +
        '<div class="input-field input-field-text">' +
        '<p style="text-align: center; "><b>' +
        '<span class="size-18" style="color:red;">' + error_message92125[fields92125.block1.city].msg + '</span>' +
        '</b></p></div>' +
        '</div></div>' +
        '</div></div>';
    if ($('#city_big_alert64').length === 0) {
        $("div[data-id='64']").parent().prepend(str);
    }
}

function objectAlert64() {
    var str = '<div id="object_big_alert64" class="ub-grid padding-lr-24  userselectnone" style="padding-top: 31px; padding-bottom: 1px; display: block;">' +
        '<div class="field field-text"><div class="field-body">' +
        '<div class="field-body__item">' +
        '<div class="input-field input-field-text">' +
        '<p style="text-align: center; "><b>' +
        '<span class="size-18" style="color:red;">Заказ не возможен. Вы не выбрали объект страхования для расчета.</span>' +
        '</b></p></div>' +
        '</div></div>' +
        '</div></div>';
    if ($('#object_big_alert64').length === 0) {
        $("div[data-id='64']").parent().prepend(str);
    }
}

function cityAlert52() {
    var str = '<div id="city_big_alert52" class="ub-grid padding-lr-24  userselectnone" style="padding-top: 31px; padding-bottom: 1px; display: block;">' +
        '<div class="field field-text"><div class="field-body">' +
        '<div class="field-body__item">' +
        '<div class="input-field input-field-text">' +
        '<p style="text-align: center; "><b>' +
        '<span class="size-18" style="color:red;">' + error_message92125[fields92125.block1.city].msg + '</span>' +
        '</b></p></div>' +
        '</div></div>' +
        '</div></div>';
    if ($('#city_big_alert52').length === 0) {
        $("div[data-id='52']").parent().prepend(str);
    }
}

function objectAlert52() {
    var str = '<div id="object_big_alert52" class="ub-grid padding-lr-24  userselectnone" style="padding-top: 31px; padding-bottom: 1px; display: block;">' +
        '<div class="field field-text"><div class="field-body">' +
        '<div class="field-body__item">' +
        '<div class="input-field input-field-text">' +
        '<p style="text-align: center; "><b>' +
        '<span class="size-18" style="color:red;">Расчет не возможен. Вы не выбрали объект страхования для расчета.</span>' +
        '</b></p></div>' +
        '</div></div>' +
        '</div></div>';
    if ($('#object_big_alert52').length === 0) {
        $("div[data-id='52']").parent().prepend(str);
    }
}

function alertPresPreButton64() {
    var str = '<div id="press_button_alert64" class="ub-grid padding-lr-24  userselectnone" style="padding-top: 31px; padding-bottom: 1px; display: block;">' +
        '<div class="field field-text"><div class="field-body">' +
        '<div class="field-body__item">' +
        '<div class="input-field input-field-text">' +
        '<p style="text-align: center; "><b>' +
        '<span class="size-18" style="color:red;">Заказ не возможен. Выберите пункты для расчета и нажмите рассчитать.</span>' +
        '</b></p></div>' +
        '</div></div>' +
        '</div></div>';
    if ($('#press_button_alert64').length === 0) {
        $("div[data-id='64']").parent().prepend(str);
    }
}


function offertaInResult() {
    var str = '<div id="offerta_in_result" class="field-desc"style="display:block" data-source="desc">' +
        '<p style="font-size: 12px;' +
        '    font-style: normal !important;' +
        '    font-weight: 300;">Расчет является предварительным. Не является публичной офертой.</p>' +
        '</div>';
    if ($('#offerta_in_result').length === 0) {
        $("div[data-id='41']").find('.js-result-sum-value').parent().append(str);
    }
}


function removeoffertaInResult() {

    if ($('#offerta_in_result').length) {
        $('#offerta_in_result').remove();
    }
}

function removeAlertPresBotton64() {

    if ($('#press_button_alert64').length) {
        $('#press_button_alert64').remove();
    }
}

function removeAlertCity64() {

    if ($('#city_big_alert64').length) {
        $('#city_big_alert64').remove();
    }
}

function removeAlertCity52() {

    if ($('#city_big_alert52').length) {
        $('#city_big_alert52').remove();
    }
}

function removeAlertObject64() {

    if ($('#object_big_alert64').length) {
        $('#object_big_alert64').remove();
    }
}

function removeAlertObject52() {

    if ($('#object_big_alert52').length) {
        $('#object_big_alert52').remove();
    }
}

function alertFields92125(msg, field) {
    var body = $('#' + field).parent().parent().find('.field-body__item');
    if (body.find('.class_' + field).length) {
        body.find('.class_' + field).show();
    } else {
        var str = '<div class="input-alert animated shake class_' + field + '" style="display: block;">' + msg + '</div>';
        body.append(str);
    }
}

function hideAlertFields92125(field) {
    var body = $('#' + field).parent().parent().find('.field-body__item');
    if (body.find('.class_' + field).length) {
        body.find('.class_' + field).remove();
    }
}

