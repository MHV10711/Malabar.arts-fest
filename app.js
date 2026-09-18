/* =========================================================
   MIS ART FEST 2026
   SUPABASE DATABASE VERSION
========================================================= */
const SUPABASE_URL = "https://jlitghsdscahpxjfywnr.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_Nwa9_cZlhLpEPCOERsYeQw_JgROWSPW";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

/* =========================================================
   SUPABASE CONFIGURATION
=========================================================

   REPLACE THESE TWO VALUES.

========================================================= */

const SUPABASE_URL =
    'YOUR_SUPABASE_PROJECT_URL';

const SUPABASE_PUBLISHABLE_KEY =
    'YOUR_SUPABASE_PUBLISHABLE_KEY';


/* =========================================================
   SUPABASE CLIENT
========================================================= */

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   GLOBAL DATA
========================================================= */

let houses = [];
let events = [];
let results = [];

let currentUser = null;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    async () => {

        setupNavigation();

        setupForms();

        setupRefreshButton();

        await checkSession();

        await loadAllData();

        setupRealtime();

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const buttons =
        document.querySelectorAll('.nav-button');

    buttons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const pageId =
                    button.dataset.page;

                document
                    .querySelectorAll('.page')
                    .forEach(page => {

                        page.classList.remove(
                            'active-page'
                        );

                    });

                document
                    .getElementById(pageId)
                    .classList.add(
                        'active-page'
                    );


                buttons.forEach(btn => {

                    btn.classList.remove(
                        'active'
                    );

                });

                button.classList.add(
                    'active'
                );

            }
        );

    });

}


/* =========================================================
   AUTH SESSION
========================================================= */

async function checkSession() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getSession();


    if (error) {

        console.error(error);

        return;

    }


    currentUser =
        data.session?.user || null;


    updateTeacherUI();

}


/* =========================================================
   AUTH STATE LISTENER
========================================================= */

supabaseClient.auth.onAuthStateChange(
    (_event, session) => {

        currentUser =
            session?.user || null;

        updateTeacherUI();

    }
);


/* =========================================================
   TEACHER UI
========================================================= */

function updateTeacherUI() {

    const loginPanel =
        document.getElementById(
            'loginPanel'
        );

    const dashboard =
        document.getElementById(
            'teacherDashboard'
        );

    const teacherEmail =
        document.getElementById(
            'teacherEmail'
        );


    if (currentUser) {

        loginPanel.classList.add(
            'hidden'
        );

        dashboard.classList.remove(
            'hidden'
        );

        teacherEmail.textContent =
            currentUser.email || '';

        loadTeacherResults();

    } else {

        loginPanel.classList.remove(
            'hidden'
        );

        dashboard.classList.add(
            'hidden'
        );

    }

}


/* =========================================================
   LOGIN
========================================================= */

function setupForms() {

    const loginForm =
        document.getElementById(
            'loginForm'
        );


    loginForm.addEventListener(
        'submit',
        async event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    'loginEmail'
                ).value.trim();


            const password =
                document.getElementById(
                    'loginPassword'
                ).value;


            showMessage(
                'loginMessage',
                'Signing in...',
                ''
            );


            const {
                error
            } =
                await supabaseClient.auth.signInWithPassword({
                    email,
                    password
                });


            if (error) {

                showMessage(
                    'loginMessage',
                    error.message,
                    'error'
                );

                return;

            }


            showMessage(
                'loginMessage',
                'Login successful.',
                'success'
            );

        }
    );


    /* =====================================================
       LOGOUT
    ===================================================== */

    document
        .getElementById('logoutButton')
        .addEventListener(
            'click',
            async () => {

                await supabaseClient.auth.signOut();

            }
        );


    /* =====================================================
       EVENT FORM
    ===================================================== */

    document
        .getElementById('eventForm')
        .addEventListener(
            'submit',
            addEvent
        );


    /* =====================================================
       RESULT FORM
    ===================================================== */

    document
        .getElementById('resultForm')
        .addEventListener(
            'submit',
            addResult
        );


    /* =====================================================
       POSITION → POINTS
    ===================================================== */

    document
        .getElementById('position')
        .addEventListener(
            'change',
            updatePointsFromPosition
        );


    document
        .getElementById('resultEvent')
        .addEventListener(
            'change',
            updatePointsFromEvent
        );

}


