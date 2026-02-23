// --------- Repo tree (simplified, you can extend) ----------

const repoTree = {
  docs: {
    type: "folder",
    label: "docs",
    children: {
      "robortic-arm.pdf": {
        type: "file",
        label: "robortic-arm.pdf",
        path: "docs/robortic-arm.pdf",
        kind: "pdf",
      },
    },
  },
  mips: {
    type: "folder",
    label: "mips-assembly-project",
    children: {
      "c.asm": {
        type: "file",
        label: "c.asm",
        path: "mips-assembly-project/c.asm",
        kind: "code",
      },
      "Icrand.asm": {
        type: "file",
        label: "Icrand.asm",
        path: "mips-assembly-project/Icrand.asm",
        kind: "code",
      },
      "mips1.asm": {
        type: "file",
        label: "mips1.asm",
        path: "mips-assembly-project/mips1.asm",
        kind: "code",
      },
    },
  },

python: {
    type: "folder",
    label: "python-projects",
    children: {
      "Airline Managment System": {
        type: "folder",
        label: "Airline Managment System",
        path: "python-projects/Airline Managment System",
        readme: "python-projects/Airline Managment System/README.md"
      },
      "Arithmetic calculator": {
        type: "folder",
        label: "Arithmetic calculator",
        path: "python-projects/Arithmetic calculator",
        readme: "python-projects/Arithmetic calculator/README.md"
      },
      "Budget Calculator": {
        type: "folder",
        label: "Budget Calculator",
        path: "python-projects/Budget Calculator",
        readme: "python-projects/Budget Calculator/README.md"
      },
      "Polygon Area Calculator": {
        type: "folder",
        label: "Polygon Area Calculator",
        path: "python-projects/Polygon Area Calculator",
        readme: "python-projects/Polygon Area Calculator/README.md"
      },
      "Probability Calculator": {
        type: "folder",
        label: "Probability Calculator",
        path: "python-projects/Probability Calculator",
        readme: "python-projects/Probability Calculator/README.md"
      },
      "Time calculator": {
        type: "folder",
        label: "Time calculator",
        path: "python-projects/Time calculator",
        readme: "python-projects/Time calculator/README.md"
      },

      // College Project root – children live one level below
      "College Project": {
        type: "folder",
        label: "College Project",
        path: "python-projects/College Project",
        readme: "python-projects/College Project/README.md",

        children: {
          "01-cafewall":           { type: "folder", label: "01-cafewall",          path: "python-projects/College Project/01-cafewall" },
          "02-cipher-rotation":    { type: "folder", label: "02-cipher-rotation",   path: "python-projects/College Project/02-cipher-rotation" },
          "03-classes":            { type: "folder", label: "03-classes",           path: "python-projects/College Project/03-classes" },
          "04-complete-loop":      { type: "folder", label: "04-complete-loop",     path: "python-projects/College Project/04-complete-loop" },
          "05-days-in-month":      { type: "folder", label: "05-days-in-month",     path: "python-projects/College Project/05-days-in-month" },
          "06-error-demo":         { type: "folder", label: "06-error-demo",        path: "python-projects/College Project/06-error-demo" },
          "07-gradescope-1":       { type: "folder", label: "07-gradescope-1",      path: "python-projects/College Project/07-gradescope-1" },
          "08-greet-world":        { type: "folder", label: "08-greet-world",       path: "python-projects/College Project/08-greet-world" },
          "09-if-else-examples":   { type: "folder", label: "09-if-else-examples",  path: "python-projects/College Project/09-if-else-examples" },
          "10-input-color":        { type: "folder", label: "10-input-color",       path: "python-projects/College Project/10-input-color" },
          "11-input-even-odd":     { type: "folder", label: "11-input-even-odd",    path: "python-projects/College Project/11-input-even-odd" },
          "12-is-vowel":           { type: "folder", label: "12-is-vowel",          path: "python-projects/College Project/12-is-vowel" },
          "13-number-square":      { type: "folder", label: "13-number-square",     path: "python-projects/College Project/13-number-square" },
          "14-piglet-game":        { type: "folder", label: "14-piglet-game",       path: "python-projects/College Project/14-piglet-game" },
          "15-quadratic-equation": { type: "folder", label: "15-quadratic-equation",path: "python-projects/College Project/15-quadratic-equation" },
          "16-quiz-4":             { type: "folder", label: "16-quiz-4",            path: "python-projects/College Project/16-quiz-4" },
          "17-return-example":     { type: "folder", label: "17-return-example",    path: "python-projects/College Project/17-return-example" },
          "18-rotation":           { type: "folder", label: "18-rotation",          path: "python-projects/College Project/18-rotation" },
          "19-zune-bug":           { type: "folder", label: "19-zune-bug",          path: "python-projects/College Project/19-zune-bug" },

          "02-cafewall-illusion":  { type: "folder", label: "02-cafewall-illusion", path: "python-projects/College Project/02-cafewall-illusion" },
          "03-dna-analyzer":       { type: "folder", label: "03-dna-analyzer",      path: "python-projects/College Project/03-dna-analyzer" },
          "04-file-input-output":  { type: "folder", label: "04-file-input-output", path: "python-projects/College Project/04-file-input-output" },
          "05-gerrymandering":     { type: "folder", label: "05-gerrymandering",    path: "python-projects/College Project/05-gerrymandering" },
          "06-guessing-game":      { type: "folder", label: "06-guessing-game",     path: "python-projects/College Project/06-guessing-game" },
          "07-saguro-tree":        { type: "folder", label: "07-saguro-tree",       path: "python-projects/College Project/07-saguro-tree" },
          "08-etch-a-sketch":      { type: "folder", label: "08-etch-a-sketch",     path: "python-projects/College Project/08-etch-a-sketch" },
          "09-gradanator":         { type: "folder", label: "09-gradanator",        path: "python-projects/College Project/09-gradanator" },
          "10-recommender":        { type: "folder", label: "10-recommender",       path: "python-projects/College Project/10-recommender" }
        }
      }
    }
  }
};

