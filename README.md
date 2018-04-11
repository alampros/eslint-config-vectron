# eslint-config-vectron
eslint base config for React projects

# Install Peer Deps

```sh
(
  export PKG=eslint-config-vectron;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

# Usage

Configure eslint to extend this package:

```json
{
  "extends": "eslint-config-vectron",
}
```
