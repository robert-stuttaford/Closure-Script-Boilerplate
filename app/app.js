goog.provide('app.App');

// require this so that the jasmine tests work
goog.require('app.model.util');
goog.require('app.services.ConfigService');
goog.require('app.ui.common.templates');
goog.require('app.ui.Widget');
goog.require('app.ui.Main');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.style');

/**
 * The App application.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
app.App = function() {
  goog.events.EventTarget.call(this);

  var div = document.createElement('div');
  div.style.cssText = 'height:100%';
  div.innerHTML = app.ui.common.templates.app();
  document.body.appendChild(div);

  /** @type {app.services.ConfigService} */
  var configService = new app.services.ConfigService();
  goog.events.listenOnce(configService, app.services.ConfigService.EventType.CONFIG_LOADED, this.startUp_, false, this);
  configService.loadConfig();

  /**
   * The Main view
   * @type {app.ui.Main}
   * @private
   */
  this.main_ = new app.ui.Main();
  this.main_.decorate(goog.dom.getElement('main'));
};
goog.inherits(app.App, goog.events.EventTarget);

/**
 * Starts App after loading the config
 * @param {goog.events.Event=} opt_event Event.
 * @private
 */
app.App.prototype.startUp_ = function(opt_event) {
  /**
   * The Widget
   * @type {app.ui.Widget}
   * @private
   */
  this.widget_ = new app.ui.Widget();
  this.main_.addChild(this.widget_, true);
};

/** Start the app */
app.App.start = function() {
  app.App.app = new app.App();
};

goog.exportSymbol('start', app.App.start);
