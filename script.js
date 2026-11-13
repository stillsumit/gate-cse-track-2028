/**
 * =============================================================================
 * GATE CSE 2028 Preparation Tracker
 * =============================================================================
 */

// 1. Hierarchical Tree Syllabus Structure
const SYLLABUS_TREE = [
  {
    subject: "Digital Logic",
    modules: [
      {
        name: "Boolean Algebra & Minimization",
        subtopics: [
          "Boolean laws, duality & canonical forms (SOP/POS)",
          "Logic Gates: NOT, AND, OR, NAND, NOR, XOR, XNOR",
          "K-Maps (up to 4 variables) & Prime Implicants",
        ],
      },
      {
        name: "Combinational Circuits",
        subtopics: [
          "Adders & Subtractors (Half, Full & Look-ahead carry)",
          "Multiplexers & Demultiplexers",
          "Decoders, Encoders & Priority Encoders",
        ],
      },
      {
        name: "Sequential Circuits & FSM",
        subtopics: [
          "Latches & Flip-Flops (SR, JK, D, T)",
          "Setup & Hold times, clock propagation delays",
          "Synchronous & Asynchronous (Ripple) Counters",
          "Shift Registers & Finite State Machines (Mealy/Moore)",
        ],
      },
    ],
  },
  {
    subject: "Computer Organization & Architecture",
    modules: [
      {
        name: "Instruction Set & CPU Architecture",
        subtopics: [
          "Machine instructions & Addressing modes",
          "Instruction Formats & Opcode expansion",
          "ALU, Data Path & IEEE 754 Floating Point",
          "Hardwired vs Microprogrammed Control Units",
        ],
      },
      {
        name: "Pipelining & Hazards",
        subtopics: [
          "Pipeline Stages, Clock cycles & Throughput",
          "Data Hazards (RAW, WAR, WAW) & Forwarding",
          "Structural & Control Hazards (Branch penalties)",
        ],
      },
      {
        name: "Memory Hierarchy & Storage",
        subtopics: [
          "Cache Mapping (Direct, Associative, Set-Associative)",
          "Cache Performance (Hit/Miss ratio, write-through/back)",
          "Virtual Memory, Page Tables & TLB hit/miss",
          "Disk scheduling algorithms & I/O transfers (DMA)",
        ],
      },
    ],
  },
  {
    subject: "Programming & Data Structures",
    modules: [
      {
        name: "C Programming",
        subtopics: [
          "Operators, Precedence, Scope & Recursion",
          "Pointers, Pointer Arithmetic & Dynamic Allocation",
          "Structures, Unions & Memory Alignment",
        ],
      },
      {
        name: "Linear Data Structures",
        subtopics: [
          "Arrays & Multi-dimensional mapping",
          "Stacks (Infix/Postfix evaluation) & Queues",
          "Linked Lists (Singly, Doubly, Circular)",
        ],
      },
      {
        name: "Non-Linear Data Structures",
        subtopics: [
          "Binary Trees & Tree Traversals",
          "Binary Search Trees (BST) & AVL Rotations",
          "Heaps (Min/Max Heap, Heapify, Heap Sort)",
          "Hashing & Collision Resolution Techniques",
        ],
      },
    ],
  },
  {
    subject: "Algorithms",
    modules: [
      {
        name: "Analysis & Sorting/Searching",
        subtopics: [
          "Asymptotic Notation & Growth of Functions",
          "Recurrence Relations & Master Theorem",
          "Divide & Conquer: Merge Sort, Quick Sort",
        ],
      },
      {
        name: "Design Techniques",
        subtopics: [
          "Greedy: Knapsack, Huffman & MST (Prim/Kruskal)",
          "Dynamic Programming: 0/1 Knapsack, LCS, Matrix Chain",
          "Graph Traversals: BFS, DFS & Topological Sort",
          "Shortest Path: Dijkstra, Bellman-Ford, Floyd-Warshall",
        ],
      },
      {
        name: "Complexity Theory",
        subtopics: ["P, NP, NP-Complete, NP-Hard & Reductions"],
      },
    ],
  },
  {
    subject: "Theory of Computation",
    modules: [
      {
        name: "Regular Languages & Automata",
        subtopics: [
          "DFA/NFA construction & Conversion",
          "Regular Expressions & DFA Minimization",
          "Pumping Lemma & Closure Properties of Regular Languages",
        ],
      },
      {
        name: "Context-Free Languages & Pushdown Automata",
        subtopics: [
          "Context-Free Grammars (Ambiguity, Normal forms)",
          "Pushdown Automata (DPDA vs NPDA)",
          "Pumping Lemma & Closure Properties of CFLs",
        ],
      },
      {
        name: "Turing Machines & Decidability",
        subtopics: [
          "Turing Machine construction & Variants",
          "Decidable, Recursive & Recursively Enumerable Languages",
          "Halting Problem, PCP & Undecidability",
        ],
      },
    ],
  },
  {
    subject: "Compiler Design",
    modules: [
      {
        name: "Lexical & Syntax Analysis",
        subtopics: [
          "Lexical tokens, regular expressions & LEX",
          "First and Follow sets computation",
          "Top-Down: LL(1) parsing & conflict detection",
          "Bottom-Up: Shift-Reduce, LR(0), SLR, CLR, LALR",
        ],
      },
      {
        name: "Translation & Code Generation",
        subtopics: [
          "Syntax Directed Translation (S-attributed & L-attributed)",
          "Intermediate Code (3-address code, Quadruples, DAGs)",
          "Runtime Environments & Basic Block Optimization",
        ],
      },
    ],
  },
  {
    subject: "Operating Systems",
    modules: [
      {
        name: "Processes & CPU Scheduling",
        subtopics: [
          "Process states, PCB & Context switching",
          "CPU Scheduling: FCFS, SJF/SRTF, Round Robin, Priority",
        ],
      },
      {
        name: "Synchronization & Deadlocks",
        subtopics: [
          "Critical Section, Peterson's algorithm & Semaphores",
          "Classic problems: Producer-Consumer, Dining Philosophers",
          "Deadlock Conditions, Prevention, Avoidance (Banker's)",
        ],
      },
      {
        name: "Memory Management & Storage",
        subtopics: [
          "Paging, Address Translation, TLB & Page Tables",
          "Virtual Memory, Demand Paging & Page Replacement (LRU, FIFO)",
          "File Allocation & Disk Scheduling algorithms",
        ],
      },
    ],
  },
  {
    subject: "DBMS",
    modules: [
      {
        name: "Data Modeling & SQL",
        subtopics: [
          "ER Diagrams & Conversion to Relational Schema",
          "Relational Algebra & Tuple Relational Calculus",
          "SQL Queries, Joins, Group By, Subqueries",
        ],
      },
      {
        name: "Database Design & Normalization",
        subtopics: [
          "Functional Dependencies & Attribute Closure",
          "Normal Forms: 1NF, 2NF, 3NF & BCNF",
          "Lossless Decomposition & Dependency Preservation",
        ],
      },
      {
        name: "Transactions & Storage",
        subtopics: [
          "ACID properties & Conflict/View Serializability",
          "Concurrency Control: 2PL & Timestamp Ordering",
          "Indexing, B-Trees & B+ Trees",
        ],
      },
    ],
  },
  {
    subject: "Computer Networks",
    modules: [
      {
        name: "Physical & Data Link Layer",
        subtopics: [
          "OSI vs TCP/IP Architecture & Transmission media",
          "Framing, Bit/Byte Stuffing & CRC Error Detection",
          "Flow Control: Stop-and-Wait, Go-Back-N, Selective Repeat",
          "MAC Protocols: Pure/Slotted ALOHA, CSMA/CD, CSMA/CA",
        ],
      },
      {
        name: "Network & Transport Layer",
        subtopics: [
          "IPv4 Header, Subnetting, CIDR & Supernetting",
          "Routing: Distance Vector, Link State, RIP, OSPF, BGP",
          "UDP Characteristics & TCP 3-Way Handshake",
          "TCP Flow & Congestion Control (Slow start, Congestion avoidance)",
        ],
      },
      {
        name: "Application Layer & Security",
        subtopics: [
          "Protocols: DNS, HTTP/HTTPS, FTP, SMTP",
          "Network Security: RSA, Digital Signatures, Ciphers",
        ],
      },
    ],
  },
  {
    subject: "Engineering Mathematics",
    modules: [
      {
        name: "Linear Algebra",
        subtopics: [
          "Matrices, Rank & Systems of Linear Equations",
          "Eigenvalues, Eigenvectors & Cayley-Hamilton",
        ],
      },
      {
        name: "Calculus & Differential Equations",
        subtopics: [
          "Limits, Continuity, Maxima/Minima, Mean Value Theorems",
          "Definite Integrals & Vector Calculus",
          "First & Higher-order Linear Differential Equations",
        ],
      },
      {
        name: "Probability & Statistics",
        subtopics: [
          "Conditional Probability & Bayes' Theorem",
          "Random Variables (Uniform, Binomial, Poisson, Normal)",
          "Mean, Variance, Covariance & Numerical Methods",
        ],
      },
    ],
  },
  {
    subject: "Discrete Mathematics",
    modules: [
      {
        name: "Mathematical Logic & Set Theory",
        subtopics: [
          "Propositional & First-Order Predicate Logic",
          "Sets, Relations, Equivalence Relations & Partitions",
          "Posets, Hasse Diagrams & Lattices",
          "Groups, Subgroups & Lagrange's Theorem",
        ],
      },
      {
        name: "Combinatorics & Graph Theory",
        subtopics: [
          "Permutations, Combinations & Generating Functions",
          "Recurrence Relations & Solving Techniques",
          "Graphs: Connectivity, Paths, Cycles, Euler & Hamiltonian",
          "Trees, Spanning Trees, Planarity & Graph Coloring",
        ],
      },
    ],
  },
  {
    subject: "General Aptitude",
    modules: [
      {
        name: "Verbal & Analytical",
        subtopics: [
          "English Grammar, Sentence Completion & Reading Comprehension",
          "Syllogisms, Blood Relations, Seating Arrangement & Deduction",
        ],
      },
      {
        name: "Quantitative & Spatial",
        subtopics: [
          "Number Systems, Percentages, Ratios, Time & Work",
          "Speed-Time-Distance, Probability & Geometry",
          "Spatial: Paper Folding, Cutting, Rotation & Mirror Images",
        ],
      },
    ],
  },
];

const SUBJECTS = SYLLABUS_TREE.map((sObj) => [
  sObj.subject,
  sObj.modules.flatMap((m) => m.subtopics),
]);

const SUBJECT_WEIGHTS = {
  "General Aptitude": 15,
  "Engineering Mathematics": 7,
  "Discrete Mathematics": 6,
  "Digital Logic": 5,
  "Computer Organization & Architecture": 8,
  "Programming & Data Structures": 9,
  Algorithms: 8,
  "Theory of Computation": 8,
  "Compiler Design": 5,
  "Operating Systems": 9,
  DBMS: 8,
  "Computer Networks": 8,
};

// 2. Helper Functions & KaTeX Normalizer
const $ = (id) => document.getElementById(id);

function toLocalDateStr(dateObj = new Date()) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const today = () => toLocalDateStr(new Date());

const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const fmt = (n) =>
  Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 1 });
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

// Auto-wraps bare LaTeX expressions in $...$ so KaTeX renders options & text cleanly
function normalizeLatex(str) {
  const s = String(str ?? "").trim();
  if (!s) return "";

  if (/\$|\\[\(\[]/.test(s)) return s;

  const hasLatexCmd =
    /\\(overline|underline|bar|hat|tilde|vec|oplus|otimes|odot|land|lor|neg|lnot|implies|iff|to|rightarrow|leftarrow|leftrightarrow|Rightarrow|Leftarrow|Leftrightarrow|frac|sqrt|sum|prod|int|infty|alpha|beta|gamma|delta|theta|lambda|mu|pi|sigma|omega|Delta|Theta|Lambda|Pi|Sigma|Omega|cdot|times|div|pm|mp|leq|geq|neq|equiv|approx|subset|subseteq|supset|supseteq|cup|cap|in|notin|forall|exists|emptyset|log|ln|sin|cos|tan|lim|bmod|mod)\b/.test(
      s,
    ) || /[_^]\{[^}]+\}/.test(s);

  if (!hasLatexCmd) return s;

  const optMatch = s.match(/^([A-F]\s*[\)\.\:]\s*)(.+)$/i);
  if (optMatch) {
    return `${optMatch[1]}$${optMatch[2].trim()}$`;
  }

  return `$${s}$`;
}

// Accurate NAT answer checker supporting exact numbers, decimals, and "X to Y" ranges
function checkNatAnswer(userStr, keyStr) {
  const uRaw = String(userStr ?? "").trim();
  const kRaw = String(keyStr ?? "").trim();
  if (!uRaw || !kRaw) return false;

  const uNum = Number(uRaw);
  if (!Number.isNaN(uNum)) {
    const rangeMatch = kRaw.match(
      /(-?\d+(?:\.\d+)?)\s*(?:to|\.\.|-|–)\s*(-?\d+(?:\.\d+)?)/i,
    );
    if (rangeMatch) {
      const low = Math.min(Number(rangeMatch[1]), Number(rangeMatch[2]));
      const high = Math.max(Number(rangeMatch[1]), Number(rangeMatch[2]));
      return uNum >= low - 1e-6 && uNum <= high + 1e-6;
    }

    const keyNums = kRaw.match(/-?\d+(?:\.\d+)?/g);
    if (keyNums && keyNums.length > 0) {
      return keyNums.some((kn) => Math.abs(uNum - Number(kn)) <= 0.01);
    }
  }

  return uRaw.toLowerCase() === kRaw.toLowerCase();
}

