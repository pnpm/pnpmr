#!/usr/bin/env node
import path = require('path')
import spawn = require('cross-spawn-promise')
import findPackages from 'find-packages'

const args = process.argv.slice(2)

main()

async function main() {
  const pkgs = await findPackages(process.cwd())

  try {
    for (let pkg of pkgs) {
      console.log(`Running at ${pkg.path}`)
      await spawn('pnpm', args, {stdio: 'inherit', cwd: pkg.path})
    }
  } catch (err) {
    process.exit(1)
  }
}
