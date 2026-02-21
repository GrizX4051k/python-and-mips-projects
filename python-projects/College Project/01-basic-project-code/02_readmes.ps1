$basicRoot = Get-Location

# Root README
@"
# 01 – Basic Project Code

This folder contains a collection of small, focused Python exercises used as building blocks for larger college projects.

Each subfolder is a standalone mini-program that practices one concept: conditionals, loops, functions, string/number handling, or simple games.

## Mini-projects in this folder

- cafewall – simple visual pattern
- cipher-rotation – rotation cipher
- classes – basic classes and objects
- complete-loop – loop practice
- days-in-month – days per month logic
- error-demo – error/exception demo
- gradescope-1 – Gradescope exercise
- greet-world – greeting / intro script
- if-else-examples – if/elif/else patterns
- input-color – respond to color input
- input-even-odd – even/odd checker
- is-vowel – vowel checker
- number-square – square of a number
- piglet-game – tiny text game
- quadratic-equation – quadratic solver
- quiz-4 – quiz/problem set
- return-example – functions with return
- rotation – rotation logic
- zune-bug – Zune date bug style exercise
"@ | Set-Content -Path (Join-Path $basicRoot "README.md") -Encoding UTF8

function Write-Readme {
    param(
        [string]$Folder,
        [string]$Title,
        [string]$Body
    )

    $dir = Join-Path $basicRoot $Folder
    if (-not (Test-Path $dir)) { return }

    $text = @"
# $Title

$Body

## How to run

```bash
cd python-projects/"College Project"/01-basic-project-code/$Folder
python main.py
"@

text
$text | Set-Content -Path (Join-Path $dir "README.md") -Encoding UTF8
}

Write-Readme "cafewall" "Cafewall" "A small Python program that draws a simple visual pattern, inspired by the Café Wall illusion."
Write-Readme "cipher-rotation" "Cipher Rotation" "A basic rotation cipher that shifts characters by a fixed amount."
Write-Readme "classes" "Classes" "A small script to practice defining and using Python classes and objects."
Write-Readme "complete-loop" "Complete Loop" "An exercise focused on for/while loops and iteration."
Write-Readme "days-in-month" "Days in Month" "Determines how many days are in a given month (and possibly year)."
Write-Readme "error-demo" "Error Demo" "Shows how errors occur and (optionally) how to handle them."
Write-Readme "gradescope-1" "Gradescope 1" "Code written for a Gradescope or auto-graded exercise."
Write-Readme "greet-world" "Greet World" "A very small intro script that prints a greeting."
Write-Readme "if-else-examples" "If / Else Examples" "A collection of small conditionals to practice if/elif/else."
Write-Readme "input-color" "Input Color" "Asks for a color and responds based on what the user types."
Write-Readme "input-even-odd" "Input Even/Odd" "Checks whether an entered number is even or odd."
Write-Readme "is-vowel" "Is Vowel" "Checks if a given character is a vowel."
Write-Readme "number-square" "Number Square" "Reads a number and prints its square."
Write-Readme "piglet-game" "Piglet Game" "A tiny text-based game, likely inspired by a dice game."
Write-Readme "quadratic-equation" "Quadratic Equation" "Solves quadratic equations given coefficients a, b, and c."
Write-Readme "quiz-4" "Quiz 4" "Code for a small quiz or problem set."
Write-Readme "return-example" "Return Example" "Demonstrates functions that return values instead of just printing."
Write-Readme "rotation" "Rotation" "Implements a simple rotation algorithm on numbers or characters."
Write-Readme "zune-bug" "Zune Bug" "Simulates the famous Zune 2008 date bug / edge-case logic."

Write-Host "READMEs created for basic project code." -ForegroundColor Green