function calcGateScore(q) {
  if (!q.solved) return 0;
  const marks = Number(q.marks) || 1;
  const type = (q.type || "MCQ").toUpperCase();
  if (q.isCorrect) return marks;
  if (type === "MCQ") return -(marks / 3);
  return 0; // MSQ and NAT have zero negative marking
}

// 3. State & Storage Management
const STORAGE_KEY = "gate-cse-2028-v1";
let data = loadData();
let activeSubject = 0;
let syllabusFilter = "all";
let syllabusQuery = "";
let currentRevisionKey = null;

function blankData() {
  const topics = {};
  SYLLABUS_TREE.forEach((sObj) => {
    sObj.modules.forEach((mObj) => {
      mObj.subtopics.forEach((sub) => {
        topics[`${sObj.subject}|${sub}`] = {
          status: "Not started",
          r1: false,
          r2: false,
          r3: false,
          next: "",
        };
      });
    });
  });
  return {
    topics,
    sessions: [],
    practice: [],
    tests: [],
    tasks: [],
    pyqBank: [],
  };
}

function normalizeData(raw) {
  if (!raw || typeof raw !== "object" || !raw.topics) return blankData();
  if (!Array.isArray(raw.pyqBank)) raw.pyqBank = [];
  if (!Array.isArray(raw.sessions)) raw.sessions = [];
  if (!Array.isArray(raw.practice)) raw.practice = [];
  if (!Array.isArray(raw.tests)) raw.tests = [];
  if (!Array.isArray(raw.tasks)) raw.tasks = [];

  SYLLABUS_TREE.forEach((sObj) => {
    sObj.modules.forEach((mObj) => {
      mObj.subtopics.forEach((sub) => {
        const k = `${sObj.subject}|${sub}`;
        if (!raw.topics[k]) {
          raw.topics[k] = {
            status: "Not started",
            r1: false,
            r2: false,
            r3: false,
            next: "",
          };
        }
      });
    });
  });

  raw.pyqBank.forEach((q) => {
    if (Array.isArray(q.options)) {
      q.options = q.options.map((opt) => normalizeLatex(opt));
    }
    if (Array.isArray(q.options) && q.options.length > 0) {
      const letters = Array.from(
        new Set(
          String(q.correctAnswer || "")
            .toUpperCase()
            .match(/[A-D]/g) || [],
        ),
      ).sort();
      if (letters.length > 1) {
        q.type = "MSQ";
        q.correctAnswer = letters.join(", ");
      }
    }
  });

  return raw;
}

function loadData() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (raw && raw.topics) {
      return normalizeData(raw);
    }
  } catch (err) {
    console.error("Storage parse error, resetting state:", err);
  }
  return blankData();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}

const allTopics = () => {
  const result = [];
  SYLLABUS_TREE.forEach((sObj) => {
    sObj.modules.forEach((mObj) => {
      mObj.subtopics.forEach((sub) => {
        const key = `${sObj.subject}|${sub}`;
        if (!data.topics[key]) {
          data.topics[key] = {
            status: "Not started",
            r1: false,
            r2: false,
            r3: false,
            next: "",
          };
        }
        result.push({
          s: sObj.subject,
          m: mObj.name,
          t: sub,
          k: key,
          v: data.topics[key],
        });
      });
    });
  });
  return result;
};

function toast(msg) {
  const el = $("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function renderMathIn(el) {
  if (window.renderMathInElement && el) {
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    } catch (e) {
      console.warn("KaTeX render error:", e);
    }
  }
}

function setDefaults() {
  document.querySelectorAll("input[type=date]").forEach((x) => {
    if (!x.value) x.value = today();
  });
  document.querySelectorAll('select[name="subject"]').forEach((sel) => {
    sel.innerHTML = SYLLABUS_TREE.map(
      (s) => `<option value="${esc(s.subject)}">${esc(s.subject)}</option>`,
    ).join("");
  });
}

function updateCountdown() {
  const targetDate = new Date("2028-02-06T09:30:00+05:30");
  const diffTime = targetDate - new Date();

  if (diffTime > 0) {
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    $("countdownDays").textContent = `${days} Days Left`;
    $("countdownHeadline").textContent =
      `Target Exam: February 2028 (${days} days to go)`;
  } else {
    $("countdownDays").textContent = "Exam Season!";
  }
}

const SECONDARY_VIEWS = ["practice", "tests", "planner", "analytics", "byok"];

