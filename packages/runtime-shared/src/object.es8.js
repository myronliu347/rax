const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Returns an array of the given object's own enumerable entries.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */
if (!Object.entries) {
  Object.entries = function(object) {
    // `null` and `undefined` values are not allowed.
    if (object == null) {
      throw new TypeError('Object.entries called on non-object');
    }

    const entries = [];
    for (const key in object) {
      if (hasOwnProperty.call(object, key)) {
        entries.push([key, object[key]]);
      }
    }
    return entries;
  };
}

/**
 * Returns an array of the given object's own enumerable entries.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 */
if (!Object.values) {
  Object.values = function(object) {
    // `null` and `undefined` values are not allowed.
    if (object == null) {
      throw new TypeError('Object.values called on non-object');
    }

    const values = [];
    for (const key in object) {
      if (hasOwnProperty.call(object, key)) {
        values.push(object[key]);
      }
    }
    return values;
  };
}