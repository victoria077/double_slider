

describe('Example', () => {
    beforeEach(() => {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        loadFixtures("index.html");
        jasmine.getStyleFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        loadStyleFixtures("style.css");
    });
    it('toggle should move', () => {

        init();
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: toggleLeftO + expectedMovePx});
        toggle.trigger(e);
        thumbCoord1 = toggleLeftO + e.pageX - toggleLeftO;
        let endPos = toggle.css("left");
        expect(endPos).toEqual(expectedMovePx + "px");
    });
    it('toggle should have a limitation on the left', () => {
        init();
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: 64 } );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual("0px");
    });
    it('toggle should have a limitation on the right', () => {
        init();
        let expectedMovePx = 900;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barLeft = bar.offset().left;
        let barWidth = bar.outerWidth();
        let toggleWidth = toggle.outerWidth();
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: expectedMovePx} );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual(barLeft + barWidth - toggleWidth -  barLeft + "px");
    });
});






