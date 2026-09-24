/* MIS Art Fest – programme result boxes
 * Load this file after app.js on results.html.
 */

(function () {
    const PLACE_ORDER = { first: 1, second: 2, third: 3 };

    function programmeKey(item) {
        return [item.programCategory, item.section, item.activityType, item.event]
            .map(value => String(value || '').trim())
            .join('::');
    }

    function renderProgrammeResult(item) {
        const house = HOUSE_INFO[item.team] || HOUSE_INFO.red;

        return `
            <article class="programme-result-row"
                data-section="${escapeHtml(item.section)}"
                data-activity="${escapeHtml(item.activityType)}"
                data-stage="${escapeHtml(item.programCategory)}">
                <span class="place ${item.place === 'first' ? 'first' : ''}">
                    ${placeNumber(item.place)}
                </span>
                <div class="programme-winner">
                    <strong>${escapeHtml(item.name)}</strong>
                    <span>${escapeHtml(item.studentClass || 'Class not entered')}</span>
                </div>
                <span class="team-tag ${house.tag}">${house.name}</span>
                <strong class="programme-medal">${medal(item.place)}</strong>
            </article>`;
    }

    function renderProgrammeBoxes() {
        const list = document.querySelector('#results-list');
        if (!list) return;

        const empty = document.querySelector('#empty-results');
        const items = results();

        if (!items.length) {
            list.innerHTML = '';
            empty?.classList.remove('hidden');
            setupProgrammeFilters();
            return;
        }

        const programmes = new Map();
        items.forEach(item => {
            const key = programmeKey(item);
            if (!programmes.has(key)) programmes.set(key, []);
            programmes.get(key).push(item);
        });

        const stages = ['off-stage', 'on-stage'];
        list.innerHTML = stages.map(stage => {
            const stageProgrammes = [...programmes.values()]
                .filter(group => group[0].programCategory === stage)
                .sort((a, b) => a[0].event.localeCompare(b[0].event));
            if (!stageProgrammes.length) return '';

            return `
                <section class="programme-stage" data-stage="${stage}">
                    <div class="programme-stage-title">
                        <span>${stage === 'on-stage' ? '02' : '01'}</span>
                        <h2>${stageLabel(stage)}</h2>
                        <p>${stageProgrammes.length} programme${stageProgrammes.length === 1 ? '' : 's'}</p>
                    </div>
                    <div class="programme-results-grid">
                        ${stageProgrammes.map(group => {
                            const sample = group[0];
                            const ordered = [...group].sort((a, b) =>
                                (PLACE_ORDER[a.place] || 99) - (PLACE_ORDER[b.place] || 99));
                            return `
                                <article class="programme-result-card"
                                    data-section="${escapeHtml(sample.section)}"
                                    data-activity="${escapeHtml(sample.activityType)}"
                                    data-stage="${escapeHtml(sample.programCategory)}">
                                    <header>
                                        <p>${escapeHtml(sectionLabel(sample.section))} · ${escapeHtml(titleCase(sample.activityType))}</p>
                                        <h3>${escapeHtml(sample.event)}</h3>
                                    </header>
                                    <div class="programme-result-rows">
                                        ${ordered.map(renderProgrammeResult).join('')}
                                    </div>
                                </article>`;
                        }).join('')}
                    </div>
                </section>`;
        }).join('');

        empty?.classList.add('hidden');
        setupProgrammeFilters();
    }

    function setupProgrammeFilters() {
        const search = document.querySelector('#result-search');
        const empty = document.querySelector('#empty-results');
        const cards = [...document.querySelectorAll('.programme-result-card')];
        const sectionButtons = [...document.querySelectorAll('.section-card[data-section]')];
        const activityButtons = [...document.querySelectorAll('.activity-card[data-activity]')];
        const stageButtons = [...document.querySelectorAll('[data-result-stage]')];
        let section = 'all';
        let activity = 'all';
        let stage = 'all';

        function filter() {
            const phrase = (search?.value || '').trim().toLowerCase();
            let visible = 0;
            cards.forEach(card => {
                const match = (section === 'all' || card.dataset.section === section) &&
                    (activity === 'all' || card.dataset.activity === activity) &&
                    (stage === 'all' || card.dataset.stage === stage) &&
                    card.textContent.toLowerCase().includes(phrase);
                card.classList.toggle('hidden', !match);
                if (match) visible += 1;
            });
            document.querySelectorAll('.programme-stage').forEach(panel => {
                panel.classList.toggle('hidden', ![...panel.querySelectorAll('.programme-result-card')]
                    .some(card => !card.classList.contains('hidden')));
            });
            empty?.classList.toggle('hidden', visible > 0);
        }

        function bind(buttons, key, setValue) {
            buttons.forEach(button => button.onclick = () => {
                setValue(button.dataset[key] || 'all');
                buttons.forEach(item => item.classList.toggle('active', item === button));
                filter();
            });
        }

        bind(sectionButtons, 'section', value => section = value);
        bind(activityButtons, 'activity', value => activity = value);
        bind(stageButtons, 'resultStage', value => stage = value);

        const clear = document.querySelector('#clear-filters');
        if (clear) clear.onclick = () => {
            section = activity = stage = 'all';
            if (search) search.value = '';
            sectionButtons.forEach(button => button.classList.toggle('active', button.dataset.section === 'all'));
            activityButtons.forEach(button => button.classList.toggle('active', button.dataset.activity === 'all'));
            stageButtons.forEach(button => button.classList.toggle('active', button.dataset.resultStage === 'all'));
            filter();
        };
        if (search) search.oninput = filter;
        filter();
    }

    /* Replaces the long single list used by the original renderer.
       The existing Supabase loader and Realtime subscription stay unchanged. */
    window.renderPublicResults = renderProgrammeBoxes;
}());
