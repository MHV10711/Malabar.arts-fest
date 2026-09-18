/* =========================================================
   MIS ART FEST 2026
   MAIN JAVASCRIPT
   SUPABASE DATABASE VERSION
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const TEACHER_PASSWORD = 'malabar@5445';

const SESSION_KEY = 'mis-art-fest-teacher-session';


/* =========================================================
   HOUSE INFORMATION
   ========================================================= */

const HOUSE_INFO = {

    red: {
        name: 'RED',
        label: 'RED',
        tag: 'team-red',
        bar: 'red'
    },

    green: {
        name: 'GREEN',
        label: 'GREEN',
        tag: 'team-green',
        bar: 'green'
    },

    blue: {
        name: 'BLUE',
        label: 'BLUE',
        tag: 'team-blue',
        bar: 'blue'
    },

    yellow: {
        name: 'YELLOW',
        label: 'YELLOW',
        tag: 'team-yellow',
        bar: 'yellow'
    }

};


/* =========================================================
   POINT SYSTEM
   =========================================================

   INDIVIDUAL:
   1st = 5
   2nd = 3
   3rd = 1

   GROUP:
   1st = 10
   2nd = 5
   3rd = 3

   ========================================================= */

const POINTS = {

    individual: {
        first: 5,
        second: 3,
        third: 1
    },

    group: {
        first: 10,
        second: 5,
        third: 3
    }

};


/* =========================================================
   GET POINTS
   ========================================================= */

function getPoints(activityType, place) {

    const type =
        activityType === 'group'
            ? 'group'
            : 'individual';

    return POINTS[type]?.[place] || 0;

}


/* =========================================================
   SECTION INFORMATION
   ========================================================= */

const SECTION_INFO = {

    LP1: {
        label: 'LP-1',
        full: 'Lower Primary 1'
    },

    LP2: {
        label: 'LP-2',
        full: 'Lower Primary 2'
    },

    UP: {
        label: 'UP',
        full: 'Upper Primary'
    },

    HS: {
        label: 'HS',
        full: 'High School'
    },

    HSS: {
        label: 'HSS',
        full: 'Higher Secondary'
    },

    GENERAL: {
        label: 'GENERAL',
        full: 'General'
    }

};


/* =========================================================
   PROGRAM DATABASE
   ========================================================= */

const PROGRAMS = {

    /* =====================================================
       OFF-STAGE
       ===================================================== */

    'off-stage': {

        LP1: [

            {
                name: 'Hand Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Hand Writing — English',
                type: 'individual'
            }

        ],

        LP2: [

            {
                name: 'Pencil Drawing',
                type: 'individual'
            },

            {
                name: 'Drawing Watercolour',
                type: 'individual'
            },

            {
                name: 'Riddles',
                type: 'individual'
            },

            {
                name: 'Quran Recitation',
                type: 'individual'
            }

        ],

        UP: [

            {
                name: 'Pencil Drawing',
                type: 'individual'
            },

            {
                name: 'Water Colouring',
                type: 'individual'
            },

            {
                name: 'Poem Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Translation — Arabic',
                type: 'individual'
            },

            {
                name: 'Quran Recitation',
                type: 'individual'
            },

            {
                name: 'Calligraphy',
                type: 'individual'
            },

            {
                name: 'Story Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Story Writing — Hindi',
                type: 'individual'
            },

            {
                name: 'Essay Writing — English',
                type: 'individual'
            },

            {
                name: 'Story Writing — English',
                type: 'individual'
            },

            {
                name: 'Poem Writing — English',
                type: 'individual'
            }

        ],

        HS: [

            {
                name: 'Pencil Drawing',
                type: 'individual'
            },

            {
                name: 'Water Colouring',
                type: 'individual'
            },

            {
                name: 'Poem Writing — English',
                type: 'individual'
            },

            {
                name: 'Story Writing — English',
                type: 'individual'
            },

            {
                name: 'Essay Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Essay Writing — HINDI',
                type: 'individual'
            },

            {
                name: 'Translation — Arabic',
                type: 'individual'
            },

            {
                name: 'Cartoon',
                type: 'individual'
            },

            {
                name: 'Poster Making',
                type: 'individual'
            },

            {
                name: 'Caption Making',
                type: 'individual'
            },

            {
                name: 'Story Writing — Malayalam',
                type: 'individual'
            }

        ],

        HSS: [

            {
                name: 'Poem Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Story Writing — English',
                type: 'individual'
            },

            {
                name: 'Story Writing — Malayalam',
                type: 'individual'
            },

            {
                name: 'Essay Writing — English',
                type: 'individual'
            }

        ]

    },


    /* =====================================================
       ON-STAGE
       ===================================================== */

    'on-stage': {

        UP: [

            {
                name: 'Speech — Malayalam',
                type: 'individual'
            },

            {
                name: 'Group Song — Malayalam',
                type: 'group',
                maxParticipants: 7
            },

            {
                name: 'Light Music',
                type: 'individual'
            },

            {
                name: 'Mappilappattu',
                type: 'individual'
            },

            {
                name: 'Mono Act',
                type: 'individual'
            },

            {
                name: 'Oppana',
                type: 'group',
                maxParticipants: 10
            },

            {
                name: 'Patriotic',
                type: 'group',
                maxParticipants: 7
            },

            {
                name: 'Poem Recitation — Arabic',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — English',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Malayalam',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Hindi',
                type: 'individual'
            },

            {
                name: 'Speech — English',
                type: 'individual'
            },

            {
                name: 'Speech — Hindi',
                type: 'individual'
            }

        ],

        HS: [

            {
                name: 'Group Song — Arabic',
                type: 'group'
            },

            {
                name: 'Group Song — Urdu',
                type: 'group'
            },

            {
                name: 'Light Music — Boys',
                type: 'individual'
            },

            {
                name: 'Light Music — Girls',
                type: 'individual'
            },

            {
                name: 'Mappilappattu — Boys',
                type: 'individual'
            },

            {
                name: 'Mappilappattu — Girls',
                type: 'individual'
            },

            {
                name: 'Mimicry',
                type: 'individual'
            },

            {
                name: 'Mono Act',
                type: 'individual'
            },

            {
                name: 'Nadanpattu',
                type: 'individual'
            },

            {
                name: 'Patriotic Song',
                type: 'group'
            },

            {
                name: 'Poem Recitation — Arabic',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — English',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Hindi',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Malayalam',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Urdu',
                type: 'individual'
            },

            {
                name: 'Speech — English',
                type: 'individual'
            },

            {
                name: 'Speech — Hindi',
                type: 'individual'
            },

            {
                name: 'Speech — Malayalam',
                type: 'individual'
            }

        ],

        HSS: [

            {
                name: 'Speech — Malayalam',
                type: 'individual'
            },

            {
                name: 'Light Music — Boys',
                type: 'individual'
            },

            {
                name: 'Light Music — Girls',
                type: 'individual'
            },

            {
                name: 'Mappilappattu — Boys',
                type: 'individual'
            },

            {
                name: 'Mappilappattu — Girls',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Arabic',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — English',
                type: 'individual'
            },

            {
                name: 'Poem Recitation — Malayalam',
                type: 'individual'
            },

            {
                name: 'Speech — English',
                type: 'individual'
            },

            {
                name: 'Nadanpattu',
                type: 'individual'
            }

        ],

        /* =================================================
           GENERAL
           ================================================= */

        GENERAL: [

            {
                name: 'Vattappattu',
                type: 'group',
                maxParticipants: 10
            },

            {
                name: 'Mime',
                type: 'group',
                maxParticipants: 7
            },

            {
                name: 'Oppana',
                type: 'group',
                maxParticipants: 10
            }

        ]

    }

};


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function createId() {

    if (
        window.crypto &&
        typeof window.crypto.randomUUID === 'function'
    ) {
        return `result-${window.crypto.randomUUID()}`;
    }

    return `result-${Date.now()}-${Math.random()
        .toString(16)
        .slice(2)}`;

}


