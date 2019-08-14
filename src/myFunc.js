
let toggle;
function init() {
    toggle = $("#slider__toggle");
    toggle.on('mousedown', () => {
        toggle.on('dragstart', (e) => {
            e.preventDefault();
        });
        $(document).on('mousemove', moveToggle);
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

    thumbCoord = event.pageX;
    if (thumbCoord < LimitMovementX.min) {
        thumbCoord = LimitMovementX.min;
    }
    if (thumbCoord > LimitMovementX.max) {
        thumbCoord = LimitMovementX.max;
    }
    let newthumbCoord = thumbCoord - barLeft;
    toggle.css("left", newthumbCoord);
};

function onThumbMouseup() {
    $(document).off('mousemove');
    $(document).off('mouseup');
};

function moveToggle() {
    $(document).on('mousemove', function (event) {
        console.log(event.pageX);
    });
}

init();