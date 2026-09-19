/* =========================================================
   MIS ART FEST 2026
   COMPLETE MAIN JAVASCRIPT
   SUPABASE + TEACHER PORTAL + PUBLIC RESULTS
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const TEACHER_PASSWORD = 'malabar@5445';

const SESSION_KEY =
    'mis-art-fest-teacher-session';


/* =========================================================
   HOUSE INFORMATION
   ========================================================= */

const HOUSE_INFO = {

    RED: {
        name: 'Red House',
        color: '#c62828'
    },

    GREEN: {
        name: 'Green House',
        color: '#2e7d32'
    },

    BLUE: {
        name: 'Blue House',
        color: '#1565c0'
    },

    YELLOW: {
        name: 'Yellow House',
        color: '#f9a825'
    }

};


/* =========================================================
   POINT SYSTEM
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
   SECTION INFORMATION
   ========================================================= */

const SECTION_INFO = {

    LP1: {
        name: 'LP 1',
        fullName: 'Lower Primary 1'
    },

    LP2: {
        name: 'LP 2',
        fullName: 'Lower Primary 2'
    },

    UP: {
        name: 'UP',
        fullName: 'Upper Primary'
    },

    HS: {
        name: 'HS',
        fullName: 'High School'
    },

    HSS: {
        name: 'HSS',
        fullName: 'Higher Secondary'
    },

    GENERAL: {
        name: 'General',
        fullName: 'General'
    }

};


/* =========================================================
   PROGRAM LIST
   ========================================================= */

const PROGRAMS = {


    /* -----------------------------------------------------
       OFF-STAGE
       ----------------------------------------------------- */

    OFF_STAGE: {


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


    /* -----------------------------------------------------
       ON-STAGE
       ----------------------------------------------------- */

    ON_STAGE: {


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
   APPLICATION STATE
   ========================================================= */

let RESULTS_CACHE = [];

let RESULTS_LOADED = false;

let selectedTeacherProgram = null;


/* =========================================================
   BASIC HELPERS
   ========================================================= */

function createId() {

    return (
        'result-' +
        Date.now() +
        '-' +
        Math.random()
            .toString(36)
            .substring(2, 10)
    );

}


function escapeHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return '';
    }

    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

}


function titleCase(value) {

    return String(value || '')
        .toLowerCase()
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );

}


function placeNumber(place) {

    const number =
        Number(place);

    if (
        !Number.isFinite(number)
    ) {
        return '';
    }

    return String(number);

}


function medal(place) {

    const number =
        Number(place);

    if (number === 1) {
        return '🥇';
    }

    if (number === 2) {
        return '🥈';
    }

    if (number === 3) {
        return '🥉';
    }

    return '';
}


function stageLabel(stage) {

    if (stage === 'OFF_STAGE') {
        return 'Off Stage';
    }

    if (stage === 'ON_STAGE') {
        return 'On Stage';
    }

    return titleCase(stage);
}


function sectionLabel(section) {

    return (
        SECTION_INFO[section]?.name ||
        section ||
        ''
    );

}


function sectionFullName(section) {

    return (
        SECTION_INFO[section]?.fullName ||
        section ||
        ''
    );

}


/* =========================================================
   NORMALISE DATABASE RESULT
   ========================================================= */

function normaliseResult(item) {

    if (!item) {
        return null;
    }

    return {

        id:
            item.id,

        name:
            item.name ??
            item.student_name ??
            '',

        studentClass:
            item.studentClass ??
            item.student_class ??
            item.class_name ??
            '',

        section:
            item.section ??
            '',

        activityType:
            item.activityType ??
            item.activity_type ??
            'individual',

        programCategory:
            item.programCategory ??
            item.program_category ??
            '',

        event:
            item.event ??
            item.program ??
            '',

        team:
            item.team ??
            '',

        place:
            item.place ??
            '',

        participantCount:
            item.participantCount ??
            item.participant_count ??
            null,

        createdAt:
            item.createdAt ??
            item.created_at ??
            null

    };

}


/* =========================================================
   SUPABASE CHECK
   ========================================================= */

function checkSupabase() {

    if (
        typeof window.supabase ===
        'undefined'
    ) {

        throw new Error(
            'Supabase library is not loaded. Check the Supabase script in teacher.html/index.html.'
        );

    }


    if (
        typeof supabaseClient ===
        'undefined' ||
        !supabaseClient
    ) {

        throw new Error(
            'Supabase client was not created. Check supabase.js.'
        );

    }

}


/* =========================================================
   LOAD RESULTS
   ========================================================= */

async function loadResults() {

    try {

        checkSupabase();


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
                ? data
                    .map(normaliseResult)
                    .filter(Boolean)
                : [];


        RESULTS_LOADED = true;


        return RESULTS_CACHE;

    }

    catch (error) {

        console.error(
            'Could not load results:',
            error
        );


        RESULTS_CACHE = [];

        RESULTS_LOADED = false;


        const message =
            error?.message ||
            String(error);


        const status =
            error?.code
                ? ` Code: ${error.code}`
                : '';


        console.warn(
            `MIS Art Fest results could not be loaded: ${message}${status}`
        );


        return [];

    }

}


