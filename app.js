/* =========================================================
   MIS ART FEST 2026
   MAIN JAVASCRIPT
   FRESH + SUPABASE FIXED VERSION
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const CONFIG = {

    TEACHER_PASSWORD: "malabar@5445",

    STORAGE_KEY: "mis-art-fest-results-v1",

    SESSION_KEY: "mis-art-fest-teacher-session",

    TABLE_NAME: "results",

    GROUP_POINTS: {
        1: 10,
        2: 5,
        3: 3
    },

    INDIVIDUAL_POINTS: {
        1: 5,
        2: 3,
        3: 1
    }

};


/* =========================================================
   HOUSE INFORMATION
   ========================================================= */

const HOUSES = {

    RED: {
        name: "Red House",
        short: "RED"
    },

    GREEN: {
        name: "Green House",
        short: "GREEN"
    },

    BLUE: {
        name: "Blue House",
        short: "BLUE"
    },

    YELLOW: {
        name: "Yellow House",
        short: "YELLOW"
    }

};


/* =========================================================
   SECTIONS
   ========================================================= */

const SECTIONS = [
    "LP1",
    "LP2",
    "UP",
    "HS",
    "HSS",
    "GENERAL"
];


/* =========================================================
   PROGRAM DATABASE
   ========================================================= */

