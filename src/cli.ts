#!/usr/bin/env node
import path = require('path')
import spawn = require('cross-spawn-promise')
import findPackages from 'find-packages'
import createPkgGraph, {PackageNode} from 'pkgs-graph'
import sortPkgs = require('sort-pkgs')

const args = process.argv.slice(2)

main()

async function main() {
  const pkgs = await findPackages(process.cwd())
  const graph = createPkgGraph(pkgs)
  const sortedPkgNodes = sortPkgs(graph)

  try {
    for (let pkg of sortedPkgNodes) {
      console.log(`Running at ${pkg.path}`)
      await spawn('pnpm', args, {stdio: 'inherit', cwd: pkg.path})
    }
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