/* =========================================================
   SAVE RESULT
   ========================================================= */

async function saveResult(result) {

    checkSupabase();


    const normalised =
        normaliseResult(result);


    if (!normalised) {

        throw new Error(
            'Invalid result data.'
        );

    }


    /*
       IMPORTANT:
       These legacy fields are intentionally included.

       Your existing Supabase table has required
       student_name and program columns.
    */

    const databaseRow = {

        id:
            normalised.id,

        name:
            normalised.name,

        student_class:
            normalised.studentClass,

        section:
            normalised.section,

        activity_type:
            normalised.activityType,

        program_category:
            normalised.programCategory,

        event:
            normalised.event,

        team:
            normalised.team,

        place:
            normalised.place,

        participant_count:
            normalised.participantCount,

        student_name:
            normalised.name,

        program:
            normalised.event

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

        const detailedError =
            new Error(
                error.message ||
                'Supabase could not save the result.'
            );


        detailedError.code =
            error.code;

        detailedError.details =
            error.details;

        detailedError.hint =
            error.hint;


        throw detailedError;

    }


    const saved =
        normaliseResult(data);


    return saved;

}


/* =========================================================
   DELETE RESULT
   ========================================================= */

async function deleteResult(id) {

    checkSupabase();


    if (!id) {

        throw new Error(
            'Result ID is missing.'
        );

    }


    const {
        error
    } =
        await supabaseClient
            .from('results')
            .delete()
            .eq('id', id);


    if (error) {

        throw error;

    }


    RESULTS_CACHE =
        RESULTS_CACHE.filter(
            result =>
                result.id !== id
        );


    renderAllPublicSections();

}


/* =========================================================
   REALTIME
   ========================================================= */

function setupRealtimeResults() {

    if (
        typeof supabaseClient ===
        'undefined' ||
        !supabaseClient
    ) {
        return;
    }


    try {

        supabaseClient
            .channel(
                'mis-art-fest-results-live'
            )
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'results'
                },
                async () => {

                    await loadResults();

                    renderAllPublicSections();

                    renderManageResults();

                    renderChampionship();

                }
            )
            .subscribe();

    }

    catch (error) {

        console.error(
            'Realtime setup failed:',
            error
        );

    }

}


/* =========================================================
   SCORING
   ========================================================= */

function getPointsForResult(result) {

    if (!result) {
        return 0;
    }


    const place =
        Number(result.place);


    const type =
        result.activityType ===
        'group'
            ? 'group'
            : 'individual';


    if (
        place === 1
    ) {
        return POINTS[type].first;
    }


    if (
        place === 2
    ) {
        return POINTS[type].second;
    }


    if (
        place === 3
    ) {
        return POINTS[type].third;
    }


    return 0;

}


/* =========================================================
   HOUSE POINTS
   ========================================================= */

function calculateHousePoints() {

    const standings = {};


    Object.keys(HOUSE_INFO)
        .forEach(house => {

            standings[house] = {

                house,

                name:
                    HOUSE_INFO[house].name,

                points: 0,

                first: 0,

                second: 0,

                third: 0,

                results: 0

            };

        });


    RESULTS_CACHE.forEach(result => {

        const house =
            String(
                result.team || ''
            )
            .trim()
            .toUpperCase();


        if (
            !standings[house]
        ) {
            return;
        }


        const points =
            getPointsForResult(
                result
            );


        standings[house].points +=
            points;


        standings[house].results++;


        const place =
            Number(result.place);


        if (place === 1) {
            standings[house].first++;
        }

        if (place === 2) {
            standings[house].second++;
        }

        if (place === 3) {
            standings[house].third++;
        }

    });


    return Object.values(
        standings
    ).sort(
        (a, b) =>
            b.points -
            a.points
    );

}


/* =========================================================
   PUBLIC RESULTS
   ========================================================= */

function getPublicResults() {

    return RESULTS_CACHE
        .slice()
        .sort(
            (a, b) =>
                Number(b.place) -
                Number(a.place)
        );

}


/* =========================================================
   FIND ELEMENT
   ========================================================= */

function firstElement(...ids) {

    for (
        const id of ids
    ) {

        const element =
            document.getElementById(id);

        if (element) {
            return element;
        }

    }

    return null;

}


/* =========================================================
   RENDER PUBLIC RESULTS
   ========================================================= */

