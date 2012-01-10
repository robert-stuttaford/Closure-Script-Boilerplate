goog.provide('app.services.ConfigService');

goog.require('app.Config');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.net.XhrIo');

/**
 * The App Resource Service.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
app.services.ConfigService = function() {
  goog.events.EventTarget.call(this);
};
goog.inherits(app.services.ConfigService, goog.events.EventTarget);

/**
 * Fetch configuration data.
 */
app.services.ConfigService.prototype.loadConfig = function() {
  var xhr = new goog.net.XhrIo();

  var self = this;
  goog.events.listen(xhr, goog.net.EventType.COMPLETE, function(e) {

    goog.style.showElement(goog.dom.getElement('loadingIndicator'), false);

    var xhr = /** @type {goog.net.XhrIo} */ (e.target);
    /** @type {Object|null|undefined} */
    var obj = xhr.getResponseJson();
    /** @type {string} */
    var val;

    // contrived example
    val = obj['configValue'];
    if (goog.isDefAndNotNull(val)) {
      app.Config.CONFIG_VALUE = val;
    }

    self.dispatchEvent(app.services.ConfigService.EventType.CONFIG_LOADED);

    xhr.dispose();
  });
  if (xhr !== null) {

    goog.style.showElement(goog.dom.getElement('loadingIndicator'), true);

    xhr.send('/data/config.json');
  }
};

/** @enum {string} */
app.services.ConfigService.EventType = {
  CONFIG_LOADED: goog.events.getUniqueId('config-loaded')
};
