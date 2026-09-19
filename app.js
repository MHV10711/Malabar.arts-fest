/* =========================================================
   MIS ART FEST 2026
   APPLICATION JAVASCRIPT
   COMPLETE REBUILD
   ========================================================= */


/* =========================================================
   01. CONFIGURATION
   ========================================================= */

const CONFIG = Object.freeze({

    teacherPassword: "malabar@5445",

    sessionKey: "mis-art-fest-teacher-session",

    databaseTable: "results",

    individualPoints: {
        1: 5,
        2: 3,
        3: 1
    },

    groupPoints: {
        1: 10,
        2: 5,
        3: 3
    }

});


/* =========================================================
   02. HOUSE DATA
   ========================================================= */

const HOUSES = Object.freeze({

    RED: {
        key: "RED",
        name: "Red House"
    },

    GREEN: {
        key: "GREEN",
        name: "Green House"
    },

    BLUE: {
        key: "BLUE",
        name: "Blue House"
    },

    YELLOW: {
        key: "YELLOW",
        name: "Yellow House"
    }

});


/* =========================================================
   03. SECTION DATA
   ========================================================= */

const SECTIONS = Object.freeze({

    LP1: {
        key: "LP1",
        name: "LP 1",
        fullName: "Lower Primary 1"
    },

    LP2: {
        key: "LP2",
        name: "LP 2",
        fullName: "Lower Primary 2"
    },

    UP: {
        key: "UP",
        name: "UP",
        fullName: "Upper Primary"
    },

    HS: {
        key: "HS",
        name: "HS",
        fullName: "High School"
    },

    HSS: {
        key: "HSS",
        name: "HSS",
        fullName: "Higher Secondary"
    },

    GENERAL: {
        key: "GENERAL",
        name: "General",
        fullName: "General Category"
    }

});


/* =========================================================
   04. PROGRAM DATABASE
   ========================================================= */

const PROGRAMS = Object.freeze({

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
                maxParticipants: 7
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
                maxParticipants: 10
            },
            {
                name: "Patriotic",
                type: "group",
                maxParticipants: 7
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
        ],

        GENERAL: [
            {
                name: "Vattappattu",
                type: "group",
                maxParticipants: 10
            },
            {
                name: "Mime",
                type: "group",
                maxParticipants: 7
            },
            {
                name: "Oppana",
                type: "group",
                maxParticipants: 10
            }
        ]

    }

});


/* =========================================================
   05. APPLICATION STATE
   ========================================================= */

const APP = {

    results: [],

    currentProgram: null,

    realtimeChannel: null,

    initialised: false

};


/* =========================================================
   06. DOM HELPERS
   ========================================================= */

function byId(id) {

    return document.getElementById(id);

}


function firstExisting(...ids) {

    for (const id of ids) {

        const element = byId(id);

        if (element) {
            return element;
        }

    }

    return null;

}


function all(selector) {

    return Array.from(
        document.querySelectorAll(selector)
    );

}


/* =========================================================
   07. GENERAL HELPERS
   ========================================================= */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function createId() {

    return (
        "result-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .slice(2, 10)
    );

}


function toNumber(value, fallback = 0) {

    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : fallback;

}


function clean(value) {

    return String(value ?? "").trim();

}


function getPlace(place) {

    const number =
        toNumber(place);

    return [1, 2, 3].includes(number)
        ? number
        : null;

}


function getMedal(place) {

    switch (getPlace(place)) {

        case 1:
            return "🥇";

        case 2:
            return "🥈";

        case 3:
            return "🥉";

        default:
            return "";

    }

}


function getStageName(category) {

    if (
        category === "OFF_STAGE"
    ) {

        return "Off Stage";

    }

    if (
        category === "ON_STAGE"
    ) {

        return "On Stage";

    }

    return category || "";

}


function getSectionName(section) {

    return (
        SECTIONS[section]?.name ||
        section ||
        ""
    );

}


function getSectionFullName(section) {

    return (
        SECTIONS[section]?.fullName ||
        section ||
        ""
    );

}


function getHouseName(house) {

    const key =
        clean(house).toUpperCase();

    return (
        HOUSES[key]?.name ||
        clean(house) ||
        "No House"
    );

}


/* =========================================================
   08. SUPABASE AVAILABILITY
   ========================================================= */

function supabaseIsReady() {

    return (
        typeof window !== "undefined" &&
        typeof window.supabase !== "undefined" &&
        typeof supabaseClient !== "undefined" &&
        supabaseClient !== null
    );

}


/* =========================================================
   09. TEACHER AUTHENTICATION
   ========================================================= */

function isTeacherLoggedIn() {

    return (
        sessionStorage.getItem(
            CONFIG.sessionKey
        ) === "true"
    );

}


function loginTeacher(password) {

    const entered =
        clean(password);

    if (
        entered ===
        CONFIG.teacherPassword
    ) {

        sessionStorage.setItem(
            CONFIG.sessionKey,
            "true"
        );

        return true;

    }

    return false;

}


