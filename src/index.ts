import findPackages from 'find-packages'
import {install} from 'pnpm'

export default async function (root: string) {
  const pkgs = await findPackages(root)

  for (let pkg of pkgs) {
    console.log(`Installing dependencies at ${pkg.path}`)
    await install({cwd: pkg.path})
  }
}
