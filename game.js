const BASE_PANEL_NUMBER = 284;
const BASE_DATE = "2026-10-15";
const MAX_ERRORS = 5;
const STORAGE_KEY = "palavras-em-comum.progress.v1";
const PUZZLES = [
  {
    groups: [
      { id: "livro", name: "Partes de um livro", explanation: "Seções que organizam uma obra escrita.", terms: ["prólogo", "capítulo", "índice", "epílogo"], symbol: "▰" },
      { id: "flores", name: "Flores", explanation: "Plantas reconhecidas por suas flores ornamentais.", terms: ["tulipa", "lírio", "girassol", "margarida"], symbol: "✿" },
      { id: "temperos", name: "Temperos", explanation: "Ingredientes usados para aromatizar preparações.", terms: ["canela", "gengibre", "açafrão", "cominho"], symbol: "◆" },
      { id: "instrumentos", name: "Instrumentos musicais", explanation: "Objetos usados para produzir música.", terms: ["flauta", "tambor", "violão", "piano"], symbol: "♫" }
    ]
  },
  {
    groups: [
      { id: "raizes", name: "Raízes comestíveis", explanation: "Vegetais cuja parte consumida cresce sob a terra.", terms: ["cenoura", "beterraba", "nabo", "rabanete"], symbol: "◆" },
      { id: "escola", name: "Material escolar", explanation: "Itens usados para estudar e organizar atividades.", terms: ["caderno", "régua", "borracha", "estojo"], symbol: "▰" },
      { id: "precipitacao", name: "Precipitação", explanation: "Água que cai da atmosfera em diferentes formas.", terms: ["chuva", "garoa", "granizo", "neve"], symbol: "◇" },
      { id: "instrumentos-cordas", name: "Instrumentos de cordas", explanation: "Instrumentos cujo som é produzido por cordas vibrantes.", terms: ["violino", "harpa", "cavaquinho", "violoncelo"], symbol: "♫" }
    ]
  },
  {
    groups: [
      { id: "passagens", name: "Passagens sobre ou sob obstáculos", explanation: "Estruturas que permitem atravessar um desnível ou barreira.", terms: ["ponte", "túnel", "passarela", "viaduto"], symbol: "▱" },
      { id: "sons", name: "Sons de animais", explanation: "Nomes tradicionais de vocalizações animais.", terms: ["latido", "miado", "mugido", "relincho"], symbol: "♫" },
      { id: "formas", name: "Formas geométricas", explanation: "Figuras planas com contornos distintos.", terms: ["triângulo", "retângulo", "losango", "círculo"], symbol: "◇" },
      { id: "rosto", name: "Partes do rosto", explanation: "Regiões e traços da face.", terms: ["queixo", "testa", "bochecha", "sobrancelha"], symbol: "○" }
    ]
  },
  {
    groups: [
      { id: "frutas", name: "Frutas", explanation: "Frutos comuns consumidos in natura ou em preparações.", terms: ["maçã", "pera", "mamão", "abacaxi"], symbol: "●" },
      { id: "roupas", name: "Peças de roupa", explanation: "Peças usadas para vestir o corpo.", terms: ["casaco", "camisa", "calça", "vestido"], symbol: "▰" },
      { id: "preparo", name: "Modos de preparo", explanation: "Técnicas comuns para preparar alimentos.", terms: ["assar", "fritar", "ferver", "refogar"], symbol: "◆" },
      { id: "dancas", name: "Danças", explanation: "Estilos de dança de diferentes tradições.", terms: ["samba", "forró", "tango", "valsa"], symbol: "♫" }
    ]
  },
  {
    groups: [
      { id: "ferramentas", name: "Ferramentas manuais", explanation: "Ferramentas comuns para montagem e reparos.", terms: ["martelo", "serrote", "alicate", "chave inglesa"], symbol: "◆" },
      { id: "aves", name: "Aves", explanation: "Espécies de aves encontradas no Brasil.", terms: ["pardal", "sabiá", "canário", "arara"], symbol: "○" },
      { id: "solidos", name: "Sólidos geométricos", explanation: "Formas geométricas tridimensionais.", terms: ["cubo", "esfera", "cone", "cilindro"], symbol: "◇" },
      { id: "jardinagem", name: "Cuidados de jardinagem", explanation: "Ações usadas para cuidar de plantas e jardins.", terms: ["regar", "podar", "plantar", "colher"], symbol: "✿" }
    ]
  },
  {
    groups: [
      { id: "orgaos", name: "Órgãos internos", explanation: "Órgãos internos do corpo humano.", terms: ["coração", "pulmão", "fígado", "rim"], symbol: "○" },
      { id: "recipientes", name: "Recipientes", explanation: "Objetos usados para guardar ou servir conteúdos.", terms: ["garrafa", "jarro", "pote", "frasco"], symbol: "▰" },
      { id: "estacoes", name: "Estações do ano", explanation: "Os quatro períodos sazonais do ano.", terms: ["verão", "outono", "inverno", "primavera"], symbol: "◷" },
      { id: "percussao", name: "Instrumentos de percussão", explanation: "Instrumentos tocados por impacto ou fricção.", terms: ["pandeiro", "tamborim", "agogô", "reco-reco"], symbol: "♫" }
    ]
  },
  {
    groups: [
      { id: "trilhos", name: "Transportes sobre trilhos", explanation: "Veículos que se deslocam sobre trilhos.", terms: ["trem", "metrô", "bonde", "monotrilho"], symbol: "▰" },
      { id: "escrita", name: "Materiais de escrita", explanation: "Instrumentos usados para escrever ou marcar superfícies.", terms: ["caneta", "lápis", "giz", "marcador"], symbol: "✎" },
      { id: "abrigos", name: "Abrigos de animais", explanation: "Locais construídos ou usados por animais como abrigo.", terms: ["colmeia", "formigueiro", "ninho", "toca"], symbol: "○" },
      { id: "tempestades", name: "Tempestades e ventos fortes", explanation: "Fenômenos atmosféricos com ventos intensos.", terms: ["tornado", "furacão", "ciclone", "vendaval"], symbol: "◇" }
    ]
  }
];

