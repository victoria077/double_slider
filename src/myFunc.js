import { userInfo } from "os";

let toggle, bar, toggleLeft, barLeft;
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

function moveThumb(event) {   
    
    let bar = $("#slider__bar");
    let barLeft;
    LimitMovementX = {
        // min: bar.offsetLeft,
        // max: bar.offsetLeft + bar.offsetWidth - thumb.offsetWidth,
      }
      toggleLeft = toggle.offset().left;
      thumbCoord = toggleLeft + event.pageX;
      // if (thumbCoord < LimitMovementX.min) {
      //   thumbCoord = LimitMovementX.min;
      // }
      // if (thumbCoord > LimitMovementX.max) {
      //   thumbCoord = LimitMovementX.max;
      // }
    toggle.css("left", thumbCoord);
};

function onThumbMouseup() {
    document.removeEventListener('mousemove', moveThumb);
    document.removeEventListener('mouseup', onThumbMouseup);
};
