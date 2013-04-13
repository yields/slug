
/**
 * Generate a slug from the given `str`.
 *
 * example:
 *
 *        generate('foo bar');
 *        // > foo-bar
 *
 * options:
 *
 *    - `.replace` characters to replace, defaulted to `/[^a-z0-9]/g`
 *    - `.separator` separator to insert, defaulted to `-`
 *
 * @param {String} str
 * @param {Object} opts
 * @return {String}
 */

module.exports = function(str, opts){
  opts = opts || {};
  return str.toLowerCase()
    .replace(opts.replace || /[^a-z0-9]/g, ' ')
    .replace(/^ +| +$/g, '')
    .replace(/ +/g, opts.separator || '-')
};
