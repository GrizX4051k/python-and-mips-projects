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
        kind: "pdf"
      }
    }
  },
  mips: {
    type: "folder",
    label: "mips-assembly-project",
    children: {
      "c.asm":      { type: "file", label: "c.asm",      path: "mips-assembly-project/c.asm",      kind: "code" },
      "Icrand.asm": { type: "file", label: "Icrand.asm", path: "mips-assembly-project/Icrand.asm", kind: "code" },
      "mips1.asm":  { type: "file", label: "mips1.asm",  path: "mips-assembly-project/mips1.asm",  kind: "code" }
    }
  },
  python: {
    type: "folder",
    label: "python-projects",
    children: {
      "Airline Managment System": {
        type: "folder",
        label: "Airline Managment System",
        path: "python-projects/Airline Managment System",
        readme: "python-projects/Airline Managment System/README.md",
        main: "python-projects/Airline Managment System/main.py"
      },
      "Arithmetic calculator": {
        type: "folder",
        label: "Arithmetic calculator",
        path: "python-projects/Arithmetic calculator",
        readme: "python-projects/Arithmetic calculator/README.md",
        main: "python-projects/Arithmetic calculator/main.py"
      },
      "Budget Calculator": {
        type: "folder",
        label: "Budget Calculator",
        path: "python-projects/Budget Calculator",
        readme: "python-projects/Budget Calculator/README.md",
        main: "python-projects/Budget Calculator/main.py"
      },
      "College Project": {
        type: "folder",
        label: "College Project",
        path: "python-projects/College Project",
        readme: "python-projects/College Project/README.md"
        // we treat its internal subfolders as a separate view if you want later
      },
      "Polygon Area Calculator": {
        type: "folder",
        label: "Polygon Area Calculator",
        path: "python-projects/Polygon Area Calculator",
        readme: "python-projects/Polygon Area Calculator/README.md",
        main: "python-projects/Polygon Area Calculator/main.py"
      },
      "Probability Calculator": {
        type: "folder",
        label: "Probability Calculator",
        path: "python-projects/Probability Calculator",
        readme: "python-projects/Probability Calculator/README.md",
        main: "python-projects/Probability Calculator/main.py"
      },
      "Time calculator": {
        type: "folder",
        label: "Time calculator",
        path: "python-projects/Time calculator",
        readme: "python-projects/Time calculator/README.md",
        main: "python-projects/Time calculator/main.py"
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
        </li>`;
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
  const node = repoTree[rootKey].children[name];
  if (!node) return;

  if (rootKey === "docs" && node.kind === "pdf") {
    showPdf(node);
  } else if (rootKey === "mips") {
    showCodeFile(node, "mips");
  } else if (rootKey === "python") {
    showPythonFolder(node);
  }
});

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

  const readmeText = readmePath ? await fetchText(readmePath) : "No README.md for this folder yet.";
  const codeText = mainPath ? await fetchText(mainPath) : "# No main.py configured for this folder.";

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
  document.querySelectorAll("#rootTabs .nav-link").forEach(btn => {
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

document.querySelectorAll("#rootTabs .nav-link").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#rootTabs .nav-link").forEach(b => b.classList.remove("active"));
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
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// --------- Init ----------

renderTree(currentRoot);
showHome();
