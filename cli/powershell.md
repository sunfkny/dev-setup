# PowerShell

[![GitHub](https://img.shields.io/badge/GitHub-PowerShell%2FPowerShell-000000?style=flat&logo=github)](https://github.com/PowerShell/PowerShell)

## Installation

### Install from Microsoft Store

1. Open Microsoft Store
2. Search for "PowerShell"
3. Select "PowerShell" published by Microsoft
4. Click "Install"

### Install using winget

```powershell
winget install Microsoft.PowerShell
```

### Install manually

1. Visit the [PowerShell releases page](https://github.com/PowerShell/PowerShell/releases)
2. Download the latest stable release for Windows (e.g., PowerShell-7.x.x-win-x64.msi)
3. Run the installer

## PSReadLine Configuration

PSReadLine provides a powerful command-line editing experience in PowerShell. Add these configurations to your PowerShell profile (`$PROFILE`):

```powershell
# Enable history search with arrow keys
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

# Move cursor to end when searching through history
Set-PSReadLineOption -HistorySearchCursorMovesToEnd

# Add Ctrl+D to exit (similar to bash)
Set-PSReadlineKeyHandler -Key ctrl+d -Function ViExit
```

## Utility Functions

Add these useful utility functions to your PowerShell profile:

```powershell
# Edit PowerShell command history in VS Code
function Edit-History { 
    code (Get-PSReadLineOption).HistorySavePath 
}

# Edit PowerShell profile in VS Code
function Edit-Profile { 
    code $PROFILE 
}

# Set proxy environment variable
function Set-Proxy {
    param (
        [string]$proxy
    )
    if ($proxy -match "^\d{4,5}$") {
        $proxy = "http://127.0.0.1:$proxy"
        $env:HTTP_PROXY = $proxy
        $env:HTTPS_PROXY = $proxy
        $env:ALL_PROXY = $proxy
        Write-Host "Proxy is set to $proxy"
    } else {
        $env:HTTP_PROXY = $null
        $env:HTTPS_PROXY = $null
        $env:ALL_PROXY = $null
        Write-Host "Proxy is off"
    }
}
```

## Useful Links

### PwshComplete

[![GitHub](https://img.shields.io/badge/GitHub-artiga033%2FPwshComplete-000000?style=flat&logo=github)](https://github.com/artiga033/PwshComplete)

\<TAB\> completions with PowerShell for many popular cli tools

### posh-git

[![GitHub](https://img.shields.io/badge/GitHub-dahlbyk%2Fposh--git-000000?style=flat&logo=github)](https://github.com/dahlbyk/posh-git)

A PowerShell environment for Git

#### Recommended settings for posh-git
```powershell
$GitPromptSettings.EnablePromptStatus = $false
$GitPromptSettings.EnableFileStatus = $false
```

