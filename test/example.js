

describe('Example', () => {
    beforeEach(() => {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        //jasmine.getFixtures(). = 'base/spec/javascripts/fixtures/';
        loadFixtures("index.html");
        jasmine.getStyleFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        loadStyleFixtures("style.css");
    });
    it('toggle should move', () => {
        init();
        let toggle = $("#slider__toggle");
        let startPos = toggle.offset().left;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: 64 } );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual(startPos + e.pageX + "px");
    })
});






