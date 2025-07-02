# npm

[![GitHub](https://img.shields.io/badge/GitHub-npm%2fcli-000000?style=flat&logo=github)](https://github.com/npm/cli)


the package manager for JavaScript

## Configuration mirror

### npm
```
npm config set registry "https://registry.npmmirror.com"
```

### bun
::: code-group

```PowerShell
@"
[install]
registry = "https://registry.npmmirror.com"
"@ | Out-File -FilePath "$HOME/.bunfig.toml" -Encoding utf8
```

```bash
cat <<EOF > ~/.bunfig.toml
[install]
registry = "https://registry.npmmirror.com"
EOF
```

:::

### pnpm
```
pnpm config set registry "https://registry.npmmirror.com"
```

### yarn
#### berry (>=2)
```
yarn config set npmRegistryServer "https://registry.npmmirror.com"
```
#### classic (v1)
```
yarn config set registry "https://registry.npmmirror.com"
```

