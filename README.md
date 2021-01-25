# Nested Object Mutator

[docs](https://changjoo-park.github.io/nested-object-mutator/)

The library for mutating deep nesting object support both Node.js and browsers.

Full builds less than ~2kb

## Installation

```bash
npm install --save nested-object-mutator
```

## Usage

### Remove Nullish

```ts
import NOM from 'nested-object-mutator'

const source = {
  a: null,
  b: {
    c: undefined,
    d: null
  },
  e: {
    f: {
      g: null
    }
  }
}

const result = NOM.removeNullish(source)

// The result is `{b: {}, e: {f: {}}}`
```


### Find Value using dot notation key

```ts
import NOM from 'nested-object-mutator'

const source = {
  a: 1,
  b: {
    c: 2
  }
}

const result = NOM.getByKey(source, "a.b.c", "." /** default delimiter is `.` can omit */)

// The result is `2`. return null if not exists.
```