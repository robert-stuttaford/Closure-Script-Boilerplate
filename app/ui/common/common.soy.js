// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

goog.provide('app.ui.common.templates');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
app.ui.common.templates.app = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="container"><div id="loadingIndicator" style="display: none"></div><div id="main"></div></div>');
  return opt_sb ? '' : output.toString();
};
