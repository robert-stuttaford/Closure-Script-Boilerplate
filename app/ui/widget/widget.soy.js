// This file was automatically generated from widget.soy.
// Please don't edit this file by hand.

goog.provide('app.ui.templates.widget');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
app.ui.templates.widget.widget = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="widget">A Widget.</div>');
  return opt_sb ? '' : output.toString();
};