// --------- Helpers ----------

const contentArea = document.getElementById("content-area");
const treeContainer = document.getElementById("tree-container");
let currentRoot = "docs";

function setContent(html) {
  contentArea.classList.remove("fade-in");
  void contentArea.offsetWidth;
  contentArea.innerHTML = html;
  contentArea.classList.add("fade-in");
}

async function fetchText(path) {
  const url = `https://raw.githubusercontent.com/GrizX4051k/python-and-mips-projects/main/${path}`;
  const res = await fetch(url);
  if (!res.ok) return `Could not load ${path}`;
  return res.text();
}

// --------- Home view ----------

async function showHome() {
  const readmeText = await fetchText("README.md");

  const html = `
    <div class="row g-3">
      <div class="col-12 col-xl-8">
        <div class="card code-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>python-and-mips-projects – README.md</span>
          </div>
          <div class="card-body">
            <pre style="white-space:pre-wrap;">${escapeHtml(readmeText)}</pre>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4">
        <div class="card mb-3">
          <div class="card-header">GitHub Activity</div>
          <div class="card-body text-center">
            <img class="img-fluid mb-2"
              src="https://github-readme-stats-five-delta-54.vercel.app/api?username=GrizX4051k&show_icons=true&theme=radical&include_all_commits=true&count_private=true&hide_rank=false&number_format=long&cache_seconds=60"
              alt="GitHub stats for GrizX4051k" />
            <img class="img-fluid mb-2"
              src="https://github-readme-stats-five-delta-54.vercel.app/api/top-langs/?username=GrizX4051k&layout=compact&langs_count=10&theme=radical&hide=html,css,javascript,typescript&cache_seconds=60"
              alt="Top languages" />
            <img class="img-fluid"
              src="https://github-readme-stats-five-delta-54.vercel.app/api/pin/?username=GrizX4051k&repo=python-and-mips-projects&theme=radical&show_owner=true&cache_seconds=60"
              alt="python-and-mips-projects repo card" />
          </div>
        </div>
      </div>
    </div>
  `;

  setContent(html);
}

// --------- Tree rendering ----------

function renderTree(rootKey) {
  currentRoot = rootKey;
  const root = repoTree[rootKey];
  if (!root) return;

  let html = `<div class="fw-semibold mb-2">${root.label}</div>`;
  html += `<ul class="list-unstyled">`;

  if (root.children) {
    for (const [name, node] of Object.entries(root.children)) {
      const icon = node.type === "folder" ? "📁" : "📄";
      html += `
        <li>
          <div class="tree-node" data-root="${rootKey}" data-name="${name}">
            <span class="icon">${icon}</span>${name}
          </div>
      `;

      // For College Project, show one nested level
      if (rootKey === "python" && name === "College Project" && node.children) {
        html += `<ul class="list-unstyled ms-3">`;
        for (const [childName, childNode] of Object.entries(node.children)) {
          html += `
            <li>
              <div class="tree-node" data-root="college" data-name="${childName}">
                <span class="icon">📁</span>${childName}
              </div>
            </li>
          `;
        }
        html += `</ul>`;
      }

      html += `</li>`;
    }
  }
  html += `</ul>`;
  treeContainer.innerHTML = html;
}