function logoutTeacher() {

    sessionStorage.removeItem(
        CONFIG.sessionKey
    );

    window.location.reload();

}


/* =========================================================
   10. TEACHER LOGIN FORM
   ========================================================= */

function setupTeacherLogin() {

    const form =
        firstExisting(
            "teacher-login-form",
            "login-form"
        );

    if (!form) {
        return;
    }

    if (
        form.dataset
            .loginInitialised === "true"
    ) {
        return;
    }

    form.dataset.loginInitialised =
        "true";

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const input =
                form.querySelector(
                    'input[name="password"]'
                ) ||
                form.querySelector(
                    "#teacher-password"
                ) ||
                form.querySelector(
                    "#password"
                ) ||
                form.querySelector(
                    'input[type="password"]'
                );

            if (!input) {

                alert(
                    "Password field was not found.\n\n" +
                    'Your password input should have name="password".'
                );

                return;

            }

            if (
                loginTeacher(
                    input.value
                )
            ) {

                window.location.reload();

                return;

            }

            alert(
                "Incorrect teacher password."
            );

            input.value = "";

            input.focus();

        }
    );

}


/* =========================================================
   11. TEACHER LOGOUT
   ========================================================= */

function setupTeacherLogout() {

    const button =
        firstExisting(
            "teacher-logout",
            "logout-teacher",
            "logout-button"
        );

    if (!button) {
        return;
    }

    if (
        button.dataset
            .logoutInitialised === "true"
    ) {
        return;
    }

    button.dataset.logoutInitialised =
        "true";

    button.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            logoutTeacher();

        }
    );

}


/* =========================================================
   12. TEACHER VISIBILITY
   ========================================================= */

function updateTeacherVisibility() {

    const loginArea =
        firstExisting(
            "teacher-login",
            "teacher-login-section",
            "login-section"
        );

    const dashboard =
        firstExisting(
            "teacher-dashboard",
            "teacher-panel",
            "teacher-content"
        );

    if (
        !loginArea &&
        !dashboard
    ) {
        return;
    }

    const loggedIn =
        isTeacherLoggedIn();

    if (loginArea) {

        loginArea.hidden =
            loggedIn;

    }

    if (dashboard) {

        dashboard.hidden =
            !loggedIn;

    }

}


/* =========================================================
   13. PROGRAM LOOKUP
   ========================================================= */

function getPrograms(
    category,
    section
) {

    return (
        PROGRAMS[category]?.[section] ||
        []
    );

}


function findProgram(
    category,
    section,
    programName
) {

    return getPrograms(
        category,
        section
    ).find(
        program =>
            program.name ===
            programName
    ) || null;

}


/* =========================================================
   14. PROGRAM SELECTOR ELEMENTS
   ========================================================= */

function getTeacherCategorySelect() {

    return firstExisting(
        "teacher-program-category",
        "program-category",
        "activity-category"
    );

}


function getTeacherSectionSelect() {

    return firstExisting(
        "teacher-section",
        "result-section",
        "section"
    );

}


function getTeacherProgramSelect() {

    return firstExisting(
        "teacher-program",
        "program",
        "event"
    );

}


function getTeacherActivityTypeInput() {

    return firstExisting(
        "teacher-activity-type",
        "activity-type"
    );

}


function getParticipantCountInput() {

    return firstExisting(
        "participant-count",
        "teacher-participant-count"
    );

}


/* =========================================================
   15. POPULATE PROGRAM SELECT
   ========================================================= */

function populateTeacherPrograms() {

    const categorySelect =
        getTeacherCategorySelect();

    const sectionSelect =
        getTeacherSectionSelect();

    const programSelect =
        getTeacherProgramSelect();

    if (
        !categorySelect ||
        !sectionSelect ||
        !programSelect
    ) {
        return;
    }

    const category =
        categorySelect.value;

    const section =
        sectionSelect.value;

    programSelect.innerHTML = "";

    const placeholder =
        document.createElement(
            "option"
        );

    placeholder.value = "";

    placeholder.textContent =
        category && section
            ? "Select Program"
            : "Select category and section first";

    programSelect.appendChild(
        placeholder
    );

    const programs =
        getPrograms(
            category,
            section
        );

    programs.forEach(
        program => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                program.name;

            option.textContent =
                program.name;

            option.dataset.type =
                program.type;

            if (
                program.maxParticipants
            ) {

                option.dataset.maxParticipants =
                    String(
                        program.maxParticipants
                    );

            }

            programSelect.appendChild(
                option
            );

        }
    );

    APP.currentProgram = null;

    updateProgramDetails();

}


/* =========================================================
   16. UPDATE PROGRAM DETAILS
   ========================================================= */

