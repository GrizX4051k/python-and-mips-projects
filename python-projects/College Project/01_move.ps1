# Run in: C:\python-and-mips-projects\python-projects\College Project\01-basic-project-code

$basicRoot = Get-Location

$basicSubfolders = @(
    "cafewall",
    "cipher-rotation",
    "classes",
    "complete-loop",
    "days-in-month",
    "error-demo",
    "gradescope-1",
    "greet-world",
    "if-else-examples",
    "input-color",
    "input-even-odd",
    "is-vowel",
    "number-square",
    "piglet-game",
    "quadratic-equation",
    "quiz-4",
    "return-example",
    "rotation",
    "zune-bug"
)

foreach ($f in $basicSubfolders) {
    New-Item -ItemType Directory -Path (Join-Path $basicRoot $f) -Force | Out-Null
}

if (Test-Path "$basicRoot\cafewall.py")          { Move-Item "$basicRoot\cafewall.py"          (Join-Path $basicRoot "cafewall\main.py") -Force }
if (Test-Path "$basicRoot\ciper rotation.py")    { Move-Item "$basicRoot\ciper rotation.py"    (Join-Path $basicRoot "cipher-rotation\main.py") -Force }
if (Test-Path "$basicRoot\classes.py")           { Move-Item "$basicRoot\classes.py"           (Join-Path $basicRoot "classes\main.py") -Force }
if (Test-Path "$basicRoot\COMPLETE_LOOP.py")     { Move-Item "$basicRoot\COMPLETE_LOOP.py"     (Join-Path $basicRoot "complete-loop\main.py") -Force }
if (Test-Path "$basicRoot\days_in_month.py")     { Move-Item "$basicRoot\days_in_month.py"     (Join-Path $basicRoot "days-in-month\main.py") -Force }
if (Test-Path "$basicRoot\error.py")             { Move-Item "$basicRoot\error.py"             (Join-Path $basicRoot "error-demo\main.py") -Force }
if (Test-Path "$basicRoot\Gradescope 1.py")      { Move-Item "$basicRoot\Gradescope 1.py"      (Join-Path $basicRoot "gradescope-1\main.py") -Force }
if (Test-Path "$basicRoot\greet_world.py")       { Move-Item "$basicRoot\greet_world.py"       (Join-Path $basicRoot "greet-world\main.py") -Force }
if (Test-Path "$basicRoot\if else.py")           { Move-Item "$basicRoot\if else.py"           (Join-Path $basicRoot "if-else-examples\main.py") -Force }
if (Test-Path "$basicRoot\input color.py")       { Move-Item "$basicRoot\input color.py"       (Join-Path $basicRoot "input-color\main.py") -Force }
if (Test-Path "$basicRoot\input_even_odd.py")    { Move-Item "$basicRoot\input_even_odd.py"    (Join-Path $basicRoot "input-even-odd\main.py") -Force }
if (Test-Path "$basicRoot\is_vowel.py")          { Move-Item "$basicRoot\is_vowel.py"          (Join-Path $basicRoot "is-vowel\main.py") -Force }
if (Test-Path "$basicRoot\Number_square.py")     { Move-Item "$basicRoot\Number_square.py"     (Join-Path $basicRoot "number-square\main.py") -Force }
if (Test-Path "$basicRoot\piglet.py")            { Move-Item "$basicRoot\piglet.py"            (Join-Path $basicRoot "piglet-game\main.py") -Force }
if (Test-Path "$basicRoot\quadratic.py")         { Move-Item "$basicRoot\quadratic.py"         (Join-Path $basicRoot "quadratic-equation\main.py") -Force }
if (Test-Path "$basicRoot\quiz 4.py")            { Move-Item "$basicRoot\quiz 4.py"            (Join-Path $basicRoot "quiz-4\main.py") -Force }
if (Test-Path "$basicRoot\return.py")            { Move-Item "$basicRoot\return.py"            (Join-Path $basicRoot "return-example\main.py") -Force }
if (Test-Path "$basicRoot\rotation.py")          { Move-Item "$basicRoot\rotation.py"          (Join-Path $basicRoot "rotation\main.py") -Force }
if (Test-Path "$basicRoot\zune_bug.py")          { Move-Item "$basicRoot\zune_bug.py"          (Join-Path $basicRoot "zune-bug\main.py") -Force }

Write-Host "Folders created and .py files moved." -ForegroundColor Green
