
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
    let g = toggle.css("left", thumbCoord);
   
};

function onThumbMouseup() {
    $(document).off('mousemove');
    $(document).off('mouseup');
};

let f = function evPos(){
   bar.mousemove(function( event ) {
        return event.pageX;
      });
}
init();


// let toggle, toggleLeft, barLeft;
// function init() {
//     thumb = document.querySelector('.slider__toggle');
//     thumb.addEventListener('mousedown', function() {
//         this.addEventListener('dragstart', function(e) {
//           e.preventDefault();
//         });
//         document.addEventListener('mousemove', moveThumb);
//         document.addEventListener('mouseup', onThumbMouseup);
//       });
// }

// let bar = document.querySelector('.slider__bar');
// let LimitMovementX, thumbCoord, thumbCoord2;
// function moveThumb(e) {
//     LimitMovementX = {
//       min: bar.offsetLeft,
//       max: bar.offsetLeft + bar.offsetWidth - thumb.offsetWidth,
//     }
//     thumbCoord = thumb.offsetLeft + e.movementX;
//     if (thumbCoord < LimitMovementX.min) {
//       thumbCoord = LimitMovementX.min;
//     }
//     if (thumbCoord > LimitMovementX.max) {
//       thumbCoord = LimitMovementX.max;
//     }
//     thumb.style.left = thumbCoord + 'px';

//   };

//   function onThumbMouseup() {
//     document.removeEventListener('mousemove', moveThumb);
//     document.removeEventListener('mouseup', onThumbMouseup);
//   };

//   init();