function updateProgramDetails() {

    const categorySelect =
        getTeacherCategorySelect();

    const sectionSelect =
        getTeacherSectionSelect();

    const programSelect =
        getTeacherProgramSelect();

    if (
        !categorySelect ||
        !sectionSelect ||
        !programSelect
    ) {
        return;
    }

    const category =
        categorySelect.value;

    const section =
        sectionSelect.value;

    const programName =
        programSelect.value;

    const program =
        findProgram(
            category,
            section,
            programName
        );

    APP.currentProgram =
        program
            ? {
                ...program,
                category,
                section
            }
            : null;

    const activityType =
        getTeacherActivityTypeInput();

    if (activityType) {

        activityType.value =
            APP.currentProgram?.type ||
            "individual";

    }

    updateParticipantInput();

    updateProgramFormVisibility();

}


/* =========================================================
   17. PARTICIPANT INPUT
   ========================================================= */

function updateParticipantInput() {

    const input =
        getParticipantCountInput();

    if (!input) {
        return;
    }

    const isGroup =
        APP.currentProgram?.type ===
        "group";

    if (isGroup) {

        input.disabled = false;

        input.min = "1";

        if (
            APP.currentProgram
                ?.maxParticipants
        ) {

            input.max =
                String(
                    APP.currentProgram
                        .maxParticipants
                );

        }

        if (
            !input.value ||
            input.value === "1"
        ) {

            input.value = "1";

        }

    }
    else {

        input.disabled = true;

        input.value = "1";

        input.removeAttribute(
            "max"
        );

    }

}


/* =========================================================
   18. PROGRAM FORM VISIBILITY
   ========================================================= */

function updateProgramFormVisibility() {

    const form =
        byId(
            "teacher-result-form"
        );

    if (!form) {
        return;
    }

    /*
       The form itself remains visible.
       We only update optional program
       information instead of hiding the
       entire form.
    */

    const info =
        firstExisting(
            "teacher-program-info",
            "program-info"
        );

    if (!info) {
        return;
    }

    if (!APP.currentProgram) {

        info.textContent = "";

        return;

    }

    let text =
        APP.currentProgram.type ===
        "group"
            ? "Group Program"
            : "Individual Program";

    if (
        APP.currentProgram
            .maxParticipants
    ) {

        text +=
            ` • Maximum ${APP.currentProgram.maxParticipants} participants`;

    }

    info.textContent =
        text;

}


/* =========================================================
   19. TEACHER PROGRAM SETUP
   ========================================================= */

function setupTeacherProgramSelection() {

    const categorySelect =
        getTeacherCategorySelect();

    const sectionSelect =
        getTeacherSectionSelect();

    const programSelect =
        getTeacherProgramSelect();

    if (
        categorySelect &&
        categorySelect.dataset
            .programInitialised !== "true"
    ) {

        categorySelect.dataset
            .programInitialised =
            "true";

        categorySelect.addEventListener(
            "change",
            populateTeacherPrograms
        );

    }

    if (
        sectionSelect &&
        sectionSelect.dataset
            .programInitialised !== "true"
    ) {

        sectionSelect.dataset
            .programInitialised =
            "true";

        sectionSelect.addEventListener(
            "change",
            populateTeacherPrograms
        );

    }

    if (
        programSelect &&
        programSelect.dataset
            .programInitialised !== "true"
    ) {

        programSelect.dataset
            .programInitialised =
            "true";

        programSelect.addEventListener(
            "change",
            updateProgramDetails
        );

    }

    if (
        categorySelect &&
        sectionSelect
    ) {

        populateTeacherPrograms();

    }

}


/* =========================================================
   20. RESULT NORMALISATION
   ========================================================= */

function normaliseResult(row) {

    if (!row) {
        return null;
    }

    return {

        id:
            clean(row.id) ||
            createId(),

        name:
            clean(
                row.name ||
                row.student_name
            ),

        studentClass:
            clean(
                row.student_class ||
                row.studentClass ||
                row.class
            ),

        section:
            clean(row.section),

        activityType:
            clean(
                row.activity_type ||
                row.activityType
            ) || "individual",

        programCategory:
            clean(
                row.program_category ||
                row.programCategory
            ) || "OFF_STAGE",

        event:
            clean(
                row.event ||
                row.program
            ),

        team:
            clean(row.team),

        place:
            toNumber(
                row.place,
                0
            ),

        participantCount:
            toNumber(
                row.participant_count ||
                row.participantCount,
                1
            ),

        createdAt:
            row.created_at ||
            row.createdAt ||
            new Date().toISOString()

    };

}


/* =========================================================
   21. LOAD RESULTS FROM SUPABASE
   ========================================================= */

async function loadResults() {

    if (!supabaseIsReady()) {

        throw new Error(
            "Supabase is not connected. Check supabase.js and the Supabase script."
        );

    }

    const response =
        await supabaseClient
            .from(
                CONFIG.databaseTable
            )
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );

    if (response.error) {

        throw response.error;

    }

    APP.results =
        Array.isArray(
            response.data
        )
            ? response.data
                .map(
                    normaliseResult
                )
                .filter(Boolean)
            : [];

    updateConnectionStatus(
        "Live"
    );

    return APP.results;

}