const PROGRAMS = {

    OFF_STAGE: {

        LP1: [
            {
                name: "Hand Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Hand Writing — English",
                type: "individual"
            }
        ],

        LP2: [
            {
                name: "Pencil Drawing",
                type: "individual"
            },
            {
                name: "Drawing Watercolour",
                type: "individual"
            },
            {
                name: "Riddles",
                type: "individual"
            },
            {
                name: "Quran Recitation",
                type: "individual"
            }
        ],

        UP: [
            {
                name: "Pencil Drawing",
                type: "individual"
            },
            {
                name: "Water Colouring",
                type: "individual"
            },
            {
                name: "Poem Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Translation — Arabic",
                type: "individual"
            },
            {
                name: "Quran Recitation",
                type: "individual"
            },
            {
                name: "Calligraphy",
                type: "individual"
            },
            {
                name: "Story Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Story Writing — Hindi",
                type: "individual"
            },
            {
                name: "Essay Writing — English",
                type: "individual"
            },
            {
                name: "Story Writing — English",
                type: "individual"
            },
            {
                name: "Poem Writing — English",
                type: "individual"
            }
        ],

        HS: [
            {
                name: "Pencil Drawing",
                type: "individual"
            },
            {
                name: "Water Colouring",
                type: "individual"
            },
            {
                name: "Poem Writing — English",
                type: "individual"
            },
            {
                name: "Story Writing — English",
                type: "individual"
            },
            {
                name: "Essay Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Essay Writing — HINDI",
                type: "individual"
            },
            {
                name: "Translation — Arabic",
                type: "individual"
            },
            {
                name: "Cartoon",
                type: "individual"
            },
            {
                name: "Poster Making",
                type: "individual"
            },
            {
                name: "Caption Making",
                type: "individual"
            },
            {
                name: "Story Writing — Malayalam",
                type: "individual"
            }
        ],

        HSS: [
            {
                name: "Poem Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Story Writing — English",
                type: "individual"
            },
            {
                name: "Story Writing — Malayalam",
                type: "individual"
            },
            {
                name: "Essay Writing — English",
                type: "individual"
            }
        ]

    },


    ON_STAGE: {

        UP: [
            {
                name: "Speech — Malayalam",
                type: "individual"
            },
            {
                name: "Group Song — Malayalam",
                type: "group",
                maxMembers: 7
            },
            {
                name: "Light Music",
                type: "individual"
            },
            {
                name: "Mappilappattu",
                type: "individual"
            },
            {
                name: "Mono Act",
                type: "individual"
            },
            {
                name: "Oppana",
                type: "group",
                maxMembers: 10
            },
            {
                name: "Patriotic",
                type: "group",
                maxMembers: 7
            },
            {
                name: "Poem Recitation — Arabic",
                type: "individual"
            },
            {
                name: "Poem Recitation — English",
                type: "individual"
            },
            {
                name: "Poem Recitation — Malayalam",
                type: "individual"
            },
            {
                name: "Poem Recitation — Hindi",
                type: "individual"
            },
            {
                name: "Speech — English",
                type: "individual"
            },
            {
                name: "Speech — Hindi",
                type: "individual"
            }
        ],

        HS: [
            {
                name: "Group Song — Arabic",
                type: "group"
            },
            {
                name: "Group Song — Urdu",
                type: "group"
            },
            {
                name: "Light Music — Boys",
                type: "individual"
            },
            {
                name: "Light Music — Girls",
                type: "individual"
            },
            {
                name: "Mappilappattu — Boys",
                type: "individual"
            },
            {
                name: "Mappilappattu — Girls",
                type: "individual"
            },
            {
                name: "Mimicry",
                type: "individual"
            },
            {
                name: "Mono Act",
                type: "individual"
            },
            {
                name: "Nadanpattu",
                type: "individual"
            },
            {
                name: "Patriotic Song",
                type: "group"
            },
            {
                name: "Poem Recitation — Arabic",
                type: "individual"
            },
            {
                name: "Poem Recitation — English",
                type: "individual"
            },
            {
                name: "Poem Recitation — Hindi",
                type: "individual"
            },
            {
                name: "Poem Recitation — Malayalam",
                type: "individual"
            },
            {
                name: "Poem Recitation — Urdu",
                type: "individual"
            },
            {
                name: "Speech — English",
                type: "individual"
            },
            {
                name: "Speech — Hindi",
                type: "individual"
            },
            {
                name: "Speech — Malayalam",
                type: "individual"
            }
        ],

        HSS: [
            {
                name: "Speech — Malayalam",
                type: "individual"
            },
            {
                name: "Light Music — Boys",
                type: "individual"
            },
            {
                name: "Light Music — Girls",
                type: "individual"
            },
            {
                name: "Mappilappattu — Boys",
                type: "individual"
            },
            {
                name: "Mappilappattu — Girls",
                type: "individual"
            },
            {
                name: "Poem Recitation — Arabic",
                type: "individual"
            },
            {
                name: "Poem Recitation — English",
                type: "individual"
            },
            {
                name: "Poem Recitation — Malayalam",
                type: "individual"
            },
            {
                name: "Speech — English",
                type: "individual"
            },
            {
                name: "Nadanpattu",
                type: "individual"
            }
        ]

    },


    GENERAL: [
        {
            name: "Vattappattu",
            type: "group",
            maxMembers: 10
        },
        {
            name: "Mime",
            type: "group",
            maxMembers: 7
        },
        {
            name: "Oppana",
            type: "group",
            maxMembers: 10
        }
    ]

};


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function byId(id) {
    return document.getElementById(id);
}


function clean(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value).trim();

}


function toNumber(value, fallback = 0) {

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : fallback;

}


function createId() {

    return (
        "result-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 10)
    );

}


function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   RESULT NORMALISATION
   ========================================================= */

/*
   IMPORTANT:

   This function uses ONLY the columns currently
   present in your Supabase results table.

   There is NO "program" field here.
*/

function normaliseResult(row) {

    if (!row) {
        return null;
    }

    return {

        id:
            clean(row.id) ||
            createId(),

        name:
            clean(row.name),

        studentClass:
            clean(row.student_class),

        section:
            clean(row.section),

        activityType:
            clean(row.activity_type) ||
            "individual",

        programCategory:
            clean(row.program_category) ||
            "OFF_STAGE",

        event:
            clean(row.event),

        team:
            clean(row.team),

        place:
            toNumber(
                row.place,
                0
            ),

        participantCount:
            toNumber(
                row.participant_count,
                1
            ),

        createdAt:
            row.created_at ||
            new Date().toISOString()

    };

}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getLocalResults() {

    try {

        const raw =
            localStorage.getItem(
                CONFIG.STORAGE_KEY
            );

        if (!raw) {
            return [];
        }

        const parsed =
            JSON.parse(raw);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed
            .map(normaliseResult)
            .filter(Boolean);

    } catch (error) {

        console.error(error);

        return [];

    }

}