function escapeHtml(value) {

    return String(value ?? '').replace(
        /[&<>'"]/g,
        character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[character])
    );

}


function titleCase(value) {

    const text = String(value || '');

    return text.charAt(0).toUpperCase() + text.slice(1);

}


function placeNumber(place) {

    return {
        first: '01',
        second: '02',
        third: '03'
    }[place] || '—';

}


function medal(place) {

    return {
        first: 'Gold',
        second: 'Silver',
        third: 'Bronze'
    }[place] || '';

}


function stageLabel(stage) {

    return stage === 'off-stage'
        ? 'OFF-STAGE'
        : 'ON-STAGE';

}


function sectionLabel(section) {

    if (section === 'GENERAL') {
        return 'GENERAL';
    }

    return SECTION_INFO[section]?.label || section;

}


function sectionFullName(section) {

    if (section === 'GENERAL') {
        return 'General';
    }

    return SECTION_INFO[section]?.full || section;

}


/* =========================================================
   SUPABASE RESULT DATA
   ========================================================= */

let RESULTS_CACHE = [];

let RESULTS_LOADED = false;


/* =========================================================
   NORMALISE RESULT
   ========================================================= */

function normaliseResult(item) {

    const validSections = [
        'LP1',
        'LP2',
        'UP',
        'HS',
        'HSS',
        'GENERAL'
    ];

    const validActivities = [
        'individual',
        'group'
    ];

    const validTeams = [
        'red',
        'green',
        'blue',
        'yellow'
    ];

    const validPlaces = [
        'first',
        'second',
        'third'
    ];

    const validStages = [
        'off-stage',
        'on-stage'
    ];


    const participantCount =
        Number(
            item.participantCount ??
            item.participant_count
        );


    return {

        id: String(
            item.id ||
            createId()
        ),

        name: String(
            item.name ||
            'Unnamed'
        ),

        studentClass: String(
            item.studentClass ??
            item.student_class ??
            '—'
        ),

        section:
            validSections.includes(item.section)
                ? item.section
                : 'HS',

        activityType:
            validActivities.includes(
                item.activityType ??
                item.activity_type
            )
                ? (
                    item.activityType ??
                    item.activity_type
                )
                : 'individual',

        programCategory:
            validStages.includes(
                item.programCategory ??
                item.program_category
            )
                ? (
                    item.programCategory ??
                    item.program_category
                )
                : 'on-stage',

        event: String(
            item.event ||
            'General Event'
        ),

        team:
            validTeams.includes(item.team)
                ? item.team
                : 'red',

        place:
            validPlaces.includes(item.place)
                ? item.place
                : 'third',

        participantCount:
            Number.isFinite(participantCount) &&
            participantCount > 0
                ? participantCount
                : null

    };

}


/* =========================================================
   GET CURRENT RESULTS
   ========================================================= */

function results() {

    return RESULTS_CACHE.map(
        normaliseResult
    );

}


/* =========================================================
   LOAD RESULTS FROM SUPABASE
   ========================================================= */

async function loadResults() {

    try {

        if (
            typeof supabaseClient === 'undefined'
        ) {

            throw new Error(
                'supabaseClient is not available. Check supabase.js and script order.'
            );

        }


        const {
            data,
            error
        } =
            await supabaseClient
                .from('results')
                .select('*')
                .order(
                    'created_at',
                    {
                        ascending: false
                    }
                );


        if (error) {
            throw error;
        }


        RESULTS_CACHE =
            Array.isArray(data)
                ? data.map(
                    normaliseResult
                )
                : [];


        RESULTS_LOADED = true;


        console.log(
            `Supabase: ${RESULTS_CACHE.length} results loaded.`
        );


        return RESULTS_CACHE;

    } catch (error) {

        console.error(
            'Could not load results from Supabase:',
            error
        );


        RESULTS_CACHE = [];

        RESULTS_LOADED = false;


        return [];

    }

}


/* =========================================================
   SAVE ONE RESULT TO SUPABASE
   ========================================================= */

async function saveResult(item) {

    const result =
        normaliseResult(item);


    const databaseRow = {

        id:
            result.id,

        name:
            result.name,

        student_class:
            result.studentClass,

        section:
            result.section,

        activity_type:
            result.activityType,

        program_category:
            result.programCategory,

        event:
            result.event,

        team:
            result.team,

        place:
            result.place,

        participant_count:
            result.participantCount

    };


    const {
        data,
        error
    } =
        await supabaseClient
            .from('results')
            .insert([
                databaseRow
            ])
            .select()
            .single();


    if (error) {

        console.error(
            'Supabase insert error:',
            error
        );

        throw error;

    }


    const saved =
        normaliseResult(data);


    RESULTS_CACHE = [
        saved,
        ...RESULTS_CACHE
    ];


    return saved;

}


/* =========================================================
   DELETE RESULT FROM SUPABASE
   ========================================================= */

async function deleteResult(id) {

    const {
        error
    } =
        await supabaseClient
            .from('results')
            .delete()
            .eq(
                'id',
                id
            );


    if (error) {

        console.error(
            'Supabase delete error:',
            error
        );

        throw error;

    }


    RESULTS_CACHE =
        RESULTS_CACHE.filter(
            result =>
                result.id !== id
        );

}


