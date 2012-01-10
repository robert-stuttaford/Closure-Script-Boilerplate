goog.provide('app.ui.Main');

goog.require('goog.ui.Component');

/**
 * TopBar
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 */
app.ui.Main = function(opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
};
goog.inherits(app.ui.Main, goog.ui.Component);