function renderPublicResults() {

    const container =
        firstElement(
            'public-results',
            'results-container',
            'results-list',
            'results-grid'
        );


    if (!container) {
        return;
    }


    if (
        !RESULTS_CACHE.length
    ) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No results published yet</h3>
                <p>Results will appear here once they are published by the teacher.</p>
            </div>
        `;

        return;

    }


    const results =
        RESULTS_CACHE.slice()
            .sort(
                (a, b) => {

                    const placeA =
                        Number(a.place) || 99;

                    const placeB =
                        Number(b.place) || 99;

                    return placeA - placeB;

                }
            );


    container.innerHTML =
        results.map(result => {

            const place =
                Number(result.place);


            const points =
                getPointsForResult(
                    result
                );


            return `
                <article class="result-card">

                    <div class="result-place">
                        ${medal(place)}
                        <strong>
                            ${place}
                        </strong>
                    </div>

                    <div class="result-content">

                        <h3>
                            ${escapeHtml(result.name)}
                        </h3>

                        <p>
                            ${escapeHtml(result.event)}
                        </p>

                        <div class="result-meta">

                            <span>
                                ${escapeHtml(
                                    sectionLabel(
                                        result.section
                                    )
                                )}
                            </span>

                            <span>
                                Class ${escapeHtml(
                                    result.studentClass
                                )}
                            </span>

                            <span>
                                ${escapeHtml(
                                    HOUSE_INFO[
                                        String(
                                            result.team ||
                                            ''
                                        ).toUpperCase()
                                    ]?.name ||
                                    result.team ||
                                    ''
                                )}
                            </span>

                            ${
                                points
                                    ? `
                                    <span>
                                        ${points} points
                                    </span>
                                    `
                                    : ''
                            }

                        </div>

                    </div>

                </article>
            `;

        })
        .join('');

}


/* =========================================================
   PUBLIC RESULT FILTERING
   ========================================================= */

function setupResultFilters() {

    const searchInput =
        firstElement(
            'result-search',
            'results-search',
            'search-results'
        );


    const sectionFilter =
        firstElement(
            'result-section-filter',
            'section-filter'
        );


    const houseFilter =
        firstElement(
            'result-house-filter',
            'house-filter'
        );


    const eventFilter =
        firstElement(
            'result-event-filter',
            'event-filter'
        );


    function filterResults() {

        let results =
            RESULTS_CACHE.slice();


        const search =
            String(
                searchInput?.value ||
                ''
            )
            .trim()
            .toLowerCase();


        const section =
            sectionFilter?.value ||
            '';


        const house =
            houseFilter?.value ||
            '';


        const event =
            eventFilter?.value ||
            '';


        if (search) {

            results =
                results.filter(
                    result =>
                        String(
                            result.name
                        )
                        .toLowerCase()
                        .includes(search) ||

                        String(
                            result.event
                        )
                        .toLowerCase()
                        .includes(search)
                );

        }


        if (section) {

            results =
                results.filter(
                    result =>
                        result.section ===
                        section
                );

        }


        if (house) {

            results =
                results.filter(
                    result =>
                        String(
                            result.team
                        ).toUpperCase() ===
                        String(
                            house
                        ).toUpperCase()
                );

        }


        if (event) {

            results =
                results.filter(
                    result =>
                        result.event ===
                        event
                );

        }


        renderFilteredResults(
            results
        );

    }


    [
        searchInput,
        sectionFilter,
        houseFilter,
        eventFilter
    ]
        .filter(Boolean)
        .forEach(element => {

            element.addEventListener(
                'input',
                filterResults
            );

            element.addEventListener(
                'change',
                filterResults
            );

        });

}


function renderFilteredResults(
    results
) {

    const container =
        firstElement(
            'public-results',
            'results-container',
            'results-list',
            'results-grid'
        );


    if (!container) {
        return;
    }


    if (!results.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No matching results</h3>
                <p>Try changing the selected filters.</p>
            </div>
        `;

        return;

    }


    results.sort(
        (a, b) =>
            Number(a.place || 99) -
            Number(b.place || 99)
    );


    container.innerHTML =
        results.map(result => {

            const place =
                Number(result.place);


            return `
                <article class="result-card">

                    <div class="result-place">
                        ${medal(place)}
                        <strong>
                            ${place}
                        </strong>
                    </div>

                    <div class="result-content">

                        <h3>
                            ${escapeHtml(result.name)}
                        </h3>

                        <p>
                            ${escapeHtml(result.event)}
                        </p>

                        <div class="result-meta">

                            <span>
                                ${escapeHtml(
                                    sectionLabel(
                                        result.section
                                    )
                                )}
                            </span>

                            <span>
                                Class ${escapeHtml(
                                    result.studentClass
                                )}
                            </span>

                            <span>
                                ${escapeHtml(
                                    result.team
                                )}
                            </span>

                        </div>

                    </div>

                </article>
            `;

        }).join('');

}


/* =========================================================
   CHAMPIONSHIP
   ========================================================= */