/* =========================================================
   REALTIME SUPABASE SYNC
   ========================================================= */

function setupRealtimeResults() {

    if (
        typeof supabaseClient === 'undefined'
    ) {

        console.error(
            'Realtime could not start because supabaseClient is missing.'
        );

        return;

    }


    supabaseClient
        .channel(
            'mis-art-fest-results'
        )
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'results'
            },
            async payload => {

                console.log(
                    'Supabase realtime update:',
                    payload.eventType
                );


                await loadResults();


                renderPublicResults();

                renderChampionship();

                renderManageResults();

            }
        )
        .subscribe(
            status => {

                console.log(
                    'Realtime status:',
                    status
                );

            }
        );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNav() {

    const toggle =
        document.querySelector(
            '.nav-toggle'
        );

    const nav =
        document.querySelector(
            '.nav'
        );


    if (
        !toggle ||
        !nav
    ) {
        return;
    }


    toggle.addEventListener(
        'click',
        () => {

            const opened =
                nav.classList.toggle(
                    'open'
                );


            toggle.setAttribute(
                'aria-expanded',
                String(opened)
            );

        }
    );


    nav
        .querySelectorAll('a')
        .forEach(link => {

            link.addEventListener(
                'click',
                () => {

                    nav.classList.remove(
                        'open'
                    );


                    toggle.setAttribute(
                        'aria-expanded',
                        'false'
                    );

                }
            );

        });

}


/* =========================================================
   ACTIVE NAV
   ========================================================= */

