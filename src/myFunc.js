(function($) {
  $.fn.Slider = function(options) {
    let defaults = {
      minPos: 10,
      maxPos: 100,
      step: 2,
      output: false,
      input: true,
      doublerange: false
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
      barY,
      barTop,
      barWidth,
      barHeight,
      toggleWidth2;

    let $this = $(this);

    function init() {
      if (vertical) {
        $this
        .removeClass("slider").addClass("sliderY");
        $(".slider__bar", $this)
          .removeClass("slider__bar")
          .addClass("slider__barY");
        $(".slider__output", $this)
          .removeClass("slider__output")
          .addClass("slider__outputY");
        $(".slider__output2", $this)
          .removeClass("slider__output2")
          .addClass("slider__output2Y");
        $(".slider__toggle2", $this)
          .removeClass("slider__toggle2")
          .addClass("slider__toggle2Y");
      }
      bar = $(".slider__bar", $this);
      toggle = $(".slider__toggle", $this);
      toggle2 = $(".slider__toggle2", $this);
      input1 = $(".slider__input", $this);
      input2 = $(".slider__input2", $this);
      output1 = $(".slider__output", $this);
      output2 = $(".slider__output2", $this);
      barY = $(".slider__barY", $this);
      let toggle2Y = $(".slider__toggle2Y");
      // let input1Y = $(".slider__input");
      // let outputY = $(".slider__outputY");
      // let output2Y = $(".slider__output2Y");
      barHeight = barY.outerHeight();
      barWidth = bar.outerWidth();
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
      toggle2Y.on("mousedown", () => {
        toggle2Y.on("dragstart", e => {
          e.preventDefault();
        });
        $(document).on("mousemove", moveToggle2);
        $(document).on("mousemove", moveThumb2);
        $(document).on("mouseup", onThumbMouseup2);
      });
      input1.on("change", changeInput);
      input2.on("change", changeInput2);
    }

    if (output) {
      $("<div/>", {
        text: "",
        class: "slider__output"
      }).appendTo($this);
    }

    if (doublerange) {
      $("<div/>", {
        class: "slider__toggle2"
      }).appendTo($this);
    }

    if (output && doublerange) {
      $("<div/>", {
        text: "",
        class: "slider__output2"
      })
        .css("marginLeft", barWidth - toggleWidth2 + 10)
        .appendTo($this);
    }

    if (input) {
      $("<input/>", {
        type: "number",
        class: "slider__input",
        min: 0,
        max: config.maxPos
      }).appendTo($this);
    }

    if (input && doublerange) {
      $("<input/>", {
        type: "number",
        class: "slider__input2",
        min: 0,
        max: config.maxPos
      }).appendTo($this);
    }

    let LimitMovementX;
    let LimitMovementY;
    let toggleHeight;
    function moveThumb(event) {
      if (vertical) {
        let barY = $(".slider__barY", $this);
        let outputY = $(".slider__outputY");
        let barTop = barY.offset().top;
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
        outputY.css("marginTop", leftPosY - barHeight);
        outputY.text(Math.round(fffY * config.step + config.minPos));
        input1.val(Math.round(fffY * config.step + config.minPos));
      } else {
        let barLeft = bar.offset().left;
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
        input1.val(
          Math.round((leftPos / stepSize) * config.step + config.minPos)
        );
      }
    }

    function changeInput() {
      if (vertical) {
        let outputY = $(".slider__outputY");
        let stepCountY = (config.maxPos - config.minPos) / config.step;
        toggleHeight = toggle.outerHeight();
        let stepSizeY = (barHeight - toggleHeight) / stepCountY;
        var inputValue = $(".slider__input", $this).val();
        var togglePosition =
          (inputValue / config.step) * stepSizeY + config.minPos;
        toggle.css("top", togglePosition);
        let fff = togglePosition / stepSizeY;
        outputY.css("marginTop", togglePosition - barHeight);
        outputY.text(Math.round(fff * config.step + config.minPos));
      } else {
        var toggleWidth = toggle.outerWidth();
        var stepCount = (config.maxPos - config.minPos) / config.step;
        var stepSize = (barWidth - toggleWidth) / stepCount;
        var inputValue = $(".slider__input", $this).val();
        var togglePosition =
          (inputValue / config.step) * stepSize + config.minPos;
        toggle.css("left", togglePosition);
        let fff = Math.round(togglePosition / stepSize);
        output1.css("marginLeft", togglePosition);
        output1.text(Math.round(fff * config.step + config.minPos));
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

    function moveThumb2(event) {
      if (vertical) {
        let toggle2Y = $(".slider__toggle2Y");
        let barY = $(".slider__barY", $this);
        let output2Y = $(".slider__output2Y", $this);
        let barTop = barY.offset().top;
        let toggleHeight2 = toggle2Y.outerHeight();
        LimitMovementY = {
          min: barTop,
          max: barTop + barHeight - toggleHeight2
        };

        let thumbCoordY2 = event.pageY;
        if (thumbCoordY2 < LimitMovementY.min) {
          thumbCoordY2 = LimitMovementY.min;
        }
        if (thumbCoordY2 > LimitMovementY.max) {
          thumbCoordY2 = LimitMovementY.max;
        }
        let stepCountY2 = (config.maxPos - config.minPos) / config.step;
        let stepSizeY2 = (barHeight - toggleHeight2) / stepCountY2;
        let newthumbCoordY2 = thumbCoordY2 - barTop;
        let leftPosY2 = Math.round((newthumbCoordY2 / stepSizeY2) * stepSizeY2);
        let fffY2 = Math.round(leftPosY2 / stepSizeY2);
        toggle2Y.css("top", leftPosY2);
        output2Y.css("marginTop", leftPosY2 - barHeight);
        output2Y.text(Math.round(fffY2 * config.step + config.minPos));
        input2.val(Math.round(fffY2 * config.step + config.minPos));
      } else {
        let barLeft = bar.offset().left;
        let toggleWidth2 = toggle2.outerWidth();
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

    function changeInput2() {
      if (vertical) {
        let output2Y = $(".slider__output2Y");
        let toggle2Y = $(".slider__toggle2Y");
        let stepCountY2 = (config.maxPos - config.minPos) / config.step;
        var toggleHeight2 = toggle.outerHeight();
        let stepSizeY2 = (barHeight - toggleHeight2) / stepCountY2;
        var inputValue2 = $(".slider__input2", $this).val();
        var togglePosition2 =
          (inputValue2 / config.step) * stepSizeY2 - config.minPos;
        let fff = togglePosition2 / stepSizeY2;
        toggle2Y.css("top", togglePosition2);
        output2Y.css("marginTop", togglePosition2 - barHeight);
        output2Y.text(Math.round(fff * config.step + config.minPos));
      } else {
        var toggleWidth2 = toggle.outerWidth();
        var stepCount2 = (config.maxPos - config.minPos) / config.step;
        var stepSize2 = (barWidth - toggleWidth2) / stepCount2;
        var inputValue2 = $(".slider__input2", $this).val();
        var togglePosition2 =
          (inputValue2 / config.step) * stepSize2 - config.minPos;
        toggle2.css("left", togglePosition2);
        output2.css("marginLeft", togglePosition2);
        let fffY2 = Math.round(togglePosition2 / stepSize2);
        output2.text(Math.round(fffY2 * config.step + config.minPos));
      }
      console.log(2);
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
