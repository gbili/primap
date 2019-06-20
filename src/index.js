var _priv = new WeakMap();
var _p = function(prop, value) {
  const thisBucket = (!_priv.has(this) && !_priv.set(this, {})) || _priv.get(this);
  if (typeof prop === 'undefined') {
    return thisBucket;
  }
  if (typeof value === 'undefined') {
    return thisBucket[prop];
  }
  return thisBucket[prop] = value;
};

module.exports = _p;