function saveLocalResults(results) {

    try {

        localStorage.setItem(
            CONFIG.STORAGE_KEY,
            JSON.stringify(results)
        );

    } catch (error) {

        console.error(error);

    }

}


/* =========================================================
   TEACHER SESSION
   ========================================================= */

function isTeacherLoggedIn() {

    return (
        sessionStorage.getItem(
            CONFIG.SESSION_KEY
        ) === "true"
    );

}


function setTeacherLoggedIn(value) {

    if (value) {

        sessionStorage.setItem(
            CONFIG.SESSION_KEY,
            "true"
        );

    } else {

        sessionStorage.removeItem(
            CONFIG.SESSION_KEY
        );

    }

}


/* =========================================================
   TEACHER LOGIN
   ========================================================= */

function setupTeacherLogin() {

    const form =
        byId("teacher-login-form");

    if (!form) {
        return;
    }

    if (isTeacherLoggedIn()) {

        const loginSection =
            byId("teacher-login");

        const portal =
            byId("teacher-portal");

        if (loginSection) {
            loginSection.style.display = "none";
        }

        if (portal) {
            portal.style.display = "";
        }

    }

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const passwordInput =
                form.querySelector(
                    '[name="password"]'
                ) ||
                byId("teacher-password") ||
                form.querySelector(
                    'input[type="password"]'
                );

            if (!passwordInput) {

                alert(
                    "Teacher password field was not found."
                );

                return;

            }

            const password =
                clean(passwordInput.value);

            if (
                password !==
                CONFIG.TEACHER_PASSWORD
            ) {

                alert(
                    "Incorrect teacher password."
                );

                passwordInput.focus();

                return;

            }

            setTeacherLoggedIn(true);

            form.reset();

            const loginSection =
                byId("teacher-login");

            const portal =
                byId("teacher-portal");

            if (loginSection) {
                loginSection.style.display =
                    "none";
            }

            if (portal) {
                portal.style.display = "";
            }

            setupTeacherResultForm();

            loadResults();

        }
    );

}


/* =========================================================
   TEACHER LOGOUT
   ========================================================= */

function setupTeacherLogout() {

    const buttons =
        document.querySelectorAll(
            "[data-teacher-logout]"
        );

    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    setTeacherLoggedIn(false);

                    window.location.reload();

                }
            );

        }
    );

}


/* =========================================================
   PROGRAM HELPERS
   ========================================================= */

function getPrograms(
    category,
    section
) {

    category =
        clean(category)
            .toUpperCase();

    section =
        clean(section)
            .toUpperCase();

    if (
        category ===
        "GENERAL"
    ) {

        return PROGRAMS.GENERAL || [];

    }

    if (
        PROGRAMS[category] &&
        PROGRAMS[category][section]
    ) {

        return PROGRAMS[category][section];

    }

    return [];

}


function findProgram(
    category,
    section,
    eventName
) {

    const programs =
        getPrograms(
            category,
            section
        );

    return (
        programs.find(
            function (program) {

                return (
                    program.name ===
                    eventName
                );

            }
        ) ||
        null
    );

}


/* =========================================================
   POPULATE SELECT
   ========================================================= */

function populateSelect(
    select,
    options,
    placeholder = "Select"
) {

    if (!select) {
        return;
    }

    select.innerHTML = "";

    const first =
        document.createElement("option");

    first.value = "";
    first.textContent = placeholder;

    select.appendChild(first);

    options.forEach(
        function (option) {

            const item =
                document.createElement("option");

            if (
                typeof option === "string"
            ) {

                item.value = option;
                item.textContent = option;

            } else {

                item.value = option.name;
                item.textContent = option.name;

            }

            select.appendChild(item);

        }
    );

}


