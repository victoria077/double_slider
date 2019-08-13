import { userInfo } from "os";

let toggle, toggleLeft, barLeft;
function init() {
    toggle = $("#slider__toggle");
    toggle.on('mousedown', () => {
        toggle.on('dragstart', (e) => {
            e.preventDefault();
        });
        $(document).on('mousemove', moveThumb);
        $(document).on('mouseup', onThumbMouseup);
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
      }
      toggleLeft = toggle.offset().left;
      console.log(event.pageX);
      thumbCoord = toggleLeft;
      if (thumbCoord < LimitMovementX.min) {
        thumbCoord = LimitMovementX.min;
      }
      if (thumbCoord > LimitMovementX.max) {
        thumbCoord = LimitMovementX.max;
      }
    let gf = toggle.css("left", thumbCoord);
   
};

function onThumbMouseup() {
    $(document).off('mousemove');
    $(document).off('mouseup');
};

