Text Model
=========================

Transform functionality to move between HTML Elements and a text model.

[![Coverage Status](https://coveralls.io/repos/nymag/amphora/badge.svg?branch=master&t=cQ880T)](https://coveralls.io/r/nymag/amphora?branch=master)

```html
Hello <a href="place" alt="hey">there</a> <u>person</u>!
```
becomes
```json
{
  "text": "Hello there person!",
  "blocks": {
    "link": [ { "start": 6, "end": 11, "href": "place", "alt": "hey" } ],
    "emphasis": [ 12, 18 ]
  }
}
```

## Usage

```
npm install --save @nymdev/text-model
```

Convert from an Element to a text model representation.

```js
var el = document.querySelector('.some-element');
var model = textModel.fromElement(el);
```

Convert from a text model representation to an Element.

```js
var el = textModel.toElement(model);
paragraphEl.appendChild(el);
```

Merge text together -- simple styling tags (like `<i>`, `<b>`, `<em>`) will be
merged correctly as well.

```js
var a = textModel.fromElement(document.querySelector('.a'));
var b = textModel.fromElement(document.querySelector('.b'));
var merged = textModel.concat(a, b);
paragraphEl.appendChild(textModel.toElement(merged));
```

Split text apart -- tags will be split correctly as well.

```js
var model = textModel.fromElement(document.querySelector('.a'));
var splitModels = textModel.split(a, 15);
paragraphEl.appendChild(textModel.toElement(splitModels[0]));
paragraphEl.appendChild(textModel.toElement(splitModels[1]));
```

## Optional Configuration

```js
textModel.setSameAs({
  'B': 'STRONG',
  'U': 'EM',
  'I': 'EM',
  'H1': 'H2',
  'H3': 'H2',
  'H4': 'H2',
  'H5': 'H2',
  'H6': 'H2',
  'STRIKE': 'DEL'
});
```

These tags will be converted if they are seen.  The defaults are as above.

## Testing

We use karma and mocha for testing.

```bash
npm test
```

## Contribution

Fork the project and submit a PR on a branch that is not named `master`.  We use linting tools and unit tests, which are built constantly using continuous integration.  If you find a bug, it would be appreciated if you could also submit a branch with a failing unit test to show your case.
