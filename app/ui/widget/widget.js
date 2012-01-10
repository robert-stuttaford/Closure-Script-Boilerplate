goog.provide('app.ui.Widget');

goog.require('app.ui.templates.widget');
goog.require('goog.dom');
goog.require('goog.ui.Component');

/**
 * App Start
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 */
app.ui.Widget = function(opt_domHelper) {
  goog.ui.Component.call(this, opt_domHelper);
};
goog.inherits(app.ui.Widget, goog.ui.Component);

/** @return {Object} Data used to populate the template. */
app.ui.Widget.prototype.getTemplateModel = function() {
  return {};
};

/** @return {Function} Template. */
app.ui.Widget.prototype.getTemplate = function() {
  return app.ui.templates.widget.widget;
};

/** @override */
app.ui.Widget.prototype.createDom = function() {
  /** @type {Node} */
  var node = soy.renderAsFragment(this.getTemplate(), this.getTemplateModel());
  /** @type {Element} */
  var el = /** @type {Element} */ node;
  this.setElementInternal(el);
  this.decorate(this.getElement());
};

/** @override */
app.ui.Widget.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);

  /** @type {Element} */
  var el = this.getElement();
};

/** @override */
app.ui.Widget.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  var eh = this.getHandler();
};

/** @override */
app.ui.Widget.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
};
