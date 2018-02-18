> This package is deprecated! You can now use the `pnpm recursive` commands of [pnpm](https://github.com/pnpm/pnpm) instead of pnpmr

# pnpmr

> Run pnpm on all subpackages

[![Build Status](https://img.shields.io/travis/pnpm/pnpmr/master.svg)](https://travis-ci.org/pnpm/pnpmr) [![npm version](https://img.shields.io/npm/v/pnpmr.svg)](https://www.npmjs.com/package/pnpmr)

## Installation

```
npm i -g pnpmr
```

## Usage

Run it the same way you'd run pnpm. It will execute pnpm on each subpackage. For example, to install in all subpackages, run:

```sh
$ pnpmr i
```

To run tests in all subdeps, run:

```sh
$ pnpmr test
```

## License

[MIT](LICENSE) © [Zoltan Kochan](http://kochan.io)
