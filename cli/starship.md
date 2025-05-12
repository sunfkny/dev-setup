# Starship

[![GitHub](https://img.shields.io/badge/GitHub-starship%2Fstarship-000000?style=flat&logo=github)](https://github.com/starship/starship)

## Installation

### Install using winget

```powershell
winget install --id Starship.Starship
```

## Configuration

### PowerShell Integration

Add the following line to your PowerShell profile (`$PROFILE`):

```powershell
Invoke-Expression (&starship init powershell)
```

### Presets

```powershell
New-Item -ItemType Directory -Path $HOME\.config -Force
starship preset plain-text-symbols -o $HOME\.config\starship.toml
```
