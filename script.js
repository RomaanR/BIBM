const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const awardingFilterButtons = [...document.querySelectorAll("[data-awarding-filter]")];
const programmeCards = [...document.querySelectorAll(".programme-card")];
const programmeSearch = document.querySelector("[data-programme-search]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");

const refreshIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const closeMenu = () => {
  nav?.classList.remove("is-open");
  document.body.classList.remove("is-menu-open");
  menuToggle?.setAttribute("aria-label", "Open menu");
  if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  refreshIcons();
};

const openMenu = () => {
  nav?.classList.add("is-open");
  document.body.classList.add("is-menu-open");
  menuToggle?.setAttribute("aria-label", "Close menu");
  if (menuToggle) menuToggle.innerHTML = '<i data-lucide="x"></i>';
  refreshIcons();
};

menuToggle?.addEventListener("click", () => {
  if (nav?.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

let activeFilter = "all";
let activeAwardingFilter = "all";

const urlParams = new URLSearchParams(window.location.search);
const requestedFilter = urlParams.get("level") || urlParams.get("filter");
const requestedAwarding = urlParams.get("partner") || urlParams.get("awarding");
const validFilters = new Set(["all", "foundation", "higher-diploma", "undergraduate", "postgraduate", "acca"]);
const validAwardingFilters = new Set(["all", "uwe", "dlc", "acca"]);

if (requestedFilter && validFilters.has(requestedFilter)) {
  activeFilter = requestedFilter;
}

if (requestedAwarding && validAwardingFilters.has(requestedAwarding)) {
  activeAwardingFilter = requestedAwarding;
}

const syncFilterButtons = () => {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === activeFilter);
  });

  awardingFilterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.awardingFilter === activeAwardingFilter);
  });
};

const filterProgrammes = () => {
  const query = programmeSearch?.value.trim().toLowerCase() || "";

  programmeCards.forEach((card) => {
    const category = card.dataset.category || "";
    const awarding = card.dataset.awarding || "";
    const keywords = card.dataset.keywords || "";
    const text = `${card.textContent || ""} ${keywords}`.toLowerCase();
    const tokens = text.split(/[^a-z0-9]+/).filter(Boolean);
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesAwarding = activeAwardingFilter === "all" || awarding === activeAwardingFilter;
    const matchesSearch = !query || (query.length <= 2 ? tokens.includes(query) : text.includes(query));

    card.classList.toggle("is-hidden", !(matchesFilter && matchesAwarding && matchesSearch));
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    syncFilterButtons();
    filterProgrammes();
  });
});

awardingFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeAwardingFilter = button.dataset.awardingFilter || "all";
    syncFilterButtons();
    filterProgrammes();
  });
});

programmeSearch?.addEventListener("input", filterProgrammes);

syncFilterButtons();
filterProgrammes();

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus) return;

  const data = new FormData(leadForm);
  const name = data.get("name") || "there";
  formStatus.textContent = `Thanks ${name}. An admissions advisor will contact you with guidance on the next step.`;
  leadForm.reset();
});

refreshIcons();