/* =========================================================
   22. SAVE RESULT
   ========================================================= */

async function saveResult(result) {

    if (!supabaseIsReady()) {

        throw new Error(
            "Supabase is not connected."
        );

    }

    const item =
        normaliseResult(result);

    const databaseRow = {

        id: item.id,

        name: item.name,

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
            item.participantCount,

        /*
           These two fields are retained
           because your current database
           has legacy NOT NULL columns.
        */

        student_name:
            item.name,

        program:
            item.event

    };

    const response =
        await supabaseClient
            .from(
                CONFIG.databaseTable
            )
            .insert(
                [databaseRow]
            )
            .select()
            .single();

    if (response.error) {

        throw response.error;

    }

    const saved =
        normaliseResult(
            response.data ||
            databaseRow
        );

    /*
       Don't blindly duplicate the row.
    */

    APP.results =
        [
            saved,
            ...APP.results.filter(
                existing =>
                    existing.id !==
                    saved.id
            )
        ];

    return saved;

}


/* =========================================================
   23. DELETE RESULT
   ========================================================= */

async function deleteResult(id) {

    if (!supabaseIsReady()) {

        throw new Error(
            "Supabase is not connected."
        );

    }

    if (!id) {

        throw new Error(
            "Result ID is missing."
        );

    }

    const response =
        await supabaseClient
            .from(
                CONFIG.databaseTable
            )
            .delete()
            .eq(
                "id",
                id
            );

    if (response.error) {

        throw response.error;

    }

    APP.results =
        APP.results.filter(
            result =>
                result.id !== id
        );

}


/* =========================================================
   24. POINT CALCULATION
   ========================================================= */

function getResultPoints(result) {

    const place =
        getPlace(
            result.place
        );

    if (!place) {
        return 0;
    }

    const isGroup =
        clean(
            result.activityType
        ).toLowerCase() ===
        "group";

    const pointTable =
        isGroup
            ? CONFIG.groupPoints
            : CONFIG.individualPoints;

    return (
        pointTable[place] ||
        0
    );

}


/* =========================================================
   25. HOUSE SCORES
   ========================================================= */

function calculateHouseScores(
    source = APP.results
) {

    const scores = {

        RED: 0,

        GREEN: 0,

        BLUE: 0,

        YELLOW: 0

    };

    source.forEach(
        result => {

            const house =
                clean(
                    result.team
                ).toUpperCase();

            if (
                Object.prototype
                    .hasOwnProperty
                    .call(
                        scores,
                        house
                    )
            ) {

                scores[house] +=
                    getResultPoints(
                        result
                    );

            }

        }
    );

    return scores;

}


function getSortedHouseScores() {

    const scores =
        calculateHouseScores();

    return Object.entries(
        scores
    ).sort(
        (
            [, scoreA],
            [, scoreB]
        ) =>
            scoreB - scoreA
    );

}


/* =========================================================
   26. FILTER SYSTEM
   ========================================================= */

function getFilterValue(name) {

    const element =
        document.querySelector(
            `[data-result-filter="${name}"]`
        );

    return element
        ? clean(element.value)
        : "";

}


function filterResults(
    source = APP.results
) {

    const section =
        getFilterValue(
            "section"
        );

    const category =
        getFilterValue(
            "category"
        );

    const event =
        getFilterValue(
            "event"
        );

    const team =
        getFilterValue(
            "team"
        ).toUpperCase();

    return source.filter(
        result => {

            if (
                section &&
                section !== "all" &&
                result.section !== section
            ) {

                return false;

            }

            if (
                category &&
                category !== "all" &&
                result.programCategory !==
                    category
            ) {

                return false;

            }

            if (
                event &&
                event !== "all" &&
                result.event !== event
            ) {

                return false;

            }

            if (
                team &&
                team !== "all" &&
                clean(
                    result.team
                ).toUpperCase() !== team
            ) {

                return false;

            }

            return true;

        }
    );

}


/* =========================================================
   27. POPULATE FILTERS
   ========================================================= */

function addFilterOption(
    select,
    value,
    text
) {

    const option =
        document.createElement(
            "option"
        );

    option.value =
        value;

    option.textContent =
        text;

    select.appendChild(
        option
    );

}


