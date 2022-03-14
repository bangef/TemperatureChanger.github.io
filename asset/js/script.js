$(document).ready(function () {
    /**
     * ARRAY - OBJECT
     */
    const arrDataDerajat = {
        "satuanDerajat": ['celcius', 'reamur', 'farenheit', 'kelvin'],
        "satuanOption": [{
            '°C': 0,
            '°F': 0,
            '°R': 0,
            '°K': 0
        }],
    };

    /**
     * Function hitung :
     * - Fungsi ini ketergantungan dengan event-handler input, dan event-handler change
     * - Fungsi ini apabila valuenya 0, maka akan menampilkan class .not-show. Apabila sebaliknya maka akan menghilankan class .not-show
     */
    function result() {
        if ($('#inpVal').val() != 0) {
            if ($('#inpSelect').val() == '°C') {
                arrDataDerajat.satuanOption = [{
                    '°F': 32 + 9 / 5 * $('#inpVal').val(),
                    '°R': 4 / 5 * $('#inpVal').val(),
                    '°K': $('#inpVal').val() + 273.15
                }];
                loopArrData();
                $('.hasil').removeClass('not-show');
            } else if ($('#inpSelect').val() == '°F') {
                arrDataDerajat.satuanOption = [{
                    '°C': 5 / 9 * ($('#inpVal').val() - 32),
                    '°R': 4 / 9 * ($('#inpVal').val() - 32),
                    '°K': 273.15 + 5 / 9 * ($('#inpVal').val() - 32)
                }];
                loopArrData();
                $('.hasil').removeClass('not-show');
            } else if ($('#inpSelect').val() == '°R') {
                arrDataDerajat.satuanOption = [{
                    '°C': 5 / 4 * $('#inpVal').val(),
                    '°F': 32 + 9 / 4 * $('#inpVal').val(),
                    '°K': 273.15 + 5 / 4 * $('#inpVal').val()
                }];
                loopArrData();
                $('.hasil').removeClass('not-show');
            } else if ($('#inpSelect').val() == '°K') {
                arrDataDerajat.satuanOption = [{
                    '°C': $('#inpVal').val() - 273.15,
                    '°F': 32 + 9 / 5 * ($('#inpVal').val() - 273.15),
                    '°R': 4 / 5 * ($('#inpVal').val() - 273.15)
                }];
                loopArrData();
                $('.hasil').removeClass('not-show');
            };
        } else {
            $('.hasil').addClass('not-show');
        };
    };


    /**
     * Hasil :
     * Perulangan element hasil
     */
    function loopArrData() {
        let a = '';
        $.each(arrDataDerajat.satuanOption, function (i, currVal) {
            $.each(currVal, function (key, val) {
                a += `<div class="col-sm-4 text-center my-2">
                                <label for="${key}" class="col-12 fw-bold fs-6 text-white text-capitalize">${key}</label>
                                <input readonly value="${val}" class="form-control" type="tel" id="${key}">
                            </div>`;
            })
        });

        $('.hasil').html(a);
    };

    /**
     * Select-Option :
     * Perulangan element Option
     */
    const divParentSelect = $('#inpSelect');
    $.each(arrDataDerajat.satuanOption, function (i, currVal) {
        $.each(currVal, function (key, val) {
            $(divParentSelect).append(`<option value="${key}">${key}</option>`);
        })
    });

    /**
     * Event handler - onchange :
     * 
     */
    $('#inpSelect').change(function () {
        result();
    });

    /**
     * Event handler - oninput :
     * 
     */
    $('#inpVal').bind('input', function () {
        result();
    });
});