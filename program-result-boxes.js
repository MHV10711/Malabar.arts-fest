/* Group the rendered result rows into one box per program. */
(function () {
    function groupResultsByProgram() {
        const list = document.querySelector('#results-list');

        if (!list || list.dataset.programBoxesReady === 'true') {
            return;
        }

        const rows = [...list.querySelectorAll(':scope > .result-row')];

        if (!rows.length) {
            return;
        }

        const groups = new Map();

        rows.forEach(row => {
            const meta = row.querySelector('.meta');
            const parts = (meta?.textContent || '')
                .split('·')
                .map(value => value.trim())
                .filter(Boolean);

            const stage = row.dataset.stage || '';
            const section = row.dataset.section || '';
            const program = parts[parts.length - 1] || 'Other results';
            const key = `${stage}|${section}|${program}`;

            if (!groups.has(key)) {
                groups.set(key, {
                    stage,
                    section,
                    program,
                    activity: row.dataset.activity || 'individual',
                    rows: []
                });
            }

            groups.get(key).rows.push(row);
        });

        list.replaceChildren();

        groups.forEach(group => {
            const box = document.createElement('section');
            box.className = 'program-result-box';
            box.dataset.programBox = 'true';
            box.dataset.section = group.section;
            box.dataset.stage = group.stage;
            box.dataset.activity = group.activity;

            const heading = document.createElement('header');
            heading.className = 'program-result-heading';
            heading.innerHTML = `
                <div>
                    <p class="eyebrow">
                        ${group.stage === 'on-stage' ? 'ON-STAGE' : 'OFF-STAGE'}
                        · ${group.section}
                    </p>
                    <h2>${group.program}</h2>
                </div>
                <span class="program-result-type">
                    ${group.activity === 'group' ? 'GROUP' : 'INDIVIDUAL'}
                </span>
            `;

            const resultList = document.createElement('div');
            resultList.className = 'program-result-list';
            group.rows.forEach(row => resultList.appendChild(row));

            box.append(heading, resultList);
            list.appendChild(box);
        });

        list.dataset.programBoxesReady = 'true';
    }

    function scheduleGrouping() {
        window.clearTimeout(scheduleGrouping.timer);
        scheduleGrouping.timer = window.setTimeout(() => {
            const list = document.querySelector('#results-list');
            if (list) {
                list.removeAttribute('data-program-boxes-ready');
            }
            groupResultsByProgram();
        }, 0);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const list = document.querySelector('#results-list');
        if (!list) return;

        const observer = new MutationObserver(scheduleGrouping);
        observer.observe(list, { childList: true });
        scheduleGrouping();
    });
})();
