// Immutable source data
const dataSource = [
  { id: 1, title: "Pasta", time: 25, difficulty: "easy" },
  { id: 2, title: "Salad", time: 15, difficulty: "easy" },
  { id: 3, title: "Curry", time: 60, difficulty: "medium" },
  { id: 4, title: "Biryani", time: 90, difficulty: "hard" },
  { id: 5, title: "Soup", time: 30, difficulty: "medium" },
  { id: 6, title: "Lasagna", time: 75, difficulty: "hard" }
];

// App state
let selectedDifficulty = "all";
let selectedSort = "";

// Pure filter function
const byDifficulty = (items, level) =>
  level === "all"
    ? items
    : items.filter(item => item.difficulty === level);

// Pure sort function
const byTime = (items, order) =>
  order === ""
    ? items
    : [...items].sort((a, b) =>
        order === "asc" ? a.time - b.time : b.time - a.time
      );

// Rendering
const container = document.querySelector("#recipe-container");

const render = (items) => {
  container.innerHTML = items
    .map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>⏱ ${item.time} min</p>
        <p>${item.difficulty}</p>
      </div>
    `)
    .join("");
};

// Central update flow
const updateDisplay = () => {
  const filtered = byDifficulty(dataSource, selectedDifficulty);
  const sorted = byTime(filtered, selectedSort);
  render(sorted);
};

// UI handlers
const applyDifficulty = (value) => {
  selectedDifficulty = value;
  updateDisplay();
};

const applySort = (value) => {
  selectedSort = value;
  updateDisplay();
};

// Init
updateDisplay();
