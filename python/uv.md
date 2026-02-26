# uv

[![GitHub](https://img.shields.io/badge/GitHub-astral--sh%2Fuv-000000?style=flat&logo=github)](https://github.com/astral-sh/uv)

An extremely fast Python package and project manager, written in Rust.

## Installation

::: code-group

```PowerShell [PowerShell ~vscode-icons:file-type-powershell~]
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

```bash [bash ~vscode-icons:file-type-shell~]
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```PowerShell [PowerShell proxy ~vscode-icons:file-type-powershell~]
$GITHUB_MIRROR = "https://cdn.gh-proxy.org/https://github.com"
$env:UV_INSTALLER_GITHUB_BASE_URL = $GITHUB_MIRROR
powershell -ExecutionPolicy ByPass -c "irm $GITHUB_MIRROR/astral-sh/uv/releases/latest/download/uv-installer.ps1 | iex"
```

```bash [bash proxy ~vscode-icons:file-type-shell~]
export GITHUB_MIRROR="https://cdn.gh-proxy.org/https://github.com"
export UV_INSTALLER_GITHUB_BASE_URL=$GITHUB_MIRROR
curl -LsSf $GITHUB_MIRROR/astral-sh/uv/releases/latest/download/uv-installer.sh | sh
```

:::

::: details Other Github proxy

- <http://gh-proxy.org/https://github.com>
- <http://v6.gh-proxy.org/https://github.com>
- <http://hk.gh-proxy.org/https://github.com>
- <https://github.geekery.cn/https://github.com>
- <https://github.chenc.dev/https://github.com>

:::

## Configuration mirror

::: code-group

```PowerShell [PowerShell ~vscode-icons:file-type-powershell~]
New-Item -ItemType Directory -Path "$env:APPDATA\uv" -Force
@"
python-install-mirror = "https://registry.npmmirror.com/-/binary/python-build-standalone"
[[index]]
url = "https://mirrors.aliyun.com/pypi/simple"
default = true
"@ | Out-File -FilePath "$env:APPDATA\uv\uv.toml" -Encoding utf8
```

```bash [bash ~vscode-icons:file-type-shell~]
mkdir -p ~/.config/uv
cat <<EOF > ~/.config/uv/uv.toml
python-install-mirror = "https://registry.npmmirror.com/-/binary/python-build-standalone"
[[index]]
url = "https://mirrors.aliyun.com/pypi/simple"
default = true
EOF
```

```powershell [PowerShell env ~vscode-icons:file-type-powershell~]
$GITHUB_MIRROR = "https://cdn.gh-proxy.org/https://github.com"
$env:UV_PYTHON_INSTALL_MIRROR = "$GITHUB_MIRROR/astral-sh/python-build-standalone/releases/download"
$env:UV_DEFAULT_INDEX="https://mirrors.aliyun.com/pypi/simple"
```

```bash [bash env ~vscode-icons:file-type-shell~]
export GITHUB_MIRROR="https://cdn.gh-proxy.org/https://github.com"
export UV_PYTHON_INSTALL_MIRROR="$GITHUB_MIRROR/astral-sh/python-build-standalone/releases/download"
export UV_DEFAULT_INDEX="https://mirrors.aliyun.com/pypi/simple"
```

:::

::: details Other mirrors

- Python install mirror
  - <https://registry.npmmirror.com/-/binary/python-build-standalone>
  - <https://python-standalone.org/mirror/astral-sh/python-build-standalone>

- Default index
  - <https://mirrors.cloud.tencent.com/pypi/simple>
  - <https://pypi.tuna.tsinghua.edu.cn/simple>

:::

## Install python

```sh
uv python install <version>
```

## List python versions

```sh
# List latest patch versions
uv python list
# List all versions
uv python list --all-versions
```
