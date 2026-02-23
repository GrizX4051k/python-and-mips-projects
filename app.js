// --------- Repo tree (top-level folders only) ----------

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
        readme: "python-projects/Airline Managment System/README.md",
      },
      "Arithmetic calculator": {
        type: "folder",
        label: "Arithmetic calculator",
        path: "python-projects/Arithmetic calculator",
        readme: "python-projects/Arithmetic calculator/README.md",
      },
      "Budget Calculator": {
        type: "folder",
        label: "Budget Calculator",
        path: "python-projects/Budget Calculator",
        readme: "python-projects/Budget Calculator/README.md",
      },
      "Polygon Area Calculator": {
        type: "folder",
        label: "Polygon Area Calculator",
        path: "python-projects/Polygon Area Calculator",
        readme: "python-projects/Polygon Area Calculator/README.md",
      },
      "Probability Calculator": {
        type: "folder",
        label: "Probability Calculator",
        path: "python-projects/Probability Calculator",
        readme: "python-projects/Probability Calculator/README.md",
      },
      "Time calculator": {
        type: "folder",
        label: "Time calculator",
        path: "python-projects/Time calculator",
        readme: "python-projects/Time calculator/README.md",
      },
      "College Project": {
        type: "folder",
        label: "College Project",
        path: "python-projects/College Project",
        readme: "python-projects/College Project/README.md",
      },
    },
  },
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

// Generic GitHub folder html fetch
async function fetchGithubFolderEntries(path) {
  const githubTreeUrl = `https://github.com/GrizX4051k/python-and-mips-projects/tree/main/${path}`;
  const htmlRes = await fetch(githubTreeUrl);
  if (!htmlRes.ok) {
    throw new Error("Folder listing failed");
  }
  const htmlText = await htmlRes.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");

  const entries = [];

  // 1) New layout: file/folder cards under div[role="grid"]
  const grid = doc.querySelector('div[role="grid"]');
  if (grid) {
    grid.querySelectorAll('a.js-navigation-open').forEach((link) => {
      const name = link.textContent.trim();
      if (!name || name === "..") return;

      const row = link.closest('[role="row"]') || link.closest("div");
      const icon = row ? row.querySelector('svg[aria-label]') : null;
      const aria = icon ? icon.getAttribute("aria-label") || "" : "";
      const isDir = aria.toLowerCase().includes("directory");

      entries.push({ name, isDir });
    });
  }

  // 2) Old layout: table[role="grid"] fallback
  if (entries.length === 0) {
    const rows = doc.querySelectorAll('table[role="grid"] tbody tr');
    rows.forEach((row) => {
      const link = row.querySelector("a.js-navigation-open");
      if (!link) return;
      const name = link.textContent.trim();
      if (!name || name === "..") return;

      const icon = row.querySelector('svg[aria-label]');
      const aria = icon ? icon.getAttribute("aria-label") || "" : "";
      const isDir = aria.toLowerCase().includes("directory");

      entries.push({ name, isDir });
    });
  }

  if (entries.length === 0) {
    throw new Error("No entries parsed");
  }

  return entries;
}


// --------- Home view ----------

async function showHome() {
  const readmeText = await fetchText("README.md");

  const html = `
    <div class="row g-3">
      <div class="col-12 col-xl-7">
        <div class="card code-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>python-and-mips-projects – README.md</span>
          </div>
          <div class="card-body">
            <pre style="white-space:pre-wrap;">${escapeHtml(readmeText)}</pre>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-5">
        <div class="card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>GitHub Activity</span>
          </div>
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
        </li>
      `;
    }
  }

  html += `</ul>`;
  treeContainer.innerHTML = html;
}

// --------- Tree clicks ----------

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
    if (node) showPythonProjectFolder(node);
    return;
  }
});

// --------- Python project 4‑pane view (any folder, any files) ----------

