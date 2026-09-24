/* Groups existing result rows into separate programme boxes */
(function () {
  let updating = false;
  let queued = false;

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>'"]/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;",
      "'": "&#39;", '"': "&quot;"
    }[c]));
  }

  function programmeName(row) {
    const meta = row.querySelector(".meta")?.textContent || "";
    return meta.split("·").pop().trim() || "Programme result";
  }

  function placeOrder(row) {
    const place = row.querySelector(".place")?.textContent.trim();
    return ({ "01": 1, "02": 2, "03": 3 })[place] || 99;
  }

  function groupResults() {
    const list = document.querySelector("#results-list");

    if (!list || updating || list.dataset.programmeBoxes === "true") return;

    const rows = [...list.querySelectorAll(":scope > .result-row")];
    if (!rows.length) return;

    updating = true;

    const programmes = new Map();

    rows.forEach(row => {
      const key = [
        row.dataset.stage,
        row.dataset.section,
        row.dataset.activity,
        programmeName(row)
      ].join("|");

      if (!programmes.has(key)) programmes.set(key, []);
      programmes.get(key).push(row);
    });

    const output = document.createDocumentFragment();

    ["off-stage", "on-stage"].forEach(stage => {
      const stageProgrammes = [...programmes.values()]
        .filter(group => group[0].dataset.stage === stage);

      if (!stageProgrammes.length) return;

      const section = document.createElement("section");
      section.className = "programme-stage";

      section.innerHTML = `
        <div class="programme-stage-title">
          <span>${stage === "on-stage" ? "02" : "01"}</span>
          <h2>${stage === "on-stage" ? "ON-STAGE" : "OFF-STAGE"}</h2>
          <p>${stageProgrammes.length} programmes</p>
        </div>
      `;

      const grid = document.createElement("div");
      grid.className = "programme-results-grid";

      stageProgrammes
        .sort((a, b) => programmeName(a[0]).localeCompare(programmeName(b[0])))
        .forEach(group => {
          const first = group[0];

          const card = document.createElement("article");
          card.className = "programme-result-card";

          card.innerHTML = `
            <header>
              <p>${escapeHtml(first.dataset.section)} · ${escapeHtml(first.dataset.activity)}</p>
              <h3>${escapeHtml(programmeName(first))}</h3>
            </header>
            <div class="programme-result-rows"></div>
          `;

          const target = card.querySelector(".programme-result-rows");

          group
            .sort((a, b) => placeOrder(a) - placeOrder(b))
            .forEach(row => {
              row.classList.remove("result-row");
              row.classList.add("programme-result-row");
              target.appendChild(row);
            });

          grid.appendChild(card);
        });

      section.appendChild(grid);
      output.appendChild(section);
    });

    list.replaceChildren(output);
    list.dataset.programmeBoxes = "true";
    updating = false;
  }

  function schedule() {
    if (queued) return;

    queued = true;

    requestAnimationFrame(() => {
      queued = false;
      groupResults();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector("#results-list");
    if (!list) return;

    new MutationObserver(schedule).observe(list, { childList: true });
    schedule();
  });
}());
