jasmine.Matchers.prototype.toBeClose = function(expected) {
  return Math.abs(expected - this.actual) <= 0.000001;
};

jasmine.Matchers.prototype.toBeEmpty = function() {
  return this.actual.length === 0;
};

jasmine.Matchers.prototype.toBeFalse = function() {
  return this.actual === false;
};

jasmine.Matchers.prototype.toBeTrue = function() {
  return this.actual === true;
};

/**
 * @param {Object} target Object being called
 * @param {String} functionName
 */
jasmine.Matchers.prototype.toCall = function(target, functionName) {
  var oldFn = target[functionName];
  var passed = false;
  var functionCalled = false;
  var expectedArguments = goog.array.slice(arguments, 2);
  var actualArguments;

  target[functionName] = function() {
    functionCalled = true;
    actualArguments = arguments;

    if (actualArguments.length !== expectedArguments.length) {
      return;
    }

    for (var i = 0; i < expectedArguments.length; i++) {
      if (expectedArguments[i] !== actualArguments[i]) {
        return;
      }
    }

    passed = true;
  };

  this.actual();

  target[functionName] = oldFn;

  if (passed) {
    return true;
  }

  this.message = function() {
    if (functionCalled) {
      return 'Expected block to call function ' + functionName + ' with ' + jasmine.pp(expectedArguments) + ' but received it with '+ jasmine.pp(jasmine.util.argsToArray(actualArguments)) ;
    } else {
      return 'Expected block to call function ' + functionName + ', but it was never called.';
    }
  };

  return false;
};

/**
 * @param {Object} target event target
 * @param {String} eventType
 * @param {Object} memento
 */
jasmine.Matchers.prototype.toDispatch = function(target, eventType, memento) {
  var event;

  goog.events.listenOnce(target, eventType, function(e) {
    event = e;
  });

  this.actual();

  if (!event) {
    this.message = function() {
      'Expected function to call ' + eventType + ', but it did not.';
    }
  }

  return event && (this.env.equals_(event.memento, memento));
};

/**
 * @param {string} expectedEventType
 * @param {Function} expectedCallback
 */
jasmine.Matchers.prototype.toHaveListener = function(expectedEventType, expectedCallback) {
  var listener = goog.events.getListeners(this.actual, expectedEventType, false)[0];
  var errorMessage;

  if (listener && listener.listener) {
    if (listener.listener === expectedCallback) {
      return true;
    } else {
      errorMessage = 'Expected listener was found, but was bound to wrong function.';
    }
  } else {
    errorMessage = 'Expected listener on object, but found none.';
  }

  this.message = function() {
    return errorMessage;
  };

  return false;
};
