
var gen = require('slug');

function assert(expr, e) {
  if (expr) return;
  throw new Error(e || 'it\'s broken');
}

describe('slug()', function () {

  it('should return `foo-bar` for `foo bar`', function () {
    assert(gen('foo bar') == 'foo-bar');
  })

  it('should return `foo-bar` for `foo ! bar`', function () {
    assert(gen('foo ! bar') == 'foo-bar');
  })

  it('should return `foo-bar` for `foo-bar`', function () {
    assert(gen('foo ! bar') == 'foo-bar');
  })

  it('should allow numbers and alphas only', function () {
    assert(gen('@!#!@#!@#foo bar1232') == 'foo-bar1232');
  })

  it('should respect `replacement` parameter', function () {
    assert(gen('foo bar', '_') == 'foo_bar');
  })

  it('should trim', function () {
    assert(gen('   foo    ---') == 'foo');
  })

});
