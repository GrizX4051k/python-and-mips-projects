// --------- Repo tree (top-level folders + College children) ----------

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

      // College Project root – children live one level below
      "College Project": {
        type: "folder",
        label: "College Project",
        path: "python-projects/College Project",
        readme: "python-projects/College Project/README.md",

        children: {
          "01-cafewall": {
            type: "folder",
            label: "01-cafewall",
            path: "python-projects/College Project/01-cafewall",
          },
          "02-cipher-rotation": {
            type: "folder",
            label: "02-cipher-rotation",
            path: "python-projects/College Project/02-cipher-rotation",
          },
          "03-classes": {
            type: "folder",
            label: "03-classes",
            path: "python-projects/College Project/03-classes",
          },
          "04-complete-loop": {
            type: "folder",
            label: "04-complete-loop",
            path: "python-projects/College Project/04-complete-loop",
          },
          "05-days-in-month": {
            type: "folder",
            label: "05-days-in-month",
            path: "python-projects/College Project/05-days-in-month",
          },
          "06-error-demo": {
            type: "folder",
            label: "06-error-demo",
            path: "python-projects/College Project/06-error-demo",
          },
          "07-gradescope-1": {
            type: "folder",
            label: "07-gradescope-1",
            path: "python-projects/College Project/07-gradescope-1",
          },
          "08-greet-world": {
            type: "folder",
            label: "08-greet-world",
            path: "python-projects/College Project/08-greet-world",
          },
          "09-if-else-examples": {
            type: "folder",
            label: "09-if-else-examples",
            path: "python-projects/College Project/09-if-else-examples",
          },
          "10-input-color": {
            type: "folder",
            label: "10-input-color",
            path: "python-projects/College Project/10-input-color",
          },
          "11-input-even-odd": {
            type: "folder",
            label: "11-input-even-odd",
            path: "python-projects/College Project/11-input-even-odd",
          },
          "12-is-vowel": {
            type: "folder",
            label: "12-is-vowel",
            path: "python-projects/College Project/12-is-vowel",
          },
          "13-number-square": {
            type: "folder",
            label: "13-number-square",
            path: "python-projects/College Project/13-number-square",
          },
          "14-piglet-game": {
            type: "folder",
            label: "14-piglet-game",
            path: "python-projects/College Project/14-piglet-game",
          },
          "15-quadratic-equation": {
            type: "folder",
            label: "15-quadratic-equation",
            path: "python-projects/College Project/15-quadratic-equation",
          },
          "16-quiz-4": {
            type: "folder",
            label: "16-quiz-4",
            path: "python-projects/College Project/16-quiz-4",
          },
          "17-return-example": {
            type: "folder",
            label: "17-return-example",
            path: "python-projects/College Project/17-return-example",
          },
          "18-rotation": {
            type: "folder",
            label: "18-rotation",
            path: "python-projects/College Project/18-rotation",
          },
          "19-zune-bug": {
            type: "folder",
            label: "19-zune-bug",
            path: "python-projects/College Project/19-zune-bug",
          },

          "02-cafewall-illusion": {
            type: "folder",
            label: "02-cafewall-illusion",
            path: "python-projects/College Project/02-cafewall-illusion",
          },
          "03-dna-analyzer": {
            type: "folder",
            label: "03-dna-analyzer",
            path: "python-projects/College Project/03-dna-analyzer",
          },
          "04-file-input-output": {
            type: "folder",
            label: "04-file-input-output",
            path: "python-projects/College Project/04-file-input-output",
          },
          "05-gerrymandering": {
            type: "folder",
            label: "05-gerrymandering",
            path: "python-projects/College Project/05-gerrymandering",
          },
          "06-guessing-game": {
            type: "folder",
            label: "06-guessing-game",
            path: "python-projects/College Project/06-guessing-game",
          },
          "07-saguro-tree": {
            type: "folder",
            label: "07-saguro-tree",
            path: "python-projects/College Project/07-saguro-tree",
          },
          "08-etch-a-sketch": {
            type: "folder",
            label: "08-etch-a-sketch",
            path: "python-projects/College Project/08-etch-a-sketch",
          },
          "09-gradanator": {
            type: "folder",
            label: "09-gradanator",
            path: "python-projects/College Project/09-gradanator",
          },
          "10-recommender": {
            type: "folder",
            label: "10-recommender",
            path: "python-projects/College Project/10-recommender",
          },
        },
      },
    },
  },
};