function populateFilters() {

    const sectionFilter =
        document.querySelector(
            '[data-result-filter="section"]'
        );

    if (sectionFilter) {

        const oldValue =
            sectionFilter.value;

        sectionFilter.innerHTML = "";

        addFilterOption(
            sectionFilter,
            "all",
            "All Sections"
        );

        Object.keys(
            SECTIONS
        ).forEach(
            section => {

                addFilterOption(
                    sectionFilter,
                    section,
                    getSectionFullName(
                        section
                    )
                );

            }
        );

        sectionFilter.value =
            oldValue || "all";

    }


    const categoryFilter =
        document.querySelector(
            '[data-result-filter="category"]'
        );

    if (categoryFilter) {

        const oldValue =
            categoryFilter.value;

        categoryFilter.innerHTML = "";

        addFilterOption(
            categoryFilter,
            "all",
            "All Categories"
        );

        addFilterOption(
            categoryFilter,
            "OFF_STAGE",
            "Off Stage"
        );

        addFilterOption(
            categoryFilter,
            "ON_STAGE",
            "On Stage"
        );

        categoryFilter.value =
            oldValue || "all";

    }


    const eventFilter =
        document.querySelector(
            '[data-result-filter="event"]'
        );

    if (eventFilter) {

        const oldValue =
            eventFilter.value;

        const events =
            [
                ...new Set(
                    APP.results
                        .map(
                            result =>
                                result.event
                        )
                        .filter(Boolean)
                )
            ].sort(
                (a, b) =>
                    a.localeCompare(
                        b
                    )
            );

        eventFilter.innerHTML = "";

        addFilterOption(
            eventFilter,
            "all",
            "All Programs"
        );

        events.forEach(
            eventName => {

                addFilterOption(
                    eventFilter,
                    eventName,
                    eventName
                );

            }
        );

        eventFilter.value =
            oldValue || "all";

    }


    const teamFilter =
        document.querySelector(
            '[data-result-filter="team"]'
        );

    if (teamFilter) {

        const oldValue =
            teamFilter.value;

        teamFilter.innerHTML = "";

        addFilterOption(
            teamFilter,
            "all",
            "All Houses"
        );

        Object.values(
            HOUSES
        ).forEach(
            house => {

                addFilterOption(
                    teamFilter,
                    house.key,
                    house.name
                );

            }
        );

        teamFilter.value =
            oldValue || "all";

    }

}


/* =========================================================
   28. RESULT CARD
   ========================================================= */

function resultCardHtml(
    result
) {

    const points =
        getResultPoints(
            result
        );

    const house =
        clean(
            result.team
        ).toUpperCase();

    const houseName =
        getHouseName(
            house
        );

    const medalIcon =
        getMedal(
            result.place
        );

    return `
        <article class="result-card">

            <div class="result-medal">
                ${medalIcon}
            </div>

            <div class="result-information">

                <h3>
                    ${escapeHtml(
                        result.name
                    )}
                </h3>

                <p class="result-program">
                    ${escapeHtml(
                        result.event
                    )}
                </p>

                <div class="result-meta">

                    <span>
                        ${escapeHtml(
                            getSectionName(
                                result.section
                            )
                        )}
                    </span>

                    <span>
                        ${escapeHtml(
                            result.studentClass
                        )}
                    </span>

                    <span>
                        ${escapeHtml(
                            houseName
                        )}
                    </span>

                </div>

            </div>

            <div class="result-points">

                <strong>
                    ${points}
                </strong>

                <span>
                    points
                </span>

            </div>

        </article>
    `;

}


/* =========================================================
   29. PUBLIC RESULTS RENDER
   ========================================================= */

function renderPublicResults() {

    const container =
        firstExisting(
            "public-results",
            "results-list",
            "results-container",
            "results-grid"
        );

    if (!container) {
        return;
    }

    const filtered =
        filterResults();

    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    No results found
                </h3>

                <p>
                    Published results will appear here.
                </p>

            </div>
        `;

        return;

    }

    container.innerHTML =
        filtered
            .map(
                resultCardHtml
            )
            .join("");

}


/* =========================================================
   30. TEACHER RESULTS RENDER
   ========================================================= */

function renderTeacherResults() {

    const container =
        firstExisting(
            "teacher-results",
            "teacher-results-list",
            "manage-results",
            "manage-results-list"
        );

    if (!container) {
        return;
    }

    if (!isTeacherLoggedIn()) {

        container.innerHTML = "";

        return;

    }

    if (!APP.results.length) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    No results published
                </h3>

                <p>
                    Results submitted through the teacher portal will appear here.
                </p>

            </div>
        `;

        return;

    }

    container.innerHTML =
        APP.results
            .map(
                result => {

                    const points =
                        getResultPoints(
                            result
                        );

                    return `
                        <div class="teacher-result-item">

                            <div class="teacher-result-main">

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
                                        getSectionName(
                                            result.section
                                        )
                                    )}
                                    ·
                                    ${escapeHtml(
                                        result.studentClass
                                    )}
                                    ·
                                    ${escapeHtml(
                                        getHouseName(
                                            result.team
                                        )
                                    )}
                                </small>

                            </div>

                            <div class="teacher-result-place">

                                <strong>
                                    ${getMedal(
                                        result.place
                                    )}
                                    ${getPlace(
                                        result.place
                                    ) || ""}
                                </strong>

                                <span>
                                    ${points} points
                                </span>

                            </div>

                            <button
                                type="button"
                                class="delete-result"
                                data-delete-result="${escapeHtml(result.id)}"
                            >
                                Delete
                            </button>

                        </div>
                    `;

                }
            )
            .join("");

    container
        .querySelectorAll(
            "[data-delete-result]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    handleDeleteResult
                );

            }
        );

}