/* =========================================================
   LOAD ALL DATA
========================================================= */

async function loadAllData() {

    await loadHouses();

    await loadEvents();

    await loadResults();

    renderEverything();

}


/* =========================================================
   LOAD HOUSES
========================================================= */

async function loadHouses() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from('houses')
            .select('*')
            .order('id');


    if (error) {

        console.error(
            'House error:',
            error
        );

        return;

    }


    houses = data || [];

}


/* =========================================================
   LOAD EVENTS
========================================================= */

async function loadEvents() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from('events')
            .select('*')
            .order(
                'created_at',
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            'Event error:',
            error
        );

        return;

    }


    events = data || [];

}


/* =========================================================
   LOAD RESULTS
========================================================= */

async function loadResults() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from('results')
            .select(`
                *,
                houses (
                    id,
                    name,
                    color
                ),
                events (
                    id,
                    name,
                    section,
                    category,
                    event_type
                )
            `)
            .order(
                'created_at',
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            'Result error:',
            error
        );

        return;

    }


    results = data || [];

}


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderEverything() {

    renderHouseCards();

    renderStandings();

    renderRecentResults();

    renderEvents();

    populateTeacherSelects();

    renderTeacherResults();

}


/* =========================================================
   HOUSE CARDS
========================================================= */

function renderHouseCards() {

    const container =
        document.getElementById(
            'houseCards'
        );


    if (!houses.length) {

        container.innerHTML =
            '<div class="empty">No houses found.</div>';

        return;

    }


    container.innerHTML =
        houses.map(house => {

            const points =
                getHousePoints(
                    house.id
                );


            return `

                <article
                    class="house-card"
                    style="--house-color:${escapeHtml(
                        house.color
                    )}"
                >

                    <div class="house-name">
                        ${escapeHtml(house.name)}
                    </div>

                    <div class="house-points">
                        ${points}
                    </div>

                    <div class="house-label">
                        TOTAL POINTS
                    </div>

                </article>

            `;

        }).join('');

}


/* =========================================================
   HOUSE POINT CALCULATION
========================================================= */

function getHousePoints(houseId) {

    return results
        .filter(
            result =>
                Number(result.house_id) ===
                Number(houseId)
        )
        .reduce(
            (total, result) =>
                total +
                Number(result.points || 0),
            0
        );

}


/* =========================================================
   STANDINGS
========================================================= */

function renderStandings() {

    const body =
        document.getElementById(
            'standingsBody'
        );


    const sorted =
        [...houses]
            .sort(
                (a, b) =>
                    getHousePoints(b.id) -
                    getHousePoints(a.id)
            );


    if (!sorted.length) {

        body.innerHTML = `
            <tr>
                <td colspan="3">
                    No results available.
                </td>
            </tr>
        `;

        return;

    }


    body.innerHTML =
        sorted.map(house => {

            const houseResults =
                results.filter(
                    result =>
                        Number(result.house_id) ===
                        Number(house.id)
                );


            return `

                <tr>

                    <td>
                        <strong>
                            ${escapeHtml(house.name)}
                        </strong>
                    </td>

                    <td>
                        <strong>
                            ${getHousePoints(house.id)}
                        </strong>
                    </td>

                    <td>
                        ${houseResults.length}
                    </td>

                </tr>

            `;

        }).join('');

}


/* =========================================================
   RECENT RESULTS
========================================================= */

function renderRecentResults() {

    const container =
        document.getElementById(
            'recentResults'
        );


    const recent =
        results.slice(0, 10);


    if (!recent.length) {

        container.innerHTML =
            `<div class="empty">
                No results have been published yet.
            </div>`;

        return;

    }


    container.innerHTML =
        recent.map(result => {

            return `

                <div class="result-item">

                    <div>

                        <div class="result-event">
                            ${escapeHtml(
                                result.events?.name ||
                                'Unknown Event'
                            )}
                        </div>

                        <div class="result-student">

                            ${escapeHtml(
                                result.student_name ||
                                ''
                            )}

                            ${
                                result.houses
                                    ? ' · ' +
                                      escapeHtml(
                                          result.houses.name
                                      )
                                    : ''
                            }

                        </div>

                    </div>


                    <div>

                        ${
                            result.position
                                ? positionText(
                                    result.position
                                )
                                : ''
                        }

                    </div>


                    <div class="result-points">

                        +${Number(
                            result.points || 0
                        )}

                    </div>

                </div>

            `;

        }).join('');

}


