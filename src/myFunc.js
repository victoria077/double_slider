(function($) {

  $.fn.Slider = function(options) {
    var defaults = {
      minPos: 10,
      maxPos: 100,
      step: 2,
      output: true,
      input: true
  };
    let config = $.extend({}, defaults, options);
    let output = config.output;
    let input = config.input;
    let toggle, input1;
    function init() {
      input1= $("#slider__input");
      toggle = $("#slider__toggle");
      output1 = $('#slider__output');
      output1.text(config.minPos);
      input1.val(config.minPos);
      toggle.on("mousedown", () => {
        toggle.on("dragstart", e => {
          e.preventDefault();
        });
        $(document).on("mousemove", moveToggle);
        $(document).on("mousemove", moveThumb); 
        $(document).on("mouseup", onThumbMouseup);
      });

    }

    if(output){
      $('<div/>',{
        text: 'Div text',
        class: 'slider__output',
        id: "slider__output",
    }).appendTo('#slider1');
    }   
    
    
    if(input){
      $('<input/>',{
        type: "number",
        id: "slider__input",
        class: "slider__input",
        min: 0
    }).appendTo('body');
    }  
    let LimitMovementX, thumbCoord;

    function moveThumb(event) {
      let bar = $("#slider__bar");
      let barLeft = bar.offset().left;
      let barWidth = bar.outerWidth();
      let toggleWidth = toggle.outerWidth();
       // output.text(min + newthumbCoord * (max - min) / LimitMovementX.max ^ 0);
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
      let stepCount = (config.maxPos - config.minPos) / config.step;             
      let stepSize = (barWidth - toggleWidth) / stepCount;                       
      let newthumbCoord = thumbCoord - barLeft;                                  
      let leftPos = Math.round(newthumbCoord / stepSize) * stepSize;  
      let fff = leftPos / stepSize;           
      toggle.css("left",  leftPos);                    
      output1.css("marginLeft",  leftPos);
      output1.text(Math.round(fff * config.step + config.minPos));
      input1.val(Math.round(fff * config.step + config.minPos));
      // let newthumbCoord = thumbCoor d - barLeft;
      // toggle.css("left", newthumbCoord);
      // output.text(config.minPos + newthumbCoord * (config.maxPos - config.minPos) / LimitMovementX.max ^ 0);
      // output.css("marginLeft",  newthumbCoord);
      let g;
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
