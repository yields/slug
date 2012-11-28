
/**
 * Generate a slug from the given `str`.
 *
 * example:
 *
 *        generate('foo bar');
 *        // > foo-bar
 *
 * @param {String} str
 * @param {String} repl defaulted to `-`
 * @return {String}
 */

module.exports = function (str, repl) {
  return str.toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/^ +| +$/g, '')
    .replace(/ +/g, repl || '-')
};
