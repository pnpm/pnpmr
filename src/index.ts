import findPackages from 'find-packages'
import {install, PnpmOptions} from 'pnpm'

export default async function (root: string, opts: PnpmOptions) {
  const pkgs = await findPackages(root)

  for (let pkg of pkgs) {
    console.log(`Installing dependencies at ${pkg.path}`)
    await install(Object.assign({}, opts, {cwd: pkg.path}))
  }
}
