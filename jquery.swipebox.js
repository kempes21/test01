     $(function () {
        var outer = $('.container-box');

        $('#right-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos + 200 }, 300);
        });

        $('#left-button').click(function () {
           var leftPos = outer.scrollLeft();
           outer.animate({ scrollLeft: leftPos - 200 }, 300);
        });
     });
