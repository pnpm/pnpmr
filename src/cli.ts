#!/usr/bin/env node
import path = require('path')
import pnpmr from '.'

const args = process.argv.slice(2)

const root = args[0]
  ? path.resolve(args[0])
  : process.cwd()

pnpmr(root)
