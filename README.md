marionette.augment.inlineregions
============================

Example plugin and plugin structure for Marionette

# THIS IS NOT USABLE
This is example code on a branch of Marionette

## Usage Example
```
var MyView = Marionette.ItemView.augment(
  Marionette.augment.InlineRegions
).extend({
  // extend as normal
})
```

## Leveraging RegionManager
This example plays well with RegionManager in the example to properly close/reopen regions
```
var MyView = Marionette.ItemView.augment(
  Marionette.augment.RegionManager,
  Marionette.augment.InlineRegions
).extend({
  // extend as normal
})
```

### License

The example licensed under the MIT license.

### Author

Jarrod Overson
