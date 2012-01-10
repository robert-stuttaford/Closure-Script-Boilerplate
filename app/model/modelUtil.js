goog.provide('app.model.util');

/** @enum {string} */
app.model.ID_RANGE = {
  ALL: 'all',
  NONE: 'none'
};

/**
 * Expand a set of numerical ID ranges to full lists of distinct IDs
 * @param {string} range
 * @return {?string}
 */
app.model.util.expandIDs = function (range) {
  if ( range == null || range.search( /^(all|none|[0-9,-]+)$/i ) == -1 ) {
    return null;
  }
  if ( range.indexOf( '-' ) == -1 ) {
    return range.toLowerCase();
  }
  /** @type {Array.<string>} */
  var items = range.replace( / /g, '' ).split( ',' );

  /** @type {Array} */
  var newItems = goog.array.map(items,function (/** @type {string} */item) {
    if ( item.indexOf( '-' ) === -1 ) {
      return item;
    }
    /** @type {Array.<string>} */
    var bounds = item.split( '-' );
    /** @type {number} */
    var lower = parseInt(bounds[ 0 ], 10);
    /** @type {number} */
    var upper = parseInt(bounds[ 1 ], 10);
    if ( lower > upper ) {
      return null;
    }
    lower--;
    upper++;
    /** @type {Array.<string>} */
    var newSet = [];
    while ( ++lower < upper ) {
      newSet.push( lower );
    }
    return newSet.join( ',' );
  });
  return newItems.join( ',' );
};