function renderChampionship() {

    const container =
        firstElement(
            'championship-table',
            'championship-container',
            'house-standings',
            'leaderboard'
        );


    if (!container) {
        return;
    }


    const standings =
        calculateHousePoints();


    container.innerHTML = `

        <div class="championship-list">

            ${standings.map(
                (house, index) => `

                <div class="house-standing">

                    <div class="standing-rank">
                        ${index + 1}
                    </div>

                    <div class="standing-house">

                        <strong>
                            ${escapeHtml(
                                house.name
                            )}
                        </strong>

                        <small>
                            ${house.results}
                            result${house.results === 1 ? '' : 's'}
                        </small>

                    </div>

                    <div class="standing-breakdown">

                        <span>
                            🥇 ${house.first}
                        </span>

                        <span>
                            🥈 ${house.second}
                        </span>

                        <span>
                            🥉 ${house.third}
                        </span>

                    </div>

                    <div class="standing-points">

                        <strong>
                            ${house.points}
                        </strong>

                        <small>
                            points
                        </small>

                    </div>

                </div>

            `
            ).join('')}

        </div>

    `;

}


/* =========================================================
   RENDER ALL PUBLIC SECTIONS
   ========================================================= */

function renderAllPublicSections() {

    renderPublicResults();

    renderChampionship();

    renderHomeSpotlight();

}


/* =========================================================
   TEACHER AUTHENTICATION
   ========================================================= */

function isTeacherLoggedIn() {

    return (
        sessionStorage.getItem(
            SESSION_KEY
        ) === 'true'
    );

}


function loginTeacher(password) {

    if (
        password ===
        TEACHER_PASSWORD
    ) {

        sessionStorage.setItem(
            SESSION_KEY,
            'true'
        );

        return true;

    }


    return false;

}


function logoutTeacher() {

    sessionStorage.removeItem(
        SESSION_KEY
    );

    window.location.reload();

}


/* =========================================================
   TEACHER LOGIN UI
   ========================================================= */

function setupTeacherAuthentication() {

    const loginForm =
        firstElement(
            'teacher-login-form',
            'login-form'
        );


    if (loginForm) {

        loginForm.addEventListener(
            'submit',
            event => {

                event.preventDefault();


                const passwordInput =
                    loginForm.querySelector(
                        '[name="password"]'
                    );


                const password =
                    passwordInput?.value ||
                    '';


                if (
                    loginTeacher(
                        password
                    )
                ) {

                    window.location.reload();

                }

                else {

                    alert(
                        'Incorrect teacher password.'
                    );

                    if (
                        passwordInput
                    ) {
                        passwordInput.value = '';
                        passwordInput.focus();
                    }

                }

            }
        );

    }


    const logoutButton =
        firstElement(
            'teacher-logout',
            'logout-teacher',
            'logout-button'
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            'click',
            logoutTeacher
        );

    }

}


/* =========================================================
   TEACHER PAGE ACCESS
   ========================================================= */

function setupTeacherPage() {

    const teacherPage =
        document.body?.dataset?.page ===
        'teacher' ||
        window.location.pathname
            .toLowerCase()
            .includes('teacher');


    if (!teacherPage) {
        return;
    }


    const loginSection =
        firstElement(
            'teacher-login',
            'login-section'
        );


    const dashboard =
        firstElement(
            'teacher-dashboard',
            'teacher-panel',
            'dashboard'
        );


    if (
        isTeacherLoggedIn()
    ) {

        if (loginSection) {
            loginSection.hidden = true;
        }

        if (dashboard) {
            dashboard.hidden = false;
        }

    }

    else {

        if (loginSection) {
            loginSection.hidden = false;
        }

        if (dashboard) {
            dashboard.hidden = true;
        }

    }

}


/* =========================================================
   TEACHER PROGRAM CARDS
   ========================================================= */

function getAllProgramsForSection(
    section
) {

    const programs = [];


    const offStage =
        PROGRAMS
            .OFF_STAGE[
                section
            ] || [];


    const onStage =
        PROGRAMS
            .ON_STAGE[
                section
            ] || [];


    offStage.forEach(
        program => {

            programs.push({

                ...program,

                stage:
                    'OFF_STAGE'

            });

        }
    );


    onStage.forEach(
        program => {

            programs.push({

                ...program,

                stage:
                    'ON_STAGE'

            });

        }
    );


    return programs;

}


/* =========================================================
   RENDER PROGRAMS
   ========================================================= */

function renderTeacherPrograms(
    section
) {

    const container =
        firstElement(
            'teacher-programs',
            'program-list',
            'programs-container'
        );


    if (!container) {
        return;
    }


    if (!section) {

        container.innerHTML = `
            <div class="empty-state">
                <p>Select a section to view programs.</p>
            </div>
        `;

        return;

    }


    const programs =
        getAllProgramsForSection(
            section
        );


    container.innerHTML =
        programs.map(
            (program, index) => {

                const id =
                    `program-${section}-${index}`;


                return `

                    <button
                        type="button"
                        class="teacher-program-card"
                        data-section="${escapeHtml(section)}"
                        data-stage="${escapeHtml(program.stage)}"
                        data-program-index="${index}"
                    >

                        <span class="program-stage">
                            ${escapeHtml(
                                stageLabel(
                                    program.stage
                                )
                            )}
                        </span>

                        <strong>
                            ${escapeHtml(
                                program.name
                            )}
                        </strong>

                        <small>
                            ${
                                program.type === 'group'
                                    ? 'Group Event'
                                    : 'Individual Event'
                            }

                            ${
                                program.maxParticipants
                                    ? ` • Max ${program.maxParticipants}`
                                    : ''
                            }
                        </small>

                    </button>

                `;

            }
        ).join('');


    container
        .querySelectorAll(
            '.teacher-program-card'
        )
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    const stage =
                        button.dataset.stage;


                    const index =
                        Number(
                            button.dataset.programIndex
                        );


                    const list =
                        PROGRAMS[
                            stage
                        ]?.[
                            section
                        ] || [];


                    const program =
                        list[index];


                    if (!program) {
                        return;
                    }


                    selectTeacherProgram({

                        section,

                        stage,

                        program

                    });

                }
            );

        });

}