// --------- DOM + simple helpers ----------

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

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
            <div id="home-readme" class="readme-markdown"></div>
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
              src="https://github-readme-stats-five-delta-54.vercel.app/api/top-langs/?username=GrizX4051k&layout=compact&langs_count=10&theme=radical&cache_seconds=60"
              alt="Top languages" />
            <img class="img-fluid"
              src="https://github-readme-stats-five-delta-54.vercel.app/api/pin/?username=GrizX4051k&repo=GrizX4051k&theme=radical&show_owner=true&&cache_seconds=60"
              alt="python-and-mips-projects repo card" />
          </div>
        </div>
      </div>
    </div>
  `;

  setContent(html);

  const homeReadme = document.getElementById("home-readme");
  if (homeReadme) {
    homeReadme.innerHTML = marked.parse(readmeText);
  }
}


// --------- GitHub contents API (CORS-safe) ----------
//
// Uses raw.githubusercontent.com + ?plain=1 to get JSON listing for a folder.
// Example API path: python-projects/Arithmetic calculator
//
async function fetchGithubContents(path) {
  // GitHub raw JSON endpoint for contents listing:
  // https://raw.githubusercontent.com/USER/REPO/BRANCH/path?token=...  — but
  // the official API is api.github.com/repos/.../contents; that also sends CORS.
  const apiUrl = `https://api.github.com/repos/GrizX4051k/python-and-mips-projects/contents/${encodeURIComponent(
    path,
  )}`;
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Contents API failed");
  }
  const json = await res.json();
  // json is an array of objects {name, path, type: 'file'|'dir', download_url, ...}
  return json;
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

    // For College Project root, show its children one level deep
    if (rootKey === "python" && root.children["College Project"]?.children) {
      const college = root.children["College Project"];
      html += `<li class="mt-1 ms-1 small text-muted">College Project</li>`;
      html += `<ul class="list-unstyled ms-3">`;
      for (const [cName] of Object.entries(college.children)) {
        html += `
          <li>
            <div class="tree-node" data-root="college" data-name="${cName}">
              <span class="icon">📁</span>${cName}
            </div>
          </li>
        `;
      }
      html += `</ul>`;
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

  if (rootKey === "college") {
    const collegeRoot = repoTree.python.children["College Project"];
    const node = collegeRoot.children[name];
    if (node) showPythonProjectFolder(node);
    return;
  }
});

// --------- Python project 4‑pane view (any folder) ----------

async function showPythonProjectFolder(folderNode) {
  const folderPath = folderNode.path;
  const githubTreeUrl = `https://github.com/GrizX4051k/python-and-mips-projects/tree/main/${encodeURIComponent(
    folderPath,
  )}`;

  let entries;
  try {
    entries = await fetchGithubContents(folderPath);
  } catch (e) {
    setContent(
      `<div class="alert alert-danger">Could not load folder listing for ${folderNode.label}.</div>`,
    );
    return;
  }

  const files = [];
  for (const entry of entries) {
    if (entry.type !== "file") continue;
    const downloadUrl = entry.download_url;
    let text = "";
    let isBinary = false;

    try {
      const res = await fetch(downloadUrl);
      if (!res.ok) {
        text = `Could not load ${entry.name}`;
      } else {
        const contentType = res.headers.get("content-type") || "";
        if (
          contentType.startsWith("text/") ||
          contentType.includes("json") ||
          contentType.includes("xml")
        ) {
          text = await res.text();
        } else {
          isBinary = true;
          text = `[binary file: ${contentType || "unknown"}]\n\nOpen directly on GitHub:\n${downloadUrl}`;
        }
      }
    } catch {
      text = `Could not load ${entry.name}`;
    }

    files.push({
      name: entry.name,
      path: entry.path,
      text,
      isBinary,
      htmlUrl: entry.html_url || githubTreeUrl,
      downloadUrl,
    });
  }

  const readme =
    files.find((f) => f.name.toLowerCase() === "readme.md") ||
    files.find((f) => f.name.toLowerCase().startsWith("readme"));
    

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
        const isDir = e.type === "dir";
        const icon = isDir ? "bi-folder" : "bi-file-earmark-code";
        const meta = isDir ? "folder" : "file";
        return `
                  <li class="list-group-item file-item ${isDir ? "disabled" : ""
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
                <div style="font-size:0.85rem;" id="readme-render"></div>
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
                  id="onecompiler-frame"
                  frameborder="0"
                  height="260px"
                  src="https://onecompiler.com/embed/python?theme=dark&codeChangeEvent=true"
                  width="100%"
                  style="border:1px solid rgba(148,163,184,0.4);border-radius:0.75rem;"
                ></iframe>

                <small class="text-muted d-block mt-2" style="font-size:0.8rem;">
                  Copy or send the current file into the editor above and run it.
                </small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  setContent(html);
  const readmeContainer = document.getElementById("readme-render");
  if (readmeContainer) {
    if (readme) {
      readmeContainer.innerHTML = marked.parse(readme.text);
    } else {
      readmeContainer.textContent = "No README.md found for this folder.";
    }
  }

  const codeView = document.getElementById("code-view");
  const currentLabel = document.getElementById("current-file-label");
  let currentFile = defaultFile;

  if (currentFile) {
    codeView.textContent = currentFile.text;
  }

  document.querySelectorAll(".file-item").forEach((li) => {
    if (li.classList.contains("disabled")) return;
    li.addEventListener("click", () => {
      document
        .querySelectorAll(".file-item")
        .forEach((x) => x.classList.remove("active"));
      li.classList.add("active");
      const fname = li.dataset.fname;
      const f = files.find((x) => x.name === fname);
      if (!f) return;
      currentFile = f;
      currentLabel.textContent = f.name;
      codeView.textContent = f.text;
    });
  });

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (!currentFile) return;
    const original = files.find((x) => x.name === currentFile.name);
    if (!original) return;
    codeView.textContent = original.text;
  });

  document.getElementById("btn-copy").addEventListener("click", async () => {
    if (!currentFile) return;
    try {
      await navigator.clipboard.writeText(codeView.textContent);
      alert("Code copied to clipboard.");
    } catch {
      alert("Could not copy to clipboard.");
    }
  });

