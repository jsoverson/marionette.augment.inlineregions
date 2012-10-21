marionette.augment.inlineregions
============================

[![Build Status](https://secure.travis-ci.org/jsoverson/marionette.augment.inlineregions.png)](http://travis-ci.org/jsoverson/marionette.augment.inlineregions)

This is a simple augment for Marionette that allows you to specify regions inline inside your templates. This
depends on your usage of [Backbone.Augment](https://github.com/jsoverson/Backbone.Augment).

## Usage Example
```
var MyView = Marionette.ItemView.augment(
  Marionette.augment.InlineRegions
).extend({
  // extend as normal
})
```

## Leveraging RegionManager inside Marionette.Layout

```
var MyView = Marionette.Layout.augment(
  Marionette.augment.InlineRegions
).extend({
  // extend as normal
})
```

### License

The example licensed under the MIT license.

### Author

Jarrod Overson
