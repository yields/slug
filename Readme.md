
# slug

  slug generator

## Installation

    $ component install yields/slug

## API

#### slug(str[, opts])

```javascript
slug('foo bar');
// > foo-bar
slug('foo bar', { separator: '_' });
// > foo_bar
slug('foo bar', { replace: /o/g });
// > f-bar
```

## Tests

    $ make test

## License

  MIT