document.getElementById("btn-send").addEventListener("click", async () => {
  const frame = document.getElementById("onecompiler-frame");
  const codeView = document.getElementById("code-view");
  if (!frame || !frame.contentWindow || !codeView) return;

  const code = codeView.textContent || "";
    

    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // ignore clipboard failure; postMessage still worked
    }

    alert(
      "Sent to editor. If you don't see it, click inside the editor iframe.",
    );
  });
}

// --------- Docs / MIPS views ----------

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

// --------- Search ----------

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResultsBox = document.getElementById("search-results");
const searchList = document.getElementById("search-list");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Live filter the current root’s children + College Project nested
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    // restore current root view
    renderTree(currentRoot);
    return;
  }
  renderSearchTree(q);
});

function renderSearchTree(query) {
  const matchName = (name) => name.toLowerCase().includes(query);
  let html = `<div class="fw-semibold mb-2">Search results</div><ul class="list-unstyled">`;

  const addSection = (title) => {
    html += `<li class="mt-1 mb-1 small text-muted">${title}</li>`;
  };

  let any = false;

  // docs
  const docMatches = Object.entries(repoTree.docs.children).filter(([name]) =>
    matchName(name),
  );
  if (docMatches.length) {
    any = true;
    addSection("docs");
    docMatches.forEach(([name]) => {
      html += `
        <li>
          <div class="tree-node" data-root="docs" data-name="${name}">
            <span class="icon">📄</span>${name}
          </div>
        </li>
      `;
    });
  }

  // mips
  const mipsMatches = Object.entries(repoTree.mips.children).filter(([name]) =>
    matchName(name),
  );
  if (mipsMatches.length) {
    any = true;
    addSection("mips");
    mipsMatches.forEach(([name]) => {
      html += `
        <li>
          <div class="tree-node" data-root="mips" data-name="${name}">
            <span class="icon">📁</span>${name}
          </div>
        </li>
      `;
    });
  }

  // python top-level
  const pyMatches = Object.entries(repoTree.python.children).filter(
    ([name]) => name !== "College Project" && matchName(name),
  );
  if (pyMatches.length) {
    any = true;
    addSection("python");
    pyMatches.forEach(([name]) => {
      html += `
        <li>
          <div class="tree-node" data-root="python" data-name="${name}">
            <span class="icon">📁</span>${name}
          </div>
        </li>
      `;
    });
  }

  // College children
  const college = repoTree.python.children["College Project"];
  if (college && college.children) {
    const collegeMatches = Object.entries(college.children).filter(([name]) =>
      matchName(name),
    );
    if (collegeMatches.length) {
      any = true;
      addSection("python / College Project");
      collegeMatches.forEach(([name]) => {
        html += `
          <li>
            <div class="tree-node" data-root="college" data-name="${name}">
              <span class="icon">📁</span>${name}
            </div>
          </li>
        `;
      });
    }
  }

  if (!any) {
    html += `<li class="mt-2 small text-muted">No result found</li>`;
  }

  html += `</ul>`;
  treeContainer.innerHTML = html;

  const matches = [];

  for (const [name] of Object.entries(repoTree.docs.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "docs", name, label: `docs / ${name}` });
    }
  }
  for (const [name] of Object.entries(repoTree.mips.children)) {
    if (name.toLowerCase().includes(q)) {
      matches.push({ root: "mips", name, label: `mips / ${name}` });
    }
  }
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
}

searchList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const root = li.dataset.root;
  const name = li.dataset.name;

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

// --------- Init ----------

renderTree(currentRoot);
showHome();
