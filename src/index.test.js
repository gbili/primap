const expect = require('chai').expect;
const _p = require('./index');

describe(`_p`, function() {
  const o = {};
  it('should be a function', function() {
    expect(_p).to.be.a('function');
  });

  _p.bind(o);

  it('should get what is set', function() {
    const val = 'my value';
    _p().myprop = val;
    expect(_p().myprop).to.be.equal(val);
  });

  it('should accept setting as parameter and normal getting', function() {
    const val2 = 'my value 2';
    _p('myOtherprop', val2);
    expect(_p().myOtherprop).to.be.equal(val2);
  });
});
