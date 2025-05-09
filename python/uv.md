# uv

[![GitHub](https://img.shields.io/badge/GitHub-astral--sh%2Fuv-000000?style=flat&logo=github)](https://github.com/astral-sh/uv)

An extremely fast Python package and project manager, written in Rust.

## Configuration mirror
::: code-group

```PowerShell
New-Item -ItemType Directory -Path "$env:APPDATA\uv" -Force
@"
python-install-mirror = "https://registry.npmmirror.com/-/binary/python-build-standalone"
[[index]]
url = "https://mirrors.aliyun.com/pypi/simple"
default = true
"@ | Out-File -FilePath "$env:APPDATA\uv\uv.toml" -Encoding utf8
```

```bash
mkdir -p ~/.config/uv
cat <<EOF > ~/.config/uv/uv.toml
python-install-mirror = "https://registry.npmmirror.com/-/binary/python-build-standalone"
[[index]]
url = "https://mirrors.aliyun.com/pypi/simple"
default = true
EOF
```

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