function navigate(view) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  $("view-" + view).classList.add("active");

  document
    .querySelectorAll("#nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));

  document
    .querySelectorAll("#mobileDock button[data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  document
    .querySelectorAll("#mobileMoreSheet button[data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));

  const moreBtn = $("mobileMoreBtn");
  if (moreBtn) {
    moreBtn.classList.toggle("active", SECONDARY_VIEWS.includes(view));
  }

  $("pageTitle").textContent =
    {
      dashboard: "Overview",
      syllabus: "Syllabus",
      study: "Study log",
      practice: "Practice & PYQs",
      pyqbank: "AI PYQ Bank",
      tests: "Mock tests",
      planner: "Planner & backlog",
      analytics: "Analytics",
      byok: "AI Setup (BYOK)",
    }[view] || "Overview";

  if (view === "pyqbank") {
    renderPyqBank();
  }
  if (view === "byok") {
    syncByokView();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mobile Dock & Sheet Listeners
const mobileDock = $("mobileDock");
const mobileMoreBtn = $("mobileMoreBtn");
const mobileMoreSheet = $("mobileMoreSheet");

if (mobileDock) {
  mobileDock.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-view]");
    if (btn) {
      mobileMoreSheet?.classList.remove("open");
      navigate(btn.dataset.view);
    }
  });
}

if (mobileMoreBtn && mobileMoreSheet) {
  mobileMoreBtn.addEventListener("click", () => {
    mobileMoreSheet.classList.toggle("open");
  });

  mobileMoreSheet.addEventListener("click", (e) => {
    if (e.target === mobileMoreSheet) {
      mobileMoreSheet.classList.remove("open");
      return;
    }
    const btn = e.target.closest("button[data-view]");
    if (btn) {
      mobileMoreSheet.classList.remove("open");
      navigate(btn.dataset.view);
    }
  });
}

// 4. Main Render Pipeline
function render() {
  const topics = allTopics();
  const done = topics.filter((x) => x.v.status === "Completed").length;
  const progress = topics.filter((x) => x.v.status === "In progress").length;
  const totalHours = data.sessions.reduce((a, x) => a + +x.hours, 0);
  const attempt = data.practice.reduce((a, x) => a + +x.attempted, 0);
  const correct = data.practice.reduce((a, x) => a + +x.correct, 0);
  const pyq = data.practice
    .filter((x) => x.type === "GATE PYQ")
    .reduce((a, x) => a + +x.attempted, 0);
  const tests = data.tests.length;
  const best = tests ? Math.max(...data.tests.map((x) => +x.marks)) : null;

  let weightedMarks = 0;
  SUBJECTS.forEach(([s, ts]) => {
    const weight = SUBJECT_WEIGHTS[s] || 0;
    const completedInSubject = ts.filter(
      (t) => data.topics[`${s}|${t}`]?.status === "Completed",
    ).length;
    if (ts.length > 0) {
      weightedMarks += (completedInSubject / ts.length) * weight;
    }
  });

  $("statCompletion").textContent = `${pct(done, topics.length)}%`;
  $("statTopics").textContent = `${done} of ${topics.length} topics completed`;
  $("statMarksReadiness").textContent = `${weightedMarks.toFixed(1)} / 100`;
  $("statWeightageFoot").textContent =
    `${pct(weightedMarks, 100)}% weightage readiness`;
  $("statHours").textContent = `${fmt(totalHours)}h`;
  $("statQuestions").textContent = fmt(attempt);
  $("statAccuracy").textContent = attempt
    ? `${pct(correct, attempt)}% overall accuracy`
    : "Accuracy not tracked yet";

  updateCountdown();

  $("dashSubjects").innerHTML = SUBJECTS.map(([s, ts]) => {
    const d = ts.filter(
      (t) => data.topics[`${s}|${t}`]?.status === "Completed",
    ).length;
    return `
      <div class="subject-line">
        <div>
          <strong>${esc(s)}</strong> <span class="muted text-xs">(~${SUBJECT_WEIGHTS[s] || 0}M)</span>
          <div class="progress"><i style="width:${pct(d, ts.length)}%"></i></div>
          <small>${d}/${ts.length} topics completed</small>
        </div>
        <div class="pct">${pct(d, ts.length)}%</div>
      </div>
    `;
  }).join("");

  $("syllabusSummary").textContent =
    `${done} of ${topics.length} topics completed`;
  $("syllabusPct").textContent = `${pct(done, topics.length)}%`;
  $("syllabusBar").style.width = `${pct(done, topics.length)}%`;

  renderSubjects();
  renderSessions();
  renderPractice();
  renderTests();
  renderTasks();
  renderCharts();
  renderRevisions();
  renderPyqBank();

  $("practiceAttempted").textContent = attempt;
  $("practiceCorrect").textContent = correct;
  $("practiceAccuracy").textContent = attempt
    ? `${pct(correct, attempt)}%`
    : "—";
  $("practicePyq").textContent = pyq;

  $("testCount").textContent = tests;
  $("testAverage").textContent = tests
    ? fmt(data.tests.reduce((a, x) => a + +x.marks, 0) / tests)
    : "—";
  $("testBest").textContent = best === null ? "—" : fmt(best);
  const accs = data.tests.filter(
    (x) => x.accuracy !== "" && x.accuracy != null,
  );
  $("testAccuracy").textContent = accs.length
    ? `${fmt(accs.reduce((a, x) => a + +x.accuracy, 0) / accs.length)}%`
    : "—";

  $("anaHours").textContent = fmt(totalHours);
  const days = new Set(data.sessions.map((x) => x.date));
  $("anaDaily").textContent = days.size ? fmt(totalHours / days.size) : "0";
  $("anaAccuracy").textContent = attempt ? `${pct(correct, attempt)}%` : "—";
  $("anaProgress").textContent = progress;

  $("todayLine").textContent = `GATE CSE 2028 · ${new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  )}`;
}

// 5. Syllabus Rendering & Search/Filter Controls
let allSubjectsExpanded = false;
const toggleAllSubjectsBtn = $("toggleAllSubjectsBtn");

function renderSubjects() {
  const query = (syllabusQuery || "").trim().toLowerCase();
  const todayStr = today();
  const container = $("subjectPanels");
  if (!container) return;

  const isFiltered = Boolean(query || syllabusFilter !== "all");
  if (isFiltered) {
    allSubjectsExpanded = true;
    if (toggleAllSubjectsBtn) toggleAllSubjectsBtn.textContent = "Collapse All";
  }

  const html = SYLLABUS_TREE.map((sObj, sIdx) => {
    let totalSubtopics = 0;
    let completedSubtopics = 0;

    const moduleHtmlArr = sObj.modules
      .map((mObj, mIdx) => {
        const filteredSubs = mObj.subtopics.filter((sub) => {
          const k = `${sObj.subject}|${sub}`;
          const v = data.topics[k] || { status: "Not started" };

          const matchText =
            !query ||
            sub.toLowerCase().includes(query) ||
            mObj.name.toLowerCase().includes(query) ||
            sObj.subject.toLowerCase().includes(query);
          if (!matchText) return false;

          if (syllabusFilter === "completed") return v.status === "Completed";
          if (syllabusFilter === "in-progress")
            return v.status === "In progress";
          if (syllabusFilter === "revision")
            return v.next && v.next <= todayStr;
          return true;
        });

        const modTotal = mObj.subtopics.length;
        const modDone = mObj.subtopics.filter(
          (sub) =>
            data.topics[`${sObj.subject}|${sub}`]?.status === "Completed",
        ).length;

        totalSubtopics += modTotal;
        completedSubtopics += modDone;

        if (isFiltered && filteredSubs.length === 0) {
          return "";
        }

        return `
        <div class="tree-module open" id="mod-wrap-${sIdx}_${mIdx}">
          <div class="tree-module-header" onclick="toggleTreeModule('${sIdx}_${mIdx}')">
            <div class="tree-module-title-wrap">
              <svg class="tree-icon-chevron rotated" id="arrow-${sIdx}_${mIdx}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              <span>${esc(mObj.name)}</span>
            </div>
            <span class="tree-module-stat">${modDone}/${modTotal}</span>
          </div>
          
          <div class="tree-subtopic-list" id="mod-${sIdx}_${mIdx}">
            ${filteredSubs
              .map((sub) => {
                const k = `${sObj.subject}|${sub}`;
                const v = data.topics[k] || { status: "Not started" };
                const isCompleted = v.status === "Completed";
                const isProgress = v.status === "In progress";
                const isDue = v.next && v.next <= todayStr;

                return `
                <div class="tree-node">
                  <div class="tree-node-left">
                    <input 
                      type="checkbox" 
                      class="tree-checkbox" 
                      ${isCompleted ? "checked" : ""} 
                      onchange="toggleSubtopicQuick('${encodeURIComponent(k)}', this.checked)"
                    />
                    <span class="tree-sub-title ${isCompleted ? "completed-text" : ""}" title="${esc(sub)}">
                      ${esc(sub)}
                    </span>
                  </div>

                  <div class="tree-node-right">
                    ${
                      v.next
                        ? `
                      <span class="pill ${isDue ? "warn" : ""}">
                        ${isDue ? "Due" : v.next}
                      </span>
                    `
                        : ""
                    }

                    <div class="rev-checkpoints" title="Spaced Repetition Checkpoints (1d · 7d · 21d)">
                      <button type="button" class="rev-chip ${v.r1 ? "done" : ""}" onclick="toggleRevisionStage('${encodeURIComponent(k)}', 'r1', 7)">R1</button>
                      <button type="button" class="rev-chip ${v.r2 ? "done" : ""}" onclick="toggleRevisionStage('${encodeURIComponent(k)}', 'r2', 21)">R2</button>
                      <button type="button" class="rev-chip ${v.r3 ? "done" : ""}" onclick="toggleRevisionStage('${encodeURIComponent(k)}', 'r3', 0)">R3</button>
                    </div>

                    <button 
                      type="button"
                      class="tree-status-pill ${isCompleted ? "status-done" : isProgress ? "status-progress" : ""}"
                      onclick="cycleTopicStatus('${encodeURIComponent(k)}')"
                    >
                      ${esc(v.status)}
                    </button>

                    <button 
                      type="button" 
                      class="tree-btn-icon" 
                      onclick="revision('${encodeURIComponent(k)}')"
                      title="Set revision schedule"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </button>
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>
      `;
      })
      .filter(Boolean);

    if (isFiltered && moduleHtmlArr.length === 0) {
      return "";
    }

    const sPct = pct(completedSubtopics, totalSubtopics);
    const isOpen = isFiltered || allSubjectsExpanded || activeSubject === sIdx;

    return `
      <div class="card tree-subject-card">
        <div class="tree-subject-header" onclick="toggleSubjectTree(event, ${sIdx})">
          <div class="tree-subject-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--accent)"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span>${esc(sObj.subject)}</span>
            <span class="tree-subject-badge">${completedSubtopics}/${totalSubtopics}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="pill ${sPct === 100 ? "good" : ""}">${sPct}%</span>
            <button type="button" class="btn sm" id="subj-btn-${sIdx}" onclick="toggleSubjectTree(event, ${sIdx})">${isOpen ? "Collapse" : "Expand"}</button>
          </div>
        </div>

        <div class="tree-modules-wrap" id="subj-tree-${sIdx}" style="display: ${isOpen ? "grid" : "none"};">
          ${moduleHtmlArr.join("")}
        </div>
      </div>
    `;
  })
    .filter(Boolean)
    .join("");

  container.innerHTML =
    html || '<div class="empty">No topics found matching current filter.</div>';
}

function toggleSubjectTree(e, idx) {
  if (e) e.stopPropagation();
  const wrap = $(`subj-tree-${idx}`);
  const btn = $(`subj-btn-${idx}`);
  if (!wrap) return;

  const isCurrentlyOpen = wrap.style.display !== "none";
  wrap.style.display = isCurrentlyOpen ? "none" : "grid";
  if (btn) btn.textContent = isCurrentlyOpen ? "Expand" : "Collapse";
}

function toggleTreeModule(id) {
  const el = $(`mod-${id}`);
  const wrap = $(`mod-wrap-${id}`);
  const arrow = $(`arrow-${id}`);
  if (!el) return;
  const isHidden = el.style.display === "none";
  el.style.display = isHidden ? "grid" : "none";
  wrap?.classList.toggle("open", isHidden);
  arrow?.classList.toggle("rotated", isHidden);
}

function toggleSubtopicQuick(k, isChecked) {
  const key = decodeURIComponent(k);
  setStatus(encodeURIComponent(key), isChecked ? "Completed" : "Not started");
}

function cycleTopicStatus(k) {
  const key = decodeURIComponent(k);
  const current = data.topics[key]?.status || "Not started";
  const nextStatus =
    current === "Not started"
      ? "In progress"
      : current === "In progress"
        ? "Completed"
        : "Not started";
  setStatus(encodeURIComponent(key), nextStatus);
}

function setStatus(k, v) {
  const key = decodeURIComponent(k);
  if (!data.topics[key]) {
    data.topics[key] = {
      status: "Not started",
      r1: false,
      r2: false,
      r3: false,
      next: "",
    };
  }
  data.topics[key].status = v;
  if (v === "Completed" && !data.topics[key].next) {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    data.topics[key].next = toLocalDateStr(d);
  }
  saveData();
  toast("Topic updated");
}

function toggleRevisionStage(k, stage, nextDays) {
  const key = decodeURIComponent(k);
  const t = data.topics[key];
  if (!t) return;

  t[stage] = !t[stage];

  if (t[stage]) {
    if (nextDays > 0) {
      const d = new Date();
      d.setDate(d.getDate() + nextDays);
      t.next = toLocalDateStr(d);
      toast(
        `${stage.toUpperCase()} complete · Next revision scheduled in ${nextDays}d`,
      );
    } else {
      t.next = "";
      toast("All 3 spaced revisions complete!");
    }
  } else {
    toast(`${stage.toUpperCase()} unmarked`);
  }

  saveData();
}

// 6. Modal & Custom Glassmorphic Calendar Revision Controls
let calCurrentYear = 2026;
let calCurrentMonth = 10;
let calSelectedDate = "";

function revision(k) {
  currentRevisionKey = decodeURIComponent(k);
  const v = data.topics[currentRevisionKey] || {};
  const [subject, topic] = currentRevisionKey.split("|");

  calSelectedDate = v.next || today();
  const initDate = new Date(calSelectedDate + "T12:00:00");
  if (!isNaN(initDate.getTime())) {
    calCurrentYear = initDate.getFullYear();
    calCurrentMonth = initDate.getMonth();
  } else {
    const now = new Date();
    calCurrentYear = now.getFullYear();
    calCurrentMonth = now.getMonth();
  }

  $("modalTitle").textContent = "Schedule Revision";
  $("modalBody").innerHTML = `
    <div class="modal-topic-title">${esc(topic)}</div>
    <div class="modal-topic-subject">${esc(subject)}</div>
    
    <label style="font-size:11px;font-weight:600;color:var(--muted);display:block;margin-bottom:6px;">
      Quick Spacing Presets
    </label>
    <div class="revision-presets">
      <button type="button" class="btn" onclick="applyPreset(1)">+1 Day<br><small class="muted">1st Revision</small></button>
      <button type="button" class="btn" onclick="applyPreset(7)">+7 Days<br><small class="muted">2nd Revision</small></button>
      <button type="button" class="btn" onclick="applyPreset(21)">+21 Days<br><small class="muted">3rd Revision</small></button>
    </div>

    <input type="hidden" id="revisionDateInput" value="${esc(calSelectedDate)}">

    <div class="custom-calendar">
      <div class="cal-head">
        <button type="button" class="btn sm icon-btn" onclick="changeCalMonth(-1)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="cal-title" id="calMonthYear"></div>
        <button type="button" class="btn sm icon-btn" onclick="changeCalMonth(1)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="cal-weekdays">
        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
      </div>
      <div class="cal-grid" id="calDaysGrid"></div>
      <div class="cal-footer-preview">
        <span class="muted text-xs">Target: <b id="calSelectedLabel" style="color:var(--accent)">—</b></span>
        <button type="button" class="btn sm" onclick="selectCalDate(today())">Today</button>
      </div>
    </div>

    <div class="modal-actions" style="margin-top: 14px;">
      <button type="button" class="btn danger" onclick="clearRevisionDate()">Clear Date</button>
      <div style="display:flex;gap:8px;">
        <button type="button" class="btn" onclick="closeModal()">Cancel</button>
        <button type="button" class="btn primary" onclick="saveRevisionDate()">Save Date</button>
      </div>
    </div>
  `;

  renderCalendarGrid();
  $("modal").classList.add("open");
}

function renderCalendarGrid() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const titleEl = $("calMonthYear");
  const gridEl = $("calDaysGrid");
  const labelEl = $("calSelectedLabel");
  const inputEl = $("revisionDateInput");
  if (!gridEl) return;

  titleEl.textContent = `${monthNames[calCurrentMonth]} ${calCurrentYear}`;

  if (calSelectedDate) {
    const parts = calSelectedDate.split("-");
    const formatted = new Date(
      +parts[0],
      +parts[1] - 1,
      +parts[2],
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    labelEl.textContent = formatted;
    if (inputEl) inputEl.value = calSelectedDate;
  } else {
    labelEl.textContent = "None selected";
    if (inputEl) inputEl.value = "";
  }

  const firstDayIndex = new Date(calCurrentYear, calCurrentMonth, 1).getDay();
  const totalDays = new Date(calCurrentYear, calCurrentMonth + 1, 0).getDate();
  const todayStr = today();

  let cellsHtml = "";

  for (let i = 0; i < firstDayIndex; i++) {
    cellsHtml += `<div class="cal-day empty-day"></div>`;
  }

  for (let day = 1; day <= totalDays; day++) {
    const mStr = String(calCurrentMonth + 1).padStart(2, "0");
    const dStr = String(day).padStart(2, "0");
    const dateStr = `${calCurrentYear}-${mStr}-${dStr}`;

    const isSelected = calSelectedDate === dateStr;
    const isToday = todayStr === dateStr;

    cellsHtml += `
      <div 
        class="cal-day ${isSelected ? "selected-day" : ""} ${isToday ? "today-day" : ""}"
        onclick="selectCalDate('${dateStr}')"
      >
        ${day}
      </div>
    `;
  }

  gridEl.innerHTML = cellsHtml;
}

function changeCalMonth(step) {
  calCurrentMonth += step;
  if (calCurrentMonth > 11) {
    calCurrentMonth = 0;
    calCurrentYear++;
  } else if (calCurrentMonth < 0) {
    calCurrentMonth = 11;
    calCurrentYear--;
  }
  renderCalendarGrid();
}

function selectCalDate(dateStr) {
  calSelectedDate = dateStr;
  const parts = dateStr.split("-");
  calCurrentYear = +parts[0];
  calCurrentMonth = +parts[1] - 1;
  renderCalendarGrid();
}

function applyPreset(daysToAdd) {
  const d = new Date();
  d.setDate(d.getDate() + daysToAdd);
  selectCalDate(toLocalDateStr(d));
}

function saveRevisionDate() {
  if (!currentRevisionKey) return;
  const val = $("revisionDateInput")?.value || calSelectedDate;

  if (!data.topics[currentRevisionKey]) {
    data.topics[currentRevisionKey] = {
      status: "Not started",
      r1: false,
      r2: false,
      r3: false,
      next: "",
    };
  }
  data.topics[currentRevisionKey].next = val;
  saveData();
  closeModal();
  toast("Revision date updated");
}

function clearRevisionDate() {
  if (!currentRevisionKey) return;
  if (data.topics[currentRevisionKey]) {
    data.topics[currentRevisionKey].next = "";
  }
  calSelectedDate = "";
  saveData();
  closeModal();
  toast("Revision date cleared");
}

function closeModal() {
  $("modal").classList.remove("open");
  currentRevisionKey = null;
}

// 7. Sub-Section Renderers
function renderSessions() {
  const rows = [...data.sessions].sort((a, b) => b.date.localeCompare(a.date));
  $("sessionCount").textContent = `${rows.length} sessions`;
  $("sessionRows").innerHTML = rows.length
    ? rows
        .map(
          (x) => `
        <tr>
          <td data-label="Date">${esc(x.date)}</td>
          <td data-label="Subject">${esc(x.subject)}</td>
          <td data-label="Activity">${esc(x.activity)}</td>
          <td data-label="Hours">${fmt(x.hours)}h</td>
          <td data-label="Notes">${esc(x.notes || "—")}</td>
          <td data-label=""><button class="btn danger sm" onclick="del('sessions','${x.id}')">Delete</button></td>
        </tr>
      `,
        )
        .join("")
    : `<tr><td colspan="6" class="empty">No study sessions yet. Log your first session above.</td></tr>`;
}

function renderPractice() {
  const rows = [...data.practice].sort((a, b) => b.date.localeCompare(a.date));
  $("practiceRows").innerHTML = rows.length
    ? rows
        .map(
          (x) => `
        <tr>
          <td data-label="Date">${esc(x.date)}</td>
          <td data-label="Subject">${esc(x.subject)}</td>
          <td data-label="Type">${esc(x.type)}</td>
          <td data-label="Attempted">${x.attempted}</td>
          <td data-label="Correct">${x.correct}</td>
          <td data-label="Accuracy">${pct(x.correct, x.attempted)}%</td>
          <td data-label=""><button class="btn danger sm" onclick="del('practice','${x.id}')">Delete</button></td>
        </tr>
      `,
        )
        .join("")
    : `<tr><td colspan="7" class="empty">No practice sets recorded yet.</td></tr>`;
}

function renderTests() {
  const rows = [...data.tests].sort((a, b) => b.date.localeCompare(a.date));
  $("testRows").innerHTML = rows.length
    ? rows
        .map(
          (x) => `
        <tr>
          <td data-label="Date">${esc(x.date)}</td>
          <td data-label="Test"><b>${esc(x.name)}</b></td>
          <td data-label="Format">${esc(x.type)}</td>
          <td data-label="Score / 100">${fmt(x.marks)}</td>
          <td data-label="Accuracy">${x.accuracy === "" ? "—" : fmt(x.accuracy) + "%"}</td>
          <td data-label="Diagnostics">${esc(x.notes || "—")}</td>
          <td data-label=""><button class="btn danger sm" onclick="del('tests','${x.id}')">Delete</button></td>
        </tr>
      `,
        )
        .join("")
    : `<tr><td colspan="7" class="empty">No tests recorded. Start with a sectional test when ready.</td></tr>`;

  renderTestTrendChart();
}

function renderTestTrendChart() {
  const box = $("testTrendChart");
  const meta = $("testTrendMeta");
  if (!box) return;

  const sorted = [...data.tests].sort((a, b) => a.date.localeCompare(b.date));

  if (sorted.length < 2) {
    if (meta) meta.textContent = "Chronological trend";
    box.innerHTML = `<div class="empty">Log at least 2 mock tests to visualize your score trend.</div>`;
    return;
  }

  const first = Number(sorted[0].marks) || 0;
  const last = Number(sorted[sorted.length - 1].marks) || 0;
  const delta = last - first;
  if (meta) {
    meta.innerHTML = `Net change: <b style="color:${delta >= 0 ? "var(--green)" : "var(--red)"}">${delta >= 0 ? "+" : ""}${delta.toFixed(1)} marks</b>`;
  }

  const W = 640;
  const H = 170;
  const padL = 34;
  const padR = 20;
  const padT = 20;
  const padB = 28;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const points = sorted.map((t, idx) => {
    const x =
      padL +
      (sorted.length === 1 ? plotW / 2 : (idx / (sorted.length - 1)) * plotW);
    const clamped = Math.max(0, Math.min(100, Number(t.marks) || 0));
    const y = padT + plotH - (clamped / 100) * plotH;
    return { x, y, marks: clamped, label: t.date.slice(5), name: t.name };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${points[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const gridLines = [0, 25, 50, 75, 100]
    .map((val) => {
      const gy = padT + plotH - (val / 100) * plotH;
      return `
        <line x1="${padL}" y1="${gy}" x2="${W - padR}" y2="${gy}" stroke="var(--line)" stroke-dasharray="3 3" />
        <text x="${padL - 6}" y="${gy + 3}" text-anchor="end" fill="var(--muted)" font-size="9.5" font-family="var(--font-mono)">${val}</text>
      `;
    })
    .join("");

  const dots = points
    .map(
      (p) => `
      <g>
        <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="var(--accent)" stroke="var(--bg-base)" stroke-width="1.5" />
        <text x="${p.x.toFixed(1)}" y="${(p.y - 8).toFixed(1)}" text-anchor="middle" fill="var(--ink)" font-size="9.5" font-weight="700" font-family="var(--font-mono)">${p.marks}</text>
        <text x="${p.x.toFixed(1)}" y="${H - 8}" text-anchor="middle" fill="var(--muted)" font-size="9" font-family="var(--font-mono)">${esc(p.label)}</text>
      </g>
    `,
    )
    .join("");

  box.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="trend-svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.32" />
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.0" />
        </linearGradient>
      </defs>
      ${gridLines}
      <path d="${areaPath}" fill="url(#scoreGrad)" />
      <path d="${linePath}" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      ${dots}
    </svg>
  `;
}

function renderTasks() {
  const now = today();
  const active = data.tasks.filter((x) => !x.done);
  const over = active.filter((x) => x.due < now);

  $("activeTasks").textContent = active.length;
  $("backlogCount").textContent = `${over.length} overdue`;

  const item = (x) => `
    <div class="topic">
      <input type="checkbox" ${x.done ? "checked" : ""} onchange="taskDone('${x.id}', this.checked)">
      <span style="${x.done ? "text-decoration:line-through;color:var(--muted)" : ""}">
        <b>${esc(x.title)}</b>
        <small style="display:block">${esc(x.subject)} · Due ${esc(x.due)} · ${esc(x.priority)}</small>
      </span>
      <button class="btn danger" onclick="del('tasks','${x.id}')">×</button>
    </div>
  `;

  $("activeTaskList").innerHTML = active.length
    ? active.map(item).join("")
    : '<div class="empty">No active targets. Add one above.</div>';
  $("backlogList").innerHTML = over.length
    ? over.map(item).join("")
    : '<div class="empty">No overdue tasks. Nice.</div>';

  const weekEnd = toLocalDateStr(new Date(Date.now() + 7 * 86400000));
  const week = data.tasks.filter((x) => x.due >= now && x.due <= weekEnd);
  $("weekCount").textContent =
    `${week.filter((x) => x.done).length} / ${week.length} done`;
  $("weekFocus").innerHTML = week.length
    ? week
        .slice(0, 4)
        .map(
          (x) => `
        <div style="padding:6px 0;border-bottom:1px solid var(--line)">
          ${x.done ? "✓" : "○"} ${esc(x.title)} <small class="muted">· ${esc(x.due)}</small>
        </div>
      `,
        )
        .join("")
    : "Add a weekly target in Planner to get started.";
}

function taskDone(id, v) {
  const x = data.tasks.find((t) => t.id === id);
  if (x) x.done = v;
  saveData();
}

function renderCharts() {
  const now = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now);
    d.setDate(now.getDate() - 6 + i);
    return toLocalDateStr(d);
  });

  const vals = days.map((d) =>
    data.sessions.filter((x) => x.date === d).reduce((a, x) => a + +x.hours, 0),
  );
  const max = Math.max(1, ...vals);

  $("activityChart").innerHTML = days
    .map(
      (d, i) => `
    <div class="bar-col">
      <em>${fmt(vals[i])}h</em>
      <div class="bar" style="height:${Math.max(2, (vals[i] / max) * 105)}px"></div>
      <small>${new Date(d + "T12:00:00").toLocaleDateString("en-IN", { weekday: "short" })}</small>
    </div>
  `,
    )
    .join("");

  const sums = SYLLABUS_TREE.map((s) => ({
    s: s.subject,
    h: data.sessions
      .filter((x) => x.subject === s.subject)
      .reduce((a, x) => a + +x.hours, 0),
  })).sort((a, b) => b.h - a.h);
  const mh = Math.max(1, ...sums.map((x) => x.h));

  $("subjectHours").innerHTML = sums
    .map(
      (x) => `
    <div class="progress-row"><span>${esc(x.s)}</span><b>${fmt(x.h)}h</b></div>
    <div class="progress"><i style="width:${(x.h / mh) * 100}%"></i></div>
  `,
    )
    .join("");

  const attempted = data.practice.reduce((a, x) => a + +x.attempted, 0);
  const correct = data.practice.reduce((a, x) => a + +x.correct, 0);
  const avg = data.tests.length
    ? data.tests.reduce((a, x) => a + +x.marks, 0) / data.tests.length
    : null;

  $("performanceSnapshot").innerHTML = [
    ["Question accuracy", attempted ? `${pct(correct, attempted)}%` : "—"],
    ["Questions attempted", attempted],
    [
      "PYQs attempted",
      data.practice
        .filter((x) => x.type === "GATE PYQ")
        .reduce((a, x) => a + +x.attempted, 0),
    ],
    ["Average mock marks", avg === null ? "—" : `${fmt(avg)} / 100`],
  ]
    .map(([a, b]) => `<div class="topic"><span>${a}</span><b>${b}</b></div>`)
    .join("");
}

function renderRevisions() {
  const due = allTopics()
    .filter((x) => x.v.next)
    .sort((a, b) => a.v.next.localeCompare(b.v.next));
  const todayStr = today();

  $("revisionQueue").innerHTML = due.length
    ? due
        .slice(0, 6)
        .map(
          (x) => `
        <div style="padding:7px 0;border-bottom:1px solid var(--line)">
          <b>${esc(x.t)}</b>
          <small class="muted" style="display:block">${esc(x.s)} · ${x.v.next <= todayStr ? "Due now" : "Due " + x.v.next}</small>
        </div>
      `,
        )
        .join("")
    : "No revision due. Add revision dates to topics as you complete them.";

  $("revisionAnalytics").innerHTML = due.length
    ? due
        .map(
          (x) => `
        <div class="topic">
          <span><b>${esc(x.t)}</b><small style="display:block">${esc(x.s)}</small></span>
          <span class="pill ${x.v.next <= todayStr ? "warn" : ""}">${x.v.next <= todayStr ? "Due" : x.v.next}</span>
          <button class="btn" onclick="revision('${encodeURIComponent(x.k)}')">Edit</button>
        </div>
      `,
        )
        .join("")
    : '<div class="empty">No revision dates added yet.</div>';
}

function del(arr, id) {
  openConfirmModal(
    "Delete Record",
    "Are you sure you want to permanently remove this entry?",
    () => {
      data[arr] = data[arr].filter((x) => x.id !== id);
      saveData();
      toast("Record deleted");
    },
  );
}

function addRecord(form, arr, validate) {
  const obj = Object.fromEntries(new FormData(form).entries());
  if (validate && !validate(obj)) return;
  obj.id = crypto.randomUUID
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
  data[arr].push(obj);
  form.reset();
  setDefaults();
  saveData();
  toast("Saved successfully");
}

// 8. Event Listeners
$("studyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addRecord(e.target, "sessions", (x) => +x.hours > 0 && +x.hours <= 24);
});

$("practiceForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addRecord(e.target, "practice", (x) => {
    if (+x.correct > +x.attempted) {
      toast("Correct answers cannot exceed attempted");
      return false;
    }
    return +x.attempted > 0;
  });
});

