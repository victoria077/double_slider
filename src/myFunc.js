(function($) {
  $.fn.Slider = function() {
    // var defaults = {};
    // var config = $.extends({}, defaults, options);

    let toggle, output, min, max;
    function init() {
      min = 10;
      max= 200;
      toggle = $("#slider__toggle");
      output = $('#slider__output');
      output.text(min);
      toggle.on("mousedown", () => {
        toggle.on("dragstart", e => {
          e.preventDefault();
        });
        $(document).on("mousemove", moveToggle);
        $(document).on("mousemove", moveThumb); 
        $(document).on("mouseup", onThumbMouseup);
      });
    }
    let LimitMovementX, thumbCoord;

    function moveThumb(event) {
      let bar = $("#slider__bar");
      let barLeft = bar.offset().left;
      let barWidth = bar.outerWidth();
      let toggleWidth = toggle.outerWidth();
      LimitMovementX = {
        min: barLeft,
        max: barLeft + barWidth - toggleWidth
      };

      thumbCoord = event.pageX;
      if (thumbCoord < LimitMovementX.min) {
        thumbCoord = LimitMovementX.min;
      }
      if (thumbCoord > LimitMovementX.max) {
        thumbCoord = LimitMovementX.max;
      }
      let newthumbCoord = thumbCoord - barLeft;
      toggle.css("left", newthumbCoord);
      output.text(min + newthumbCoord * (max - min) / LimitMovementX.max ^ 0);
      output.css("marginLeft",  newthumbCoord);
    }
    function onThumbMouseup() {
      $(document).off("mousemove");
      $(document).off("mouseup");
    }

    function moveToggle() {
      $(document).on("mousemove", function(event) {
        console.log(event.pageX);
      });
    }
    init();
    return this;
  };
})(jQuery);
