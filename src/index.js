var _priv = new WeakMap();
var _p = function(prop, value) {
  const contextualStoreObject = (!_priv.has(this) && !_priv.set(this, {})) || _priv.get(this);
  if (typeof prop !== 'undefined' && typeof value !== 'undefined') {
    contextualStoreObject[prop] = value;
  }
  return contextualStoreObject;
};

module.exports = _p;
