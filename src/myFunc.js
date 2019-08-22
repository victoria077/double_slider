(function($) {

  $.fn.Slider = function(options) {
    var defaults = {
      minPos: 10,
      maxPos: 100,
      step: 2,
      output: true,
      input: true,
      doublerange: true
  };
    let config = $.extend({}, defaults, options);
    let output = config.output;
    let input = config.input;
    let doublerange = config.doublerange;

    let toggle, toggle2, output1, output2, input2, input1, bar, barLeft, barWidth, toggleWidth2;
    function init() {
      bar = $("#slider__bar");
      toggle = $("#slider__toggle");
      toggle2 = $("#slider__toggle2");
      input1= $("#slider__input");
      input2= $("#slider__input2");
      output1 = $('#slider__output');
      output2 = $('#slider__output2');
      barLeft = bar.offset().left;
      barWidth = bar.outerWidth();
      toggleWidth2 =  toggle.outerWidth();
      output1.text(config.minPos);
      output2.text(config.maxPos);
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

    if(output){
      $('<div/>',{
        text: '',
        class: 'slider__output',
        id: "slider__output",
    }).appendTo('#slider1');
    }   
    if(output && doublerange){
      $('<div/>',{
        text: '',
        class: 'slider__output2',
        id: "slider__output2",
    }).css("marginLeft",  barWidth - toggleWidth2 + 10 ).appendTo('#slider1');
    } 
    
    
    
    if(input){
      $('<input/>',{
        type: "number",
        id: "slider__input",
        class: "slider__input",
        min: 0
    }).appendTo('body');
    }  

    if(input && doublerange){
      $('<input/>',{
        type: "number",
        id: "slider__input2",
        class: "slider__input2",
        max: config.maxPos
    }).appendTo('body');
    }
    let LimitMovementX, thumbCoord;

    function moveThumb(event) {
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

    if(doublerange){
      $('<div/>',{
        class: 'slider__toggle2',
        id: "slider__toggle2",
    }).appendTo('#slider__bar');
    }   

    function moveThumb2(event) {
      let toggleWidth2 =  toggle.outerWidth();
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
      toggle2.css("left",  leftPos2);  
      output2.css("marginLeft",  leftPos2);
      output2.text(Math.round(fff * config.step + config.minPos));  
      input2.val(Math.round(fff * config.step + config.minPos));              
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