const elements = Object.fromEntries([
  "daily-tab", "practice-tab", "archive-button", "contrast-toggle", "stats-button", "today-label", "panel-number",
  "selection-count", "error-count", "error-shapes", "solved-groups", "word-board", "clear-selection", "submit-group",
  "hint-button", "hint-guidance", "hint-message", "game-announcement", "completion-summary", "completion-title",
  "completion-detail", "share-result", "challenge-link", "next-practice", "stat-streak", "stat-wins", "stat-losses",
  "open-archive", "stats-dialog", "dialog-stats", "archive-dialog", "archive-list", "share-dialog", "share-text", "copy-share-text"
].map(id => [id, document.getElementById(id)]));

function blankProgress() {
  return { version: 1, games: {}, records: {}, highContrast: false };
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.version === 1) return { ...blankProgress(), ...saved, games: saved.games || {}, records: saved.records || {} };
  } catch { /* Storage may be unavailable or contain invalid JSON. */ }
  return blankProgress();
}

let progress = loadProgress();
let currentDate = getBrazilDateKey();
let todayNumber = getPanelNumber(currentDate);
let currentMode = "daily";
let currentGame = null;
let currentGameKey = "";
let sharePayload = "";

function getBrazilDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getPanelNumber(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const [baseYear, baseMonth, baseDay] = BASE_DATE.split("-").map(Number);
  const dayOffset = Math.floor((Date.UTC(year, month - 1, day) - Date.UTC(baseYear, baseMonth - 1, baseDay)) / 86400000);
  return BASE_PANEL_NUMBER + dayOffset;
}

function syncBrazilDay() {
  const nextDate = getBrazilDateKey();
  if (nextDate === currentDate) return;
  currentDate = nextDate;
  todayNumber = getPanelNumber(currentDate);
  if (currentMode === "daily") activateGame("daily", todayNumber, currentDate);
}

function puzzleIndexFor(panelNumber) {
  return ((panelNumber - BASE_PANEL_NUMBER) % PUZZLES.length + PUZZLES.length) % PUZZLES.length;
}

function getPuzzle(panelNumber) {
  return PUZZLES[puzzleIndexFor(panelNumber)];
}