/* =========================================================
   31. DELETE RESULT HANDLER
   ========================================================= */

async function handleDeleteResult(
    event
) {

    const button =
        event.currentTarget;

    const id =
        button.dataset.deleteResult;

    if (!id) {

        alert(
            "This result does not have a valid ID."
        );

        return;

    }

    const confirmed =
        window.confirm(
            "Are you sure you want to delete this result?"
        );

    if (!confirmed) {
        return;
    }

    const originalText =
        button.textContent;

    button.disabled = true;

    button.textContent =
        "Deleting...";

    try {

        await deleteResult(
            id
        );

        renderAll();

    }
    catch (error) {

        console.error(
            "Delete error:",
            error
        );

        alert(
            "The result could not be deleted.\n\n" +
            (
                error?.message ||
                "Unknown error"
            )
        );

    }
    finally {

        button.disabled = false;

        button.textContent =
            originalText;

    }

}


/* =========================================================
   32. CHAMPIONSHIP TABLE
   ========================================================= */

function renderChampionship() {

    const container =
        firstExisting(
            "championship",
            "house-scores",
            "championship-table",
            "house-leaderboard"
        );

    if (!container) {
        return;
    }

    const sorted =
        getSortedHouseScores();

    container.innerHTML =
        sorted
            .map(
                (
                    [house, points],
                    index
                ) => {

                    const houseInfo =
                        HOUSES[house];

                    return `
                        <div
                            class="house-score-card"
                            data-house="${house}"
                        >

                            <div class="house-position">
                                ${index + 1}
                            </div>

                            <div class="house-details">

                                <strong>
                                    ${escapeHtml(
                                        houseInfo?.name ||
                                        house
                                    )}
                                </strong>

                            </div>

                            <div class="house-points">

                                <strong>
                                    ${points}
                                </strong>

                                <span>
                                    points
                                </span>

                            </div>

                        </div>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   33. DASHBOARD STATISTICS
   ========================================================= */

function renderStatistics() {

    const totalResults =
        APP.results.length;

    const totalPoints =
        APP.results.reduce(
            (
                total,
                result
            ) =>
                total +
                getResultPoints(
                    result
                ),
            0
        );

    const totalPrograms =
        new Set(
            APP.results.map(
                result =>
                    result.event
            )
        ).size;


    const totalStudents =
        new Set(
            APP.results.map(
                result =>
                    result.name
            )
        ).size;


    const mappings = {

        totalResults: totalResults,

        dashboardTotalResults:
            totalResults,

        totalPoints: totalPoints,

        dashboardTotalPoints:
            totalPoints,

        totalPrograms:
            totalPrograms,

        dashboardTotalPrograms:
            totalPrograms,

        totalStudents:
            totalStudents

    };


    Object.entries(
        mappings
    ).forEach(
        (
            [id, value]
        ) => {

            const element =
                byId(id);

            if (element) {

                element.textContent =
                    String(value);

            }

        }
    );

}


/* =========================================================
   34. HOME / LATEST RESULTS
   ========================================================= */

function renderLatestResults() {

    const container =
        firstExisting(
            "home-spotlight",
            "spotlight-results",
            "latest-results",
            "featured-results"
        );

    if (!container) {
        return;
    }

    const latest =
        APP.results.slice(
            0,
            6
        );

    if (!latest.length) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    Results coming soon
                </h3>

                <p>
                    MIS Art Fest 2026 results will appear here.
                </p>

            </div>
        `;

        return;

    }

    container.innerHTML =
        latest
            .map(
                resultCardHtml
            )
            .join("");

}


/* =========================================================
   35. RESULT FORM SUBMISSION
   ========================================================= */

function getFormValue(
    form,
    names,
    fallback = ""
) {

    for (const name of names) {

        const element =
            form.querySelector(
                `[name="${name}"]`
            );

        if (element) {

            return clean(
                element.value
            );

        }

    }

    return fallback;

}


function setupTeacherResultForm() {

    const form =
        byId(
            "teacher-result-form"
        );

    if (!form) {
        return;
    }

    if (
        form.dataset
            .resultInitialised === "true"
    ) {
        return;
    }

    form.dataset.resultInitialised =
        "true";

    form.addEventListener(
        "submit",
        submitTeacherResult
    );

}


/* =========================================================
   36. SUBMIT TEACHER RESULT
   ========================================================= */

async function submitTeacherResult(
    event
) {

    event.preventDefault();

    const form =
        byId(
            "teacher-result-form"
        );

    if (!form) {

        alert(
            "The teacher result form could not be found."
        );

        return;

    }

    if (!isTeacherLoggedIn()) {

        alert(
            "Please login as a teacher first."
        );

        return;

    }


    const categorySelect =
        getTeacherCategorySelect();

    const sectionSelect =
        getTeacherSectionSelect();

    const programSelect =
        getTeacherProgramSelect();

    const category =
        getFormValue(
            form,
            [
                "program_category",
                "category"
            ],
            categorySelect?.value || ""
        );

    const section =
        getFormValue(
            form,
            ["section"],
            sectionSelect?.value || ""
        );

    const eventName =
        getFormValue(
            form,
            [
                "event",
                "program"
            ],
            programSelect?.value || ""
        );

    const name =
        getFormValue(
            form,
            [
                "name",
                "student_name"
            ]
        );

    const studentClass =
        getFormValue(
            form,
            [
                "student_class",
                "class"
            ]
        );

    const team =
        getFormValue(
            form,
            [
                "team",
                "house"
            ]
        );

    const placeValue =
        getFormValue(
            form,
            ["place"]
        );

    const participantValue =
        getFormValue(
            form,
            [
                "participant_count",
                "participants"
            ],
            "1"
        );

    let activityType =
        getFormValue(
            form,
            [
                "activity_type"
            ]
        );


    if (!activityType) {

        activityType =
            APP.currentProgram?.type ||
            "individual";

    }


    /* -----------------------------------------------------
       VALIDATION
       ----------------------------------------------------- */

    if (!category) {

        alert(
            "Please select the program category."
        );

        return;

    }


    if (!section) {

        alert(
            "Please select the section."
        );

        return;

    }


    if (!eventName) {

        alert(
            "Please select a program."
        );

        return;

    }


    if (!name) {

        alert(
            "Please enter the student or group name."
        );

        return;

    }


    if (!studentClass) {

        alert(
            "Please enter the class."
        );

        return;

    }


    const place =
        toNumber(
            placeValue
        );

    if (
        ![1, 2, 3].includes(
            place
        )
    ) {

        alert(
            "Please select 1st, 2nd, or 3rd place."
        );

        return;

    }


    const selectedProgram =
        findProgram(
            category,
            section,
            eventName
        );


    if (!selectedProgram) {

        alert(
            "The selected program could not be found."
        );

        return;

    }


    activityType =
        selectedProgram.type;


    let participantCount =
        toNumber(
            participantValue,
            1
        );


    if (
        activityType === "individual"
    ) {

        participantCount = 1;

    }


    if (
        activityType === "group"
    ) {

        if (
            participantCount < 1
        ) {

            alert(
                "Please enter the number of participants."
            );

            return;

        }


        if (
            selectedProgram.maxParticipants &&
            participantCount >
                selectedProgram.maxParticipants
        ) {

            alert(
                `This program allows a maximum of ${selectedProgram.maxParticipants} participants.`
            );

            return;

        }

    }


    /* -----------------------------------------------------
       BUILD RESULT
       ----------------------------------------------------- */

    const result = {

        id: createId(),

        name: name,

        studentClass:
            studentClass,

        section:
            section,

        activityType:
            activityType,

        programCategory:
            category,

        event:
            eventName,

        team:
            team,

        place:
            place,

        participantCount:
            participantCount,

        createdAt:
            new Date().toISOString()

    };


    /* -----------------------------------------------------
       SUBMIT
       ----------------------------------------------------- */

    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );


    const originalButtonText =
        submitButton
            ? submitButton.textContent
            : "";


    try {

        if (submitButton) {

            submitButton.disabled =
                true;

            submitButton.textContent =
                "Publishing...";

        }


        await saveResult(
            result
        );


        /*
           IMPORTANT:
           This is the direct form reference.
           No currentTarget/cloneNode logic.
        */

        form.reset();


        APP.currentProgram =
            null;


        updateProgramDetails();


        renderAll();


        alert(
            "Result published successfully."
        );

    }
    catch (error) {

        console.error(
            "Result submission failed:",
            error
        );


        let message =
            error?.message ||
            "Unknown error";


        /*
           Make common Supabase errors
           easier to understand.
        */

        if (
            message.includes(
                "row-level security"
            )
        ) {

            message +=
                "\n\nSupabase Row Level Security is blocking the operation.";

        }


        if (
            message.includes(
                "student_name"
            )
        ) {

            message +=
                "\n\nThe database still requires the student_name column.";

        }


        if (
            message.includes(
                "program"
            )
        ) {

            message +=
                "\n\nThe database still requires the program column.";

        }


        alert(
            "THE RESULT COULD NOT BE SAVED.\n\n" +
            message
        );

    }
    finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                originalButtonText ||
                "Publish Result";

        }

    }

}


