# deep-camelcase-keys

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> No dependencies, deeply convert object keys to camelcase

## Installation

```
npm install camel-case --save
```

```
yarn add camel-case
```

## Usage

```js
import deepCamelCase from "deep-camelcase-keys";

deepCamelCase({
  foo_bar: {
    "baz--bar": "hello"
  }
});

//=> {fooBar: {bazBar: "hello"}}
```

## License

MIT