function setupActiveNav() {

    const currentPage =
        window.location.pathname
            .split('/')
            .pop() ||
        'index.html';


    document
        .querySelectorAll('.nav a')
        .forEach(link => {

            const page =
                link.getAttribute(
                    'href'
                );


            link.classList.toggle(
                'active',
                page === currentPage
            );

        });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupReveal() {

    const items =
        document.querySelectorAll(
            '.reveal'
        );


    if (!items.length) {
        return;
    }


    if (
        !(
            'IntersectionObserver'
            in window
        )
    ) {

        items.forEach(
            item => {

                item.classList.add(
                    'visible'
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            'visible'
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    items.forEach(
        item => {

            observer.observe(
                item
            );

        }
    );

}


/* =========================================================
   PUBLIC RESULTS
   ========================================================= */

function renderPublicResults() {

    const list =
        document.querySelector(
            '#results-list'
        );


    if (!list) {
        return;
    }


    const items =
        results();


    if (!items.length) {

        list.innerHTML = '';


        document
            .querySelector(
                '#empty-results'
            )
            ?.classList.remove(
                'hidden'
            );


        setupResultFilters();

        return;

    }


    list.innerHTML =
        items
            .map(
                item => {

                    const house =
                        HOUSE_INFO[item.team] ||
                        HOUSE_INFO.red;


                    return `

                        <article
                            class="result-row"
                            data-section="${escapeHtml(item.section)}"
                            data-activity="${escapeHtml(item.activityType)}"
                            data-stage="${escapeHtml(item.programCategory)}"
                        >

                            <span
                                class="
                                    place
                                    ${
                                        item.place === 'first'
                                            ? 'first'
                                            : ''
                                    }
                                "
                            >
                                ${placeNumber(item.place)}
                            </span>


                            <div>

                                <div class="student">
                                    ${escapeHtml(item.name)}
                                </div>


                                <div class="meta">

                                    ${stageLabel(
                                        item.programCategory
                                    )}

                                    ·

                                    ${sectionLabel(
                                        item.section
                                    )}

                                    ·

                                    ${escapeHtml(
                                        item.studentClass
                                    )}

                                    ·

                                    ${escapeHtml(
                                        item.event
                                    )}

                                </div>

                            </div>


                            <span
                                class="
                                    team-tag
                                    ${house.tag}
                                "
                            >
                                ${house.name}
                            </span>


                            <span class="result-type">
                                ${titleCase(
                                    item.activityType
                                )}
                            </span>


                            <strong>
                                ${medal(
                                    item.place
                                )}
                            </strong>

                        </article>

                    `;

                }
            )
            .join('');


    setupResultFilters();

}


/* =========================================================
   RESULT FILTERS
   ========================================================= */

function setupResultFilters() {

    const search =
        document.querySelector(
            '#result-search'
        );


    const empty =
        document.querySelector(
            '#empty-results'
        );


    const sectionButtons =
        [
            ...document.querySelectorAll(
                '.section-card[data-section]'
            )
        ];


    const activityButtons =
        [
            ...document.querySelectorAll(
                '.activity-card[data-activity]'
            )
        ];


    const stageButtons =
        [
            ...document.querySelectorAll(
                '[data-result-stage]'
            )
        ];


    let selectedSection =
        'all';


    let selectedActivity =
        'all';


    let selectedStage =
        'all';


    function filter() {

        const phrase =
            (
                search?.value ||
                ''
            )
                .trim()
                .toLowerCase();


        let visibleCount =
            0;


        document
            .querySelectorAll(
                '.result-row'
            )
            .forEach(
                row => {

                    const matchesSearch =
                        row.textContent
                            .toLowerCase()
                            .includes(
                                phrase
                            );


                    const matchesSection =
                        selectedSection === 'all' ||
                        row.dataset.section ===
                            selectedSection;


                    const matchesActivity =
                        selectedActivity === 'all' ||
                        row.dataset.activity ===
                            selectedActivity;


                    const matchesStage =
                        selectedStage === 'all' ||
                        row.dataset.stage ===
                            selectedStage;


                    const show =
                        matchesSearch &&
                        matchesSection &&
                        matchesActivity &&
                        matchesStage;


                    row.classList.toggle(
                        'hidden',
                        !show
                    );


                    if (show) {
                        visibleCount++;
                    }

                }
            );


        empty?.classList.toggle(
            'hidden',
            visibleCount > 0
        );

    }


    sectionButtons.forEach(
        button => {

            button.addEventListener(
                'click',
                () => {

                    selectedSection =
                        button.dataset.section;


                    sectionButtons.forEach(
                        item => {

                            item.classList.toggle(
                                'active',
                                item === button
                            );

                        }
                    );


                    filter();

                }
            );

        }
    );


    activityButtons.forEach(
        button => {

            button.addEventListener(
                'click',
                () => {

                    selectedActivity =
                        button.dataset.activity;


                    activityButtons.forEach(
                        item => {

                            item.classList.toggle(
                                'active',
                                item === button
                            );

                        }
                    );


                    filter();

                }
            );

        }
    );


    stageButtons.forEach(
        button => {

            button.addEventListener(
                'click',
                () => {

                    selectedStage =
                        button.dataset.resultStage;


                    stageButtons.forEach(
                        item => {

                            item.classList.toggle(
                                'active',
                                item === button
                            );

                        }
                    );


                    filter();

                }
            );

        }
    );


    document
        .querySelector(
            '#clear-filters'
        )
        ?.addEventListener(
            'click',
            () => {

                selectedSection =
                    'all';

                selectedActivity =
                    'all';

                selectedStage =
                    'all';


                if (search) {
                    search.value = '';
                }


                sectionButtons.forEach(
                    item => {

                        item.classList.toggle(
                            'active',
                            item.dataset.section ===
                                'all'
                        );

                    }
                );


                activityButtons.forEach(
                    item => {

                        item.classList.toggle(
                            'active',
                            item.dataset.activity ===
                                'all'
                        );

                    }
                );


                stageButtons.forEach(
                    item => {

                        item.classList.toggle(
                            'active',
                            item.dataset.resultStage ===
                                'all'
                        );

                    }
                );


                filter();

            }
        );


    search?.addEventListener(
        'input',
        filter
    );


    filter();

}


/* =========================================================
   CHAMPIONSHIP
   ========================================================= */

function pointsByHouse() {

    const totals = {

        red: 0,

        green: 0,

        blue: 0,

        yellow: 0

    };


    results().forEach(
        item => {

            if (
                totals[item.team] !==
                undefined
            ) {

                totals[item.team] +=
                    getPoints(
                        item.activityType,
                        item.place
                    );

            }

        }
    );


    return Object
        .entries(totals)
        .sort(
            (a, b) => {

                if (
                    b[1] !== a[1]
                ) {
                    return b[1] - a[1];
                }


                return a[0].localeCompare(
                    b[0]
                );

            }
        );

}


/* =========================================================
   RENDER CHAMPIONSHIP
   ========================================================= */

function renderChampionship() {

    const leaderboard =
        document.querySelector(
            '.leaderboard'
        );


    if (!leaderboard) {
        return;
    }


    const spotlight =
        document.querySelector(
            '#champion-spotlight'
        );


    const gallery =
        document.querySelector(
            '#house-gallery'
        );


    const standing =
        pointsByHouse();


    const highest =
        Math.max(
            standing[0]?.[1] || 0,
            1
        );


    const [
        leadingTeam,
        leadingScore
    ] =
        standing[0] ||
        [
            'red',
            0
        ];


    const leader =
        HOUSE_INFO[leadingTeam] ||
        HOUSE_INFO.red;


    if (spotlight) {

        spotlight.innerHTML = `

            <div class="champion-medal">
                ♛
            </div>


            <div>

                <p class="eyebrow">
                    CURRENT LEADER
                </p>


                <h2>
                    ${escapeHtml(
                        leader.name
                    )}
                    is <em>in the lead.</em>
                </h2>


                <p>
                    ${leadingScore}
                    championship points and counting.
                </p>

            </div>


            <strong class="champion-points">
                ${leadingScore}
                <small>PTS</small>
            </strong>

        `;

    }


    if (gallery) {

        gallery.innerHTML =
            standing
                .map(
                    (
                        [team, score],
                        index
                    ) => {

                        const house =
                            HOUSE_INFO[team];


                        return `

                            <article
                                class="
                                    house-score-card
                                    house-${team}
                                "
                            >

                                <span>
                                    0${index + 1}
                                </span>


                                <h3>
                                    ${escapeHtml(
                                        house.name
                                    )}
                                </h3>


                                <strong>
                                    ${score}
                                    <small>PTS</small>
                                </strong>


                                <div>

                                    <i
                                        style="
                                            width:${
                                                Math.round(
                                                    score /
                                                    highest *
                                                    100
                                                )
                                            }%
                                        "
                                    ></i>

                                </div>


                                <p>
                                    ${
                                        index === 0
                                            ? 'Leading the way'
                                            : `${leadingScore - score} points to the lead`
                                    }
                                </p>

                            </article>

                        `;

                    }
                )
                .join('');

    }


    leaderboard.innerHTML =
        standing
            .map(
                (
                    [team, score],
                    index
                ) => {

                    const house =
                        HOUSE_INFO[team];


                    return `

                        <article
                            class="rank-row"
                        >

                            <span
                                class="rank-number"
                            >
                                0${index + 1}
                            </span>


                            <div>

                                <strong>
                                    ${escapeHtml(
                                        house.name
                                    )}
                                </strong>


                                <div
                                    class="bar-wrap"
                                >

                                    <div
                                        class="
                                            bar
                                            ${house.bar}
                                        "
                                        style="
                                            width:${
                                                Math.round(
                                                    score /
                                                    highest *
                                                    100
                                                )
                                            }%
                                        "
                                    ></div>

                                </div>

                            </div>


                            <span
                                class="
                                    team-tag
                                    ${house.tag}
                                "
                            >
                                ${house.label}
                            </span>


                            <strong
                                class="rank-points"
                            >
                                ${score}
                            </strong>

                        </article>

                    `;

                }
            )
            .join('');

}


/* =========================================================
   TEACHER PORTAL
   ========================================================= */

let selectedTeacherProgram =
    null;


/* =========================================================
   PROGRAM CARD
   ========================================================= */

function programButton(
    stage,
    section,
    program,
    index
) {

    const limitText =
        program.maxParticipants
            ? `Maximum ${program.maxParticipants}`
            : '';


    const typeText =
        program.type === 'group'
            ? 'Group'
            : 'Individual';


    return `

        <button
            type="button"
            class="teacher-program-choice"
            data-stage="${escapeHtml(stage)}"
            data-section="${escapeHtml(section)}"
            data-program-index="${index}"
        >

            <span
                class="teacher-program-number"
            >
                ${String(
                    index + 1
                ).padStart(
                    2,
                    '0'
                )}
            </span>


            <span
                class="teacher-program-content"
            >

                <strong>
                    ${escapeHtml(
                        program.name
                    )}
                </strong>


                <small>

                    ${typeText}

                    ${
                        limitText
                            ? ` · ${limitText}`
                            : ''
                    }

                </small>

            </span>


            <span
                class="teacher-program-arrow"
            >
                →
            </span>

        </button>

    `;

}


/* =========================================================
   SECTION CARD
   ========================================================= */

function sectionProgramCard(
    stage,
    section,
    programs
) {

    const info =
        SECTION_INFO[section];


    return `

        <article
            class="teacher-section-card"
        >

            <div
                class="teacher-section-heading"
            >

                <div>

                    <span
                        class="teacher-section-code"
                    >
                        ${info.label}
                    </span>


                    <h3>
                        ${info.full}
                    </h3>

                </div>


                <span
                    class="teacher-program-count"
                >
                    ${programs.length}

                    ${
                        programs.length === 1
                            ? 'program'
                            : 'programs'
                    }
                </span>

            </div>


            <div
                class="teacher-program-list"
            >

                ${
                    programs.length
                        ? programs
                            .map(
                                (
                                    program,
                                    index
                                ) =>
                                    programButton(
                                        stage,
                                        section,
                                        program,
                                        index
                                    )
                            )
                            .join('')
                        : `
                            <div
                                class="teacher-empty-programs"
                            >
                                No programs configured.
                            </div>
                        `
                }

            </div>

        </article>

    `;

}


/* =========================================================
   GENERAL CARD
   ========================================================= */

function generalProgramCard(
    stage,
    programs
) {

    return `

        <article
            class="
                teacher-section-card
                teacher-general-card
            "
        >

            <div
                class="teacher-section-heading"
            >

                <div>

                    <span
                        class="teacher-section-code"
                    >
                        INDEPENDENT CATEGORY
                    </span>


                    <h3>
                        GENERAL
                    </h3>

                </div>


                <span
                    class="teacher-program-count"
                >
                    ${programs.length}
                    programs
                </span>

            </div>


            <p
                class="teacher-section-description"
            >
                Independent on-stage programs for the
                General category. No HS or HSS section
                classification is required.
            </p>


            <div
                class="teacher-program-list"
            >

                ${
                    programs
                        .map(
                            (
                                program,
                                index
                            ) =>
                                programButton(
                                    stage,
                                    'GENERAL',
                                    program,
                                    index
                                )
                        )
                        .join('')
                }

            </div>

        </article>

    `;

}


/* =========================================================
   TEACHER DASHBOARD
   ========================================================= */

function teacherDashboard() {

    const section =
        document.querySelector(
            '.portal-section'
        );


    if (!section) {
        return;
    }


    section.innerHTML = `

        <div
            class="teacher-dashboard"
        >

            <div
                class="teacher-dashboard-header"
            >

                <div>

                    <p class="eyebrow">
                        TEACHER DASHBOARD
                    </p>


                    <h2>
                        Enter <em>results.</em>
                    </h2>


                    <p
                        class="teacher-dashboard-intro"
                    >
                        Choose the correct stage, section and
                        program. Then enter the winning result.
                    </p>

                </div>


                <button
                    class="btn ghost"
                    id="sign-out"
                    type="button"
                >
                    Sign out
                </button>

            </div>


            <!-- =========================================
                 OFF-STAGE
                 ========================================= -->

            <section
                class="teacher-stage-block"
                data-stage="off-stage"
            >

                <div
                    class="teacher-stage-heading"
                >

                    <div>

                        <span
                            class="teacher-stage-number"
                        >
                            01
                        </span>


                        <div>

                            <p class="eyebrow">
                                LITERARY · VISUAL · WRITTEN
                            </p>


                            <h2>
                                Off-Stage
                            </h2>

                        </div>

                    </div>


                    <span
                        class="teacher-stage-count"
                    >

                        ${
                            Object.values(
                                PROGRAMS['off-stage']
                            )
                                .reduce(
                                    (
                                        total,
                                        list
                                    ) =>
                                        total +
                                        list.length,
                                    0
                                )
                        }

                        programs

                    </span>

                </div>


                <div
                    class="teacher-section-grid"
                >

                    ${sectionProgramCard(
                        'off-stage',
                        'LP1',
                        PROGRAMS['off-stage'].LP1
                    )}


                    ${sectionProgramCard(
                        'off-stage',
                        'LP2',
                        PROGRAMS['off-stage'].LP2
                    )}


                    ${sectionProgramCard(
                        'off-stage',
                        'UP',
                        PROGRAMS['off-stage'].UP
                    )}


                    ${sectionProgramCard(
                        'off-stage',
                        'HS',
                        PROGRAMS['off-stage'].HS
                    )}


                    ${sectionProgramCard(
                        'off-stage',
                        'HSS',
                        PROGRAMS['off-stage'].HSS
                    )}

                </div>

            </section>


            <!-- =========================================
                 ON-STAGE
                 ========================================= -->

            <section
                class="teacher-stage-block"
                data-stage="on-stage"
            >

                <div
                    class="teacher-stage-heading"
                >

                    <div>

                        <span
                            class="teacher-stage-number"
                        >
                            02
                        </span>


                        <div>

                            <p class="eyebrow">
                                PERFORMANCE · MUSIC · SPEECH
                            </p>


                            <h2>
                                On-Stage
                            </h2>

                        </div>

                    </div>


                    <span
                        class="teacher-stage-count"
                    >

                        ${
                            PROGRAMS['on-stage'].UP.length +
                            PROGRAMS['on-stage'].HS.length +
                            PROGRAMS['on-stage'].HSS.length +
                            PROGRAMS['on-stage'].GENERAL.length
                        }

                        programs

                    </span>

                </div>


                <div
                    class="teacher-section-grid"
                >

                    ${sectionProgramCard(
                        'on-stage',
                        'UP',
                        PROGRAMS['on-stage'].UP
                    )}


                    ${sectionProgramCard(
                        'on-stage',
                        'HS',
                        PROGRAMS['on-stage'].HS
                    )}


                    ${sectionProgramCard(
                        'on-stage',
                        'HSS',
                        PROGRAMS['on-stage'].HSS
                    )}


                    ${generalProgramCard(
                        'on-stage',
                        PROGRAMS['on-stage'].GENERAL
                    )}

                </div>

            </section>


            <!-- =========================================
                 RESULT ENTRY
                 ========================================= -->

            <div
                id="teacher-result-entry"
                class="teacher-result-entry"
            >

                <div
                    class="teacher-entry-empty"
                >

                    <span>
                        +
                    </span>


                    <h3>
                        Select a program
                    </h3>


                    <p>
                        Choose any program above to open
                        its result-entry form.
                    </p>

                </div>

            </div>


            <!-- =========================================
                 PUBLISHED RESULTS
                 ========================================= -->

            <section
                class="teacher-published-section"
            >

                <div
                    class="teacher-published-heading"
                >

                    <div>

                        <p class="eyebrow">
                            LIVE RECORD
                        </p>


                        <h2>
                            Published results
                        </h2>

                    </div>


                    <span
                        id="teacher-result-total"
                        class="teacher-result-total"
                    >
                        0 results
                    </span>

                </div>


                <div
                    id="manage-results"
                    class="teacher-manage-list"
                ></div>

            </section>

        </div>

    `;


    document
        .querySelector(
            '#sign-out'
        )
        ?.addEventListener(
            'click',
            () => {

                sessionStorage.removeItem(
                    SESSION_KEY
                );


                window.location.reload();

            }
        );


    setupTeacherProgramButtons();

    renderManageResults();

}


/* =========================================================
   PROGRAM SELECTION
   ========================================================= */

function setupTeacherProgramButtons() {

    document
        .querySelectorAll(
            '.teacher-program-choice'
        )
        .forEach(
            button => {

                button.addEventListener(
                    'click',
                    () => {

                        const stage =
                            button.dataset.stage;


                        const section =
                            button.dataset.section;


                        const index =
                            Number(
                                button.dataset.programIndex
                            );


                        const programList =
                            PROGRAMS[stage]?.[section];


                        if (!programList) {
                            return;
                        }


                        const program =
                            programList[index];


                        if (!program) {
                            return;
                        }


                        openTeacherResultEntry(
                            stage,
                            section,
                            program
                        );

                    }
                );

            }
        );

}


/* =========================================================
   OPEN RESULT ENTRY
   ========================================================= */

function openTeacherResultEntry(
    stage,
    section,
    program
) {

    selectedTeacherProgram = {

        stage,

        section,

        program

    };


    const container =
        document.querySelector(
            '#teacher-result-entry'
        );


    if (!container) {
        return;
    }


    const isGeneral =
        section === 'GENERAL';


    const limit =
        program.maxParticipants ||
        null;


    container.innerHTML = `

        <div
            class="teacher-entry-card"
        >

            <div
                class="teacher-entry-header"
            >

                <div>

                    <p class="eyebrow">
                        RESULT ENTRY
                    </p>


                    <h2>
                        ${escapeHtml(
                            program.name
                        )}
                    </h2>


                    <div
                        class="teacher-entry-context"
                    >

                        <span>
                            ${stageLabel(stage)}
                        </span>


                        <span>
                            ${
                                isGeneral
                                    ? 'GENERAL'
                                    : sectionLabel(section)
                            }
                        </span>


                        <span>
                            ${
                                program.type === 'group'
                                    ? 'GROUP'
                                    : 'INDIVIDUAL'
                            }
                        </span>


                        ${
                            limit
                                ? `
                                    <span>
                                        Maximum ${limit}
                                    </span>
                                `
                                : ''
                        }

                    </div>

                </div>


                <button
                    type="button"
                    class="teacher-close-entry"
                    id="close-result-entry"
                    aria-label="Close result entry"
                >
                    ×
                </button>

            </div>


            <form
                id="teacher-result-form"
                class="teacher-entry-form"
            >

                <div
                    class="teacher-entry-grid"
                >

                    <label>

                        ${
                            program.type === 'group'
                                ? 'Group Name'
                                : 'Student Name'
                        }


                        <input
                            type="text"
                            name="name"
                            required
                            maxlength="80"
                            placeholder="${
                                program.type === 'group'
                                    ? 'Enter group name'
                                    : 'Enter student name'
                            }"
                        >

                    </label>


                    <label>

                        Class


                        <input
                            type="text"
                            name="studentClass"
                            required
                            maxlength="30"
                            placeholder="Example: Class VIII"
                        >

                    </label>


                    <input
                        type="hidden"
                        name="section"
                        value="${escapeHtml(section)}"
                    >


                    <label>

                        House


                        <select
                            name="team"
                            required
                        >

                            <option value="">
                                Select house
                            </option>


                            <option value="red">
                                Crimson / Red
                            </option>


                            <option value="green">
                                Verdant / Green
                            </option>


                            <option value="blue">
                                Azure / Blue
                            </option>


                            <option value="yellow">
                                Solar / Yellow
                            </option>

                        </select>

                    </label>


                    <!-- =====================================
                         PLACE / POINTS
                         ===================================== -->

                    <label>

                        Place


                        <select
                            name="place"
                            required
                        >

                            <option value="">
                                Select place
                            </option>


                            ${
                                program.type === 'group'
                                    ? `

                                        <option value="first">
                                            First — 10 points
                                        </option>


                                        <option value="second">
                                            Second — 5 points
                                        </option>


                                        <option value="third">
                                            Third — 3 points
                                        </option>

                                    `
                                    : `

                                        <option value="first">
                                            First — 5 points
                                        </option>


                                        <option value="second">
                                            Second — 3 points
                                        </option>


                                        <option value="third">
                                            Third — 1 point
                                        </option>

                                    `
                            }

                        </select>

                    </label>


                    ${
                        program.type === 'group'
                            ? `

                                <label>

                                    Number of Participants


                                    <input
                                        type="number"
                                        name="participantCount"
                                        min="1"
                                        ${
                                            limit
                                                ? `max="${limit}"`
                                                : ''
                                        }
                                        required
                                        placeholder="${
                                            limit
                                                ? `Maximum ${limit}`
                                                : 'Enter number'
                                        }"
                                    >


                                    <span
                                        class="teacher-field-note"
                                    >
                                        ${
                                            limit
                                                ? `Maximum allowed: ${limit} participants.`
                                                : 'Enter the total number of participants.'
                                        }
                                    </span>

                                </label>

                            `
                            : ''
                    }

                </div>


                <div
                    class="teacher-entry-actions"
                >

                    <button
                        type="submit"
                        class="btn primary"
                    >
                        Publish Result →
                    </button>


                    <button
                        type="button"
                        class="btn ghost"
                        id="change-program"
                    >
                        Choose another program
                    </button>

                </div>


                <p
                    class="teacher-save-message"
                    id="teacher-save-message"
                    aria-live="polite"
                ></p>

            </form>

        </div>

    `;


    document
        .querySelector(
            '#close-result-entry'
        )
        ?.addEventListener(
            'click',
            closeTeacherResultEntry
        );


    document
        .querySelector(
            '#change-program'
        )
        ?.addEventListener(
            'click',
            () => {

                closeTeacherResultEntry();


                const stageBlock =
                    document.querySelector(
                        `.teacher-stage-block[data-stage="${stage}"]`
                    );


                stageBlock?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }
        );


    document
        .querySelector(
            '#teacher-result-form'
        )
        ?.addEventListener(
            'submit',
            submitTeacherResult
        );


    container.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

}


/* =========================================================
   CLOSE ENTRY
   ========================================================= */

function closeTeacherResultEntry() {

    selectedTeacherProgram =
        null;


    const container =
        document.querySelector(
            '#teacher-result-entry'
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div
            class="teacher-entry-empty"
        >

            <span>
                +
            </span>


            <h3>
                Select a program
            </h3>


            <p>
                Choose any program above to open
                its result-entry form.
            </p>

        </div>

    `;

}


/* =========================================================
   SUBMIT TEACHER RESULT
   ========================================================= */

async function submitTeacherResult(
    submitEvent
) {

    submitEvent.preventDefault();


    if (!selectedTeacherProgram) {
        return;
    }


    const form =
        new FormData(
            submitEvent.currentTarget
        );


    const program =
        selectedTeacherProgram.program;


    const participantValue =
        form.get(
            'participantCount'
        );


    const participantCount =
        participantValue
            ? Number(
                participantValue
            )
            : null;


    /* =====================================================
       GROUP PARTICIPANT LIMIT
       ===================================================== */

    if (
        program.maxParticipants &&
        (
            !participantCount ||
            participantCount < 1 ||
            participantCount >
                program.maxParticipants
        )
    ) {

        alert(
            `This program allows a maximum of ${program.maxParticipants} participants.`
        );


        return;

    }


    /* =====================================================
       FORCE GENERAL TO REMAIN GENERAL
       ===================================================== */

    const finalSection =
        selectedTeacherProgram.section ===
            'GENERAL'

            ? 'GENERAL'

            : String(
                form.get(
                    'section'
                ) ||
                selectedTeacherProgram.section
            );


    const item = {

        id:
            createId(),

        name:
            String(
                form.get(
                    'name'
                ) ||
                ''
            ).trim(),

        studentClass:
            String(
                form.get(
                    'studentClass'
                ) ||
                ''
            ).trim(),

        section:
            finalSection,

        activityType:
            program.type === 'group'
                ? 'group'
                : 'individual',

        programCategory:
            selectedTeacherProgram.stage,

        event:
            program.name,

        team:
            String(
                form.get(
                    'team'
                ) ||
                ''
            ),

        place:
            String(
                form.get(
                    'place'
                ) ||
                ''
            ),

        participantCount

    };


    /* =====================================================
       REQUIRED FIELD VALIDATION
       ===================================================== */

    if (
        !item.name ||
        !item.studentClass ||
        !item.team ||
        !item.place
    ) {

        alert(
            'Please complete all required fields.'
        );


        return;

    }


    /* =====================================================
       DISABLE BUTTON WHILE SAVING
       ===================================================== */

    const submitButton =
        submitEvent.currentTarget.querySelector(
            'button[type="submit"]'
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            'Publishing...';

    }


    /* =====================================================
       SAVE TO SUPABASE
       ===================================================== */

    try {

        await saveResult(
            item
        );


        const message =
            document.querySelector(
                '#teacher-save-message'
            );


        if (message) {

            message.textContent =
                '✓ Result published successfully to the live database.';


            message.classList.add(
                'success'
            );

        }


        renderManageResults();

        renderPublicResults();

        renderChampionship();


        /*
         * Keep selected program open.
         */

        const currentForm =
            submitEvent.currentTarget;


        currentForm.reset();


        const team =
            currentForm.querySelector(
                '[name="team"]'
            );


        if (team) {
            team.value = '';
        }


        const place =
            currentForm.querySelector(
                '[name="place"]'
            );


        if (place) {
            place.value = '';
        }


        currentForm
            .querySelector(
                '[name="name"]'
            )
            ?.focus();


    } catch (error) {

        console.error(
            'Could not publish result:',
            error
        );


        const message =
            document.querySelector(
                '#teacher-save-message'
            );


        if (message) {

            message.textContent =
                `✕ Could not publish result: ${error.message}`;


            message.classList.remove(
                'success'
            );

        }


        alert(
            'The result could not be saved to Supabase. Check the browser console for details.'
        );


    } finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                'Publish Result →';

        }

    }

}


/* =========================================================
   MANAGE / PUBLISHED RESULTS
   ========================================================= */

function renderManageResults() {

    const list =
        document.querySelector(
            '#manage-results'
        );


    if (!list) {
        return;
    }


    const items =
        results();


    const total =
        document.querySelector(
            '#teacher-result-total'
        );


    if (total) {

        total.textContent =
            `${items.length} ${
                items.length === 1
                    ? 'result'
                    : 'results'
            }`;

    }


    if (!items.length) {

        list.innerHTML = `

            <div
                class="teacher-manage-empty"
            >
                No results have been published yet.
            </div>

        `;


        return;

    }


    list.innerHTML =
        items
            .map(
                item => {

                    const house =
                        HOUSE_INFO[item.team] ||
                        HOUSE_INFO.red;


                    const participantText =
                        item.participantCount
                            ? ` · ${item.participantCount} participants`
                            : '';


                    const resultPoints =
                        getPoints(
                            item.activityType,
                            item.place
                        );


                    return `

                        <article
                            class="teacher-manage-item"
                        >

                            <div
                                class="teacher-manage-main"
                            >

                                <div
                                    class="teacher-manage-place"
                                >
                                    ${placeNumber(
                                        item.place
                                    )}
                                </div>


                                <div>

                                    <strong>
                                        ${escapeHtml(
                                            item.name
                                        )}
                                    </strong>


                                    <p>

                                        ${escapeHtml(
                                            item.event
                                        )}

                                        ·

                                        ${stageLabel(
                                            item.programCategory
                                        )}

                                        ·

                                        ${sectionLabel(
                                            item.section
                                        )}

                                        ·

                                        ${escapeHtml(
                                            item.studentClass
                                        )}

                                        ${participantText}

                                    </p>

                                </div>

                            </div>


                            <span
                                class="
                                    team-tag
                                    ${house.tag}
                                "
                            >
                                ${house.label}
                            </span>


                            <strong
                                class="teacher-manage-medal"
                            >
                                ${medal(
                                    item.place
                                )}
                            </strong>


                            <strong
                                class="teacher-manage-points"
                            >
                                ${resultPoints} PTS
                            </strong>


                            <button
                                type="button"
                                class="delete-btn"
                                data-delete-id="${escapeHtml(item.id)}"
                            >
                                Delete
                            </button>

                        </article>

                    `;

                }
            )
            .join('');


    list
        .querySelectorAll(
            '[data-delete-id]'
        )
        .forEach(
            button => {

                button.addEventListener(
                    'click',
                    async () => {

                        const id =
                            button.dataset.deleteId;


                        const item =
                            results().find(
                                result =>
                                    result.id === id
                            );


                        if (!item) {
                            return;
                        }


                        const confirmed =
                            confirm(
                                `Delete the result for "${item.name}"?`
                            );


                        if (!confirmed) {
                            return;
                        }


                        try {

                            button.disabled =
                                true;


                            button.textContent =
                                'Deleting...';


                            await deleteResult(
                                id
                            );


                            renderManageResults();

                            renderPublicResults();

                            renderChampionship();


                        } catch (error) {

                            console.error(
                                'Could not delete result:',
                                error
                            );


                            button.disabled =
                                false;


                            button.textContent =
                                'Delete';


                            alert(
                                'The result could not be deleted from Supabase.'
                            );

                        }

                    }
                );

            }
        );

}


/* =========================================================
   TEACHER AUTHENTICATION
   ========================================================= */

function setupTeacherAuth() {

    const form =
        document.querySelector(
            '#login-form'
        );


    if (!form) {
        return;
    }


    if (
        sessionStorage.getItem(
            SESSION_KEY
        ) === 'true'
    ) {

        teacherDashboard();

        return;

    }


    form.addEventListener(
        'submit',
        submitEvent => {

            submitEvent.preventDefault();


            const input =
                form.querySelector(
                    'input[type="password"]'
                );


            const message =
                document.querySelector(
                    '#login-message'
                );


            if (
                input &&
                input.value ===
                    TEACHER_PASSWORD
            ) {

                sessionStorage.setItem(
                    SESSION_KEY,
                    'true'
                );


                teacherDashboard();

                return;

            }


            if (message) {

                message.textContent =
                    'Incorrect teacher code. Please try again.';


                message.classList.remove(
                    'hidden'
                );

            }


            if (input) {

                input.value =
                    '';


                input.focus();

            }

        }
    );

}


/* =========================================================
   HOME SPOTLIGHT
   ========================================================= */

const spotlightData = {

    music: {

        number: '01',

        title: 'Music',

        copy:
            'From classical voice to instrumental expression — hear every student find their own rhythm.',

        cta:
            'Explore music'

    },


    dance: {

        number: '02',

        title: 'Dance',

        copy:
            'Energy, precision and storytelling come together on one stage across traditional and contemporary forms.',

        cta:
            'Explore dance'

    },


    literary: {

        number: '03',

        title: 'Literary',

        copy:
            'Words become performance through recitation, writing, speech and dramatic expression.',

        cta:
            'Explore literary'

    },


    art: {

        number: '04',

        title: 'Visual Arts',

        copy:
            'Colour, line and imagination turn blank surfaces into work worth remembering.',

        cta:
            'Explore visual arts'

    }

};


/* =========================================================
   SETUP SPOTLIGHT
   ========================================================= */

function setupSpotlight() {

    const card =
        document.querySelector(
            '#spotlight-card'
        );


    if (!card) {
        return;
    }


    const tabs =
        [
            ...document.querySelectorAll(
                '.spotlight-tab'
            )
        ];


    function show(key) {

        const data =
            spotlightData[key] ||
            spotlightData.music;


        card.innerHTML = `

            <div
                class="spotlight-number"
            >
                ${data.number}
            </div>


            <div>

                <h3>
                    ${escapeHtml(
                        data.title
                    )}
                </h3>


                <p>
                    ${escapeHtml(
                        data.copy
                    )}
                </p>

            </div>


            <a
                class="btn ghost"
                href="programs.html"
            >
                ${escapeHtml(
                    data.cta
                )} →
            </a>

        `;


        tabs.forEach(
            tab => {

                tab.classList.toggle(
                    'active',
                    tab.dataset.spotlight ===
                        key
                );

            }
        );

    }


    tabs.forEach(
        tab => {

            tab.addEventListener(
                'click',
                () => {

                    show(
                        tab.dataset.spotlight
                    );

                }
            );

        }
    );


    show(
        'music'
    );

}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function setupAboutPage() {

    const revealItems =
        document.querySelectorAll(
            '.about-profile-grid, ' +
            '.purpose-card, ' +
            '.work-item, ' +
            '.approach-step, ' +
            '.statement-inner, ' +
            '.about-closing'
        );


    if (
        'IntersectionObserver' in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.classList.add(
                                'about-visible'
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            item => {

                observer.observe(
                    item
                );

            }
        );

    } else {

        revealItems.forEach(
            item => {

                item.classList.add(
                    'about-visible'
                );

            }
        );

    }


    const skillCards =
        document.querySelectorAll(
            '.about-skill'
        );


    skillCards.forEach(
        (
            card,
            index
        ) => {

            card.style.transitionDelay =
                `${index * 80}ms`;


            card.addEventListener(
                'mouseenter',
                () => {

                    card.style.setProperty(
                        '--card-angle',
                        index % 2 === 0
                            ? '-1deg'
                            : '1deg'
                    );

                }
            );

        }
    );


    const profile =
        document.querySelector(
            '.profile-circle'
        );


    if (
        profile &&
        window.matchMedia(
            '(pointer:fine)'
        ).matches
    ) {

        window.addEventListener(
            'mousemove',
            event => {

                const x =
                    (
                        window.innerWidth / 2 -
                        event.clientX
                    ) / 70;


                const y =
                    (
                        window.innerHeight / 2 -
                        event.clientY
                    ) / 70;


                profile.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }


    document
        .querySelectorAll(
            '[data-current-year]'
        )
        .forEach(
            element => {

                element.textContent =
                    new Date().getFullYear();

            }
        );

}


/* =========================================================
   GLOBAL KEYBOARD CONTROLS
   ========================================================= */

function setupKeyboardControls() {

    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key !==
                'Escape'
            ) {
                return;
            }


            const nav =
                document.querySelector(
                    '.nav'
                );


            const toggle =
                document.querySelector(
                    '.nav-toggle'
                );


            nav?.classList.remove(
                'open'
            );


            toggle?.setAttribute(
                'aria-expanded',
                'false'
            );

        }
    );

}


/* =========================================================
   APPLICATION STARTUP
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    async () => {

        /* =================================================
           BASIC PAGE SETUP
           ================================================= */

        setupNav();

        setupActiveNav();

        setupReveal();

        setupSpotlight();

        setupAboutPage();

        setupKeyboardControls();


        /* =================================================
           LOAD LIVE RESULTS
           ================================================= */

        await loadResults();


        /* =================================================
           RENDER LIVE RESULTS
           ================================================= */

        renderPublicResults();

        renderChampionship();


        /* =================================================
           TEACHER AUTHENTICATION
           ================================================= */

        setupTeacherAuth();


        /* =================================================
           REALTIME DATABASE SYNC
           ================================================= */

        setupRealtimeResults();

    }
);