$("testForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addRecord(e.target, "tests", (x) => +x.marks >= 0 && +x.marks <= 100);
});

$("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  addRecord(e.target, "tasks", (x) => !!x.title.trim());
});

$("nav").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-view]");
  if (b) navigate(b.dataset.view);
});

document.addEventListener("click", (e) => {
  const g = e.target.closest("[data-go]");
  if (g) navigate(g.dataset.go);

  const a = e.target.closest("[data-action]");
  if (a) {
    const v = a.dataset.action;
    navigate(v === "task" ? "planner" : v === "test" ? "tests" : v);
    setTimeout(() => {
      const f = $(
        v === "study"
          ? "studyForm"
          : v === "practice"
            ? "practiceForm"
            : v === "test"
              ? "testForm"
              : "taskForm",
      );
      f?.scrollIntoView({ behavior: "smooth", block: "center" });
      f?.querySelector("input:not([type=date])")?.focus();
    }, 100);
  }
});

// Live selection highlight for PYQ radio/checkbox options
document.addEventListener("change", (e) => {
  const input = e.target;
  if (input && input.matches('.pyq-option-label input[name^="ans_"]')) {
    const container = input.closest(".pyq-options-container");
    if (!container) return;
    container.querySelectorAll(".pyq-option-label").forEach((lbl) => {
      const inp = lbl.querySelector("input");
      if (inp) lbl.classList.toggle("opt-selected", inp.checked);
    });
  }
});

$("quickLog").onclick = () => {
  navigate("study");
  $("studyForm").scrollIntoView({ behavior: "smooth", block: "center" });
};

