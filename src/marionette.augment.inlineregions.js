// Marionette.augment.InlineRegions
// ------

// Used for allow
//
// A specialized view type that renders an area of HTML and then
// attaches `Region` instances to the specified `regions`.
// Used for composite view management and sub-application areas.
Marionette.augment.InlineRegions = {
  augment : function(View) {
    return View.extend({
      regionType: Marionette.Region,
      postTemplateRender : function() {
        if (View.prototype.postTemplateRender) {
          View.prototype.postTemplateRender.apply(this, arguments);
        }
        var that = this;
        this.$el.find('[data-region]').each(function(index,el) {
          var $el = $(el), name = el.id || $el.data('region');

          if (name) {
            var regionManager = new that.regionType({
              el : el,
              getEl : function(){ return $el }
            });
            if (that.regionManagers) that.regionManagers[name] = regionManager;
            that[name] = regionManager;
          }
        });
      }
    });
  }
};

