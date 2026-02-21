# Run this from:  C:\python-and-mips-projects
Set-Location "C:\python-and-mips-projects"

$root = "C:\python-and-mips-projects\python-projects"

Get-ChildItem -Path $root -Directory | ForEach-Object {
    $projectName = $_.Name
    $readmePath  = Join-Path $_.FullName "README.md"

    # Skip if README.md already exists (remove this if you want to overwrite)
    if (Test-Path $readmePath) {
        Write-Host "README.md already exists in $projectName, skipping."
        return
    }

    $content = @"
# $projectName

This folder contains my **$projectName** Python project.

I created this project to practice Python concepts and improve my problem‑solving skills.

## How to run

1. Open this folder in a terminal.
2. Make sure Python 3 is installed.
3. Run the main script for this project (for example):
   ```bash
   python main.py
"@

    # Write the content to README.md
    Set-Content -Path $readmePath -Value $content -Encoding UTF8
    Write-Host "Created README.md for $projectName"
}