$("exportBtn").onclick = () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `gate-cse-2028-backup-${today()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Backup exported");
};

$("importBtn").onclick = () => $("importFile").click();

$("importFile").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    if (
      !parsed.topics ||
      !Array.isArray(parsed.sessions) ||
      !Array.isArray(parsed.practice) ||
      !Array.isArray(parsed.tests) ||
      !Array.isArray(parsed.tasks)
    ) {
      throw new Error("Invalid structure");
    }
    data = normalizeData(parsed);
    saveData();
    toast("Backup imported");
  } catch (err) {
    toast("Invalid backup file");
  }
  e.target.value = "";
};

const searchInput = $("syllabusSearch");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    syllabusQuery = e.target.value;
    if (!syllabusQuery && syllabusFilter === "all") {
      allSubjectsExpanded = false;
      if (toggleAllSubjectsBtn) toggleAllSubjectsBtn.textContent = "Expand All";
    }
    renderSubjects();
  });
}

const filterContainer = $("syllabusFilters");
if (filterContainer) {
  filterContainer.addEventListener("click", (e) => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;
    filterContainer
      .querySelectorAll(".filter-pill")
      .forEach((b) => b.classList.remove("active"));
    pill.classList.add("active");
    syllabusFilter = pill.dataset.filter;
    if (!syllabusQuery && syllabusFilter === "all") {
      allSubjectsExpanded = false;
      if (toggleAllSubjectsBtn) toggleAllSubjectsBtn.textContent = "Expand All";
    }
    renderSubjects();
  });
}

if (toggleAllSubjectsBtn) {
  toggleAllSubjectsBtn.addEventListener("click", () => {
    allSubjectsExpanded = !allSubjectsExpanded;
    SYLLABUS_TREE.forEach((_, idx) => {
      const wrap = $(`subj-tree-${idx}`);
      const btn = $(`subj-btn-${idx}`);
      if (wrap) wrap.style.display = allSubjectsExpanded ? "grid" : "none";
      if (btn) btn.textContent = allSubjectsExpanded ? "Collapse" : "Expand";
    });
    toggleAllSubjectsBtn.textContent = allSubjectsExpanded
      ? "Collapse All"
      : "Expand All";
  });
}

$("modalClose").onclick = closeModal;
$("modal").addEventListener("click", (e) => {
  if (e.target === $("modal")) closeModal();
});

// Clean Vector Theme Toggle
const themeToggle = $("themeToggle");
const themeIcon = $("themeIcon");
const savedTheme = localStorage.getItem("gate-theme") || "dark";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeIcon) {
    if (theme === "dark") {
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    } else {
      themeIcon.innerHTML = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
    }
  }
  localStorage.setItem("gate-theme", theme);
}

applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// Initialize PYQ Filter Dropdowns BEFORE setDefaults/render
const pyqSubFilter = $("pyqSubjectFilter");
if (pyqSubFilter) {
  pyqSubFilter.innerHTML =
    `<option value="all">All Subjects</option>` +
    SYLLABUS_TREE.map(
      (s) => `<option value="${esc(s.subject)}">${esc(s.subject)}</option>`,
    ).join("");
  pyqSubFilter.onchange = renderPyqBank;
}
const pyqStatFilter = $("pyqStatusFilter");
if (pyqStatFilter) {
  pyqStatFilter.onchange = renderPyqBank;
}

// Boot application
setDefaults();
render();

/**
 * =============================================================================
 * 9. Multi-Provider AI PYQ Digitizer (OpenRouter + Gemini + PDF Slicer + Paste)
 * =============================================================================
 */

function getPrimaryKey() {
  return localStorage.getItem("gemini-api-key") || "";
}

function getBackupKey() {
  return localStorage.getItem("ai-backup-api-key") || "";
}

function detectProvider(key) {
  const k = (key || "").trim();
  if (!k) return null;
  if (k.startsWith("sk-or-")) return "openrouter";
  return "gemini";
}

function providerLabel(provider) {
  if (provider === "openrouter") return "OpenRouter";
  if (provider === "gemini") return "Gemini";
  return "No Key";
}

function promptApiKey() {
  const pKey = getPrimaryKey();
  const bKey = getBackupKey();
  $("modalTitle").textContent = "AI API Keys (OpenRouter / Gemini)";
  $("modalBody").innerHTML = `
    <div class="modal-topic-subject" style="margin-bottom: 12px;">
      Stored locally in your browser's localStorage. Supports OpenRouter (<code>sk-or-v1-...</code>) and Google Gemini (<code>AIzaSy...</code>).
    </div>
    <div class="field" style="margin-bottom: 10px;">
      <label>Primary API Key</label>
      <input type="password" id="modalPrimaryKeyInput" value="${esc(pKey)}" placeholder="sk-or-v1-... or AIzaSy..." autocomplete="off">
    </div>
    <div class="field" style="margin-bottom: 14px;">
      <label>Optional Backup API Key (Auto-Failover)</label>
      <input type="password" id="modalBackupKeyInput" value="${esc(bKey)}" placeholder="Optional second key" autocomplete="off">
    </div>
    <div class="modal-actions">
      <button type="button" class="btn danger" onclick="saveApiKeyModal('', '')">Clear Keys</button>
      <div style="display:flex;gap:8px;">
        <button type="button" class="btn" onclick="closeModal()">Cancel</button>
        <button type="button" class="btn primary" onclick="saveApiKeyModal($('modalPrimaryKeyInput').value, $('modalBackupKeyInput').value)">Save Keys</button>
      </div>
    </div>
  `;
  $("modal").classList.add("open");
  setTimeout(() => $("modalPrimaryKeyInput")?.focus(), 50);
}

function saveApiKeyModal(primaryVal, backupVal) {
  const p = (primaryVal || "").trim();
  const b = (backupVal || "").trim();
  localStorage.setItem("gemini-api-key", p);
  localStorage.setItem("ai-backup-api-key", b);
  cachedGeminiModels = null;
  if (typeof syncByokView === "function") syncByokView();
  closeModal();
  toast(p || b ? "API key(s) saved" : "API keys cleared");
}

function openConfirmModal(title, message, onConfirm) {
  $("modalTitle").textContent = title;
  $("modalBody").innerHTML = `
    <div class="modal-topic-subject" style="margin-bottom: 16px; color: var(--ink);">
      ${esc(message)}
    </div>
    <div class="modal-actions" style="justify-content: flex-end; gap: 8px;">
      <button type="button" class="btn" onclick="closeModal()">Cancel</button>
      <button type="button" class="btn danger" id="confirmModalActionBtn">Delete</button>
    </div>
  `;
  $("modal").classList.add("open");
  $("confirmModalActionBtn").onclick = () => {
    closeModal();
    onConfirm();
  };
}

const apiKeyBtn = $("apiKeyBtn");
if (apiKeyBtn) apiKeyBtn.onclick = promptApiKey;

const dropzone = $("pyqDropzone");
const fileInput = $("pyqFileInput");

if (dropzone && fileInput) {
  dropzone.onclick = () => fileInput.click();

  dropzone.ondragover = (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  };

  dropzone.ondragleave = () => dropzone.classList.remove("dragover");

  dropzone.ondrop = (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processPyqFile(e.dataTransfer.files[0]);
    }
  };

  fileInput.onchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processPyqFile(e.target.files[0]);
    }
  };
}

// Global Ctrl+V Screenshot Paste Listener (Win+Shift+S -> Ctrl+V anywhere)
window.addEventListener("paste", (e) => {
  const activeTag = document.activeElement?.tagName;
  if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

  const items = e.clipboardData?.items;
  if (!items) return;

  for (const item of items) {
    if (item.type.startsWith("image/")) {
      e.preventDefault();
      const blob = item.getAsFile();
      if (blob) {
        navigate("pyqbank");
        toast("Screenshot pasted from clipboard!");
        processPyqFile(blob);
      }
      return;
    }
  }
});

function compressImageIfNeeded(file, maxDim = 1300, quality = 0.84) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const mime = file.name?.toLowerCase().endsWith(".pdf")
          ? "application/pdf"
          : file.type || "image/png";
        resolve({
          dataUrl,
          base64Data: dataUrl.split(",")[1],
          mimeType: mime,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const img = new Image();
    const objUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objUrl);
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        const scale = maxDim / Math.max(width, height);
        width = Math.round(width * scale);
        height = Math.round(height * scale);
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", quality);
      resolve({
        dataUrl,
        base64Data: dataUrl.split(",")[1],
        mimeType: "image/jpeg",
      });
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(objUrl);
      reject(err);
    };
    img.src = objUrl;
  });
}

// Prompt user to pick 1-2 pages when a multi-page GATE PDF is uploaded
function promptPdfPageRange(totalPages) {
  return new Promise((resolve) => {
    $("modalTitle").textContent =
      `Multi-Page PDF Detected (${totalPages} Pages)`;
    $("modalBody").innerHTML = `
      <div class="modal-topic-subject" style="margin-bottom: 12px; color: var(--ink);">
        Pick 1–2 pages to digitize locally (or press <b>Win + Shift + S</b> and <b>Ctrl + V</b> to paste a cropped question clip directly!):
      </div>
      <div class="form-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 14px;">
        <div class="field">
          <label>Start Page (1 - ${totalPages})</label>
          <input type="number" id="pdfStartPage" min="1" max="${totalPages}" value="1">
        </div>
        <div class="field">
          <label>End Page (Max +2 pages)</label>
          <input type="number" id="pdfEndPage" min="1" max="${totalPages}" value="1">
        </div>
      </div>
      <div class="modal-actions" style="justify-content: flex-end; gap: 8px;">
        <button type="button" class="btn" id="pdfCancelBtn">Cancel</button>
        <button type="button" class="btn primary" id="pdfConfirmBtn">Extract Page(s)</button>
      </div>
    `;
    $("modal").classList.add("open");

    const startInp = $("pdfStartPage");
    const endInp = $("pdfEndPage");
    startInp?.addEventListener("input", () => {
      const s = Number(startInp.value) || 1;
      if (Number(endInp.value) < s || Number(endInp.value) > s + 1) {
        endInp.value = s;
      }
    });

    $("pdfCancelBtn").onclick = () => {
      closeModal();
      resolve(null);
    };
    $("pdfConfirmBtn").onclick = () => {
      let s = Math.max(1, Math.min(totalPages, Number(startInp.value) || 1));
      let e = Math.max(s, Math.min(totalPages, Number(endInp.value) || s));
      if (e - s > 1) {
        e = s + 1;
        toast("Capped at 2 pages per batch for fast extraction");
      }
      closeModal();
      resolve({ startPage: s, endPage: e });
    };
  });
}

// Render selected PDF pages to compact JPEG images in-browser via PDF.js
async function slicePdfToImages(file) {
  if (!window.pdfjsLib) {
    return [await compressImageIfNeeded(file)];
  }
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const arrayBuf = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuf }).promise;

  let startPage = 1;
  let endPage = pdf.numPages;

  if (pdf.numPages > 2) {
    const range = await promptPdfPageRange(pdf.numPages);
    if (!range) return null;
    startPage = range.startPage;
    endPage = range.endPage;
  }

  const slices = [];
  for (let p = startPage; p <= endPage; p++) {
    const page = await pdf.getPage(p);
    const viewport = page.getViewport({ scale: 1.6 });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    slices.push({
      dataUrl,
      base64Data: dataUrl.split(",")[1],
      mimeType: "image/jpeg",
      pageNumber: p,
    });
  }
  return slices;
}

async function processPyqFile(file) {
  const keys = [getPrimaryKey(), getBackupKey()].filter(Boolean);
  if (keys.length === 0) {
    toast("Please set an OpenRouter or Gemini API key first");
    promptApiKey();
    return;
  }

  const isPdf =
    file.type === "application/pdf" ||
    file.name?.toLowerCase().endsWith(".pdf");

  const statusBox = $("digitizerStatus");
  const previewImg = $("imagePreview");
  const statusText = $("aiStatusText");
  const statusSub = $("aiStatusSub");

  try {
    let payloads = [];

    if (isPdf) {
      statusBox.style.display = "flex";
      statusText.textContent = "Reading PDF locally...";
      statusSub.textContent = "Checking page count...";
      const sliced = await slicePdfToImages(file);
      if (!sliced) {
        statusBox.style.display = "none";
        return;
      }
      payloads = sliced;
    } else {
      statusBox.style.display = "flex";
      statusText.textContent = "Optimizing image...";
      statusSub.textContent = "Compressing screenshot for fast upload...";
      payloads = [await compressImageIfNeeded(file)];
    }

    let totalExtracted = 0;

    for (let idx = 0; idx < payloads.length; idx++) {
      const item = payloads[idx];
      previewImg.src = item.dataUrl;

      statusText.textContent =
        payloads.length > 1
          ? `Digitizing Page ${item.pageNumber} (${idx + 1}/${payloads.length})...`
          : "Digitizing & solving...";
      statusSub.textContent =
        "Evaluating options step-by-step & formatting KaTeX math";

      const extractedList = await runDigitizerRouter(
        keys,
        item.base64Data,
        item.mimeType,
      );

      if (!Array.isArray(data.pyqBank)) data.pyqBank = [];

      extractedList.forEach((digitized) => {
        digitized.id =
          "pyq_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);
        digitized.addedAt = today();
        digitized.solved = false;
        digitized.userAnswer = null;
        digitized.isCorrect = null;
        data.pyqBank.unshift(digitized);
        totalExtracted++;
      });

      saveData();
      renderPyqBank();
    }

    toast(`Added ${totalExtracted} question(s) to your personal bank!`);
    statusText.textContent = `Extracted ${totalExtracted} Question(s)!`;
    statusSub.textContent = "Ready to solve below.";
    setTimeout(() => {
      statusBox.style.display = "none";
    }, 2200);
  } catch (err) {
    console.error(err);
    statusText.textContent = "Extraction Failed";
    statusSub.textContent =
      err.message ||
      "Check your API key in AI Setup or try pasting a cropped screenshot (Ctrl+V).";
  } finally {
    if (fileInput) fileInput.value = "";
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const DIGITIZER_PROMPT = `
You are an expert GATE Computer Science examiner and question digitizer.
Analyze the uploaded image and extract every GATE question into a JSON array.
(Ignore watermarks, headers, footers, or page numbers.)

CRITICAL RULES:
1. KA-TEX DELIMITERS REQUIRED EVERYWHERE: Wrap ALL mathematical expressions, variables, numbers with units, and Boolean formulas in "question", "options", AND "explanation" inside single dollar signs ($...$).
   - Example option: "A) $\\overline{P \\oplus Q}$" (NEVER leave LaTeX commands unwrapped).