/* =========================================================
   EVENTS
========================================================= */

function renderEvents() {

    const container =
        document.getElementById(
            'eventsContainer'
        );


    if (!events.length) {

        container.innerHTML =
            `<div class="empty">
                No events have been added yet.
            </div>`;

        return;

    }


    container.innerHTML =
        events.map(event => {

            return `

                <article
                    class="event-card"
                >

                    <h3>
                        ${escapeHtml(event.name)}
                    </h3>

                    <div class="event-meta">

                        <span class="tag">
                            ${escapeHtml(
                                event.section || ''
                            )}
                        </span>

                        <span class="tag">
                            ${escapeHtml(
                                event.category || ''
                            )}
                        </span>

                        <span class="tag">
                            ${escapeHtml(
                                event.event_type || ''
                            )}
                        </span>

                    </div>

                </article>

            `;

        }).join('');

}


/* =========================================================
   TEACHER SELECTS
========================================================= */

function populateTeacherSelects() {

    const eventSelect =
        document.getElementById(
            'resultEvent'
        );


    const houseSelect =
        document.getElementById(
            'resultHouse'
        );


    eventSelect.innerHTML =
        events.length

            ? events.map(event => `

                <option value="${event.id}">
                    ${escapeHtml(event.name)}
                    ${
                        event.section
                            ? ` — ${escapeHtml(
                                event.section
                              )}`
                            : ''
                    }
                </option>

            `).join('')

            : `
                <option value="">
                    Add an event first
                </option>
            `;


    houseSelect.innerHTML =
        houses.map(house => `

            <option value="${house.id}">
                ${escapeHtml(house.name)}
            </option>

        `).join('');

}


/* =========================================================
   ADD EVENT
========================================================= */

async function addEvent(event) {

    event.preventDefault();


    if (!currentUser) {

        alert(
            'Please log in first.'
        );

        return;

    }


    const name =
        document
            .getElementById('eventName')
            .value
            .trim();


    const section =
        document
            .getElementById('eventSection')
            .value;


    const category =
        document
            .getElementById('eventCategory')
            .value;


    const eventType =
        document
            .getElementById('eventType')
            .value;


    const {
        error
    } =
        await supabaseClient
            .from('events')
            .insert({
                name,
                section,
                category,
                event_type: eventType
            });


    if (error) {

        alert(
            'Could not add event: ' +
            error.message
        );

        return;

    }


    document
        .getElementById('eventForm')
        .reset();


    await loadAllData();

}


/* =========================================================
   ADD RESULT
========================================================= */

async function addResult(event) {

    event.preventDefault();


    if (!currentUser) {

        alert(
            'Please log in first.'
        );

        return;

    }


    const eventId =
        document
            .getElementById('resultEvent')
            .value;


    const studentName =
        document
            .getElementById('studentName')
            .value
            .trim();


    const className =
        document
            .getElementById('className')
            .value
            .trim();


    const houseId =
        document
            .getElementById('resultHouse')
            .value;


    const position =
        Number(
            document
                .getElementById('position')
                .value
        );


    const points =
        Number(
            document
                .getElementById('points')
                .value
        );


    if (!eventId) {

        showMessage(
            'resultMessage',
            'Please create an event first.',
            'error'
        );

        return;

    }


    const {
        error
    } =
        await supabaseClient
            .from('results')
            .insert({

                event_id:
                    Number(eventId),

                student_name:
                    studentName,

                class_name:
                    className,

                house_id:
                    Number(houseId),

                position,

                points

            });


    if (error) {

        showMessage(
            'resultMessage',
            error.message,
            'error'
        );

        return;

    }


    showMessage(
        'resultMessage',
        'Result published successfully.',
        'success'
    );


    document
        .getElementById('resultForm')
        .reset();


    document
        .getElementById('points')
        .value = 10;


    await loadAllData();

}


/* =========================================================
   POSITION → POINTS
========================================================= */

