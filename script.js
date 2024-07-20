$(document).ready(function () {
    
    console.log('loaded');
    var weapons = [
        {
            "name": "44_pistol btn",
            "damage": 48,
            "fire_rate": 6,
            "range": 66,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "ammo": 6
        },
        {
            "name": "10mm_pistol btn",
            "damage": 18,
            "fire_rate": 46,
            "range": 60,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53,
            "ammo": 6
        },
        {
            "name": "assault_rifle btn",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "ammo": 30
        },
    ];

    
    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
    
    
    
   $('.item-list a').click(function(e) {
       e.preventDefault();
       setImg($(this));
   });
    
    $('.btn.active').length && setImg($('.btn.active'));
    
    function setImg($el) {
        $('.btn').removeClass('active');
        $('.container').hide();
        
        $el.addClass('active');
        $($el.data('rel')).show();
    }
    
    

    $('.item-list a').on('focus', function(e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for (item in weapons) {
            if (weapons[item].name == current_item) {
                console.log(weapons[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
                container.find('.ammo').html(weapons[item].ammo);
            }

        }
    });

});
