#!/usr/bin/env node
import path = require('path')
import spawn = require('cross-spawn-promise')
import pnpmr from '.'
import findPackages from 'find-packages'

const args = process.argv.slice(2)
const pnpmArgs = ['install'].concat(args)

main()

async function main() {
  const pkgs = await findPackages(process.cwd())

  try {
    for (let pkg of pkgs) {
      console.log(`Installing dependencies at ${pkg.path}`)
      await spawn('pnpm', pnpmArgs, {stdio: 'inherit'})
    }
  } catch (err) {
    process.exit(1)
  }
}
