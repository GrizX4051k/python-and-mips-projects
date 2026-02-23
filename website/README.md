# College Project – Python Mini‑Projects

> A semester‑long collection of Python mini‑projects that took me from basic syntax to full, multi‑file applications.

This folder showcases my progression through a complete introductory CS sequence using **Python**.  
It starts with single‑file exercises (conditions, loops, functions) and grows into larger projects that work with **files, data, graphics, and simple algorithms**.

I use this collection to demonstrate how I structure code, write documentation, and iterate toward more realistic programs.

---

## Concept map

```mermaid
mindmap
  root((Python Concepts))
    Syntax
      Variables
      Input / Output
    Control Flow
      If / Else
      Loops
    Functions
      Parameters
      Return Values
    Data
      Files
      Strings
      Lists
      Dictionaries
    Graphics
      Coordinates
      Drawing Logic
    Algorithms
      Similarity Metrics
      Recommendations


## Highlights at a glance

- ✅ 19+ **fundamental exercises** covering conditionals, loops, functions, error‑handling, and simple games.  
- ✅ 9 **larger projects** including graphics (Café Wall illusion, Etch‑A‑Sketch, Saguaro tree), file‑driven analytics (DNA analyzer, gerrymandering, grade calculator), and a small **recommendation system**.  
- ✅ Per‑project folders with a **README + `main.py`**, making each exercise easy to run and understand in isolation.  
- ✅ PowerShell tooling to automatically organise files and generate READMEs (early DevOps / automation practice).

> _This folder is a good place to see how I write beginner‑friendly code first, then layer on structure and documentation as projects grow._

---

## Folder structure

```text
College Project/
├── 01–19  # Small Python basics
│   ├── 01-cafewall/
│   ├── 02-cipher-rotation/
│   ├── 03-classes/
│   ├── 04-complete-loop/
│   ├── 05-days-in-month/
│   ├── 06-error-demo/
│   ├── 07-gradescope-1/
│   ├── 08-greet-world/
│   ├── 09-if-else-examples/
│   ├── 10-input-color/
│   ├── 11-input-even-odd/
│   ├── 12-is-vowel/
│   ├── 13-number-square/
│   ├── 14-piglet-game/
│   ├── 15-quadratic-equation/
│   ├── 16-quiz-4/
│   ├── 17-return-example/
│   ├── 18-rotation/
│   └── 19-zune-bug/
│
├── 02-cafewall-illusion/
├── 03-dna-analyzer/
├── 04-file-input-output/
├── 05-gerrymandering/
├── 06-guessing-game/
├── 07-saguro-tree/
├── 08-etch-a-sketch/
├── 09-gradanator/
└── 10-recommender/

flowchart LR
    A[Basic Syntax<br/>Variables &amp; I/O]
    B[Conditionals<br/>&amp; Loops]
    C[Functions<br/>&amp; Decomposition]
    D[Files &amp; Data<br/>Processing]
    E[Graphics &amp; Interaction]
    F[Algorithms &amp;<br/>Recommendations]

    A --> B --> C --> D --> E --> F


Each leaf folder contains:

main.py – the primary entry point.

README.md – a short explanation of the goal, concepts, and how to run it.

Sometimes extra files (input data, templates, notes, or PDFs) for the larger assignments.

Small Python basics (01–19)
These folders are short, focused exercises that practice one concept at a time:

01-cafewall – draw a simple visual pattern using loops and coordinates.

02-cipher-rotation – basic Caesar‑style rotation cipher using string manipulation.

03-classes – first steps with classes and objects in Python.

04-complete-loop – pure loop practice (for/while, counters, termination conditions).

05-days-in-month – conditional logic for month lengths and simple date rules.

06-error-demo – intentionally triggered runtime errors and basic handling.

07-gradescope-1 – small, auto‑graded exercise with strict I/O requirements.

08-greet-world – “hello world” style I/O and basic user prompts.

09-if-else-examples – if/elif/else patterns and branching logic.

10-input-color – user input, string comparison, and simple branching.

11-input-even-odd – reading integers and using the modulus operator.

12-is-vowel – character checks and boolean expressions.

13-number-square – arithmetic and formatted output.

14-piglet-game – mini text‑based game with loops and scoring.

15-quadratic-equation – quadratic formula, square roots, and edge cases.

16-quiz-4 – short quiz/problem set solutions.

17-return-example – functions that return values vs. just printing.

18-rotation – rotation logic over sequences or strings.

19-zune-bug – simulation of a real‑world date bug (Zune 2008), focusing on edge cases.

For reviewers: these are intentionally small; they show how I approached fundamental control flow and data handling at the start of the course.

Larger projects
These folders group multiple concepts into more realistic programs.

Graphics & interaction
02-cafewall-illusion – implements the Café Wall optical illusion using Python graphics and helper functions, practicing coordinate systems, loops, and modular drawing logic.

07-saguro-tree – draws a Saguaro (cactus) tree using ASCII or simple graphics; focuses on decomposition and parameterised drawing.

08-etch-a-sketch – keyboard‑driven drawing program: move a cursor, draw lines, and clear/reset the canvas.

File‑driven analysis
03-dna-analyzer – reads DNA sequences from text files and computes counts, GC content, and similarity scores between sequences.

04-file-input-output – a collection of file I/O exercises (e.g., reading coin‑flip results or poem files and computing summary statistics).

05-gerrymandering – reads per‑district vote data to detect potential gerrymandering patterns and report outcomes.

09-gradanator – grade calculator: reads scores and weights, then computes final grades and summary stats.

Games & recommendation
06-guessing-game – interactive number guessing game with loops, random numbers, and user feedback.

10-recommender – a small recommendation system using sample ratings data; focuses on basic data structures, similarity metrics, and simple recommendation logic.

pie title Project Breakdown
    "Fundamental Exercises (01–19)" : 19
    "Graphics Projects"             : 3
    "File‑Driven Analysis"          : 4
    "Games & Recommender"           : 3


How to run
From the repository root:

bash
cd python-projects/"College Project"

# Example 1: guessing game
cd 06-guessing-game
python main.py

# Example 2: DNA analyzer
cd ../03-dna-analyzer
python main.py
Each project’s README.md explains its purpose, inputs, and any special run instructions.

Why this folder matters
This collection shows:

Breadth – from fundamentals to data‑driven projects and simple graphics.

Structure – clear, per‑project folders with consistent naming and entry points.

Iteration – you can see my growth from one‑file exercises to multi‑file projects and small automation scripts (PowerShell) that help keep everything organised.

If you’d like to explore this work in a more visual way, I also built a dedicated website for this repository with a file tree, README viewer, and embedded Python runner.
Portfolio site link: TODO: add website URL here once GitHub Pages is live
