# fnm

[![GitHub](https://img.shields.io/badge/GitHub-Schniz%2ffnm-000000?style=flat&logo=github)](https://github.com/Schniz/fnm)

🚀 Fast and simple Node.js version manager, built in Rust

## Installation

::: code-group

```PowerShell
winget install Schniz.fnm
```

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

:::

## Shell Setup

::: code-group

```PowerShell
"fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression" | Out-File -FilePath $PROFILE -Append
```

```bash
echo "eval \"\$(fnm env --use-on-cd --shell bash)\"" >> ~/.bashrc
```

:::

## Configuration mirror

::: code-group

```PowerShell
setx FNM_NODE_DIST_MIRROR "https://npmmirror.com/mirrors/node"
```

```bash
cat <<EOF >> ~/.bashrc
export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node
EOF
```

:::

## Install node

```sh
fnm install <version>
```

## List node versions

```sh
# List installed versions
fnm list
# List remote versions
fnm list-remote
```
