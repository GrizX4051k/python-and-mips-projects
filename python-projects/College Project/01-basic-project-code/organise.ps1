# ============================================
# Organize Basic Project Code + Create READMEs
# Run in: C:\python-and-mips-projects\python-projects\College Project\01-basic-project-code
# ============================================

# Always work from this folder
$basicRoot = Get-Location

# ---------- 1) Create subfolders and move files ----------

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

# Move each .py into its matching subfolder and name main.py
if (Test-Path "$basicRoot\cafewall.py") {
    Move-Item "$basicRoot\cafewall.py" (Join-Path $basicRoot "cafewall\main.py") -Force
}
if (Test-Path "$basicRoot\ciper rotation.py") {
    Move-Item "$basicRoot\ciper rotation.py" (Join-Path $basicRoot "cipher-rotation\main.py") -Force
}
if (Test-Path "$basicRoot\classes.py") {
    Move-Item "$basicRoot\classes.py" (Join-Path $basicRoot "classes\main.py") -Force
}
if (Test-Path "$basicRoot\COMPLETE_LOOP.py") {
    Move-Item "$basicRoot\COMPLETE_LOOP.py" (Join-Path $basicRoot "complete-loop\main.py") -Force
}
if (Test-Path "$basicRoot\days_in_month.py") {
    Move-Item "$basicRoot\days_in_month.py" (Join-Path $basicRoot "days-in-month\main.py") -Force
}
if (Test-Path "$basicRoot\error.py") {
    Move-Item "$basicRoot\error.py" (Join-Path $basicRoot "error-demo\main.py") -Force
}
if (Test-Path "$basicRoot\Gradescope 1.py") {
    Move-Item "$basicRoot\Gradescope 1.py" (Join-Path $basicRoot "gradescope-1\main.py") -Force
}
if (Test-Path "$basicRoot\greet_world.py") {
    Move-Item "$basicRoot\greet_world.py" (Join-Path $basicRoot "greet-world\main.py") -Force
}
if (Test-Path "$basicRoot\if else.py") {
    Move-Item "$basicRoot\if else.py" (Join-Path $basicRoot "if-else-examples\main.py") -Force
}
if (Test-Path "$basicRoot\input color.py") {
    Move-Item "$basicRoot\input color.py" (Join-Path $basicRoot "input-color\main.py") -Force
}
if (Test-Path "$basicRoot\input_even_odd.py") {
    Move-Item "$basicRoot\input_even_odd.py" (Join-Path $basicRoot "input-even-odd\main.py") -Force
}
if (Test-Path "$basicRoot\is_vowel.py") {
    Move-Item "$basicRoot\is_vowel.py" (Join-Path $basicRoot "is-vowel\main.py") -Force
}
if (Test-Path "$basicRoot\Number_square.py") {
    Move-Item "$basicRoot\Number_square.py" (Join-Path $basicRoot "number-square\main.py") -Force
}
if (Test-Path "$basicRoot\piglet.py") {
    Move-Item "$basicRoot\piglet.py" (Join-Path $basicRoot "piglet-game\main.py") -Force
}
if (Test-Path "$basicRoot\quadratic.py") {
    Move-Item "$basicRoot\quadratic.py" (Join-Path $basicRoot "quadratic-equation\main.py") -Force
}
if (Test-Path "$basicRoot\quiz 4.py") {
    Move-Item "$basicRoot\quiz 4.py" (Join-Path $basicRoot "quiz-4\main.py") -Force
}
if (Test-Path "$basicRoot\return.py") {
    Move-Item "$basicRoot\return.py" (Join-Path $basicRoot "return-example\main.py") -Force
}
if (Test-Path "$basicRoot\rotation.py") {
    Move-Item "$basicRoot\rotation.py" (Join-Path $basicRoot "rotation\main.py") -Force
}
if (Test-Path "$basicRoot\zune_bug.py") {
    Move-Item "$basicRoot\zune_bug.py" (Join-Path $basicRoot "zune-bug\main.py") -Force
}

# ---------- 2) README for 01-basic-project-code ----------

@'
# 01 – Basic Project Code

This folder contains a collection of **small, focused Python exercises** used as building blocks for larger college projects.

Each subfolder is a standalone mini‑program that practices one concept: conditionals, loops, functions, string/number handling, or simple games.

## Mini‑projects in this folder

| Subfolder           | Focus / concept practiced                     |
|---------------------|-----------------------------------------------|
| `cafewall`          | Drawing a simple visual pattern               |
| `cipher-rotation`   | Rotating characters (basic cipher idea)      |
| `classes`           | Defining and using Python classes             |
| `complete-loop`     | Loop control and iteration                    |
| `days-in-month`     | Conditional logic for days in a month         |
| `error-demo`        | Demonstrating and handling errors             |
| `gradescope-1`      | Small Gradescope practice exercise           |
| `greet-world`       | Very first “greet the world” / I/O exercise  |
| `if-else-examples`  | Basic if/elif/else patterns                   |
| `input-color`       | Taking string input and responding to it      |
| `input-even-odd`    | Checking whether a number is even or odd      |
| `is-vowel`          | Character checks and conditionals             |
| `number-square`     | Simple arithmetic and printing results        |
| `piglet-game`       | A tiny text‑based game                        |
| `quadratic-equation`| Solving a quadratic equation                  |
| `quiz-4`            | Short quiz/problem set                        |
| `return-example`    | Functions that return values                  |
| `rotation`          | Simple rotation logic                         |
| `zune-bug`          | Date/bug simulation style exercise            |

