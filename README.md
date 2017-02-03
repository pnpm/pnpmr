# pnpmr

> Recursive installation using pnpm

## Installation

```
npm i -g pnpmr
```

## CLI Usage

```sh
$ pnpmr

# or run it with options that will be passed to `npm install`
$ pnpmr --ignore-scripts
```

## API Usage

```js
import pnpmr from 'pnpmr'

pnpmr(process.cwd(), {
  ignoreScripts: true
})
```

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