/* =========================================================
   TEACHER RESULT FORM
   ========================================================= */

function setupTeacherResultForm() {

    const form =
        byId("teacher-result-form");

    if (!form) {
        return;
    }

    if (
        form.dataset.ready ===
        "true"
    ) {

        updateTeacherPrograms();

        return;

    }

    form.dataset.ready = "true";

    const sectionSelect =
        form.querySelector(
            '[name="section"]'
        ) ||
        byId("result-section");

    const categorySelect =
        form.querySelector(
            '[name="program_category"]'
        ) ||
        form.querySelector(
            '[name="category"]'
        ) ||
        byId("result-category");

    const eventSelect =
        form.querySelector(
            '[name="event"]'
        ) ||
        byId("result-event");

    const activitySelect =
        form.querySelector(
            '[name="activity_type"]'
        ) ||
        byId("activity-type");

    if (categorySelect) {

        categorySelect.addEventListener(
            "change",
            updateTeacherPrograms
        );

    }

    if (sectionSelect) {

        sectionSelect.addEventListener(
            "change",
            updateTeacherPrograms
        );

    }

    if (eventSelect) {

        eventSelect.addEventListener(
            "change",
            updateActivityType
        );

    }

    form.addEventListener(
        "submit",
        submitTeacherResult
    );

    updateTeacherPrograms();

}


function updateTeacherPrograms() {

    const form =
        byId("teacher-result-form");

    if (!form) {
        return;
    }

    const categorySelect =
        form.querySelector(
            '[name="program_category"]'
        ) ||
        form.querySelector(
            '[name="category"]'
        ) ||
        byId("result-category");

    const sectionSelect =
        form.querySelector(
            '[name="section"]'
        ) ||
        byId("result-section");

    const eventSelect =
        form.querySelector(
            '[name="event"]'
        ) ||
        byId("result-event");

    if (!eventSelect) {
        return;
    }

    const category =
        categorySelect
            ? clean(categorySelect.value)
            : "";

    const section =
        sectionSelect
            ? clean(sectionSelect.value)
            : "";

    if (!category) {

        eventSelect.innerHTML =
            '<option value="">Select Program Category First</option>';

        return;

    }

    const programs =
        getPrograms(
            category,
            section
        );

    populateSelect(
        eventSelect,
        programs,
        "Select Event"
    );

    updateActivityType();

}


function updateActivityType() {

    const form =
        byId("teacher-result-form");

    if (!form) {
        return;
    }

    const categorySelect =
        form.querySelector(
            '[name="program_category"]'
        ) ||
        form.querySelector(
            '[name="category"]'
        ) ||
        byId("result-category");

    const sectionSelect =
        form.querySelector(
            '[name="section"]'
        ) ||
        byId("result-section");

    const eventSelect =
        form.querySelector(
            '[name="event"]'
        ) ||
        byId("result-event");

    const activitySelect =
        form.querySelector(
            '[name="activity_type"]'
        ) ||
        byId("activity-type");

    if (
        !activitySelect ||
        !eventSelect
    ) {
        return;
    }

    const category =
        categorySelect
            ? clean(categorySelect.value)
            : "";

    const section =
        sectionSelect
            ? clean(sectionSelect.value)
            : "";

    const eventName =
        clean(eventSelect.value);

    const program =
        findProgram(
            category,
            section,
            eventName
        );

    if (program) {

        activitySelect.value =
            program.type;

    }

}


/* =========================================================
   SUBMIT TEACHER RESULT
   ========================================================= */