2. EXHAUSTIVE OPTION VERIFICATION (AUTO MCQ vs MSQ):
   - Do NOT assume a 4-option question has only one correct answer!
   - In "explanation", evaluate Option A, Option B, Option C, and Option D independently.
   - If MORE THAN ONE option is true (e.g., both B and D cause overflow, or both A and C match the truth table), list ALL true letters in "correctAnswer" (e.g., "B, D") and set "type": "MSQ".
   - Only set "type": "MCQ" if strictly ONE option is true.
   - End "explanation" with the exact line: "FINAL ANSWER: <letter(s) or number>".
3. For NAT questions (no options), set "options": [], put the exact number/range in "correctAnswer", and set "type": "NAT".

Return ONLY a valid JSON array matching this exact field order (no markdown backticks, no prose):
[
  {
    "subject": "Strictly one of: Engineering Mathematics, Discrete Mathematics, Digital Logic, Computer Organization & Architecture, Programming & Data Structures, Algorithms, Theory of Computation, Compiler Design, Operating Systems, DBMS, Computer Networks, General Aptitude",
    "topic": "Specific syllabus topic name",
    "year": null,
    "marks": 1,
    "question": "Full question text with all math in $formula$ format.",
    "options": [
      "A) $...$",
      "B) $...$",
      "C) $...$",
      "D) $...$"
    ],
    "explanation": "Evaluate Option A: ... Evaluate Option B: ... Evaluate Option C: ... Evaluate Option D: ... FINAL ANSWER: ...",
    "correctAnswer": "All true option letters (e.g. 'B' for single-choice, 'B, D' for multiple-choice) or exact number for NAT",
    "type": "MSQ if multiple options are true, MCQ if exactly 1 option is true, or NAT if no options"
  }
]
`;

function parseAiJsonResponse(rawText) {
  const cleaned = String(rawText || "")
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();

  const firstBracket = cleaned.indexOf("[");
  const lastBracket = cleaned.lastIndexOf("]");
  const slice =
    firstBracket !== -1 && lastBracket > firstBracket
      ? cleaned.slice(firstBracket, lastBracket + 1)
      : cleaned;

  const parsed = JSON.parse(slice);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function postProcessExtractedQuestions(list) {
  list.forEach((q) => {
    if (Array.isArray(q.options)) {
      q.options = q.options.map((opt) => normalizeLatex(opt));
    }

    if (Array.isArray(q.options) && q.options.length > 0) {
      let keySource = String(q.correctAnswer || "");
      const finalMatch = String(q.explanation || "").match(
        /FINAL\s*ANSWER\s*:\s*([A-D](?:\s*(?:,|and|&)\s*[A-D])*)/i,
      );
      if (finalMatch) {
        keySource = finalMatch[1];
      }

      const letters = Array.from(
        new Set(keySource.toUpperCase().match(/[A-D]/g) || []),
      ).sort();

      if (letters.length > 1) {
        q.type = "MSQ";
        q.correctAnswer = letters.join(", ");
      } else if (letters.length === 1) {
        if (String(q.type).toUpperCase() !== "MSQ") q.type = "MCQ";
        q.correctAnswer = letters[0];
      }
    } else {
      q.type = "NAT";
    }
  });
  return list;
}

// OpenRouter Caller (openrouter/free smart vision router + free vision fallbacks)
async function callOpenRouterVision(apiKey, base64Data, mimeType) {
  const models = [
    "openrouter/free",
    "google/gemma-4-26b-a4b-it:free",
    "nvidia/nemotron-3.5-super-vl:free",
    "google/gemma-4-31b-it:free",
  ];

  const dataUri = `data:${mimeType};base64,${base64Data}`;
  let lastErr = null;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    const statusSub = $("aiStatusSub");
    if (statusSub) {
      statusSub.textContent =
        i === 0
          ? "Routing via OpenRouter Free Vision..."
          : `Retrying via OpenRouter (${model})...`;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 32000);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "X-Title": "GATE CSE 2028 Workspace",
        },
        body: JSON.stringify({
          model,
          temperature: 0.1,
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: DIGITIZER_PROMPT },
                { type: "image_url", image_url: { url: dataUri } },
              ],
            },
          ],
        }),
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        lastErr = new Error(
          err.error?.message || `OpenRouter HTTP ${res.status}`,
        );
        if (i < models.length - 1) await sleep(1000);
        continue;
      }

      const json = await res.json();
      const rawText = json.choices?.[0]?.message?.content || "";
      if (!rawText) {
        lastErr = new Error("Empty response from OpenRouter");
        continue;
      }

      const parsed = parseAiJsonResponse(rawText);
      return postProcessExtractedQuestions(parsed);
    } catch (e) {
      clearTimeout(timer);
      lastErr = e.name === "AbortError" ? new Error("OpenRouter timed out") : e;
      if (i < models.length - 1) await sleep(1000);
    }
  }
  throw lastErr || new Error("OpenRouter extraction failed");
}

// Discover working Gemini Flash models for AIza... keys
let cachedGeminiModels = null;

async function getWorkingGeminiModels(apiKey) {
  if (cachedGeminiModels && cachedGeminiModels.length) {
    return cachedGeminiModels;
  }
  const preferredOrder = [
    "gemini-3.5-flash-lite",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash-lite",
    "gemini-2.0-flash",
    "gemini-3.8-flash",
    "gemini-2.5-flash",
  ];
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`,
    );
    if (!res.ok) return ["gemini-3.5-flash-lite", "gemini-3.8-flash"];
    const json = await res.json();
    const available = (json.models || [])
      .filter(
        (m) =>
          Array.isArray(m.supportedGenerationMethods) &&
          m.supportedGenerationMethods.includes("generateContent") &&
          /flash/i.test(m.name) &&
          !/tts|audio|image|thinking|exp/i.test(m.name),
      )
      .map((m) => m.name.replace(/^models\//, ""));

    available.sort((a, b) => {
      const ia = preferredOrder.indexOf(a);
      const ib = preferredOrder.indexOf(b);
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      return (/lite/i.test(a) ? 0 : 1) - (/lite/i.test(b) ? 0 : 1);
    });

    if (available.length > 0) {
      cachedGeminiModels = available.slice(0, 4);
      return cachedGeminiModels;
    }
  } catch {}
  return ["gemini-3.5-flash-lite", "gemini-3.8-flash"];
}

// Gemini Caller with automatic model failover
async function callGeminiVision(apiKey, base64Data, mimeType) {
  const models = await getWorkingGeminiModels(apiKey);
  let lastErr = null;

  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    const statusSub = $("aiStatusSub");
    if (statusSub) {
      statusSub.textContent =
        i === 0
          ? `Querying Gemini (${model})...`
          : `Gemini busy — trying ${model}...`;
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: DIGITIZER_PROMPT },
                { inline_data: { mime_type: mimeType, data: base64Data } },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            response_mime_type: "application/json",
          },
        }),
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        lastErr = new Error(err.error?.message || `Gemini HTTP ${res.status}`);
        if (i < models.length - 1) await sleep(1200);
        continue;
      }

      const json = await res.json();
      const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (!rawText) {
        lastErr = new Error("Empty response from Gemini");
        continue;
      }

      const parsed = parseAiJsonResponse(rawText);
      return postProcessExtractedQuestions(parsed);
    } catch (e) {
      clearTimeout(timer);
      lastErr = e.name === "AbortError" ? new Error("Gemini timed out") : e;
      if (i < models.length - 1) await sleep(1200);
    }
  }
  throw lastErr || new Error("Gemini extraction failed");
}

