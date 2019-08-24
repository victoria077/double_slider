(function($) {
  $.fn.Slider = function(options) {
    var defaults = {
      minPos: 10,
      maxPos: 100,
      step: 2,
      output: true,
      input: true,
      doublerange: true,

    };
    let config = $.extend({}, defaults, options);
    let output = config.output;
    let input = config.input;
    let doublerange = config.doublerange;
    let vertical = config.vertical;

    let toggle,
      toggle2,
      output1,
      output2,
      input2,
      input1,
      bar,
      barLeft,
      barWidth,
      barHeight,
      toggleWidth2,
      barTop;


    function init() {
      if (vertical) {
        $("#slider1")
          .removeClass("slider")
          .addClass("sliderY");
        $("#slider__bar")
          .removeClass("slider__bar")
          .addClass("slider__barY");
        $("#slider__output")
          .removeClass("slider__output")
          .addClass("slider__outputY");
        $("#slider__output2")
          .removeClass("slider__output2")
          .addClass("slider__output2Y");
          $("#slider__toggle2")
          .removeClass("slider__toggle2")
          .addClass("slider__toggle2Y");
      }
      bar = $("#slider__bar");
      toggle = $("#slider__toggle");
      toggle2 = $("#slider__toggle2");
      input1 = $("#slider__input");
      input2 = $("#slider__input2");
      output1 = $("#slider__output");
      output2 = $("#slider__output2");
      barLeft = bar.offset().left;
      barHeight = bar.outerHeight();
      barWidth = bar.outerWidth();
      barTop = bar.offset().top;
      toggleWidth2 = toggle.outerWidth();
      output1.text(config.minPos);
      output2.text(config.maxPos);
      output2.css("marginLeft", barWidth - toggleWidth2);
      input1.val(config.minPos);
      input2.val(config.maxPos);
      toggle.on("mousedown", () => {
        toggle.on("dragstart", e => {
          e.preventDefault();
        });
        $(document).on("mousemove", moveToggle);
        $(document).on("mousemove", moveThumb);
        $(document).on("mouseup", onThumbMouseup);
      });
      toggle2.on("mousedown", () => {
        toggle2.on("dragstart", e => {
          e.preventDefault();
        });
        $(document).on("mousemove", moveToggle2);
        $(document).on("mousemove", moveThumb2);
        $(document).on("mouseup", onThumbMouseup2);
      });
    }

    if (output) {
      $("<div/>", {
        text: "",
        class: "slider__output",
        id: "slider__output"
      }).appendTo("#slider1");
    }
    if (output && doublerange) {
      $("<div/>", {
        text: "",
        class: "slider__output2",
        id: "slider__output2"
      })
        .css("marginLeft", barWidth - toggleWidth2 + 10)
        .appendTo("#slider1");
    }

    if (input) {
      $("<input/>", {
        type: "number",
        id: "slider__input",
        class: "slider__input",
        min: 0
      }).appendTo("body");
    }

    if (input && doublerange) {
      $("<input/>", {
        type: "number",
        id: "slider__input2",
        class: "slider__input2",
        max: config.maxPos
      }).appendTo("body");
    }
    let LimitMovementX;
    let LimitMovementY;
    let toggleHeight;
    function moveThumb(event) {
      if (vertical) {
        toggleHeight = toggle.outerHeight();
        LimitMovementY = {
          min: barTop,
          max: barTop + barHeight - toggleHeight
        };

        let thumbCoordY = event.pageY;
        if (thumbCoordY < LimitMovementY.min) {
          thumbCoordY = LimitMovementY.min;
        }
        if (thumbCoordY > LimitMovementY.max) {
          thumbCoordY = LimitMovementY.max;
        }
        let stepCountY = (config.maxPos - config.minPos) / config.step;
        let stepSizeY = (barHeight - toggleHeight) / stepCountY;
        let newthumbCoordY = thumbCoordY - barTop;
        let leftPosY = Math.round((newthumbCoordY / stepSizeY) * stepSizeY);
        let fffY = Math.round(leftPosY / stepSizeY);
        toggle.css("top", leftPosY);
        output1.css("marginTop", leftPosY - barHeight);
        output1.text(Math.round(fffY * config.step + config.minPos));
        input1.val(Math.round(fffY * config.step + config.minPos));
      } else {
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
        var stepCount = (config.maxPos - config.minPos) / config.step;
        var stepSize = (barWidth - toggleWidth) / stepCount;
        var newthumbCoord = thumbCoord - barLeft;
        var leftPos = Math.round(newthumbCoord / stepSize) * stepSize;
        var fff = leftPos / stepSize;
        toggle.css("left", leftPos);
        output1.css("marginLeft", leftPos);
        output1.text(Math.round(fff * config.step + config.minPos));
        input1.val(Math.round(leftPos / stepSize * config.step + config.minPos));  
    }


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

    if (doublerange) {
      $("<div/>", {
        class: "slider__toggle2",
        id: "slider__toggle2"
      }).appendTo("#slider__bar");
    }

    function moveThumb2(event) {
      if (vertical) {
        let toggleHeight2 = toggle2.outerHeight();
        LimitMovementY = {
          min: barTop,
          max: barTop + barHeight - toggleHeight2
        };

        let thumbCoordY2 = event.pageY;
        if (thumbCoordY2 < LimitMovementY.min) {
          thumbCoordY2= LimitMovementY.min;
        }
        if (thumbCoordY2 > LimitMovementY.max) {
          thumbCoordY2 = LimitMovementY.max;
        }
        let stepCountY2 = (config.maxPos - config.minPos) / config.step;
        let stepSizeY2 = (barHeight - toggleHeight2) / stepCountY2;
        let newthumbCoordY2 = thumbCoordY2 - barTop;
        let leftPosY2 = Math.round((newthumbCoordY2 / stepSizeY2) * stepSizeY2);
        let fffY2 = Math.round(leftPosY2 / stepSizeY2);
        toggle2.css("top", leftPosY2);
        output2.css("marginTop", leftPosY2 - barHeight);
        output2.text(Math.round(fffY2 * config.step + config.minPos));
        input2.val(Math.round(fffY2 * config.step + config.minPos));
      } 
      else{
        let toggleWidth2 = toggle.outerWidth();
        LimitMovementX = {
          min2: barLeft,
          max2: barLeft + barWidth - toggleWidth2
        };
  
        thumbCoord2 = event.pageX;
        if (thumbCoord2 < LimitMovementX.min2) {
          thumbCoord2 = LimitMovementX.min2;
        }
        if (thumbCoord2 > LimitMovementX.max2) {
          thumbCoord2 = LimitMovementX.max2;
        }
        let stepCount2 = (config.maxPos - config.minPos) / config.step;
        let stepSize2 = (barWidth - toggleWidth2) / stepCount2;
        let newthumbCoord2 = thumbCoord2 - barLeft;
        let leftPos2 = Math.round(newthumbCoord2 / stepSize2) * stepSize2;
        let fff = leftPos2 / stepSize2;
        toggle2.css("left", leftPos2);
        output2.css("marginLeft", leftPos2);
        output2.text(Math.round(fff * config.step + config.minPos));
        input2.val(Math.round(fff * config.step + config.minPos));
      }
    }

    function onThumbMouseup2() {
      $(document).off("mousemove");
      $(document).off("mouseup");
    }

    function moveToggle2() {
      $(document).on("mousemove", function(event) {
        console.log(event.pageX);
      });
    }
    init();
    return this;
  };
})(jQuery);