async function submitTeacherResult(
    event
) {

    event.preventDefault();

    const form =
        byId("teacher-result-form");

    if (!form) {

        alert(
            "Result form was not found."
        );

        return;

    }

    const data =
        new FormData(form);

    const category =
        clean(
            data.get(
                "program_category"
            ) ||
            data.get("category")
        );

    const section =
        clean(
            data.get("section")
        );

    const eventName =
        clean(
            data.get("event")
        );

    const name =
        clean(
            data.get("name") ||
            data.get("student_name")
        );

    const studentClass =
        clean(
            data.get(
                "student_class"
            ) ||
            data.get("class")
        );

    const team =
        clean(
            data.get("team") ||
            data.get("house")
        );

    const place =
        toNumber(
            data.get("place"),
            0
        );

    const participantCount =
        Math.max(
            1,
            toNumber(
                data.get(
                    "participant_count"
                ),
                1
            )
        );

    let activityType =
        clean(
            data.get(
                "activity_type"
            )
        );

    const program =
        findProgram(
            category,
            section,
            eventName
        );

    if (
        !activityType &&
        program
    ) {

        activityType =
            program.type;

    }

    if (!name) {

        alert(
            "Please enter the student or group name."
        );

        return;

    }

    if (!category) {

        alert(
            "Please select the program category."
        );

        return;

    }

    if (!eventName) {

        alert(
            "Please select the event."
        );

        return;

    }

    if (
        !["RED", "GREEN", "BLUE", "YELLOW"]
            .includes(
                team.toUpperCase()
            )
    ) {

        alert(
            "Please select a valid house."
        );

        return;

    }

    if (
        ![1, 2, 3]
            .includes(place)
    ) {

        alert(
            "Place must be 1, 2, or 3."
        );

        return;

    }

    const result = {

        id: createId(),

        name: name,

        studentClass:
            studentClass,

        section:
            section,

        activityType:
            activityType ||
            "individual",

        programCategory:
            category,

        event:
            eventName,

        team:
            team.toUpperCase(),

        place:
            place,

        participantCount:
            participantCount,

        createdAt:
            new Date().toISOString()

    };

    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );

    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.dataset.originalText =
            submitButton.textContent;

        submitButton.textContent =
            "Saving...";

    }

    try {

        await saveResult(result);

        alert(
            "Result saved successfully."
        );

        form.reset();

        updateTeacherPrograms();

        await loadResults();

    } catch (error) {

        console.error(error);

        alert(
            "Could not save result.\n\n" +
            error.message
        );

    } finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                submitButton.dataset.originalText ||
                "Save Result";

        }

    }

}


/* =========================================================
   SAVE RESULT TO SUPABASE
   ========================================================= */

/*
   VERY IMPORTANT:

   Your current Supabase table does NOT contain
   a "program" column.

   Therefore this object intentionally contains:

   id
   name
   student_class
   section
   activity_type
   program_category
   event
   team
   place
   participant_count

   NOTHING ELSE.
*/

async function saveResult(item) {

    if (
        !window.supabase ||
        !window.supabaseClient
    ) {

        throw new Error(
            "Supabase is not connected. Check supabase.js and script order."
        );

    }

    const databaseRow = {

        id:
            item.id,

        name:
            item.name,

        student_class:
            item.studentClass,

        section:
            item.section,

        activity_type:
            item.activityType,

        program_category:
            item.programCategory,

        event:
            item.event,

        team:
            item.team,

        place:
            item.place,

        participant_count:
            item.participantCount

    };

    /*
       NO "program" FIELD.
       NO "student_name" FIELD.
    */

    const {
        data,
        error
    } =
        await window.supabaseClient
            .from(CONFIG.TABLE_NAME)
            .insert(databaseRow)
            .select()
            .single();

    if (error) {

        console.error(
            "Supabase insert error:",
            error
        );

        throw new Error(
            "Supabase error: " +
            error.message +
            " | Code: " +
            (error.code || "unknown")
        );

    }

    return normaliseResult(data);

}