async function showPythonProjectFolder(folderNode) {
  const folderPath = folderNode.path;
  const githubTreeUrl = `https://github.com/GrizX4051k/python-and-mips-projects/tree/main/${folderPath}`;

  let entries;
  try {
    entries = await fetchGithubFolderEntries(folderPath);
  } catch (e) {
    setContent(`<div class="alert alert-danger">Could not load folder listing for ${folderNode.label}.</div>`);
    return;
  }

  // Fetch contents for all non‑directory entries
  const files = [];
  for (const entry of entries) {
    if (entry.isDir) continue;
    const rawUrl = `https://raw.githubusercontent.com/GrizX4051k/python-and-mips-projects/main/${folderPath}/${entry.name}`;
    const res = await fetch(rawUrl);
    if (!res.ok) {
      files.push({ name: entry.name, text: `Could not load ${entry.name}`, isBinary: false });
    } else {
      const text = await res.text();
      files.push({ name: entry.name, text, isBinary: false });
    }
  }

  // Pick defaults
  const readme = files.find((f) => f.name.toLowerCase() === "readme.md");
  // Prefer main.py, else first .py, else first file
  let defaultFile =
    files.find((f) => f.name === "main.py") ||
    files.find((f) => f.name.toLowerCase().endsWith(".py")) ||
    files[0] ||
    null;

  const html = `
    <div class="card mb-3">
      <div class="card-header d-flex justify-content-between align-items-center">
        <div>
          <span class="badge bg-primary-subtle text-primary-emphasis me-2">Python</span>
          <span class="fw-semibold">${folderNode.label}</span>
        </div>
        <a href="${githubTreeUrl}" class="btn btn-sm btn-outline-light" target="_blank">
          <i class="bi bi-github me-1"></i>View on GitHub
        </a>
      </div>
      <div class="card-body">
        <div class="app-grid-2x2">
          <!-- Top-left: file list -->
          <div id="file-list-pane">
            <div class="mb-2 d-flex justify-content-between align-items-center">
              <span class="small text-uppercase text-muted">Files</span>
              <span class="small text-muted">${entries.length} entries</span>
            </div>
            <ul class="list-group app-file-list">
              ${entries
                .map((e) => {
                  const isDir = e.isDir;
                  const icon = isDir ? "bi-folder" : "bi-file-earmark-code";
                  const meta = isDir ? "folder" : "file";
                  return `
                  <li class="list-group-item d-flex justify-content-between align-items-center file-item ${
                    isDir ? "disabled" : ""
                  }" data-fname="${e.name}">
                    <span><i class="bi ${icon} me-1"></i>${e.name}</span>
                    <span class="file-meta">${meta}</span>
                  </li>`;
                })
                .join("")}
            </ul>
          </div>

          <!-- Top-right: code / content viewer -->
          <div id="code-pane">
            <div class="app-code-toolbar mb-2">
              <span class="small text-muted">
                <i class="bi bi-code-slash me-1"></i>
                <span id="current-file-label">${defaultFile ? defaultFile.name : "No file selected"}</span>
              </span>
              <div class="d-flex gap-1">
                <button class="btn btn-sm btn-outline-secondary" id="btn-reset">
                  <i class="bi bi-arrow-counterclockwise me-1"></i>Reset
                </button>
                <button class="btn btn-sm btn-outline-secondary" id="btn-copy">
                  <i class="bi bi-clipboard me-1"></i>Copy
                </button>
                <button class="btn btn-sm btn-outline-secondary" id="btn-send">
                  <i class="bi bi-box-arrow-up-right me-1"></i>Send to editor
                </button>
              </div>
            </div>
            <div class="card code-card h-100">
              <div class="card-body">
                <pre id="code-view" style="white-space:pre;"></pre>
              </div>
            </div>
          </div>

          <!-- Bottom-left: README -->
          <div id="readme-pane">
            <div class="mb-2 d-flex justify-content-between align-items-center">
              <span class="small text-uppercase text-muted">README</span>
              <span class="small text-muted">${readme ? readme.name : "none"}</span>
            </div>
            <div class="card h-100">
              <div class="card-body">
                <pre style="white-space:pre-wrap; font-size:0.85rem;">${
                  readme ? escapeHtml(readme.text) : "No README.md found for this folder."
                }</pre>
              </div>
            </div>
          </div>

          <!-- Bottom-right: Runner -->
          <div id="runner-pane">
            <div class="mb-2 d-flex justify-content-between align-items-center">
              <span class="small text-uppercase text-muted">Run in browser</span>
              <span class="small text-muted">Powered by OneCompiler</span>
            </div>
            <div class="card h-100">
              <div class="card-body">
                <iframe
                  frameborder="0"
                  height="260px"
                  src="https://onecompiler.com/embed/python"
                  width="100%"
                  style="border:1px solid rgba(148,163,184,0.4);"
                ></iframe>
                <small class="text-muted d-block mt-2" style="font-size:0.8rem;">
                  Use <strong>Copy</strong> or <strong>Send to editor</strong> to move the current file into the editor above.
                </small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  setContent(html);

  // Wire up code viewer
  const codeView = document.getElementById("code-view");
  const currentLabel = document.getElementById("current-file-label");
  let currentFile = defaultFile;

  if (currentFile) {
    codeView.textContent = currentFile.text;
  }

  // File list clicks (only files, not dirs)
  document.querySelectorAll(".file-item").forEach((li) => {
    if (li.classList.contains("disabled")) return;
    li.addEventListener("click", () => {
      document.querySelectorAll(".file-item").forEach((x) => x.classList.remove("active"));
      li.classList.add("active");
      const fname = li.dataset.fname;
      const f = files.find((x) => x.name === fname);
      if (!f) return;
      currentFile = f;
      currentLabel.textContent = f.name;
      codeView.textContent = f.text;
    });
  });

  // Reset
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (!currentFile) return;
    const original = files.find((x) => x.name === currentFile.name);
    if (!original) return;
    codeView.textContent = original.text;
  });

  // Copy
  document.getElementById("btn-copy").addEventListener("click", async () => {
    if (!currentFile) return;
    try {
      await navigator.clipboard.writeText(codeView.textContent);
      alert("Code copied to clipboard.");
    } catch {
      alert("Could not copy to clipboard.");
    }
  });

  // Send to editor = copy; user pastes into OneCompiler
  document.getElementById("btn-send").addEventListener("click", async () => {
    if (!currentFile) return;
    try {
      await navigator.clipboard.writeText(codeView.textContent);
      alert("Code copied. Paste it into the editor above.");
    } catch {
      alert("Could not send to editor.");
    }
  });
}

// --------- Views for docs / mips ----------

function showPdf(node) {
  const githubUrl = `https://github.com/GrizX4051k/python-and-mips-projects/blob/main/${node.path}`;
  const rawUrl = `https://raw.githubusercontent.com/GrizX4051k/python-and-mips-projects/main/${node.path}`;

  const html = `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>${node.label}</span>
        <a class="btn btn-sm btn-outline-light" href="${githubUrl}" target="_blank">
          <i class="bi bi-github me-1"></i>GitHub / Download
        </a>
      </div>
      <div class="card-body">
        <iframe src="${rawUrl}"
                style="width:100%;height:500px;border:1px solid rgba(148,163,184,0.4);border-radius:0.75rem;"></iframe>
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

// Legacy simple Python view is no longer used for main roots,
// everything routes to showPythonProjectFolder instead.

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
  for (const [name] of Object.entries(repoTree.docs.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "docs", name, label: `docs / ${name}` });
    }
  }
  // mips
  for (const [name] of Object.entries(repoTree.mips.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "mips", name, label: `mips / ${name}` });
    }
  }
  // python folders
  for (const [name] of Object.entries(repoTree.python.children)) {
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
  if (root === "docs") {
    const node = repoTree.docs.children[name];
    if (node) showPdf(node);
  } else if (root === "mips") {
    const node = repoTree.mips.children[name];
    if (node) showCodeFile(node, "mips");
  } else if (root === "python") {
    const node = repoTree.python.children[name];
    if (node) showPythonProjectFolder(node);
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