function updatePointsFromPosition() {

    const position =
        Number(
            document
                .getElementById('position')
                .value
        );


    const points =
        document.getElementById(
            'points'
        );


    if (position === 1) {

        points.value = 10;

    }

    else if (position === 2) {

        points.value = 5;

    }

    else if (position === 3) {

        points.value = 3;

    }

    else {

        points.value = 0;

    }

}


/* =========================================================
   EVENT POINT SYSTEM
=========================================================

   GROUP EVENTS:
       1st = 10
       2nd = 5
       3rd = 3

   INDIVIDUAL EVENTS:
       1st = 10
       2nd = 5
       3rd = 3

========================================================= */

function updatePointsFromEvent() {

    updatePointsFromPosition();

}


/* =========================================================
   TEACHER RESULTS
========================================================= */

function renderTeacherResults() {

    const body =
        document.getElementById(
            'teacherResultsBody'
        );


    if (!body) return;


    if (!results.length) {

        body.innerHTML = `
            <tr>
                <td colspan="6">
                    No results yet.
                </td>
            </tr>
        `;

        return;

    }


    body.innerHTML =
        results.map(result => {

            return `

                <tr>

                    <td>
                        ${escapeHtml(
                            result.events?.name ||
                            'Unknown'
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            result.student_name ||
                            ''
                        )}
                    </td>

                    <td>
                        ${escapeHtml(
                            result.houses?.name ||
                            ''
                        )}
                    </td>

                    <td>
                        ${
                            result.position
                                ? positionText(
                                    result.position
                                )
                                : '-'
                        }
                    </td>

                    <td>
                        <strong>
                            ${Number(
                                result.points || 0
                            )}
                        </strong>
                    </td>

                    <td>

                        <button
                            class="danger-button"
                            onclick="deleteResult(${result.id})"
                        >
                            Delete
                        </button>

                    </td>

                </tr>

            `;

        }).join('');

}


/* =========================================================
   DELETE RESULT
========================================================= */

async function deleteResult(id) {

    if (!currentUser) {

        alert(
            'Please log in first.'
        );

        return;

    }


    const confirmed =
        confirm(
            'Delete this result permanently?'
        );


    if (!confirmed) return;


    const {
        error
    } =
        await supabaseClient
            .from('results')
            .delete()
            .eq('id', id);


    if (error) {

        alert(
            'Could not delete result: ' +
            error.message
        );

        return;

    }


    await loadAllData();

}


/* =========================================================
   TEACHER LOAD
========================================================= */

async function loadTeacherResults() {

    await loadResults();

    renderTeacherResults();

}


/* =========================================================
   REFRESH
========================================================= */

function setupRefreshButton() {

    const button =
        document.getElementById(
            'refreshButton'
        );


    button.addEventListener(
        'click',
        async () => {

            button.textContent =
                'Refreshing...';


            await loadAllData();


            button.textContent =
                'Refresh';

        }
    );

}


/* =========================================================
   REALTIME
========================================================= */

function setupRealtime() {

    supabaseClient
        .channel('mis-art-fest-live')

        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'results'
            },
            async () => {

                await loadResults();

                renderEverything();

            }
        )

        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'events'
            },
            async () => {

                await loadEvents();

                renderEverything();

            }
        )

        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'houses'
            },
            async () => {

                await loadHouses();

                renderEverything();

            }
        )

        .subscribe();

}


/* =========================================================
   MESSAGE
========================================================= */

function showMessage(
    elementId,
    message,
    type
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) return;


    element.textContent =
        message;


    element.className =
        'message ' +
        type;

}


/* =========================================================
   POSITION TEXT
========================================================= */

function positionText(position) {

    position =
        Number(position);


    if (position === 1)
        return '1st';


    if (position === 2)
        return '2nd';


    if (position === 3)
        return '3rd';


    return 'Participation';

}


/* =========================================================
   HTML ESCAPING
========================================================= */

function escapeHtml(value) {

    return String(value ?? '')
        .replace(
            /&/g,
            '&amp;'
        )
        .replace(
            /</g,
            '&lt;'
        )
        .replace(
            />/g,
            '&gt;'
        )
        .replace(
            /"/g,
            '&quot;'
        )
        .replace(
            /'/g,
            '&#039;'
        );

}


/* =========================================================
   GLOBAL DELETE FUNCTION
========================================================= */

window.deleteResult =
    deleteResult;