/* =========================================================
   SELECT TEACHER PROGRAM
   ========================================================= */

function selectTeacherProgram(
    selection
) {

    selectedTeacherProgram =
        selection;


    const title =
        firstElement(
            'selected-program-name',
            'teacher-selected-program',
            'selected-program'
        );


    if (title) {

        title.textContent =
            selection.program.name;

    }


    const form =
        document.getElementById(
            'teacher-result-form'
        );


    if (form) {

        form.hidden = false;

    }


    const activityType =
        form?.querySelector(
            '[name="activityType"]'
        );


    if (activityType) {

        activityType.value =
            selection.program.type;

    }


    const participantField =
        form?.querySelector(
            '[name="participantCount"]'
        );


    const participantGroup =
        participantField?.closest(
            '.form-group'
        );


    if (
        participantGroup
    ) {

        participantGroup.style.display =
            selection.program.type ===
            'group'
                ? ''
                : 'none';

    }


    const maxHint =
        firstElement(
            'participant-hint',
            'group-limit-hint'
        );


    if (maxHint) {

        if (
            selection.program
                .maxParticipants
        ) {

            maxHint.textContent =
                `Maximum ${selection.program.maxParticipants} participants.`;

        }

        else {

            maxHint.textContent =
                '';

        }

    }


    form?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

}


/* =========================================================
   TEACHER SECTION SELECTOR
   ========================================================= */

function setupTeacherProgramSelection() {

    const sectionSelect =
        firstElement(
            'teacher-section',
            'section-select',
            'program-section'
        );


    if (!sectionSelect) {
        return;
    }


    sectionSelect.addEventListener(
        'change',
        () => {

            renderTeacherPrograms(
                sectionSelect.value
            );

        }
    );


    if (
        sectionSelect.value
    ) {

        renderTeacherPrograms(
            sectionSelect.value
        );

    }

}


/* =========================================================
   THE IMPORTANT FIX
   TEACHER RESULT SUBMISSION
   ========================================================= */

