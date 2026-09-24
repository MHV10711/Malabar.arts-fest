/* =====================================================
   MIS ART FEST
   PROGRAMME RESULT BOXES
   Groups results into separate programme tables
   while keeping the existing filters working.
===================================================== */

(() => {
    "use strict";

    let groupingScheduled = false;
    let syncing = false;

    function escapeHtml(value) { 
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function getProgrammeName(row) {
        /*
         * app.js creates:
         *
         * Stage · Section · Class · Programme
         *
         * So the last part is the programme name.
         */
        const meta = row.querySelector(".meta");

        if (!meta) {
            return "Other Results";
        }

        const parts = meta.textContent
            .split("·")
            .map(part => part.trim())
            .filter(Boolean);

        return parts.length
            ? parts[parts.length - 1]
            : "Other Results";
    }

    function getStageName(row) {
        return row.dataset.stage || "general";
    }

    function getStageLabel(stage) {
        const labels = {
            lp1: "LP 1",
            lp2: "LP 2",
            up: "UP",
            hs: "HS",
            hss: "HSS",
            general: "General"
        };

        return labels[stage] || stage.toUpperCase();
    }

    function createProgrammeCard(stage, programmeName, rows) {
        const card = document.createElement("section");

        card.className = "programme-result-card";

        card.dataset.stage = stage;
        card.dataset.programme = programmeName.toLowerCase();

        card.innerHTML = `
            <div class="programme-result-header">
                <div>
                    <span class="programme-result-stage">
                        ${escapeHtml(getStageLabel(stage))}
                    </span>

                    <h3 class="programme-result-title">
                        ${escapeHtml(programmeName)}
                    </h3>
                </div>

                <span class="programme-result-count">
                    ${rows.length}
                    ${rows.length === 1 ? "Result" : "Results"}
                </span>
            </div>

            <div class="programme-result-table-wrap">
                <div class="programme-result-table">
                    <div class="programme-table-head">
                        <span>Place</span>
                        <span>Participant</span>
                        <span>Details</span>
                        <span>Team</span>
                        <span>Result</span>
                    </div>

                    <div class="programme-table-body"></div>
                </div>
            </div>
        `;

        const body = card.querySelector(".programme-table-body");

        rows.forEach(row => {
            /*
             * IMPORTANT:
             * Do NOT remove .result-row.
             * app.js uses .result-row for filtering.
             */
            row.classList.add("programme-result-row");

            body.appendChild(row);
        });

        return card;
    }

    function groupResults() {
        const list = document.getElementById("results-list");

        if (!list) return;

        /*
         * Only group when normal result rows exist directly
         * inside #results-list.
         */
        const rows = Array.from(
            list.querySelectorAll(":scope > .result-row")
        );

        if (!rows.length) {
            syncProgrammeVisibility();
            return;
        }

        const groups = new Map();

        rows.forEach(row => {
            const stage = getStageName(row);
            const programme = getProgrammeName(row);

            const key = `${stage}|||${programme}`;

            if (!groups.has(key)) {
                groups.set(key, {
                    stage,
                    programme,
                    rows: []
                });
            }

            groups.get(key).rows.push(row);
        });

        const fragment = document.createDocumentFragment();

        /*
         * Group programmes by stage.
         */
        const stages = new Map();

        groups.forEach(group => {
            if (!stages.has(group.stage)) {
                stages.set(group.stage, []);
            }

            stages.get(group.stage).push(group);
        });

        stages.forEach((programmeGroups, stage) => {
            const stageBlock = document.createElement("section");

            stageBlock.className = "programme-stage";

            stageBlock.dataset.stage = stage;

            stageBlock.innerHTML = `
                <div class="programme-stage-heading">
                    <div>
                        <span class="programme-stage-number">
                            ${escapeHtml(getStageLabel(stage))}
                        </span>

                        <h2>Results</h2>
                    </div>

                    <span class="programme-stage-count">
                        ${programmeGroups.length}
                        ${programmeGroups.length === 1
                            ? "Programme"
                            : "Programmes"}
                    </span>
                </div>

                <div class="programme-results-grid"></div>
            `;

            const grid =
                stageBlock.querySelector(".programme-results-grid");

            programmeGroups.forEach(group => {
                grid.appendChild(
                    createProgrammeCard(
                        group.stage,
                        group.programme,
                        group.rows
                    )
                );
            });

            fragment.appendChild(stageBlock);
        });

        /*
         * Clear the original rows and insert grouped structure.
         */
        list.innerHTML = "";
        list.appendChild(fragment);

        syncProgrammeVisibility();
    }

    function syncProgrammeVisibility() {
        if (syncing) return;

        syncing = true;

        requestAnimationFrame(() => {
            const cards =
                document.querySelectorAll(".programme-result-card");

            cards.forEach(card => {
                const rows =
                    card.querySelectorAll(".result-row");

                const visibleRows =
                    card.querySelectorAll(
                        ".result-row:not(.hidden)"
                    );

                card.classList.toggle(
                    "has-visible-results",
                    visibleRows.length > 0
                );

                card.classList.toggle(
                    "all-results-hidden",
                    rows.length > 0 &&
                    visibleRows.length === 0
                );
            });

            const stages =
                document.querySelectorAll(".programme-stage");

            stages.forEach(stage => {
                const visibleCards =
                    stage.querySelectorAll(
                        ".programme-result-card.has-visible-results"
                    );

                stage.classList.toggle(
                    "all-programmes-hidden",
                    visibleCards.length === 0
                );
            });

            syncing = false;
        });
    }

    function scheduleGrouping() {
        if (groupingScheduled) return;

        groupingScheduled = true;

        requestAnimationFrame(() => {
            groupingScheduled = false;
            groupResults();
        });
    }

    /*
     * Watch #results-list because app.js fills it dynamically
     * after Supabase results are loaded.
     */
    function observeResults() {
        const list = document.getElementById("results-list");

        if (!list) return false;

        const observer = new MutationObserver(mutations => {
            let needsGrouping = false;
            let needsSync = false;

            mutations.forEach(mutation => {
                if (mutation.type === "childList") {
                    needsGrouping = true;
                }

                if (
                    mutation.type === "attributes" &&
                    mutation.target.classList.contains("result-row")
                ) {
                    needsSync = true;
                }
            });

            if (needsGrouping) {
                scheduleGrouping();
            } else if (needsSync) {
                syncProgrammeVisibility();
            }
        });

        observer.observe(list, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class"]
        });

        scheduleGrouping();

        return true;
    }

    function init() {
        /*
         * app.js creates #results-list dynamically,
         * so retry until it exists.
         */
        if (observeResults()) {
            return;
        }

        const retry = setInterval(() => {
            if (observeResults()) {
                clearInterval(retry);
            }
        }, 250);

        setTimeout(() => {
            clearInterval(retry);
        }, 15000);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    /*
     * Expose this in case app.js needs to refresh results.
     */
    window.refreshProgrammeResultBoxes = () => {
        scheduleGrouping();
    };

})();
