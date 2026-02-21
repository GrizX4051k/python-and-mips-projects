# ============================================
# College Project: normalize structure + READMEs
# Run in: C:\python-and-mips-projects\python-projects\College Project
# ============================================

cd "C:\python-and-mips-projects\python-projects\College Project"

# 1) Rename folders into a numbered, kebab-case structure (safe if some already renamed)
Rename-Item "Basic project code" "01-basic-project-code" -ErrorAction SilentlyContinue
Rename-Item "Cafewall illusion"  "02-cafewall-illusion"  -ErrorAction SilentlyContinue
Rename-Item "DNA"                "03-dna-analyzer"       -ErrorAction SilentlyContinue
Rename-Item "File input  output" "04-file-input-output"  -ErrorAction SilentlyContinue
Rename-Item "Gerrymandering"     "05-gerrymandering"     -ErrorAction SilentlyContinue
Rename-Item "Guessing Game"      "06-guessing-game"      -ErrorAction SilentlyContinue
Rename-Item "Saguro tree"        "07-saguro-tree"        -ErrorAction SilentlyContinue
Rename-Item "etchasketch"        "08-etch-a-sketch"      -ErrorAction SilentlyContinue
Rename-Item "gradanator"         "09-gradanator"         -ErrorAction SilentlyContinue
Rename-Item "recommender"        "10-recommender"        -ErrorAction SilentlyContinue

# Ensure all folders exist (in case rename already happened or names slightly differ)
$folders = @(
    "01-basic-project-code",
    "02-cafewall-illusion",
    "03-dna-analyzer",
    "04-file-input-output",
    "05-gerrymandering",
    "06-guessing-game",
    "07-saguro-tree",
    "08-etch-a-sketch",
    "09-gradanator",
    "10-recommender"
)

foreach ($f in $folders) {
    New-Item -ItemType Directory -Path ".\$f" -Force | Out-Null
}

# 2) Root README.md for College Project
@'
# College Project – Python Mini Projects

This folder contains my **College Project** Python work: a collection of small, self‑contained programs based on typical CS assignments (graphics, games, file I/O, algorithms, grading, and basic AI‑style recommendation).

Each subfolder is a standalone mini‑project with its own README and Python files.

## Project map

| Folder                    | Focus                                              |
|---------------------------|----------------------------------------------------|
| `01-basic-project-code`   | Starter / template code for college assignments   |
| `02-cafewall-illusion`    | Visual Café Wall illusion using Python graphics   |
| `03-dna-analyzer`         | Simple DNA string analysis                        |
| `04-file-input-output`    | Reading and writing files in Python               |
| `05-gerrymandering`       | Vote/district analysis (gerrymandering logic)     |
| `06-guessing-game`        | Console number guessing game                      |
| `07-saguro-tree`          | ASCII / graphic Saguaro (cactus) tree drawing     |
| `08-etch-a-sketch`        | Etch‑A‑Sketch style drawing with keyboard input   |
| `09-gradanator`           | Grade/score analyzer (Grade‑anator)               |
| `10-recommender`          | Small recommendation system                       |

(See each folder’s README for more details and run instructions.)

## How to run any project

From the repo root:

```bash
cd python-projects/"College Project"
cd 06-guessing-game
python main.py
'@ | Set-Content -Path ".\README.md" -Encoding UTF8