function dateFromPanelNumber(panelNumber) {
  const offset = panelNumber - BASE_PANEL_NUMBER;
  const date = new Date(`${BASE_DATE}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

function formatDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", timeZone: "UTC" })
    .format(new Date(Date.UTC(year, month - 1, day)));
}

function formatWeekday(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long", timeZone: "UTC" })
    .format(new Date(Date.UTC(year, month - 1, day)));
}

function seededWords(panelNumber) {
  const words = getPuzzle(panelNumber).groups.flatMap(group => group.terms);
  let seed = panelNumber >>> 0;
  for (let index = words.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [words[index], words[swapIndex]] = [words[swapIndex], words[index]];
  }
  return words;
}

function createGame(mode, panelNumber, dateKey = currentDate) {
  return {
    version: 1,
    mode,
    panelNumber,
    dateKey,
    selectedWords: [],
    fixedTerms: [],
    solvedGroupIds: [],
    revealedGroupIds: [],
    hintTargetGroupId: null,
    hintsAvailable: 0,
    hintsUsed: 0,
    errors: 0,
    consecutiveErrors: 0,
    attempts: [],
    finished: false,
    outcome: null
  };
}

function makeGameKey(mode, panelNumber, dateKey) {
  if (mode === "daily") return `daily:${dateKey}`;
  return `${mode}:${panelNumber}`;
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    announce("Não foi possível salvar neste navegador. A partida continua aberta.", "error");
  }
}

function activateGame(mode, panelNumber, dateKey = currentDate) {
  currentMode = mode;
  currentGameKey = makeGameKey(mode, panelNumber, dateKey);
  let savedGame = progress.games[currentGameKey];
  if (!savedGame || savedGame.version !== 1 || (savedGame.finished && mode !== "daily")) {
    savedGame = createGame(mode, panelNumber, dateKey);
    progress.games[currentGameKey] = savedGame;
  }
  currentGame = savedGame;
  saveProgress();
  render();
}

function announce(message, kind = "") {
  const status = elements["game-announcement"];
  status.textContent = message;
  status.dataset.kind = kind;
}

function isGroupSolved(groupId) {
  return currentGame.solvedGroupIds.includes(groupId);
}

function isGameOver() {
  return currentGame.finished;
}

function getRemainingWords() {
  const solvedTerms = new Set(getPuzzle(currentGame.panelNumber).groups
    .filter(group => isGroupSolved(group.id))
    .flatMap(group => group.terms));
  return seededWords(currentGame.panelNumber).filter(term => !solvedTerms.has(term));
}

function render() {
  const puzzle = getPuzzle(currentGame.panelNumber);
  const daily = currentMode === "daily";
  const challenge = currentMode === "challenge";
  const dateKey = daily ? currentDate : dateFromPanelNumber(currentGame.panelNumber);
  const weekday = formatWeekday(dateKey);
  const formattedDate = formatDate(dateKey);

  elements["today-label"].textContent = challenge ? "DESAFIO COMPARTILHADO" : daily ? "DESAFIO DIÁRIO" : "MODO PRÁTICA";
  document.querySelector("#game-title").textContent = challenge ? "Um desafio entre pessoas" : daily ? "O que têm em comum?" : "Painel para praticar";
  elements["panel-number"].textContent = currentGame.panelNumber;
  document.querySelector("#date-label")?.remove();
  let dateLabel = document.querySelector("#panel-date");
  if (!dateLabel) {
    dateLabel = document.createElement("p");
    dateLabel.id = "panel-date";
    dateLabel.className = "eyebrow panel-date";
    document.querySelector(".page-heading > div").prepend(dateLabel);
  }
  dateLabel.textContent = `${weekday} · ${formattedDate}`;

  setNavigationState(daily, challenge);
  renderErrors();
  renderBoard();
  renderSolvedGroups();
  renderHintState();
  renderCompletion();
  renderStats();
}

function setNavigationState(daily, challenge) {
  elements["daily-tab"].classList.toggle("is-active", daily || challenge);
  if (daily || challenge) elements["daily-tab"].setAttribute("aria-current", "page");
  else elements["daily-tab"].removeAttribute("aria-current");
  elements["practice-tab"].classList.toggle("is-active", currentMode === "practice");
  if (currentMode === "practice") elements["practice-tab"].setAttribute("aria-current", "page");
  else elements["practice-tab"].removeAttribute("aria-current");
}

function renderErrors() {
  elements["error-count"].textContent = `${currentGame.errors} / ${MAX_ERRORS}`;
  elements["error-shapes"].replaceChildren(...Array.from({ length: MAX_ERRORS }, (_, index) => {
    const shape = document.createElement("i");
    if (index < currentGame.errors) shape.className = "is-used";
    return shape;
  }));
}

function renderBoard() {
  const selected = new Set(currentGame.selectedWords);
  const fixed = new Set(currentGame.fixedTerms);
  const remaining = getRemainingWords();
  const board = elements["word-board"];
  board.setAttribute("aria-label", `${remaining.length} termos disponíveis`);
  board.replaceChildren(...remaining.map(term => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-tile";
    button.textContent = term;
    button.setAttribute("aria-pressed", String(selected.has(term)));
    button.setAttribute("aria-label", fixed.has(term) ? `${term}, fixado pela dica` : term);
    button.disabled = isGameOver();
    if (fixed.has(term)) button.classList.add("is-fixed");
    button.addEventListener("click", () => toggleWord(term));
    return button;
  }));
  const count = currentGame.selectedWords.length;
  elements["selection-count"].textContent = `${count} de 4 termos selecionados`;
  document.querySelector("#selection-help").textContent = count === 4 ? "Grupo pronto para envio" : "Escolha até quatro termos";
  elements["submit-group"].disabled = count !== 4 || isGameOver();
  document.querySelector("#clear-selection").disabled = count === 0 || isGameOver();
}

function renderSolvedGroups() {
  const puzzle = getPuzzle(currentGame.panelNumber);
  const showAll = currentGame.finished;
  const groups = puzzle.groups.filter(group => showAll || isGroupSolved(group.id));
  elements["solved-groups"].replaceChildren(...groups.map(group => {
    const item = document.createElement("article");
    item.className = "solved-group";
    const title = document.createElement("div");
    title.textContent = `${group.symbol} ${group.name}`;
    const terms = document.createElement("div");
    terms.className = "solved-terms";
    terms.textContent = group.terms.join(" · ");
    item.append(title, terms);
    if (showAll) {
      const explanation = document.createElement("p");
      explanation.textContent = group.explanation;
      item.append(explanation);
    }

    return item;
  }));
}

function renderHintState() {
  const available = currentGame.hintsAvailable > 0 && !isGameOver();
      const target = getPuzzle(currentGame.panelNumber).groups.find(group =>
        group.id === currentGame.hintTargetGroupId && !isGroupSolved(group.id));
      if (target) {
        const fixedTerm = target.terms.find(term => currentGame.fixedTerms.includes(term));
        elements["hint-message"].textContent = fixedTerm
          ? `“${fixedTerm}” pertence ao grupo “${target.name}” e foi fixada no tabuleiro.`
          : `Uma das categorias é: ${target.name}.`;
      } else {
        elements["hint-message"].textContent = "As relações aparecem aqui quando você usa uma dica.";
      }
  elements["hint-button"].disabled = !available;
  elements["hint-button"].textContent = available
    ? `Usar dica (${currentGame.hintsAvailable})`
    : "Usar dica";
  elements["hint-guidance"].textContent = available
    ? "Uma dica está pronta. Você decide quando usar."
    : isGameOver() ? "As dicas não estão disponíveis neste painel." : "Dicas ficam disponíveis após dois erros seguidos.";
}

function renderCompletion() {
  const summary = elements["completion-summary"];
  summary.hidden = !isGameOver();
  if (!isGameOver()) return;
  const won = currentGame.outcome === "won";
  elements["completion-title"].textContent = won ? "Todos os grupos encontrados" : "As relações foram reveladas";
  elements["completion-detail"].textContent = won
    ? `Você resolveu o painel com ${currentGame.errors} ${currentGame.errors === 1 ? "erro" : "erros"}. As explicações editoriais estão logo acima.`
    : `Você chegou ao limite de ${MAX_ERRORS} erros. Confira os grupos e suas relações acima.`;
  elements["next-practice"].hidden = currentMode !== "practice";
}

function recordOutcome(record) {
  return typeof record === "string" ? record : record?.outcome || null;
}

function renderStats() {
  const records = Object.entries(progress.records).sort(([first], [second]) => first.localeCompare(second));
  const wins = records.filter(([, record]) => recordOutcome(record) === "won").length;
  const losses = records.filter(([, record]) => recordOutcome(record) === "lost").length;
  let cursor = currentDate;
  if (!progress.records[cursor]) cursor = addDays(cursor, -1);
  let streak = 0;
  while (progress.records[cursor]) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  elements["stat-streak"].textContent = streak;
  elements["stat-wins"].textContent = wins;
  elements["stat-losses"].textContent = losses;
  const total = wins + losses;
  const distributionTitle = document.createElement("h3");
  distributionTitle.textContent = "Vitórias por número de erros";
  const distribution = Array.from({ length: MAX_ERRORS + 1 }, (_, errors) => {
    const count = records.filter(([, record]) => recordOutcome(record) === "won" && record.errors === errors).length;
    return statLine(`${errors} ${errors === 1 ? "erro" : "erros"}`, count);
  });
  elements["dialog-stats"].replaceChildren(
    statLine("Desafios concluídos", total),
    statLine("Vitórias", wins),
    statLine("Não resolvidos", losses),
    statLine("Sequência atual", `${streak} ${streak === 1 ? "dia" : "dias"}`),
    statLine("Aproveitamento", total ? `${Math.round((wins / total) * 100)}%` : "—"),
    distributionTitle,
    ...distribution
  );
}

function statLine(label, value) {
  const row = document.createElement("div");
  row.className = "dialog-stat";
  const text = document.createElement("span");
  text.textContent = label;
  const number = document.createElement("strong");
  number.textContent = value;
  row.append(text, number);
  return row;
}

function addDays(dateKey, amount) {
  const date = new Date(`${dateKey}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function toggleWord(term) {
  if (isGameOver()) return;
  if (currentGame.fixedTerms.includes(term)) {
    announce(`${term} foi fixada por uma dica e não pode ser removida.`, "");
    return;
  }
  const index = currentGame.selectedWords.indexOf(term);
  if (index >= 0) currentGame.selectedWords.splice(index, 1);
  else if (currentGame.selectedWords.length < 4) currentGame.selectedWords.push(term);
  else {
    announce("Já há quatro termos selecionados. Remova um antes de escolher outro.", "error");
    return;
  }
  persistGame();
  announce("");
  renderBoard();
  const focusedTile = [...elements["word-board"].querySelectorAll(".word-tile")]
    .find(button => button.getAttribute("aria-label") === term);
  focusedTile?.focus();
}

function submitGroup() {
  if (currentGame.selectedWords.length !== 4 || isGameOver()) return;
  const puzzle = getPuzzle(currentGame.panelNumber);
  const chosen = new Set(currentGame.selectedWords);
  const matched = puzzle.groups.find(group => !isGroupSolved(group.id) && group.terms.every(term => chosen.has(term)));
  if (matched) {
    currentGame.solvedGroupIds.push(matched.id);
    currentGame.attempts.push({ outcome: "correct" });
    currentGame.consecutiveErrors = 0;
    currentGame.fixedTerms = currentGame.fixedTerms.filter(term => !matched.terms.includes(term));
    currentGame.selectedWords = currentGame.selectedWords.filter(term => !matched.terms.includes(term));
    announce(`Grupo encontrado: ${matched.name}.`, "success");
    if (currentGame.solvedGroupIds.length === puzzle.groups.length) finishGame("won");
  } else {
    const near = puzzle.groups.some(group => !isGroupSolved(group.id)
      && group.terms.filter(term => chosen.has(term)).length === 3);
    currentGame.errors += 1;
    currentGame.consecutiveErrors += 1;
    if (currentGame.consecutiveErrors % 2 === 0) currentGame.hintsAvailable += 1;
    currentGame.attempts.push({ outcome: near ? "near" : "wrong" });
    currentGame.selectedWords = currentGame.selectedWords.filter(term => currentGame.fixedTerms.includes(term));
    if (currentGame.errors >= MAX_ERRORS) finishGame("lost");
    else announce(near
      ? `Quase: três termos pertencem ao mesmo grupo. Restam ${MAX_ERRORS - currentGame.errors} erros.`
      : `Essa combinação não forma um grupo. Restam ${MAX_ERRORS - currentGame.errors} erros.`, "error");
  }
  persistGame();
  render();
}

function finishGame(outcome) {
  currentGame.finished = true;
  currentGame.outcome = outcome;
  if (currentGame.mode === "daily" && !progress.records[currentGame.dateKey]) {
    progress.records[currentGame.dateKey] = { outcome, errors: currentGame.errors };
  }
  announce(outcome === "won"
    ? "Painel concluído. Você encontrou todas as relações."
    : "Limite de erros atingido. As relações do painel foram reveladas.", outcome === "won" ? "success" : "error");
}

function useHint() {
  if (currentGame.hintsAvailable < 1 || isGameOver()) return;
  const puzzle = getPuzzle(currentGame.panelNumber);
  const unsolved = puzzle.groups.filter(group => !isGroupSolved(group.id));
  if (!unsolved.length) return;
  const hinted = unsolved.find(group => currentGame.revealedGroupIds.includes(group.id));
  if (!hinted) {
    const target = unsolved.find(group => !currentGame.revealedGroupIds.includes(group.id));
    currentGame.revealedGroupIds.push(target.id);
    currentGame.hintTargetGroupId = target.id;
    elements["hint-message"].textContent = `Uma das categorias é: ${target.name}.`;
    announce(`Dica: uma das categorias é ${target.name}.`, "success");
  } else {
    const term = hinted.terms.find(word => !currentGame.fixedTerms.includes(word));
    if (term) {
      if (!currentGame.selectedWords.includes(term) && currentGame.selectedWords.length >= 4) {
        announce("Remova um termo não fixado antes de usar a dica.", "error");
        return;
      }
      currentGame.fixedTerms.push(term);
      if (!currentGame.selectedWords.includes(term)) currentGame.selectedWords.push(term);
      currentGame.hintTargetGroupId = hinted.id;
      elements["hint-message"].textContent = `“${term}” pertence ao grupo “${hinted.name}” e foi fixada no tabuleiro.`;
      announce(`Dica: ${term} pertence ao grupo ${hinted.name} e foi fixada.`, "success");
    } else {
      const target = unsolved.find(group => !currentGame.revealedGroupIds.includes(group.id));
      if (target) {
        currentGame.revealedGroupIds.push(target.id);
        currentGame.hintTargetGroupId = target.id;
        elements["hint-message"].textContent = `Uma das categorias é: ${target.name}.`;
        announce(`Dica: uma das categorias é ${target.name}.`, "success");
      }
    }
  }
  currentGame.hintsAvailable -= 1;
  currentGame.hintsUsed += 1;
  persistGame();
  renderBoard();
  renderHintState();
}

function persistGame() {
  progress.games[currentGameKey] = currentGame;
  saveProgress();
}

function openArchive() {
  const entries = Array.from({ length: PUZZLES.length }, (_, index) => todayNumber - index - 1);
  elements["archive-list"].replaceChildren(...entries.map(panelNumber => {
    const button = document.createElement("button");
    button.type = "button";
    const title = document.createElement("span");
    title.textContent = `Painel ${panelNumber}`;
    const date = document.createElement("span");
    date.textContent = formatDate(dateFromPanelNumber(panelNumber));
    button.append(title, date);
    button.addEventListener("click", () => {
      elements["archive-dialog"].close();
      const dateKey = dateFromPanelNumber(panelNumber);
      const dailyKey = makeGameKey("daily", panelNumber, dateKey);
      const unfinishedDaily = progress.games[dailyKey];
      if (unfinishedDaily && !unfinishedDaily.finished) {
        currentMode = "practice";
        currentGameKey = dailyKey;
        currentGame = unfinishedDaily;
        render();
      } else {
        activateGame("practice", panelNumber, dateKey);
      }
    });
    return button;
  }));
  elements["archive-dialog"].showModal();
}

function shareGrid() {
  return currentGame.attempts.map(attempt => {
    if (attempt.outcome === "correct") return "🟩 🔷 🟩 🔷";
    if (attempt.outcome === "near") return "🟨 🔶 🟨 🔶";
    return "⬜ ◻️ ⬜ ◻️";
  }).join("\n") || "◇ ○ ◇ ○";
}

function buildShareText() {
  const resultLabel = currentGame.outcome === "won" ? "Resolvido" : "Não resolvido";
  const modeLabel = currentMode === "daily" ? "Desafio diário" : currentMode === "challenge" ? "Desafio" : "Prática";
  const errors = `${currentGame.errors}/${MAX_ERRORS} erros`;
  const accessibleSummary = currentGame.attempts.map(attempt => attempt.outcome === "correct"
    ? "grupo encontrado" : attempt.outcome === "near" ? "quase" : "combinação incorreta").join(", ");
  return `Palavras em comum · ${modeLabel} #${currentGame.panelNumber}\n${resultLabel} · ${errors}\n${shareGrid()}\nResumo acessível: ${accessibleSummary || "sem tentativas"}`;
}

async function shareResult() {
  sharePayload = buildShareText();
  if (navigator.share) {
    try {
      await navigator.share({ title: "Palavras em comum", text: sharePayload });
      announce("Resultado compartilhado sem revelar as respostas.", "success");
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(sharePayload);
    announce("Resultado copiado sem revelar as respostas.", "success");
  } catch {
    elements["share-text"].value = sharePayload;
    elements["share-dialog"].showModal();
    elements["share-text"].focus();
  }
}

async function copyShareText() {
  elements["share-text"].select();
  try {
    await navigator.clipboard.writeText(sharePayload);
    elements["share-dialog"].close();
    announce("Texto copiado.", "success");
  } catch {
    announce("Selecione e copie o texto do resultado.", "error");
  }
}

async function shareChallenge() {
  const challengeUrl = new URL(window.location.href);
  challengeUrl.search = "";
  challengeUrl.searchParams.set("desafio", String(currentGame.panelNumber));
  const text = `Tente resolver o painel ${currentGame.panelNumber}: ${challengeUrl.href}`;
  try {
    await navigator.clipboard.writeText(text);
    announce("Link do desafio copiado.", "success");
  } catch {
    sharePayload = text;
    elements["share-text"].value = text;
    elements["share-dialog"].showModal();
  }
}

function setContrast(active) {
  document.body.classList.toggle("high-contrast", active);
  elements["contrast-toggle"].setAttribute("aria-pressed", String(active));
  elements["contrast-toggle"].setAttribute("aria-label", active ? "Desativar alto contraste" : "Ativar alto contraste");
  elements["contrast-toggle"].innerHTML = `${active ? "◑" : "◐"} <span>Contraste</span>`;
  progress.highContrast = active;
  saveProgress();
}

function parseSharedPanelNumber(value) {
  if (!value || !/^\d+$/.test(value)) return null;
  const panelNumber = Number(value);
  const firstPanel = getPanelNumber("1970-01-01");
  if (!Number.isSafeInteger(panelNumber) || panelNumber < firstPanel || panelNumber > todayNumber) return null;
  return panelNumber;
}

function startDaily() {
  currentDate = getBrazilDateKey();
  todayNumber = getPanelNumber(currentDate);
  const url = new URL(window.location.href);
  const sharedPanel = parseSharedPanelNumber(url.searchParams.get("desafio"));
  if (sharedPanel !== null) {
    activateGame("challenge", sharedPanel, currentDate);
  } else {
    if (url.searchParams.has("desafio")) {
      url.searchParams.delete("desafio");
      window.history.replaceState({}, "", url.href);
    }
    activateGame("daily", todayNumber, currentDate);
  }
}

function startPractice(panelNumber = todayNumber - 1) {
  activateGame("practice", panelNumber, dateFromPanelNumber(panelNumber));
}

elements["daily-tab"].addEventListener("click", () => {
  currentDate = getBrazilDateKey();
  todayNumber = getPanelNumber(currentDate);
  const address = new URL(window.location.href);
  address.searchParams.delete("desafio");
  window.history.replaceState({}, "", address.href);
  activateGame("daily", todayNumber, currentDate);
});
elements["practice-tab"].addEventListener("click", () => startPractice(todayNumber - 1));
elements["archive-button"].addEventListener("click", openArchive);
elements["open-archive"].addEventListener("click", openArchive);
elements["contrast-toggle"].addEventListener("click", () => setContrast(!document.body.classList.contains("high-contrast")));
elements["stats-button"].addEventListener("click", () => {
  renderStats();
  elements["stats-dialog"].showModal();
});
elements["clear-selection"].addEventListener("click", () => {
  currentGame.selectedWords = currentGame.selectedWords.filter(term => currentGame.fixedTerms.includes(term));
  persistGame();
  renderBoard();
  announce("Seleção limpa.");
});
elements["submit-group"].addEventListener("click", submitGroup);
elements["hint-button"].addEventListener("click", useHint);
elements["share-result"].addEventListener("click", shareResult);
elements["challenge-link"].addEventListener("click", shareChallenge);
elements["copy-share-text"].addEventListener("click", copyShareText);
elements["next-practice"].addEventListener("click", () => startPractice(currentGame.panelNumber - 1));

elements["contrast-toggle"].setAttribute("aria-pressed", String(progress.highContrast));
setContrast(Boolean(progress.highContrast));
    window.setInterval(syncBrazilDay, 30000);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) syncBrazilDay();
    });
startDaily();