async function submitTeacherResult(
    submitEvent
) {

    submitEvent.preventDefault();


    /*
       IMPORTANT FIX:

       We DO NOT use:

       submitEvent.currentTarget

       or:

       submitEvent.target.closest(...)

       Instead we directly locate the unique form.
       This completely prevents currentForm from becoming null.
    */

    const currentForm =
        document.getElementById(
            'teacher-result-form'
        );


    if (!currentForm) {

        alert(
            'Could not find the teacher result form.\n\n' +
            'Make sure your HTML contains:\n' +
            '<form id="teacher-result-form">'
        );

        return;

    }


    if (!selectedTeacherProgram) {

        alert(
            'Please select a program first.'
        );

        return;

    }


    const formData =
        new FormData(
            currentForm
        );


    const selected =
        selectedTeacherProgram;


    const program =
        selected.program;


    const name =
        String(
            formData.get(
                'name'
            ) || ''
        ).trim();


    const studentClass =
        String(
            formData.get(
                'studentClass'
            ) || ''
        ).trim();


    const team =
        String(
            formData.get(
                'team'
            ) || ''
        ).trim();


    const place =
        String(
            formData.get(
                'place'
            ) || ''
        ).trim();


    const participantValue =
        formData.get(
            'participantCount'
        );


    const participantCount =
        participantValue !== null &&
        participantValue !== ''
            ? Number(
                participantValue
            )
            : null;


    const finalSection =
        selected.section ===
        'GENERAL'
            ? 'GENERAL'
            : String(
                formData.get(
                    'section'
                ) ||
                selected.section
            );


    /* -----------------------------------------------------
       VALIDATION
       ----------------------------------------------------- */

    if (!name) {

        alert(
            'Please enter the student/group name.'
        );

        return;

    }


    if (!studentClass) {

        alert(
            'Please enter the class.'
        );

        return;

    }


    if (!team) {

        alert(
            'Please select a house.'
        );

        return;

    }


    if (!place) {

        alert(
            'Please select the place.'
        );

        return;

    }


    if (
        program.type ===
        'group'
    ) {

        if (
            !Number.isFinite(
                participantCount
            ) ||
            participantCount < 1
        ) {

            alert(
                'Please enter the number of participants.'
            );

            return;

        }


        if (
            program.maxParticipants &&
            participantCount >
                program.maxParticipants
        ) {

            alert(
                `This program allows a maximum of ${program.maxParticipants} participants.`
            );

            return;

        }

    }


    const item = {

        id:
            createId(),

        name:
            name,

        studentClass:
            studentClass,

        section:
            finalSection,

        activityType:
            program.type ===
            'group'
                ? 'group'
                : 'individual',

        programCategory:
            selected.stage,

        event:
            program.name,

        team:
            team,

        place:
            place,

        participantCount:
            program.type ===
            'group'
                ? participantCount
                : null

    };


    /* -----------------------------------------------------
       SUBMIT BUTTON
       ----------------------------------------------------- */

    const submitButton =
        currentForm.querySelector(
            'button[type="submit"]'
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            'Publishing...';

    }


    try {

        console.log(
            'Attempting to save result:',
            item
        );


        /*
           Make absolutely sure Supabase is available.
        */

        checkSupabase();


        const savedResult =
            await saveResult(
                item
            );


        console.log(
            'Result successfully saved:',
            savedResult
        );


        /*
           Show success message.
        */

        const message =
            currentForm.querySelector(
                '#teacher-save-message'
            );


        if (message) {

            message.textContent =
                '✓ Result published successfully to the live database.';

            message.classList.add(
                'success'
            );

        }


        /*
           Refresh the shared database data.
        */

        await loadResults();


        /*
           Refresh visible areas.
        */

        renderManageResults();

        renderPublicResults();

        renderChampionship();


        /*
           IMPORTANT:

           currentForm is still the DOM element
           obtained directly by ID.

           Therefore reset() is safe.
        */

        currentForm.reset();


        /*
           Explicitly clear select values.
        */

        const teamInput =
            currentForm.querySelector(
                '[name="team"]'
            );


        if (teamInput) {
            teamInput.value = '';
        }


        const placeInput =
            currentForm.querySelector(
                '[name="place"]'
            );


        if (placeInput) {
            placeInput.value = '';
        }


        const participantInput =
            currentForm.querySelector(
                '[name="participantCount"]'
            );


        if (participantInput) {
            participantInput.value = '';
        }


        /*
           Keep the selected program.

           We don't destroy selectedTeacherProgram
           because the teacher may enter another
           result for the same program.
        */


        const nameInput =
            currentForm.querySelector(
                '[name="name"]'
            );


        if (nameInput) {

            nameInput.focus();

        }


    }

    catch (error) {

        console.error(
            'Could not publish result:',
            error
        );


        const message =
            currentForm.querySelector(
                '#teacher-save-message'
            );


        const errorMessage =
            error?.message ||
            String(error);


        const errorCode =
            error?.code
                ? ` | Code: ${error.code}`
                : '';


        const errorDetails =
            error?.details
                ? ` | Details: ${error.details}`
                : '';


        const errorHint =
            error?.hint
                ? ` | Hint: ${error.hint}`
                : '';


        const fullError =
            errorMessage +
            errorCode +
            errorDetails +
            errorHint;


        if (message) {

            message.textContent =
                `✕ Could not publish result: ${fullError}`;

            message.classList.remove(
                'success'
            );

        }


        alert(
            'THE RESULT COULD NOT BE SAVED.\n\n' +
            fullError
        );

    }

    finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                'Publish Result →';

        }

    }

}


/* =========================================================
   SETUP RESULT FORM
   ========================================================= */

function setupTeacherResultForm() {

    const form =
        document.getElementById(
            'teacher-result-form'
        );


    if (!form) {
        return;
    }


    /*
       Remove any previously attached handler
       by cloning the form.

       This also protects against accidentally
       loading app.js twice.
    */

    const cleanForm =
        form.cloneNode(true);


    form.parentNode.replaceChild(
        cleanForm,
        form
    );


    cleanForm.addEventListener(
        'submit',
        submitTeacherResult
    );


    /*
       Ensure the form begins hidden if no
       program has been selected.
    */

    if (!selectedTeacherProgram) {

        cleanForm.hidden = true;

    }

}


/* =========================================================
   MANAGE RESULTS
   ========================================================= */

