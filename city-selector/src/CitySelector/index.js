require('./style.less');

var $ = require('jquery');
var $regionSelector = $("#regionSelector");

$regionSelector.on('click', function () {
    $.ajax({
        type: 'GET',
        url: '/db.json',
        dataType: 'json',
        success: function (data) {
            var regions = [];
            $.each(data.regions, function (index, item) {
                // $.each(item, function (key, value) {
                //     regions.push('<li id="' + item.id + '">' + item.title + '</li>');
                // })
                regions.push('<li id="' + item.id + '">' + item.title + '</li>');
            });

            $('<ul/>', {
                'class': 'regions',
                html: regions.join('')
            }).appendTo('body');
        }
    })
});