/* =========================================================
   LOAD RESULTS FROM SUPABASE
   ========================================================= */

async function loadResults() {

    try {

        if (
            !window.supabaseClient
        ) {

            const local =
                getLocalResults();

            renderEverything(local);

            return local;

        }

        const {
            data,
            error
        } =
            await window.supabaseClient
                .from(CONFIG.TABLE_NAME)
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );

        if (error) {

            console.error(
                "Supabase load error:",
                error
            );

            throw error;

        }

        const results =
            (data || [])
                .map(normaliseResult)
                .filter(Boolean);

        saveLocalResults(results);

        renderEverything(results);

        return results;

    } catch (error) {

        console.error(error);

        const local =
            getLocalResults();

        renderEverything(local);

        return local;

    }

}


/* =========================================================
   DELETE RESULT
   ========================================================= */

async function deleteResult(id) {

    if (!id) {
        return;
    }

    const confirmed =
        window.confirm(
            "Are you sure you want to delete this result?"
        );

    if (!confirmed) {
        return;
    }

    try {

        const {
            error
        } =
            await window.supabaseClient
                .from(CONFIG.TABLE_NAME)
                .delete()
                .eq(
                    "id",
                    id
                );

        if (error) {
            throw error;
        }

        alert(
            "Result deleted successfully."
        );

        await loadResults();

    } catch (error) {

        console.error(error);

        alert(
            "Could not delete result.\n\n" +
            error.message
        );

    }

}


/* =========================================================
   POINT CALCULATION
   ========================================================= */

function getPoints(
    result
) {

    const place =
        toNumber(
            result.place,
            0
        );

    if (
        ![1, 2, 3]
            .includes(place)
    ) {

        return 0;

    }

    if (
        result.activityType
            .toLowerCase() ===
        "group"
    ) {

        return (
            CONFIG.GROUP_POINTS[
                place
            ] || 0
        );

    }

    return (
        CONFIG.INDIVIDUAL_POINTS[
            place
        ] || 0
    );

}


/* =========================================================
   HOUSE TOTALS
   ========================================================= */

function calculateHouseTotals(
    results
) {

    const totals = {

        RED: 0,
        GREEN: 0,
        BLUE: 0,
        YELLOW: 0

    };

    results.forEach(
        function (result) {

            const house =
                clean(
                    result.team
                ).toUpperCase();

            if (
                Object.prototype
                    .hasOwnProperty
                    .call(
                        totals,
                        house
                    )
            ) {

                totals[house] +=
                    getPoints(result);

            }

        }
    );

    return totals;

}


/* =========================================================
   CHAMPIONSHIP
   ========================================================= */