// Handle clicks in tree
treeContainer.addEventListener("click", (e) => {
  const nodeEl = e.target.closest(".tree-node");
  if (!nodeEl) return;

  const rootKey = nodeEl.dataset.root;
  const name = nodeEl.dataset.name;

  if (rootKey === "docs") {
    const node = repoTree.docs.children[name];
    if (node) showPdf(node);
    return;
  }

  if (rootKey === "mips") {
    const node = repoTree.mips.children[name];
    if (node) showCodeFile(node, "mips");
    return;
  }

  if (rootKey === "python") {
    const node = repoTree.python.children[name];
    if (node) showPythonFolder(node);
    return;
  }

  // NEW: folders inside College Project
  if (rootKey === "college") {
    const college = repoTree.python.children["College Project"];
    const node = college.children[name];
    if (node) showCollegeProjectFolder(node);
    return;
  }
});
async function showCollegeProjectFolder(folderNode) {
  const githubTreeUrl = `https://github.com/GrizX4051k/python-and-mips-projects/tree/main/${encodeURIComponent(folderNode.path)}`;

  // 1) For now, assume typical Python college folder:
  //    README.md + main.py + maybe extra .py / .txt.
  //    We'll build the file list manually; you can refine later per folder.
  const possibleFiles = [
    "main.py",
    "README.md",
    "input.txt",
    "output.txt"
  ];

  const files = [];
  for (const fname of possibleFiles) {
    const url = `https://raw.githubusercontent.com/GrizX4051k/python-and-mips-projects/main/${folderNode.path}/${fname}`;
    const res = await fetch(url);
    if (res.ok) {
      const text = await res.text();
      files.push({ name: fname, text });
    }
  }

  const readme = files.find(f => f.name.toLowerCase() === "readme.md");
  const main   = files.find(f => f.name === "main.py") || files[0];

  const html = `
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>${folderNode.label}</span>
            <a href="${githubTreeUrl}" class="btn btn-sm btn-outline-primary" target="_blank">GitHub</a>
          </div>
          <ul class="list-group list-group-flush" id="college-file-list">
            ${files.map(f => `
              <li class="list-group-item file-item" data-fname="${f.name}">
                <code>${f.name}</code>
              </li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="col-md-8">
        <div class="accordion" id="collegeAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingReadme">
              <button class="accordion-button collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseReadme">
                README
              </button>
            </h2>
            <div id="collapseReadme" class="accordion-collapse collapse">
              <div class="accordion-body">
                <pre style="white-space:pre-wrap;">${readme ? escapeHtml(readme.text) : "No README.md found for this folder."}</pre>
              </div>
            </div>
          </div>

          <div class="accordion-item mt-3">
            <h2 class="accordion-header" id="headingCode">
              <button class="accordion-button" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseCode" aria-expanded="true">
                Code Viewer
              </button>
            </h2>
            <div id="collapseCode" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <div class="d-flex justify-content-between mb-2">
                  <span id="current-file-label">${main ? main.name : ""}</span>
                  <div>
                    <button class="btn btn-sm btn-outline-secondary me-1" id="btn-reset">Reset</button>
                    <button class="btn btn-sm btn-outline-secondary" id="btn-copy">Copy</button>
                  </div>
                </div>
                <pre id="college-code-view" class="bg-dark text-light p-2" style="white-space:pre; max-height:420px; overflow:auto;"></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setContent(html);

  // Populate initial code
  const codeView = document.getElementById("college-code-view");
  const currentLabel = document.getElementById("current-file-label");
  let currentFile = main;

  if (currentFile) {
    codeView.textContent = currentFile.text;
  }

  // Click on file names to switch
  document.querySelectorAll(".file-item").forEach(li => {
    li.addEventListener("click", () => {
      const fname = li.dataset.fname;
      const f = files.find(x => x.name === fname);
      if (!f) return;
      currentFile = f;
      currentLabel.textContent = f.name;
      codeView.textContent = f.text;
    });
  });

  // Reset = go back to original contents of current file
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (!currentFile) return;
    codeView.textContent = currentFile.text;
  });

  // Copy = copy current contents to clipboard
  document.getElementById("btn-copy").addEventListener("click", async () => {
    if (!currentFile) return;
    try {
      await navigator.clipboard.writeText(codeView.textContent);
      alert("Code copied to clipboard.");
    } catch {
      alert("Could not copy to clipboard.");
    }
  });
}


// --------- Views for each type ----------