Open any subfolder to see its dedicated README and `main.py`.
'@ | Set-Content -Path (Join-Path $basicRoot "README.md") -Encoding UTF8

# ---------- 3) Helper to write a simple README ----------

function New-SubReadme {
    param(
        [string]$Folder,
        [string]$Title,
        [string]$Body
    )

    $path = Join-Path $basicRoot $Folder
    if (-not (Test-Path $path)) { return }

    $content = @"
# $Title

$Body

## How to run

```bash
cd python-projects/"College Project"/01-basic-project-code/$Folder
python main.py
"@

text
$content | Set-Content -Path (Join-Path $path "README.md") -Encoding UTF8
}

---------- 4) Per‑subfolder READMEs ----------
New-SubReadme "cafewall" "Cafewall" @"
A small Python program that draws a simple visual pattern, inspired by the Café Wall illusion.

What this demonstrates
Using loops to draw repeated shapes or text.

Working with coordinates or simple pattern logic.

Basic thinking about optical illusions in code.
"@

New-SubReadme "cipher-rotation" "Cipher Rotation" @"
A basic rotation cipher exercise: shifting characters by some number of positions.

What this demonstrates
Working with strings and character codes.

Implementing a simple Caesar‑style rotation.

Taking input and printing encrypted/decrypted output.
"@

New-SubReadme "classes" "Classes" @"
A small Python script to practice defining and using classes and objects.

What this demonstrates
Writing a class with attributes and methods.

Creating instances and calling methods.

Understanding basic OOP in Python.
"@

New-SubReadme "complete-loop" "Complete Loop" @"
A simple exercise focused on loops and iteration.

What this demonstrates
Using for or while loops correctly.

Understanding loop start/end conditions.

Printing or accumulating values across iterations.
"@

New-SubReadme "days-in-month" "Days in Month" @"
A program to determine how many days are in a given month (and possibly year).

What this demonstrates
Conditional logic based on month number/name.

Simple calendar rules.

Basic input validation.
"@

New-SubReadme "error-demo" "Error Demo" @"
A small script to show how errors can occur and how to handle them.

What this demonstrates
Seeing common runtime errors.

Possibly using try/except blocks.

Printing clear error messages.
"@

New-SubReadme "gradescope-1" "Gradescope 1" @"
Code written for a Gradescope exercise or auto‑graded assignment.

What this demonstrates
Following strict input/output formats.

Writing concise solutions for autograders.

Practicing problem‑focused coding.
"@

New-SubReadme "greet-world" "Greet World" @"
A very small “greet the world” / intro script.

What this demonstrates
Using print and basic I/O.

First contact with Python syntax.
"@

New-SubReadme "if-else-examples" "If / Else Examples" @"
A collection of small conditionals to practice if, elif, and else.

What this demonstrates
Branching logic.

Comparing values and making decisions.

Structuring readable conditional code.
"@

New-SubReadme "input-color" "Input Color" @"
A script that asks the user for a color and responds based on the input.

What this demonstrates
Reading string input.

Comparing user input to expected values.

Printing different responses based on choices.
"@

New-SubReadme "input-even-odd" "Input Even/Odd" @"
A number checker that tells whether the entered number is even or odd.

What this demonstrates
Integer input.

Modulus operator (%) usage.

Simple conditional branching.
"@

New-SubReadme "is-vowel" "Is Vowel" @"
A small script to check if a character is a vowel.

What this demonstrates
String/character handling.

Basic membership checks.

Simple boolean logic.
"@

New-SubReadme "number-square" "Number Square" @"
A basic arithmetic program that prints the square of a number (or similar).

What this demonstrates
Reading numeric input.

Performing simple arithmetic.

Printing formatted results.
"@

New-SubReadme "piglet-game" "Piglet Game" @"
A tiny text‑based game, likely inspired by the “Pig” dice game.

What this demonstrates
Loops and game turns.

Simple scoring logic.

User interaction through the console.
"@

New-SubReadme "quadratic-equation" "Quadratic Equation" @"
A solver for quadratic equations given coefficients a, b, and c.

What this demonstrates
Using the quadratic formula.

Handling square roots.

Considering special cases (e.g. no real roots).
"@

New-SubReadme "quiz-4" "Quiz 4" @"
Code written for a specific quiz or problem set.

What this demonstrates
Solving small, targeted exercises.

Following instructions from a quiz sheet.

Writing concise, correct solutions.
"@

New-SubReadme "return-example" "Return Example" @"
A tiny script focused on functions that return values.

What this demonstrates
Defining functions with return.

Understanding the difference between printing and returning.

Using return values in further calculations.
"@

New-SubReadme "rotation" "Rotation" @"
A simple rotation logic exercise (e.g. rotating numbers or characters).

What this demonstrates
Index arithmetic or modular operations.

Transforming data based on a rotation amount.
"@

New-SubReadme "zune-bug" "Zune Bug" @"
A program inspired by the famous Zune 2008 date bug (infinite loop on leap year day).

What this demonstrates
Date/time related logic.

How edge cases can break real systems.

Thinking about robust condition checks.
"@

Write-Host "Basic project code organized and READMEs created." -ForegroundColor Green