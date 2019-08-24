

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
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barLeft = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", {pageX: barLeft + expectedMovePx});
        toggle.trigger(e);
        let endPos = toggle.css("left");
        expect(endPos).toEqual(62.4 + "px");
    });
    it('The toggle should have a limitation on the left', () => {
        $("#slider1").Slider({vertical: false});
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: 64 } );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual("0px");
    });
    it('toggle should have a limitation on the right', () => {
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 900;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barWidth = bar.outerWidth();
        let toggleWidth = toggle.outerWidth();
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: expectedMovePx} );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        let supossedPos = barWidth - toggleWidth + "px";
        expect(endPos).toEqual(supossedPos);
    });
    it('The output should move like  toggle', () => {
         $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let output = $("#slider__output");
        let barLeft = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle.trigger(e);
        let endPos = toggle.css("left");
        let outputPos = output.css("marginLeft");
        expect(outputPos).toEqual(endPos);
    });
    it('The output should show correct value', () => {
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let output = $("#slider__output");
        let toggle = $("#slider__toggle");
        let barLeft = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle.trigger(e);
        expect(output.text()).toBe('22');
    });
    it('The input should show correct value', () => {
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let input = $("#slider__input");
        let toggle = $("#slider__toggle");
        let barLeft = bar.offset().left;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle.trigger(e);
        expect(input.val()).toBe('22');
    });
    it('toggle2 should move', () => {
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let toggle2 = $("#slider__toggle2");
        let bar = $("#slider__bar");
        let barLeft = bar.offset().left;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", {pageX: barLeft + expectedMovePx});
        toggle2.trigger(e);
        let endPos = toggle2.css("left");
        expect(endPos).toEqual(62.4 + "px");
    });
    it('The toggle2 should have a limitation on the left', () => {
        $("#slider1").Slider({vertical: false});
        let toggle2 = $("#slider__toggle2");
        let bar = $("#slider__bar");
        let barLeft = bar.offset().left;
        toggle2.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: 64 } );
        toggle2.trigger(e); 
        let endPos = toggle2.css("left");
        expect(endPos).toEqual("0px");
    });
    it('The toggle2 should have a limitation on the right', () => {
        $("#slider1").Slider({vertical: false});
        let expectedMovePx = 900;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barLeft = bar.offset().left;
        let barWidth = bar.outerWidth();
        let toggleWidth = toggle.outerWidth();
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageX: expectedMovePx} );
        toggle.trigger(e); 
        let endPos = toggle.css("left");
        expect(endPos).toEqual(barWidth - toggleWidth + "px");
    });
    it('The output2 should move like toggle2', () => {
         $("#slider1").Slider({vertical: false});
        let expectedMovePx = 64;
        let toggle2 = $("#slider__toggle2");
        let bar = $("#slider__bar");
        let output2 = $("#slider__output2");
        let barLeft = bar.offset().left;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle2.trigger(e);
        let endPos = toggle2.css("left");
        let outputPos = output2.css("marginLeft");
        expect(outputPos).toEqual(endPos);
    });
    it('The output2 should show correct value', () => {
        $("#slider1").Slider();
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let output2 = $("#slider__output2");
        let toggle2 = $("#slider__toggle2");
        let barLeft = bar.offset().left;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle2.trigger(e);
        expect(output2.text()).toBe('22');
    });
    it('The input2 should show correct value', () => {
        $("#slider1").Slider();
        let expectedMovePx = 64;
        let bar = $("#slider__bar");
        let input2 = $("#slider__input2");
        let toggle2 = $("#slider__toggle2");
        let barLeft = bar.offset().left;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageX: barLeft + expectedMovePx});
        toggle2.trigger(e);
        expect(input2.val()).toBe('22');
    });
    it('toggle should move verticaly', () => {
        $("#slider1").Slider({vertical: true});
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $(".slider__barY");
        let barTop = bar.offset().top;
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", {pageY: barTop  + expectedMovePx});
        toggle.trigger(e);
        let endPos = toggle.css("top");
        expect(endPos).toEqual(64 + "px");
    });
    it('The toggle should have a limitation on the top', () => {
        $("#slider1").Slider({vertical: true});
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barTop = bar.offset().top;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageY: 20 } );
        toggle.trigger(e); 
        let endPos = toggle.css("top");
    expect(endPos).toEqual("0px");
    });
        it('toggleY should have a limitation on the bottom', () => {
        $("#slider1").Slider({vertical: true});
        let expectedMovePx = 900;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let barHeight= bar.outerHeight();
        let toggleHeight = toggle.outerHeight();
        let barTop = bar.offset().top;
        toggle.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageY: expectedMovePx} );
        toggle.trigger(e); 
        let endPos = toggle.css("top");
        let supossedPos = barHeight - toggleHeight + "px";
        expect(endPos).toEqual(supossedPos);
    });
        it('The output should move verticaly like  toggle', () => {
         $("#slider1").Slider({vertical: true});
        let expectedMovePx = 64;
        let toggle = $("#slider__toggle");
        let bar = $("#slider__bar");
        let output = $("#slider__output");
        let barTop = bar.offset().top;
        let barHeight= bar.outerHeight();
        toggle.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageY: barTop  + expectedMovePx});
        toggle.trigger(e);
        let outputPos = output.css("marginTop");
        expect(outputPos).toEqual("-236px");
    });
    it('toggle2 should move verticaly', () => {
        $("#slider1").Slider({vertical: true});
        let expectedMovePx = 64;
        let toggle2 = $("#slider__toggle2");
        let bar = $(".slider__barY");
        let barTop = bar.offset().top;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", {pageY: barTop  + expectedMovePx});
        toggle2.trigger(e);
        let endPos = toggle2.css("top");
        expect(endPos).toEqual(64 + "px");
    });
    it('The toggle should have a limitation on the top', () => {
        $("#slider1").Slider({vertical: true});
        let toggle2 = $("#slider__toggle2");
        toggle2.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageY: 20 } );
        toggle2.trigger(e); 
        let endPos = toggle2.css("top");
    expect(endPos).toEqual("0px");
    });
        it('toggleY should have a limitation on the bottom', () => {
        $("#slider1").Slider({vertical: true});
        let expectedMovePx = 900;
        let toggle2 = $("#slider__toggle2");
        let bar = $("#slider__bar");
        let barHeight= bar.outerHeight();
        let toggleHeight = toggle2.outerHeight();
        toggle2.trigger("mousedown"); 
        var e = jQuery.Event( "mousemove", { pageY: expectedMovePx} );
        toggle2.trigger(e); 
        let endPos = toggle2.css("top");
        let supossedPos = barHeight - toggleHeight + "px";
        expect(endPos).toEqual(supossedPos);
    });
        it('The output should move verticaly like  toggle', () => {
         $("#slider1").Slider({vertical: true});
        let expectedMovePx = 64;
        let toggle2 = $("#slider__toggle2");
        let bar = $("#slider__bar");
        let output2 = $("#slider__output2");
        let barTop = bar.offset().top;
        toggle2.trigger("mousedown");
        var e = jQuery.Event("mousemove", { pageY: barTop  + expectedMovePx});
        toggle2.trigger(e);
        let outputPos = output2.css("marginTop");
        expect(outputPos).toEqual("-236px");
    })
});






