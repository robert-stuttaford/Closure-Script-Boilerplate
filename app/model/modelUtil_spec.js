(function() {

  describe('Model Util', function() {
    describe('expand ids', function() {
      var expandIDs;
      expandIDs = null;
      beforeEach(function() {
        return expandIDs = app.model.util.expandIDs;
      });
      it('returns null if given null', function() {
        return expect(expandIDs()).toBe(null);
      });
      it('returns null if not given "all", "none", or any combination of comma-delimited numbers and/or ranges of numbers', function() {
        expect(expandIDs('bad data')).toBe(null);
        expect(expandIDs('all,none')).toBe(null);
        return expect(expandIDs('all,1,2,3')).toBe(null);
      });
      it('returns what it was given if there are no ranges present', function() {
        expect(expandIDs('1,2,3')).toBe('1,2,3');
        expect(expandIDs('all')).toBe('all');
        return expect(expandIDs('none')).toBe('none');
      });
      it('returns expanded list if given a range', function() {
        expect(expandIDs('1-4')).toBe('1,2,3,4');
        return expect(expandIDs('10-14')).toBe('10,11,12,13,14');
      });
      return it('returns all numbers, ranges expanded, if given any combination of comma-delimited numbers and/or ranges of numbers', function() {
        expect(expandIDs('1,2,3-6')).toBe('1,2,3,4,5,6');
        expect(expandIDs('1-3,4,5,6')).toBe('1,2,3,4,5,6');
        return expect(expandIDs('1-3,4-6')).toBe('1,2,3,4,5,6');
      });
    });
    return describe('filter items by ids', function() {
      var filterItemsByIDs;
      filterItemsByIDs = null;
      beforeEach(function() {
        return filterItemsByIDs = app.model.util.filterItemsByIDs;
      });
      it('returns empty collection if given nulls', function() {
        return expect(goog.object.getCount(filterItemsByIDs(null, null))).toBe(0);
      });
      it('returns empty collection if given NONE', function() {
        return expect(goog.object.getCount(filterItemsByIDs(app.model.ID_RANGE.NONE, {}))).toBe(0);
      });
      it('returns clone of passed in collection if given ALL', function() {
        return expect(goog.object.getCount(filterItemsByIDs(app.model.ID_RANGE.ALL, {
          1: 'foo'
        }))).toBe(1);
      });
      return it('returns correct items in collection when passed ids', function() {
        var filteredItems, items;
        items = {
          1: 'foo',
          2: 'bar'
        };
        filteredItems = filterItemsByIDs('1', items);
        expect(goog.object.getCount(filteredItems)).toBe(1);
        return expect(filteredItems[1]).toBe(items[1]);
      });
    });
  });

}).call(this);
