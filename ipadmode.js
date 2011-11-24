// remap jQuery to $
(function($, window) {

    if (im == undefined) var im = window.im = {};

    // set to true for automatic iPad mode
    im.defaultiPadMode = 1;

    im.debug = false;

    $(document).ready(function() {
        im.init();
    });

    im.init = function() {
        im.log('init');
         if (im.isIpad() == true) {
            im.bindEvents();

            if (im.defaultiPadMode == 1) {
                im.iPadMode();
                im.addModeButton('browser');
            }
            else {
                im.addModeButton('iPad');
            }
         }
    };

    im.bindEvents = function() {
        im.log('bindEvents');

        $('.iPad.modeButton').live('click',
        function(event, element) {
            event.preventDefault();
            im.iPadMode();
        });

        $('.browser.modeButton').live('click',
        function(event, element) {
            event.preventDefault();
            im.browserMode();
        });

    };

    im.isIpad = function() {
        return (navigator.platform.indexOf("iPad") != -1);
    };


    im.addModeButton = function(mode) {
        im.log('addiPadModeButton');

        $('div#fever').append('<div style="-webkit-transform: rotate(-90deg) translate(-50px, -45px); -webkit-border-radius: 5px; border:3px solid #f1f1f1; padding:5px; width:105px; text-align:center"><span onclick = "void(0)" class="' + mode + ' modeButton" style="font-size:16px; height:20px">' + mode + ' mode</span></div>');
    };

    im.browserMode = function() {
        im.log('browserMode');

        $('img#logo').attr('src', 'firewall/app/images/logo-fever.png').css('width', '50px');
        $('div.thermometer').show();
        $('div#fluid').css('left', '96px');
        $('div#feeds-container').css({
            'padding-left': '28px',
            'left': '260px',
            'width':'300px'
        });
        $('div#feeds-container ul.box-list li#feed-0 a').html('<i class="icon unread"></i>All unread<em class="unread-count"></em>');
        $('div#feeds-container ul.box-list li#feed-0 span.btn.help').show();
        $('div#feeds-container ul.box-list li#feed-0 span.btn.menu.group').show();
        $('div#content-container').css('margin-left', '560px');
        $('div#fever span.browser.modeButton').html('iPad Mode').removeClass('browser').addClass('iPad');
    };

    im.iPadMode = function() {
        im.log('iPadMode');

        $('img#logo').attr('src', 'firewall/app/images/favicon.png').css('width', '28px');
        $('div.thermometer').hide();
        $('div#fluid').css('left', '50px');
        $('div#feeds-container').css({
            'padding-left': '0px',
            'left': '250px',
            'width': '55px'
        });
        $('div#feeds-container ul.box-list li#feed-0 a').html('');
        $('div#feeds-container ul.box-list li#feed-0 span.btn.help').hide();
        $('div#feeds-container ul.box-list li#feed-0 span.btn.menu.group').hide();
        $('div#content-container').css('margin-left', '220px');
        $('div#fever span.iPad.modeButton').html('Browser Mode').removeClass('iPad').addClass('browser');
    };

    im.log = function(msg) {
        if (im.debug == true) {
            try {
                if (typeof console.log != "undefined") {
                    console.log(msg);
                }
                return true;
            } catch(err) {
                return false;
            }
        }
        else {
            return false;
        }
    };

})(jQuery, this);