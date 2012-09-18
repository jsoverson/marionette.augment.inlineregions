
describe("inline regions",function(){

  describe("when a view is augmented with inline region definitions", function(){
    var layout, view1, view2;

    beforeEach(function(){
      var template = '<div id="regionOne" data-region></div><div data-region="regionTwo"></div>';

      layout = new (Marionette.ItemView.augment(
        Marionette.augment.InlineRegions
      ).extend({
          template : _.template(template)
        }));
      layout.render();
      view1 = new Marionette.View();
      view2 = new Marionette.View();
    });

    it("should instantiate the specified region managers", function(){
      layout.regionOne.show(view1);
      layout.regionTwo.show(view2);
      expect(layout.regionOne).toBeTruthy();
      expect(layout.regionTwo).toBeTruthy();
      expect(layout.regionOne.$el.children().length).toBeGreaterThan(0);
      expect(layout.regionTwo.$el.children().length).toBeGreaterThan(0);
    });
  });

  describe('when inline regions are combined with region manager', function(){
    var layout, view1, view2;

    beforeEach(function(){
      var template = '<div id="regionOne" data-region></div><div data-region="regionTwo"></div>';

      layout = new (Marionette.ItemView.augment(
        Marionette.augment.RegionManager,
        Marionette.augment.InlineRegions
      ).extend({
          template : _.template(template)
        }));
      layout.render();
      view1 = new Marionette.View();
      view2 = new Marionette.View();
    });

    it("should close views after rerender", function(){
      layout.regionOne.show(view1);
      spyOn(view1,'close');
      layout.render();
      expect(view1.close).toHaveBeenCalled();
      expect(layout.regionOne.currentView).toBeUndefined();
      layout.regionOne.show(view2);
      expect(layout.regionOne.currentView).toEqual(view2);
    });
  });

});