// Universal Multi-Provider Failover Router
async function runDigitizerRouter(keys, base64Data, mimeType) {
  let lastError = null;

  for (let kIdx = 0; kIdx < keys.length; kIdx++) {
    const key = keys[kIdx];
    const provider = detectProvider(key);

    if (kIdx > 0) {
      const statusSub = $("aiStatusSub");
      if (statusSub) {
        statusSub.textContent = `Primary provider busy — failing over to ${providerLabel(provider)}...`;
      }
    }

    try {
      if (provider === "openrouter") {
        return await callOpenRouterVision(key, base64Data, mimeType);
      } else {
        return await callGeminiVision(key, base64Data, mimeType);
      }
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("All configured AI providers failed.");
}

// 10. Interactive Workstation: Render, Solve, Grade, Edit
function renderPyqBank() {
  const container = $("pyqBankList");
  const summary = $("pyqBankSummary");
  const subFilter = $("pyqSubjectFilter")?.value || "all";
  const statFilter = $("pyqStatusFilter")?.value || "all";

  if (!container) return;

  const allBank = data.pyqBank || [];
  const attemptedBank = allBank.filter((q) => q.solved);
  const netScored = attemptedBank.reduce((sum, q) => sum + calcGateScore(q), 0);
  const maxPossible = attemptedBank.reduce(
    (sum, q) => sum + (Number(q.marks) || 1),
    0,
  );

  const questions = allBank.filter((q) => {
    const matchSub = subFilter === "all" || q.subject === subFilter;
    if (!matchSub) return false;
    if (statFilter === "unattempted") return !q.solved;
    if (statFilter === "wrong") return q.solved && !q.isCorrect;
    if (statFilter === "correct") return q.solved && q.isCorrect;
    return true;
  });

  summary.innerHTML = `${allBank.length} indexed · ${questions.length} shown · Net GATE Score: <b style="color:var(--accent)">${netScored.toFixed(2)} / ${maxPossible}</b>`;

  if (questions.length === 0) {
    container.innerHTML = `<div class="empty">No questions found. Paste a screenshot (Ctrl+V) or upload a PDF clip above.</div>`;
    return;
  }

  container.innerHTML = questions
    .map((q, idx) => {
      const isSolved = !!q.solved;
      const isCorrect = q.isCorrect;
      const qType = (q.type || "MCQ").toUpperCase();
      const hasOptions = q.options && q.options.length > 0;

      return `
      <div class="pyq-card" id="card-${q.id}">
        <div class="pyq-card-head">
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span class="pyq-badge">${esc(q.subject)}</span>
            ${q.year ? `<span class="pill">GATE ${esc(q.year)}</span>` : ""}
            <span class="pill">${esc(qType)} · ${esc(q.marks || 1)} Mark</span>
            <span class="pill ${isSolved ? (isCorrect ? "good" : "warn") : ""}">
              ${isSolved ? (isCorrect ? "✓ Solved Correct" : "✕ Solved Incorrect") : "○ Not Attempted"}
            </span>
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            <button class="btn sm" onclick="openEditPyqModal('${q.id}')" title="Edit Question & Key">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span>Edit</span>
            </button>
            <button class="btn sm danger" onclick="deletePyq('${q.id}')" title="Delete Question">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        <div class="pyq-question"><b>Q${idx + 1}.</b> ${esc(q.question)}</div>

        <form class="pyq-quiz-form" id="form-${q.id}" onsubmit="submitPyqAnswer(event, '${q.id}')">
          ${
            hasOptions
              ? `
            <div class="pyq-options-container">
              ${q.options
                .map((opt, optIdx) => {
                  const optLetter =
                    ["A", "B", "C", "D", "E", "F"][optIdx] ||
                    String(optIdx + 1);
                  const isChecked =
                    q.userAnswer &&
                    (Array.isArray(q.userAnswer)
                      ? q.userAnswer.includes(optLetter)
                      : q.userAnswer === optLetter);
                  const inputType = qType === "MSQ" ? "checkbox" : "radio";

                  let labelClass = "pyq-option-label";
                  if (isChecked) labelClass += " opt-selected";

                  if (isSolved) {
                    const isKey =
                      q.correctAnswer &&
                      q.correctAnswer.toUpperCase().includes(optLetter);
                    if (isKey) labelClass += " opt-correct";
                    else if (isChecked && !isKey) labelClass += " opt-wrong";
                  }

                  return `
                    <label class="${labelClass}">
                      <input type="${inputType}" name="ans_${q.id}" value="${optLetter}" ${isChecked ? "checked" : ""} ${isSolved ? "disabled" : ""}>
                      <span>${esc(normalizeLatex(opt))}</span>
                    </label>
                  `;
                })
                .join("")}
            </div>
          `
              : `
            <div class="pyq-nat-box">
              <label style="font-size:12px; font-weight:600; color:var(--muted);">Your Answer (NAT):</label>
              <input type="text" id="nat_${q.id}" placeholder="e.g. 532" value="${q.userAnswer ? esc(q.userAnswer) : ""}" ${isSolved ? "disabled" : ""}>
            </div>
          `
          }

          ${
            isSolved
              ? `
            <div class="pyq-verdict-banner ${isCorrect ? "correct" : "incorrect"}">
              ${isCorrect ? `✓ Correct (+${Number(q.marks) || 1}M)` : `✕ Incorrect (${calcGateScore(q) < 0 ? calcGateScore(q).toFixed(2) + "M" : "0M · No Negative"})`}
              <span style="margin-left: auto; font-size: 11px;">Correct Key: <b>${esc(q.correctAnswer)}</b></span>
            </div>
          `
              : `
            <div style="display: flex; gap: 8px; margin-top: 10px;">
              <button type="submit" class="btn primary" style="font-size: 12px; padding: 7px 16px;">
                Submit Answer
              </button>
            </div>
          `
          }
        </form>

        <div id="sol-${q.id}" style="display: ${isSolved ? "block" : "none"}; margin-top: 14px;">
          ${
            q.explanation
              ? `
            <div class="pyq-explanation">
              <b>Verified Solution:</b><br>${esc(q.explanation)}
            </div>
          `
              : ""
          }
        </div>

        <div class="pyq-actions" style="margin-top: 10px; border-top: 1px solid var(--line); padding-top: 10px;">
          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <button class="btn" style="padding: 4px 8px; font-size: 11px;" onclick="toggleSolution('${q.id}')">
              👁 ${isSolved ? "Hide Steps" : "Peek Solution"}
            </button>
            ${
              isSolved
                ? `
              <button class="btn" style="padding: 4px 8px; font-size: 11px;" onclick="resetPyqSolved('${q.id}')">
                ↺ Re-attempt
              </button>
            `
                : ""
            }
          </div>
          <span>Topic: <b>${esc(q.topic || "General")}</b></span>
        </div>
      </div>
    `;
    })
    .join("");

  renderMathIn(container);
}

function submitPyqAnswer(e, id) {
  e.preventDefault();
  const q = (data.pyqBank || []).find((item) => item.id === id);
  if (!q) return;

  const qType = (q.type || "MCQ").toUpperCase();
  let userAns = null;
  let isCorrect = false;

  if (qType === "NAT") {
    const input = $(`nat_${id}`);
    userAns = input ? input.value.trim() : "";
    if (!userAns) {
      toast("Please type your numeric answer first!");
      return;
    }
    isCorrect = checkNatAnswer(userAns, q.correctAnswer);
  } else if (qType === "MSQ") {
    const checked = Array.from(
      document.querySelectorAll(`input[name="ans_${id}"]:checked`),
    ).map((el) => el.value);
    if (!checked.length) {
      toast("Please select at least one option!");
      return;
    }
    userAns = checked;
    const correctLetters = String(q.correctAnswer || "")
      .toUpperCase()
      .replace(/[^A-D]/g, "")
      .split("")
      .sort()
      .join("");
    const userLetters = [...checked].sort().join("");
    isCorrect = correctLetters === userLetters;
  } else {
    const selected = document.querySelector(`input[name="ans_${id}"]:checked`);
    if (!selected) {
      toast("Please select an option!");
      return;
    }
    userAns = selected.value;
    const correctLetter =
      String(q.correctAnswer || "")
        .toUpperCase()
        .replace(/[^A-D]/g, "")[0] || "";
    isCorrect = userAns.toUpperCase() === correctLetter;
  }

  q.solved = true;
  q.userAnswer = userAns;
  q.isCorrect = isCorrect;

  data.practice = data.practice.filter((p) => p.pyqId !== q.id);
  data.practice.push({
    id: "prac_" + Date.now(),
    pyqId: q.id,
    date: today(),
    subject: q.subject || "General Aptitude",
    type: "GATE PYQ",
    attempted: 1,
    correct: isCorrect ? 1 : 0,
    notes: `${q.subject} - Q (${isCorrect ? "Correct" : "Incorrect"})`,
  });

  saveData();
  renderPyqBank();
  toast(
    isCorrect ? "✓ Correct Answer!" : "✕ Incorrect answer. Review the steps!",
  );
}

function resetPyqSolved(id) {
  const q = (data.pyqBank || []).find((item) => item.id === id);
  if (!q) return;

  q.solved = false;
  q.userAnswer = null;
  q.isCorrect = null;
  data.practice = data.practice.filter((p) => p.pyqId !== id);
  saveData();
  renderPyqBank();
  toast("Question reset. You can solve it again!");
}

function toggleSolution(id) {
  const sol = $(`sol-${id}`);
  if (sol) {
    sol.style.display = sol.style.display === "none" ? "block" : "none";
  }
}

function deletePyq(id) {
  openConfirmModal(
    "Delete Question",
    "Remove this digitized question from your PYQ bank?",
    () => {
      data.pyqBank = data.pyqBank.filter((q) => q.id !== id);
      data.practice = data.practice.filter((p) => p.pyqId !== id);
      saveData();
      renderPyqBank();
      toast("Question deleted");
    },
  );
}

function openEditPyqModal(id) {
  const q = (data.pyqBank || []).find((item) => item.id === id);
  if (!q) return;

  const modal = $("modal");
  const modalTitle = $("modalTitle");
  const modalBody = $("modalBody");

  modalTitle.textContent = "Edit Question & Answer Key";
  modalBody.innerHTML = `
    <div class="field" style="margin-bottom: 10px;">
      <label>Question Text</label>
      <textarea id="editQuestionText" rows="3" style="font-size:12px;">${esc(q.question)}</textarea>
    </div>
    <div class="form-grid" style="margin-bottom: 10px;">
      <div class="field">
        <label>Type (MCQ, MSQ, NAT)</label>
        <select id="editQuestionType">
          <option value="MCQ" ${q.type === "MCQ" ? "selected" : ""}>MCQ</option>
          <option value="MSQ" ${q.type === "MSQ" ? "selected" : ""}>MSQ</option>
          <option value="NAT" ${q.type === "NAT" ? "selected" : ""}>NAT</option>
        </select>
      </div>
      <div class="field">
        <label>Correct Answer / Key</label>
        <input type="text" id="editCorrectAnswer" value="${esc(q.correctAnswer || "")}" placeholder="e.g. B or B, D or 532">
      </div>
      <div class="field">
        <label>Marks</label>
        <input type="number" id="editMarks" value="${q.marks || 1}">
      </div>
    </div>
    <div class="field" style="margin-bottom: 14px;">
      <label>Explanation / Steps</label>
      <textarea id="editExplanation" rows="4" style="font-size:12px;">${esc(q.explanation || "")}</textarea>
    </div>
    <div class="modal-actions">
      <button type="button" class="btn" onclick="closeModal()">Cancel</button>
      <button type="button" class="btn primary" onclick="saveEditedPyq('${q.id}')">Save Changes</button>
    </div>
  `;

  modal.classList.add("open");
}

function saveEditedPyq(id) {
  const q = (data.pyqBank || []).find((item) => item.id === id);
  if (!q) return;

  q.question = $("editQuestionText").value.trim();
  q.type = $("editQuestionType").value;
  q.correctAnswer = $("editCorrectAnswer").value.trim().toUpperCase();
  q.marks = Number($("editMarks").value) || 1;
  q.explanation = $("editExplanation").value.trim();

  const letters = Array.from(
    new Set(q.correctAnswer.match(/[A-D]/g) || []),
  ).sort();
  if (Array.isArray(q.options) && q.options.length > 0 && letters.length > 1) {
    q.type = "MSQ";
    q.correctAnswer = letters.join(", ");
  }

  q.solved = false;
  q.userAnswer = null;
  q.isCorrect = null;
  data.practice = data.practice.filter((p) => p.pyqId !== id);

  saveData();
  renderPyqBank();
  closeModal();
  toast("Question and key updated!");
}

/**
 * =============================================================================
 * 11. Authentic TCS iON GATE Virtual Scientific Calculator Engine
 * =============================================================================
 */
(function initGateCalculator() {
  const calcBox = $("gateCalc");
  const toggleBtn = $("calcToggleBtn");
  const closeBtn = $("calcCloseBtn");
  const exprEl = $("calcExpr");
  const dispEl = $("calcDisplay");
  const keysEl = $("calcKeys");
  const memBadge = $("calcMemBadge");

  if (!calcBox || !keysEl) return;

  let memory = 0;
  let tokens = [];
  let exprLabels = [];
  let currentEntry = "0";
  let isNewEntry = true;
  let justEvaluated = false;

  toggleBtn?.addEventListener("click", () => calcBox.classList.toggle("open"));
  closeBtn?.addEventListener("click", () => calcBox.classList.remove("open"));

  function isDeg() {
    return (
      document.querySelector('input[name="calcAngle"]:checked')?.value !== "RAD"
    );
  }

  function updateMemBadge() {
    if (memBadge) memBadge.hidden = memory === 0;
  }

  function syncScreen() {
    exprEl.textContent = exprLabels.join(" ");
    dispEl.value = currentEntry;
  }

  function formatNum(n) {
    if (!Number.isFinite(n)) return "Error";
    const clean = Number(n.toPrecision(12));
    return String(clean);
  }

  function factorial(n) {
    if (!Number.isInteger(n) || n < 0 || n > 170) return NaN;
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  function applyUnary(fn, x) {
    const deg = isDeg();
    const toRad = (v) => (deg ? (v * Math.PI) / 180 : v);
    const fromRad = (v) => (deg ? (v * 180) / Math.PI : v);

    switch (fn) {
      case "neg":
        return -x;
      case "sqr":
        return x * x;
      case "cube":
        return x * x * x;
      case "sqrt":
        return x < 0 ? NaN : Math.sqrt(x);
      case "cbrt":
        return Math.cbrt(x);
      case "inv":
        return x === 0 ? NaN : 1 / x;
      case "fact":
        return factorial(x);
      case "ln":
        return x <= 0 ? NaN : Math.log(x);
      case "log10":
        return x <= 0 ? NaN : Math.log10(x);
      case "log2":
        return x <= 0 ? NaN : Math.log2(x);
      case "exp":
        return Math.exp(x);
      case "pow10":
        return Math.pow(10, x);
      case "sin":
        return Math.abs(Math.sin(toRad(x))) < 1e-15 ? 0 : Math.sin(toRad(x));
      case "cos":
        return Math.abs(Math.cos(toRad(x))) < 1e-15 ? 0 : Math.cos(toRad(x));
      case "tan":
        return Math.abs(Math.cos(toRad(x))) < 1e-15 ? NaN : Math.tan(toRad(x));
      case "asin":
        return x < -1 || x > 1 ? NaN : fromRad(Math.asin(x));
      case "acos":
        return x < -1 || x > 1 ? NaN : fromRad(Math.acos(x));
      case "atan":
        return fromRad(Math.atan(x));
      case "sinh":
        return Math.sinh(x);
      case "cosh":
        return Math.cosh(x);
      case "tanh":
        return Math.tanh(x);
      case "asinh":
        return Math.asinh(x);
      case "acosh":
        return x < 1 ? NaN : Math.acosh(x);
      case "atanh":
        return x <= -1 || x >= 1 ? NaN : Math.atanh(x);
      default:
        return x;
    }
  }

  function evaluateTokens(tokList) {
    const prec = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      Mod: 2,
      "^": 3,
      yroot: 3,
      logy: 3,
      Exp: 4,
    };
    const rightAssoc = { "^": true, yroot: true, logy: true, Exp: true };

    const values = [];
    const ops = [];

    function applyOp() {
      const op = ops.pop();
      const b = values.pop();
      const a = values.pop();
      if (a === undefined || b === undefined) throw new Error("Syntax");
      switch (op) {
        case "+":
          values.push(a + b);
          break;
        case "-":
          values.push(a - b);
          break;
        case "*":
          values.push(a * b);
          break;
        case "/":
          if (b === 0) throw new Error("DivZero");
          values.push(a / b);
          break;
        case "Mod":
          if (b === 0) throw new Error("DivZero");
          values.push(a % b);
          break;
        case "^":
          values.push(Math.pow(a, b));
          break;
        case "yroot":
          if (b === 0) throw new Error("DivZero");
          values.push(Math.pow(a, 1 / b));
          break;
        case "logy":
          if (a <= 0 || b <= 0 || b === 1) throw new Error("Domain");
          values.push(Math.log(a) / Math.log(b));
          break;
        case "Exp":
          values.push(a * Math.pow(10, b));
          break;
      }
    }

    for (const t of tokList) {
      if (typeof t === "number") {
        values.push(t);
      } else if (t === "(") {
        ops.push(t);
      } else if (t === ")") {
        while (ops.length && ops[ops.length - 1] !== "(") applyOp();
        if (!ops.length) throw new Error("Mismatch");
        ops.pop();
      } else if (prec[t]) {
        while (
          ops.length &&
          ops[ops.length - 1] !== "(" &&
          (prec[ops[ops.length - 1]] > prec[t] ||
            (prec[ops[ops.length - 1]] === prec[t] && !rightAssoc[t]))
        ) {
          applyOp();
        }
        ops.push(t);
      }
    }

    while (ops.length) {
      if (ops[ops.length - 1] === "(") throw new Error("Mismatch");
      applyOp();
    }

    if (values.length !== 1 || !Number.isFinite(values[0])) {
      throw new Error("Math");
    }
    return values[0];
  }

  function resetAll() {
    tokens = [];
    exprLabels = [];
    currentEntry = "0";
    isNewEntry = true;
    justEvaluated = false;
    syncScreen();
  }

  keysEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    if (currentEntry === "Error" && btn.dataset.act !== "clear") {
      resetAll();
    }

    if (btn.dataset.digit !== undefined) {
      const d = btn.dataset.digit;
      if (justEvaluated) {
        tokens = [];
        exprLabels = [];
        justEvaluated = false;
      }
      if (isNewEntry) {
        currentEntry = d === "." ? "0." : d;
        isNewEntry = false;
      } else {
        if (d === "." && currentEntry.includes(".")) return;
        currentEntry = currentEntry === "0" && d !== "." ? d : currentEntry + d;
      }
      syncScreen();
      return;
    }

    if (btn.dataset.const) {
      if (justEvaluated) {
        tokens = [];
        exprLabels = [];
        justEvaluated = false;
      }
      currentEntry = formatNum(btn.dataset.const === "PI" ? Math.PI : Math.E);
      isNewEntry = true;
      syncScreen();
      return;
    }

    if (btn.dataset.unary) {
      const fn = btn.dataset.unary;
      const val = parseFloat(currentEntry);
      if (Number.isNaN(val)) return;

      const res = applyUnary(fn, val);
      if (!Number.isFinite(res)) {
        currentEntry = "Error";
        isNewEntry = true;
        syncScreen();
        return;
      }

      const labelMap = {
        sin: isDeg() ? `sind(${val})` : `sinr(${val})`,
        cos: isDeg() ? `cosd(${val})` : `cosr(${val})`,
        tan: isDeg() ? `tand(${val})` : `tanr(${val})`,
        asin: `asin(${val})`,
        acos: `acos(${val})`,
        atan: `atan(${val})`,
        sqr: `sqr(${val})`,
        cube: `cube(${val})`,
        sqrt: `√(${val})`,
        cbrt: `∛(${val})`,
        inv: `1/(${val})`,
        fact: `fact(${val})`,
        ln: `ln(${val})`,
        log10: `log(${val})`,
        log2: `log₂(${val})`,
        exp: `e^(${val})`,
        pow10: `10^(${val})`,
        neg: `-(${val})`,
      };

      if (justEvaluated) {
        tokens = [];
        exprLabels = [];
        justEvaluated = false;
      }

      if (fn !== "neg") {
        const label = labelMap[fn] || `${fn}(${val})`;
        const lastLabel = exprLabels[exprLabels.length - 1] || "";
        if (
          isNewEntry &&
          exprLabels.length &&
          lastLabel.endsWith(")") &&
          lastLabel !== ")"
        ) {
          exprLabels[exprLabels.length - 1] = `${fn}(${lastLabel})`;
        } else {
          exprLabels.push(label);
        }
      }
      currentEntry = formatNum(res);
      isNewEntry = true;
      syncScreen();
      return;
    }

    if (btn.dataset.paren) {
      const p = btn.dataset.paren;
      if (justEvaluated) {
        tokens = [];
        exprLabels = [];
        justEvaluated = false;
      }
      if (p === "(") {
        const last = tokens[tokens.length - 1];
        if (typeof last === "number" || last === ")") {
          tokens.push("*");
          exprLabels.push("*");
        }
        tokens.push("(");
        exprLabels.push("(");
        isNewEntry = true;
      } else {
        const openCount = tokens.filter((t) => t === "(").length;
        const closeCount = tokens.filter((t) => t === ")").length;
        if (openCount <= closeCount) return;

        if (tokens[tokens.length - 1] !== ")") {
          const val = parseFloat(currentEntry);
          tokens.push(val);
          if (
            !exprLabels.length ||
            !exprLabels[exprLabels.length - 1].endsWith(")")
          ) {
            exprLabels.push(String(val));
          }
        }
        tokens.push(")");
        exprLabels.push(")");
        const lastOpenIdx = tokens.lastIndexOf("(");
        if (lastOpenIdx !== -1) {
          const subTokens = tokens.slice(lastOpenIdx + 1, -1);
          try {
            const subRes = evaluateTokens(subTokens);
            currentEntry = formatNum(subRes);
          } catch {}
        }
        isNewEntry = true;
      }
      syncScreen();
      return;
    }

    if (btn.dataset.bin) {
      const op = btn.dataset.bin;
      const val = parseFloat(currentEntry);

      if (justEvaluated) {
        tokens = [val, op];
        exprLabels = [String(val), op];
        justEvaluated = false;
        isNewEntry = true;
        syncScreen();
        return;
      }

      if (
        isNewEntry &&
        tokens.length &&
        typeof tokens[tokens.length - 1] === "string" &&
        tokens[tokens.length - 1] !== "(" &&
        tokens[tokens.length - 1] !== ")"
      ) {
        tokens[tokens.length - 1] = op;
        exprLabels[exprLabels.length - 1] = op;
        syncScreen();
        return;
      }

      if (tokens[tokens.length - 1] !== ")") {
        tokens.push(val);
        const lastLabel = exprLabels[exprLabels.length - 1] || "";
        if (!lastLabel.endsWith(")")) {
          exprLabels.push(String(val));
        }
      }
      tokens.push(op);
      exprLabels.push(op);
      isNewEntry = true;
      syncScreen();
      return;
    }

    if (btn.dataset.mem) {
      const m = btn.dataset.mem;
      const val = parseFloat(currentEntry) || 0;
      if (m === "MC") memory = 0;
      else if (m === "MR") {
        currentEntry = formatNum(memory);
        isNewEntry = true;
      } else if (m === "MS") {
        memory = val;
        isNewEntry = true;
      } else if (m === "M+") {
        memory += val;
        isNewEntry = true;
      } else if (m === "M-") {
        memory -= val;
        isNewEntry = true;
      }
      updateMemBadge();
      syncScreen();
      return;
    }

    const act = btn.dataset.act;
    if (act === "clear") {
      resetAll();
    } else if (act === "back") {
      if (isNewEntry || justEvaluated) return;
      currentEntry = currentEntry.length > 1 ? currentEntry.slice(0, -1) : "0";
      if (currentEntry === "-") currentEntry = "0";
      syncScreen();
    } else if (act === "copy") {
      navigator.clipboard?.writeText(currentEntry);
      toast("Copied: " + currentEntry);
    } else if (act === "eval") {
      if (justEvaluated) return;
      const val = parseFloat(currentEntry);
      const finalTokens = [...tokens];

      if (finalTokens[finalTokens.length - 1] !== ")") {
        finalTokens.push(val);
        const lastLabel = exprLabels[exprLabels.length - 1] || "";
        if (!lastLabel.endsWith(")")) {
          exprLabels.push(String(val));
        }
      }

      const openCount = finalTokens.filter((t) => t === "(").length;
      const closeCount = finalTokens.filter((t) => t === ")").length;
      for (let i = 0; i < openCount - closeCount; i++) {
        finalTokens.push(")");
        exprLabels.push(")");
      }

      try {
        const result = evaluateTokens(finalTokens);
        exprLabels.push("=");
        currentEntry = formatNum(result);
        tokens = [];
        isNewEntry = true;
        justEvaluated = true;
        syncScreen();
      } catch {
        currentEntry = "Error";
        tokens = [];
        exprLabels = [];
        isNewEntry = true;
        syncScreen();
      }
    }
  });
})();

