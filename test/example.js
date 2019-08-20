

describe('Example', () => {
    beforeEach(() => {
        jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        loadFixtures("index.html");
        jasmine.getStyleFixtures().fixturesPath = 'base/spec/javascripts/fixtures/';
        loadStyleFixtures("style.css");
    });
    it("Should find jQuery", function(){
        expect($).not.toBeNull();
    });
    it('toggle should move', () => {
        $("#slider1").Slider();
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", {pageX: toggleLeftO + expectedMovePx});
        toggle.trigger(e);
        let endPos = toggle.css("left");
        expect(endPos).toEqual(62.4 + "px");
    });
    it('The toggle should have a limitation on the left', () => {
        $("#slider1").Slider();
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: 64 } );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual("0px");
    });
    // it('toggle should have a limitation on the right', () => {
    //     $("#slider1").Slider();
    //     let expectedMovePx = 900;
    //     let toggle = $("#slider__toggle");
    //     let bar = $("#slider__bar");
    //     let barLeft = bar.offset().left;
    //     let barWidth = bar.outerWidth();
    //     let toggleWidth = toggle.outerWidth();
    //     toggleLeftO = bar.offset().left;
    //     toggle.trigger("mousedown"); 
    //     var e = jQuery.Event( "mousemove", { pageX: expectedMovePx} );
    //     toggle.trigger(e); 
    //     let endPos = toggle.css("left");
    //     expect(endPos).toEqual(barLeft + barWidth - toggleWidth -  barLeft + "px");
    // });
    it('The output should move like  toggle', () => {
         $("#slider1").Slider();
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let output = $("#slider__output");
        toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: toggleLeftO + expectedMovePx});
        toggle.trigger(e);
        let endPos = toggle.css("left");
        let outputPos = output.css("marginLeft");
        expect(outputPos).toEqual(endPos);
    });
    it('The output should show correct value', () => {
        $("#slider1").Slider();
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let output = $("#slider__output");
        let toggle = $("#slider__toggle");
        let toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: toggleLeftO + expectedMovePx});
        toggle.trigger(e);
        expect(output.text()).toBe('22');
    });
    it('The input should show correct value', () => {
        $("#slider1").Slider();
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let input = $("#slider__input");
        let toggle = $("#slider__toggle");
        let toggleLeftO = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: toggleLeftO + expectedMovePx});
        toggle.trigger(e);
        expect(input.val()).toBe('22');
    });
});