/* =========================================================
   37. FILTER EVENT LISTENERS
   ========================================================= */

function setupFilters() {

    all(
        "[data-result-filter]"
    ).forEach(
        element => {

            if (
                element.dataset
                    .filterInitialised ===
                "true"
            ) {
                return;
            }

            element.dataset
                .filterInitialised =
                "true";

            element.addEventListener(
                "change",
                renderPublicResults
            );

        }
    );

}


/* =========================================================
   38. REALTIME DATABASE
   ========================================================= */

function setupRealtime() {

    if (!supabaseIsReady()) {
        return;
    }


    try {

        if (
            APP.realtimeChannel
        ) {

            supabaseClient.removeChannel(
                APP.realtimeChannel
            );

        }


        APP.realtimeChannel =
            supabaseClient
                .channel(
                    "mis-art-fest-live-results"
                )
                .on(
                    "postgres_changes",
                    {
                        event: "*",
                        schema: "public",
                        table:
                            CONFIG.databaseTable
                    },
                    async () => {

                        try {

                            await loadResults();

                            renderAll();

                        }
                        catch (error) {

                            console.error(
                                "Realtime refresh failed:",
                                error
                            );

                        }

                    }
                )
                .subscribe(
                    status => {

                        if (
                            status ===
                            "SUBSCRIBED"
                        ) {

                            updateConnectionStatus(
                                "Live"
                            );

                        }

                    }
                );

    }
    catch (error) {

        console.error(
            "Realtime setup failed:",
            error
        );

    }

}