/**
 * =============================================================================
 * 12. Live Study Session Stopwatch
 * =============================================================================
 */
(function initStudyStopwatch() {
  const disp = $("stopwatchDisplay");
  const startBtn = $("swStartBtn");
  const fillBtn = $("swFillBtn");
  const resetBtn = $("swResetBtn");
  if (!disp || !startBtn) return;

  const SW_KEY = "gate-stopwatch-state";
  let state = JSON.parse(localStorage.getItem(SW_KEY) || "null") || {
    elapsedMs: 0,
    running: false,
    lastTick: null,
  };

  function getElapsedMs() {
    if (state.running && state.lastTick) {
      return state.elapsedMs + (Date.now() - state.lastTick);
    }
    return state.elapsedMs;
  }

  function saveSw() {
    localStorage.setItem(SW_KEY, JSON.stringify(state));
  }

  function formatMs(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  function tick() {
    disp.textContent = formatMs(getElapsedMs());
    startBtn.textContent = state.running ? "Pause" : "Start";
  }

  startBtn.addEventListener("click", () => {
    if (state.running) {
      state.elapsedMs = getElapsedMs();
      state.running = false;
      state.lastTick = null;
    } else {
      state.running = true;
      state.lastTick = Date.now();
    }
    saveSw();
    tick();
  });

  fillBtn.addEventListener("click", () => {
    const ms = getElapsedMs();
    if (ms < 60000) {
      toast("Study at least 1 minute before logging!");
      return;
    }
    const hours = Math.max(0.1, Number((ms / 3600000).toFixed(1)));
    const hoursInput = document.querySelector('#studyForm input[name="hours"]');
    if (hoursInput) {
      hoursInput.value = hours;
      hoursInput.focus();
      toast(`Filled ${hours}h into session form`);
    }
  });

  resetBtn.addEventListener("click", () => {
    state = { elapsedMs: 0, running: false, lastTick: null };
    saveSw();
    tick();
    toast("Stopwatch reset");
  });

  setInterval(tick, 1000);
  tick();
})();

/**
 * =============================================================================
 * 13. BYOK Guide & Multi-Provider API Key Verification
 * =============================================================================
 */
function syncByokView() {
  const pInput = $("byokPageInput");
  const bInput = $("byokBackupInput");
  const badge = $("byokStatusBadge");
  const topPill = $("activeProviderPill");
  const pKey = getPrimaryKey();
  const bKey = getBackupKey();

  if (pInput) pInput.value = pKey;
  if (bInput) bInput.value = bKey;

  const pProv = detectProvider(pKey);
  const bProv = detectProvider(bKey);

  if (badge) {
    if (pProv && bProv) {
      badge.textContent = `${providerLabel(pProv)} + ${providerLabel(bProv)} Backup`;
      badge.className = "pill good";
    } else if (pProv) {
      badge.textContent = `${providerLabel(pProv)} Saved`;
      badge.className = "pill good";
    } else if (bProv) {
      badge.textContent = `${providerLabel(bProv)} Saved`;
      badge.className = "pill good";
    } else {
      badge.textContent = "Not Configured";
      badge.className = "pill warn";
    }
  }

  if (topPill) {
    if (pProv && bProv) {
      topPill.textContent = `${providerLabel(pProv)} + Failover`;
      topPill.className = "pill good";
    } else if (pProv || bProv) {
      topPill.textContent = providerLabel(pProv || bProv);
      topPill.className = "pill good";
    } else {
      topPill.textContent = "No Key";
      topPill.className = "pill warn";
    }
  }
}

async function verifySingleKey(key) {
  const provider = detectProvider(key);
  if (provider === "openrouter") {
    const res = await fetch("https://openrouter.ai/api/v1/auth/key", {
      headers: { Authorization: `Bearer ${key}` },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `OpenRouter HTTP ${res.status}`);
    }
    return "OpenRouter";
  } else {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`,
    );
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `Gemini HTTP ${res.status}`);
    }
    return "Gemini";
  }
}

(function initByokPage() {
  const pInput = $("byokPageInput");
  const bInput = $("byokBackupInput");
  const toggleBtn = $("byokToggleVisBtn");
  const saveTestBtn = $("byokSaveTestBtn");
  const clearBtn = $("byokClearBtn");
  const feedback = $("byokTestFeedback");
  const badge = $("byokStatusBadge");

  if (!pInput || !saveTestBtn) return;

  toggleBtn?.addEventListener("click", () => {
    const isPass = pInput.type === "password";
    pInput.type = isPass ? "text" : "password";
    if (bInput) bInput.type = isPass ? "text" : "password";
    toggleBtn.textContent = isPass ? "Hide" : "Show";
  });

  clearBtn?.addEventListener("click", () => {
    localStorage.removeItem("gemini-api-key");
    localStorage.removeItem("ai-backup-api-key");
    pInput.value = "";
    if (bInput) bInput.value = "";
    cachedGeminiModels = null;
    syncByokView();
    if (feedback) {
      feedback.textContent = "API keys removed from local storage.";
      feedback.style.color = "var(--muted)";
    }
    toast("API keys cleared");
  });

  saveTestBtn.addEventListener("click", async () => {
    const pKey = pInput.value.trim();
    const bKey = (bInput?.value || "").trim();

    if (!pKey && !bKey) {
      toast("Please paste an OpenRouter or Gemini API key first");
      pInput.focus();
      return;
    }

    localStorage.setItem("gemini-api-key", pKey);
    localStorage.setItem("ai-backup-api-key", bKey);
    cachedGeminiModels = null;
    syncByokView();

    saveTestBtn.disabled = true;
    saveTestBtn.textContent = "Testing...";
    if (feedback) {
      feedback.textContent = "Verifying configured API key(s)...";
      feedback.style.color = "var(--accent)";
    }

    try {
      const verified = [];
      if (pKey) verified.push(await verifySingleKey(pKey));
      if (bKey) verified.push(await verifySingleKey(bKey));

      if (badge) {
        badge.textContent = `✓ Verified (${verified.join(" + ")})`;
        badge.className = "pill good";
      }
      if (feedback) {
        feedback.textContent = `Connected to ${verified.join(" and ")}! Paste any screenshot (Ctrl+V) or upload a PDF in AI PYQ Bank.`;
        feedback.style.color = "var(--green)";
      }
      toast("API key(s) verified!");
    } catch (err) {
      if (badge) {
        badge.textContent = "Verification Error";
        badge.className = "pill warn";
      }
      if (feedback) {
        feedback.textContent = `Verification failed: ${err.message}`;
        feedback.style.color = "var(--red)";
      }
      toast("API key check failed");
    } finally {
      saveTestBtn.disabled = false;
      saveTestBtn.textContent = "Save & Test Keys";
    }
  });

  syncByokView();
})();