function renderManageResults() {

    const container =
        firstElement(
            'manage-results',
            'teacher-results',
            'results-management',
            'teacher-result-list'
        );


    if (!container) {
        return;
    }


    if (
        !isTeacherLoggedIn()
    ) {

        container.innerHTML = '';

        return;

    }


    if (
        !RESULTS_CACHE.length
    ) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No results yet</h3>
                <p>Published results will appear here.</p>
            </div>
        `;

        return;

    }


    const results =
        RESULTS_CACHE.slice()
            .sort(
                (a, b) => {

                    const dateA =
                        new Date(
                            a.createdAt ||
                            0
                        ).getTime();


                    const dateB =
                        new Date(
                            b.createdAt ||
                            0
                        ).getTime();


                    return dateB - dateA;

                }
            );


    container.innerHTML =
        results.map(
            result => {

                const points =
                    getPointsForResult(
                        result
                    );


                return `

                    <div
                        class="manage-result-card"
                        data-result-id="${escapeHtml(result.id)}"
                    >

                        <div class="manage-result-info">

                            <strong>
                                ${escapeHtml(
                                    result.name
                                )}
                            </strong>

                            <span>
                                ${escapeHtml(
                                    result.event
                                )}
                            </span>

                            <small>
                                ${escapeHtml(
                                    sectionLabel(
                                        result.section
                                    )
                                )}
                                •
                                Class ${escapeHtml(
                                    result.studentClass
                                )}
                                •
                                ${escapeHtml(
                                    result.team
                                )}
                            </small>

                            <small>
                                Place:
                                ${escapeHtml(
                                    result.place
                                )}
                                ${
                                    points
                                        ? ` • ${points} points`
                                        : ''
                                }
                            </small>

                        </div>

                        <button
                            type="button"
                            class="delete-result-button"
                            data-delete-result="${escapeHtml(result.id)}"
                        >
                            Delete
                        </button>

                    </div>

                `;

            }
        ).join('');


    container
        .querySelectorAll(
            '[data-delete-result]'
        )
        .forEach(button => {

            button.addEventListener(
                'click',
                async () => {

                    const id =
                        button.dataset
                            .deleteResult;


                    const result =
                        RESULTS_CACHE.find(
                            item =>
                                item.id ===
                                id
                        );


                    if (!result) {
                        return;
                    }


                    const confirmed =
                        window.confirm(
                            `Delete this result?\n\n${result.name} — ${result.event}`
                        );


                    if (!confirmed) {
                        return;
                    }


                    button.disabled =
                        true;

                    button.textContent =
                        'Deleting...';


                    try {

                        await deleteResult(
                            id
                        );


                        renderManageResults();

                        renderPublicResults();

                        renderChampionship();

                    }

                    catch (error) {

                        console.error(
                            error
                        );


                        alert(
                            'Could not delete the result.\n\n' +
                            (
                                error?.message ||
                                String(error)
                            )
                        );


                        button.disabled =
                            false;

                        button.textContent =
                            'Delete';

                    }

                }
            );

        });

}


/* =========================================================
   HOME SPOTLIGHT
   ========================================================= */

function renderHomeSpotlight() {

    const container =
        firstElement(
            'home-spotlight',
            'spotlight-results',
            'latest-results'
        );


    if (!container) {
        return;
    }


    const latest =
        RESULTS_CACHE
            .slice()
            .sort(
                (a, b) => {

                    const dateA =
                        new Date(
                            a.createdAt ||
                            0
                        ).getTime();


                    const dateB =
                        new Date(
                            b.createdAt ||
                            0
                        ).getTime();


                    return dateB - dateA;

                }
            )
            .slice(0, 6);


    if (!latest.length) {

        container.innerHTML = `
            <div class="empty-state">
                <p>Results will appear here.</p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        latest.map(
            result => `

                <div class="spotlight-item">

                    <div class="spotlight-medal">
                        ${medal(
                            Number(result.place)
                        )}
                    </div>

                    <div>

                        <strong>
                            ${escapeHtml(
                                result.name
                            )}
                        </strong>

                        <span>
                            ${escapeHtml(
                                result.event
                            )}
                        </span>

                    </div>

                </div>

            `
        ).join('');

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    const navLinks =
        document.querySelectorAll(
            'a[href]'
        );


    navLinks.forEach(link => {

        link.addEventListener(
            'click',
            () => {

                navLinks.forEach(
                    item =>
                        item.classList.remove(
                            'active'
                        )
                );


                link.classList.add(
                    'active'
                );

            }
        );

    });


    const menuButton =
        firstElement(
            'mobile-menu-button',
            'menu-toggle',
            'nav-toggle'
        );


    const nav =
        firstElement(
            'main-nav',
            'site-nav',
            'navbar'
        );


    if (
        menuButton &&
        nav
    ) {

        menuButton.addEventListener(
            'click',
            () => {

                nav.classList.toggle(
                    'open'
                );

            }
        );

    }

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            '.reveal, .animate-on-scroll'
        );


    if (
        !elements.length
    ) {
        return;
    }


    if (
        !('IntersectionObserver'
            in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    'visible'
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                'visible'
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function setupAboutPage() {

    const buttons =
        document.querySelectorAll(
            '[data-about-toggle]'
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                'click',
                () => {

                    const targetId =
                        button.dataset
                            .aboutToggle;


                    const target =
                        document.getElementById(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    target.classList.toggle(
                        'open'
                    );


                    button.classList.toggle(
                        'open'
                    );

                }
            );

        }
    );

}


/* =========================================================
   KEYBOARD
   ========================================================= */

function setupKeyboard() {

    document.addEventListener(
        'keydown',
        event => {

            if (
                event.key ===
                'Escape'
            ) {

                document
                    .querySelectorAll(
                        '.open'
                    )
                    .forEach(
                        element =>
                            element.classList.remove(
                                'open'
                            )
                    );

            }

        }
    );

}


/* =========================================================
   POPULATE FILTER OPTIONS
   ========================================================= */

function populateFilters() {

    const sectionFilter =
        firstElement(
            'result-section-filter',
            'section-filter'
        );


    const houseFilter =
        firstElement(
            'result-house-filter',
            'house-filter'
        );


    const eventFilter =
        firstElement(
            'result-event-filter',
            'event-filter'
        );


    if (sectionFilter) {

        const current =
            sectionFilter.value;


        sectionFilter.innerHTML =
            `
                <option value="">
                    All Sections
                </option>
            `;


        Object.keys(
            SECTION_INFO
        ).forEach(
            section => {

                const option =
                    document.createElement(
                        'option'
                    );


                option.value =
                    section;


                option.textContent =
                    SECTION_INFO[
                        section
                    ].name;


                sectionFilter.appendChild(
                    option
                );

            }
        );


        sectionFilter.value =
            current;

    }


    if (houseFilter) {

        const current =
            houseFilter.value;


        houseFilter.innerHTML =
            `
                <option value="">
                    All Houses
                </option>
            `;


        Object.keys(
            HOUSE_INFO
        ).forEach(
            house => {

                const option =
                    document.createElement(
                        'option'
                    );


                option.value =
                    house;


                option.textContent =
                    HOUSE_INFO[
                        house
                    ].name;


                houseFilter.appendChild(
                    option
                );

            }
        );


        houseFilter.value =
            current;

    }


    if (eventFilter) {

        const current =
            eventFilter.value;


        const events =
            [
                ...new Set(
                    RESULTS_CACHE
                        .map(
                            result =>
                                result.event
                        )
                        .filter(Boolean)
                )
            ]
            .sort();


        eventFilter.innerHTML =
            `
                <option value="">
                    All Programs
                </option>
            `;


        events.forEach(
            eventName => {

                const option =
                    document.createElement(
                        'option'
                    );


                option.value =
                    eventName;


                option.textContent =
                    eventName;


                eventFilter.appendChild(
                    option
                );

            }
        );


        eventFilter.value =
            current;

    }

}


/* =========================================================
   STATUS INDICATOR
   ========================================================= */

function updateConnectionStatus() {

    const elements =
        document.querySelectorAll(
            '[data-supabase-status], #supabase-status'
        );


    if (!elements.length) {
        return;
    }


    elements.forEach(
        element => {

            if (
                RESULTS_LOADED
            ) {

                element.textContent =
                    'Live';

                element.classList.add(
                    'connected'
                );

                element.classList.remove(
                    'offline'
                );

            }

            else {

                element.textContent =
                    'Offline';

                element.classList.add(
                    'offline'
                );

                element.classList.remove(
                    'connected'
                );

            }

        }
    );

}


/* =========================================================
   DASHBOARD SUMMARY
   ========================================================= */

function renderDashboardSummary() {

    const resultCount =
        firstElement(
            'total-results',
            'result-count'
        );


    const houseCount =
        firstElement(
            'house-count'
        );


    const firstPlaceCount =
        firstElement(
            'first-place-count'
        );


    if (resultCount) {

        resultCount.textContent =
            RESULTS_CACHE.length;

    }


    if (houseCount) {

        const houses =
            new Set(
                RESULTS_CACHE
                    .map(
                        result =>
                            String(
                                result.team ||
                                ''
                            )
                            .toUpperCase()
                    )
                    .filter(Boolean)
            );


        houseCount.textContent =
            houses.size;

    }


    if (firstPlaceCount) {

        firstPlaceCount.textContent =
            RESULTS_CACHE.filter(
                result =>
                    Number(
                        result.place
                    ) === 1
            ).length;

    }

}


/* =========================================================
   GLOBAL RENDER
   ========================================================= */

function renderEverything() {

    populateFilters();

    renderPublicResults();

    renderChampionship();

    renderManageResults();

    renderHomeSpotlight();

    renderDashboardSummary();

    updateConnectionStatus();

}


/* =========================================================
   INITIALISE
   ========================================================= */

async function initialiseApp() {

    try {

        setupNavigation();

        setupScrollReveal();

        setupKeyboard();

        setupAboutPage();

        setupTeacherAuthentication();

        setupTeacherPage();

        setupTeacherProgramSelection();

        setupTeacherResultForm();

        setupResultFilters();


        /*
           Load shared Supabase results.
        */

        await loadResults();


        /*
           Populate/render after data arrives.
        */

        renderEverything();


        /*
           Realtime must be started after the
           Supabase client exists.
        */

        setupRealtimeResults();


        console.log(
            'MIS Art Fest 2026 application loaded successfully.'
        );

    }

    catch (error) {

        console.error(
            'MIS Art Fest initialisation error:',
            error
        );


        /*
           Never silently fail.
           Show the user the actual problem.
        */

        const message =
            error?.message ||
            String(error);


        console.error(
            `MIS Art Fest could not initialise: ${message}`
        );

    }

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    'loading'
) {

    document.addEventListener(
        'DOMContentLoaded',
        initialiseApp
    );

}

else {

    initialiseApp();

}