function renderChampionship(
    results
) {

    const totals =
        calculateHouseTotals(
            results
        );

    const ordered =
        Object.entries(totals)
            .sort(
                function (a, b) {
                    return b[1] - a[1];
                }
            );

    const container =
        byId("championship");

    if (!container) {
        return;
    }

    container.innerHTML =
        ordered
            .map(
                function (
                    [house, points],
                    index
                ) {

                    return `
                        <div class="house-rank">
                            <span class="rank">
                                ${index + 1}
                            </span>

                            <span class="house">
                                ${escapeHtml(
                                    HOUSES[house]?.name ||
                                    house
                                )}
                            </span>

                            <strong>
                                ${points}
                            </strong>
                        </div>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   STATISTICS
   ========================================================= */

function renderStatistics(
    results
) {

    const totalResults =
        results.length;

    const totalPoints =
        results.reduce(
            function (
                total,
                result
            ) {

                return (
                    total +
                    getPoints(result)
                );

            },
            0
        );

    const firstPlaces =
        results.filter(
            function (result) {
                return (
                    result.place === 1
                );
            }
        ).length;

    const secondPlaces =
        results.filter(
            function (result) {
                return (
                    result.place === 2
                );
            }
        ).length;

    const thirdPlaces =
        results.filter(
            function (result) {
                return (
                    result.place === 3
                );
            }
        ).length;


    const mappings = {

        "total-results":
            totalResults,

        "total-points":
            totalPoints,

        "first-places":
            firstPlaces,

        "second-places":
            secondPlaces,

        "third-places":
            thirdPlaces

    };


    Object.entries(
        mappings
    ).forEach(
        function (
            [id, value]
        ) {

            const element =
                byId(id);

            if (element) {
                element.textContent =
                    value;
            }

        }
    );

}


/* =========================================================
   RESULT TABLE
   ========================================================= */

function renderResultsTable(
    results
) {

    const tbody =
        byId("results-body") ||
        byId("results-table-body");

    if (!tbody) {
        return;
    }

    if (!results.length) {

        tbody.innerHTML = `
            <tr>
                <td colspan="10">
                    No results available.
                </td>
            </tr>
        `;

        return;

    }

    tbody.innerHTML =
        results
            .map(
                function (result) {

                    const points =
                        getPoints(result);

                    return `
                        <tr>

                            <td>
                                ${escapeHtml(
                                    result.name
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    result.studentClass
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    result.section
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    result.event
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    result.activityType
                                )}
                            </td>

                            <td>
                                ${escapeHtml(
                                    result.team
                                )}
                            </td>

                            <td>
                                ${result.place}
                            </td>

                            <td>
                                ${points}
                            </td>

                            <td>
                                ${result.participantCount}
                            </td>

                            <td>
                                ${
                                    isTeacherLoggedIn()
                                    ? `
                                        <button
                                            type="button"
                                            class="delete-result"
                                            data-result-id="${escapeHtml(
                                                result.id
                                            )}"
                                        >
                                            Delete
                                        </button>
                                    `
                                    : ""
                                }
                            </td>

                        </tr>
                    `;

                }
            )
            .join("");


    tbody
        .querySelectorAll(
            ".delete-result"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        deleteResult(
                            button.dataset.resultId
                        );

                    }
                );

            }
        );

}


/* =========================================================
   PUBLIC RESULT CARDS
   ========================================================= */

function renderPublicResults(
    results
) {

    const container =
        byId("public-results") ||
        byId("results-container");

    if (!container) {
        return;
    }

    if (!results.length) {

        container.innerHTML = `
            <div class="empty-state">
                No results have been published yet.
            </div>
        `;

        return;

    }

    container.innerHTML =
        results
            .map(
                function (result) {

                    return `
                        <article class="result-card">

                            <div class="result-card-header">

                                <span>
                                    ${escapeHtml(
                                        result.event
                                    )}
                                </span>

                                <strong>
                                    ${result.place === 1
                                        ? "1st"
                                        : result.place === 2
                                            ? "2nd"
                                            : result.place === 3
                                                ? "3rd"
                                                : result.place
                                    }
                                </strong>

                            </div>

                            <h3>
                                ${escapeHtml(
                                    result.name
                                )}
                            </h3>

                            <p>
                                ${escapeHtml(
                                    result.team
                                )}
                            </p>

                            <small>
                                ${escapeHtml(
                                    result.section
                                )}
                                ·
                                ${getPoints(result)}
                                points
                            </small>

                        </article>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   LATEST RESULTS
   ========================================================= */

function renderLatestResults(
    results
) {

    const container =
        byId("latest-results");

    if (!container) {
        return;
    }

    const latest =
        results.slice(
            0,
            10
        );

    if (!latest.length) {

        container.innerHTML =
            "<p>No results yet.</p>";

        return;

    }

    container.innerHTML =
        latest
            .map(
                function (result) {

                    return `
                        <div class="latest-result">

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

                            <strong>
                                ${getPoints(result)}
                            </strong>

                        </div>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters(
    results
) {

    const houseFilter =
        byId("filter-house");

    const sectionFilter =
        byId("filter-section");

    const eventFilter =
        byId("filter-event");


    function applyFilters() {

        let filtered =
            [...results];


        if (
            houseFilter &&
            houseFilter.value
        ) {

            filtered =
                filtered.filter(
                    function (result) {

                        return (
                            result.team ===
                            houseFilter.value
                        );

                    }
                );

        }


        if (
            sectionFilter &&
            sectionFilter.value
        ) {

            filtered =
                filtered.filter(
                    function (result) {

                        return (
                            result.section ===
                            sectionFilter.value
                        );

                    }
                );

        }


        if (
            eventFilter &&
            eventFilter.value
        ) {

            filtered =
                filtered.filter(
                    function (result) {

                        return (
                            result.event ===
                            eventFilter.value
                        );

                    }
                );

        }


        renderResultsTable(
            filtered
        );

    }


    if (houseFilter) {

        houseFilter.onchange =
            applyFilters;

    }


    if (sectionFilter) {

        sectionFilter.onchange =
            applyFilters;

    }


    if (eventFilter) {

        eventFilter.onchange =
            applyFilters;

    }


    if (houseFilter) {

        populateSelect(
            houseFilter,
            [
                "RED",
                "GREEN",
                "BLUE",
                "YELLOW"
            ],
            "All Houses"
        );

    }


    if (sectionFilter) {

        populateSelect(
            sectionFilter,
            SECTIONS,
            "All Sections"
        );

    }


    if (eventFilter) {

        const uniqueEvents =
            [
                ...new Set(
                    results
                        .map(
                            function (result) {
                                return result.event;
                            }
                        )
                        .filter(Boolean)
                )
            ]
            .sort();

        populateSelect(
            eventFilter,
            uniqueEvents,
            "All Events"
        );

    }

}


/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderEverything(
    results
) {

    results =
        Array.isArray(results)
            ? results
            : [];

    renderChampionship(
        results
    );

    renderStatistics(
        results
    );

    renderResultsTable(
        results
    );

    renderPublicResults(
        results
    );

    renderLatestResults(
        results
    );

    setupFilters(
        results
    );

}


/* =========================================================
   REALTIME SUPABASE
   ========================================================= */

function setupRealtime() {

    if (
        !window.supabaseClient
    ) {

        return;

    }

    try {

        window.supabaseClient
            .channel(
                "mis-art-fest-results"
            )
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: CONFIG.TABLE_NAME
                },
                function () {

                    loadResults();

                }
            )
            .subscribe(
                function (status) {

                    if (
                        status ===
                        "CHANNEL_ERROR"
                    ) {

                        console.warn(
                            "Supabase realtime channel error."
                        );

                    }

                }
            );

    } catch (error) {

        console.error(
            "Realtime setup error:",
            error
        );

    }

}


/* =========================================================
   CONNECTION CHECK
   ========================================================= */

async function checkSupabaseConnection() {

    if (
        !window.supabaseClient
    ) {

        console.warn(
            "Supabase client not available."
        );

        return false;

    }

    try {

        const {
            error
        } =
            await window.supabaseClient
                .from(CONFIG.TABLE_NAME)
                .select("id")
                .limit(1);

        if (error) {

            console.error(
                "Supabase connection error:",
                error
            );

            return false;

        }

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}


/* =========================================================
   AUTO REFRESH
   ========================================================= */

function setupAutoRefresh() {

    setInterval(
        function () {

            loadResults();

        },
        30000
    );

}


/* =========================================================
   PAGE INITIALISATION
   ========================================================= */

async function initialiseApp() {

    try {

        setupTeacherLogin();

        setupTeacherLogout();

        setupTeacherResultForm();

        await loadResults();

        setupRealtime();

        setupAutoRefresh();

        await checkSupabaseConnection();

    } catch (error) {

        console.error(
            "Application initialisation error:",
            error
        );

        alert(
            "MIS Art Fest application error:\n\n" +
            error.message
        );

    }

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseApp
    );

} else {

    initialiseApp();

}
