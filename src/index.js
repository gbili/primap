var _priv = new WeakMap();
var _p = function(prop, value) {
  const contextualStoreObject = (!_priv.has(this) && !_priv.set(this, {})) || _priv.get(this);
  if (typeof prop === 'undefined') {
    return contextualStoreObject;
  }
  if (typeof value === 'undefined') {
    return contextualStoreObject[prop];
  }
  return contextualStoreObject[prop] = value;
};

module.exports = _p;