/* =========================================================
   39. CONNECTION STATUS
   ========================================================= */

function updateConnectionStatus(
    state
) {

    const elements =
        [
            ...document.querySelectorAll(
                "#connection-status, #status-indicator, #live-status, [data-connection-status]"
            )
        ];

    elements.forEach(
        element => {

            element.textContent =
                state === "Live"
                    ? "Live"
                    : state;

            element.dataset.status =
                state.toLowerCase();

        }
    );

}


/* =========================================================
   40. NAVIGATION
   ========================================================= */

function setupNavigation() {

    all(
        "[data-scroll]"
    ).forEach(
        link => {

            if (
                link.dataset
                    .navigationInitialised ===
                "true"
            ) {
                return;
            }

            link.dataset
                .navigationInitialised =
                "true";

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.dataset.scroll;

                    const target =
                        byId(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                            block:
                                "start"
                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   41. MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const toggle =
        firstExisting(
            "menu-toggle",
            "mobile-menu-toggle",
            "nav-toggle"
        );

    const menu =
        firstExisting(
            "mobile-menu",
            "nav-menu",
            "main-nav"
        );

    if (
        !toggle ||
        !menu
    ) {
        return;
    }


    if (
        toggle.dataset
            .menuInitialised === "true"
    ) {
        return;
    }


    toggle.dataset
        .menuInitialised =
        "true";


    toggle.addEventListener(
        "click",
        () => {

            const open =
                menu.classList.toggle(
                    "open"
                );

            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );

}


/* =========================================================
   42. SCROLL REVEAL
   ========================================================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal, [data-reveal]"
        );


    if (
        !elements.length
    ) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "is-visible"
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
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.1
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
   43. CURRENT YEAR
   ========================================================= */

function setupYear() {

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(
            element => {

                element.textContent =
                    "2026";

            }
        );

}


/* =========================================================
   44. KEYBOARD SUPPORT
   ========================================================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                document
                    .querySelectorAll(
                        "dialog[open]"
                    )
                    .forEach(
                        dialog => {

                            try {

                                dialog.close();

                            }
                            catch (_) {}

                        }
                    );

            }

        }
    );

}


/* =========================================================
   45. RENDER ALL
   ========================================================= */

function renderAll() {

    populateFilters();

    renderPublicResults();

    renderTeacherResults();

    renderChampionship();

    renderStatistics();

    renderLatestResults();

}


/* =========================================================
   46. PAGE SETUP
   ========================================================= */

function setupPage() {

    setupTeacherLogin();

    setupTeacherLogout();

    updateTeacherVisibility();

    setupTeacherProgramSelection();

    setupTeacherResultForm();

    setupFilters();

    setupNavigation();

    setupMobileMenu();

    setupScrollReveal();

    setupYear();

    setupKeyboard();

}


/* =========================================================
   47. APPLICATION INITIALISATION
   ========================================================= */

async function initialiseApp() {

    if (APP.initialised) {
        return;
    }

    APP.initialised =
        true;


    try {

        setupPage();


        /*
           Only attempt Supabase
           operations when the client
           actually exists.
        */

        if (!supabaseIsReady()) {

            updateConnectionStatus(
                "Offline"
            );

            console.error(
                "Supabase client was not found."
            );

            /*
               Don't immediately destroy
               the whole website.
            */

            renderAll();

            return;

        }


        await loadResults();


        renderAll();


        setupRealtime();


        updateConnectionStatus(
            "Live"
        );

    }
    catch (error) {

        console.error(
            "MIS Art Fest initialisation failed:",
            error
        );


        updateConnectionStatus(
            "Connection Error"
        );


        renderAll();


        /*
           Show a useful message directly
           to the user because you don't
           need to open browser console.
        */

        alert(
            "MIS Art Fest could not connect to the live database.\n\n" +
            (
                error?.message ||
                "Unknown error"
            )
        );

    }

}


/* =========================================================
   48. START APPLICATION
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseApp,
        {
            once: true
        }
    );

}
else {

    initialiseApp();

}