function showPdf(node) {
  const githubUrl = `https://github.com/GrizX4051k/python-and-mips-projects/blob/main/${node.path}`;
  const rawUrl = `https://raw.githubusercontent.com/GrizX4051k/python-and-mips-projects/main/${node.path}`;

  const html = `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>${node.label}</span>
        <a class="btn btn-sm btn-outline-primary" href="${githubUrl}" target="_blank">Open on GitHub / Download</a>
      </div>
      <div class="card-body">
        <iframe src="${rawUrl}"
                style="width:100%;height:500px;border:1px solid #ccc;border-radius:4px;"></iframe>
      </div>
    </div>
  `;
  setContent(html);
}

async function showCodeFile(node, languageLabel) {
  const text = await fetchText(node.path);
  const html = `
    <div class="card code-card">
      <div class="card-header">${node.label} (${languageLabel})</div>
      <div class="card-body">
        <pre style="white-space:pre;">${escapeHtml(text)}</pre>
      </div>
    </div>
  `;
  setContent(html);
}

async function showPythonFolder(folderNode) {
  const readmePath = folderNode.readme;
  const mainPath = folderNode.main;

  const readmeText = readmePath
    ? await fetchText(readmePath)
    : "No README.md for this folder yet.";
  const codeText = mainPath
    ? await fetchText(mainPath)
    : "# No main.py configured for this folder.";

  const html = `
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Folder: ${folderNode.label}</div>
          <ul class="list-group list-group-flush">
            ${mainPath ? `<li class="list-group-item">main file: <code>main.py</code></li>` : ""}
            ${readmePath ? `<li class="list-group-item">README: <code>README.md</code></li>` : ""}
            <li class="list-group-item">
              <a href="https://github.com/GrizX4051k/python-and-mips-projects/tree/main/${encodeURIComponent(folderNode.path)}"
                 class="file-link" target="_blank">View on GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div class="accordion" id="folderAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingReadme">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseReadme" aria-expanded="true">
                README
              </button>
            </h2>
            <div id="collapseReadme" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <pre style="white-space:pre-wrap;">${escapeHtml(readmeText)}</pre>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingCode">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseCode">
                Code &amp; Run
              </button>
            </h2>
            <div id="collapseCode" class="accordion-collapse collapse">
              <div class="accordion-body">
                <div class="row g-2">
                  <div class="col-12 col-lg-6">
                    <div class="card code-card">
                      <div class="card-header">main.py</div>
                      <div class="card-body">
                        <pre id="code-view">${escapeHtml(codeText)}</pre>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <iframe
                      frameborder="0"
                      height="450px"
                      src="https://onecompiler.com/embed/python"
                      width="100%"
                      style="border:1px solid #ccc;border-radius:4px;"
                    ></iframe>
                    <small class="text-muted d-block mt-1">
                      Copy the code from the left into the editor above and run it.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
  setContent(html);
}

// --------- Search ----------

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResultsBox = document.getElementById("search-results");
const searchList = document.getElementById("search-list");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResultsBox.classList.add("d-none");
    return;
  }

  const matches = [];

  // docs
  for (const [name, node] of Object.entries(repoTree.docs.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "docs", name, label: `docs / ${name}` });
    }
  }
  // mips
  for (const [name, node] of Object.entries(repoTree.mips.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "mips", name, label: `mips / ${name}` });
    }
  }
  // python folders
  for (const [name, node] of Object.entries(repoTree.python.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "python", name, label: `python / ${name}` });
    }
  }

  searchList.innerHTML = "";
  for (const m of matches) {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-action";
    li.textContent = m.label;
    li.dataset.root = m.root;
    li.dataset.name = m.name;
    searchList.appendChild(li);
  }
  searchResultsBox.classList.toggle("d-none", matches.length === 0);
});

// click search items
searchList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const root = li.dataset.root;
  const name = li.dataset.name;
  // switch root tab
  document.querySelectorAll("#rootTabs .nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.root === root);
  });
  renderTree(root);
  const node = repoTree[root].children[name];
  if (root === "docs") {
    showPdf(node);
  } else if (root === "mips") {
    showCodeFile(node, "mips");
  } else if (root === "python") {
    showPythonFolder(node);
  }
});

// --------- Root tab switching ----------

document.querySelectorAll("#rootTabs .nav-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#rootTabs .nav-link")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const root = btn.dataset.root;
    renderTree(root);
    // When switching roots, go back to home view for that root? For now keep main home.
  });
});

// --------- Navbar Home ----------

document.getElementById("nav-home").addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

// --------- Utility ----------

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// --------- Init ----------

renderTree(currentRoot);
showHome();
