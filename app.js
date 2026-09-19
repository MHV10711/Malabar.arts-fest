/* =========================================================
   MIS ART FEST 2026
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const TEACHER_PASSWORD = "malabar@5445";

const SESSION_KEY = "mis-art-fest-teacher-session";

const SUPABASE_TABLE = "results";


/* =========================================================
   HOUSE INFORMATION
   ========================================================= */

const HOUSE_INFO = {
    RED: {
        name: "Red House",
        color: "#c62828"
    },

    GREEN: {
        name: "Green House",
        color: "#2e7d32"
    },

    BLUE: {
        name: "Blue House",
        color: "#1565c0"
    },

    YELLOW: {
        name: "Yellow House",
        color: "#f9a825"
    }
};


/* =========================================================
   POINT SYSTEM
   ========================================================= */

const POINTS = {

    individual: {
        1: 5,
        2: 3,
        3: 1
    },

    group: {
        1: 10,
        2: 5,
        3: 3
    }

};


/* =========================================================
   SECTION INFORMATION
   ========================================================= */

const SECTION_INFO = {

    LP1: {
        name: "LP 1",
        fullName: "Lower Primary 1"
    },

    LP2: {
        name: "LP 2",
        fullName: "Lower Primary 2"
    },

    UP: {
        name: "UP",
        fullName: "Upper Primary"
    },

    HS: {
        name: "HS",
        fullName: "High School"
    },

    HSS: {
        name: "HSS",
        fullName: "Higher Secondary"
    },

    GENERAL: {
        name: "General",
        fullName: "General Category"
    }

};


/* =========================================================
   PROGRAM LIST
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

};


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let results = [];

let selectedTeacherProgram = null;

let currentPage = "";

let realtimeChannel = null;


/* =========================================================
   BASIC HELPERS
   ========================================================= */

function createId() {

    return (
        "result-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 9)
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


function titleCase(value) {

    return String(value ?? "")
        .toLowerCase()
        .replace(/\b\w/g, letter =>
            letter.toUpperCase()
        );

}


function placeNumber(place) {

    const number = Number(place);

    if (
        number === 1 ||
        number === 2 ||
        number === 3
    ) {
        return number;
    }

    return null;

}


function medal(place) {

    const number = placeNumber(place);

    if (number === 1) {
        return "🥇";
    }

    if (number === 2) {
        return "🥈";
    }

    if (number === 3) {
        return "🥉";
    }

    return "";

}


function stageLabel(stage) {

    if (stage === "OFF_STAGE") {
        return "Off Stage";
    }

    if (stage === "ON_STAGE") {
        return "On Stage";
    }

    return stage || "";

}


function sectionLabel(section) {

    return SECTION_INFO[section]?.name || section || "";

}


function sectionFullName(section) {

    return (
        SECTION_INFO[section]?.fullName ||
        section ||
        ""
    );

}


function firstElement(...ids) {

    for (const id of ids) {

        const element =
            document.getElementById(id);

        if (element) {
            return element;
        }

    }

    return null;

}


/* =========================================================
   NORMALISE RESULT
   ========================================================= */

function normaliseResult(result) {

    if (!result) {
        return null;
    }

    return {

        id:
            result.id ||
            createId(),

        name:
            result.name ||
            result.student_name ||
            "",

        studentClass:
            result.studentClass ||
            result.student_class ||
            "",

        section:
            result.section ||
            "",

        activityType:
            result.activityType ||
            result.activity_type ||
            "individual",

        programCategory:
            result.programCategory ||
            result.program_category ||
            "OFF_STAGE",

        event:
            result.event ||
            result.program ||
            "",

        team:
            result.team ||
            "",

        place:
            Number(result.place) || 0,

        participantCount:
            Number(
                result.participantCount ||
                result.participant_count ||
                1
            ),

        createdAt:
            result.createdAt ||
            result.created_at ||
            new Date().toISOString()

    };

}


/* =========================================================
   POINT CALCULATION
   ========================================================= */

function getPointsForResult(result) {

    const normalised =
        normaliseResult(result);

    if (!normalised) {
        return 0;
    }

    const place =
        placeNumber(normalised.place);

    if (!place) {
        return 0;
    }

    const type =
        normalised.activityType === "group"
            ? "group"
            : "individual";

    return POINTS[type][place] || 0;

}


/* =========================================================
   SUPABASE CHECK
   ========================================================= */

function isSupabaseReady() {

    return (
        typeof window !== "undefined" &&
        window.supabase &&
        typeof supabaseClient !== "undefined" &&
        supabaseClient
    );

}


/* =========================================================
   LOAD RESULTS
   ========================================================= */

async function loadResults() {

    if (!isSupabaseReady()) {

        console.error(
            "Supabase is not available."
        );

        results = [];

        return;

    }

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from(SUPABASE_TABLE)
                .select("*")
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );

        if (error) {
            throw error;
        }

        results =
            Array.isArray(data)
                ? data.map(normaliseResult)
                : [];

    }
    catch (error) {

        console.error(
            "Could not load results:",
            error
        );

        results = [];

        updateStatus(
            "Unable to load live results."
        );

    }

}


/* =========================================================
   SAVE RESULT
   ========================================================= */

async function saveResult(result) {

    if (!isSupabaseReady()) {

        throw new Error(
            "Supabase is not connected."
        );

    }

    const normalised =
        normaliseResult(result);

    const databaseRow = {

        id: normalised.id,

        name: normalised.name,

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

        /* Legacy required columns */
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
            .from(SUPABASE_TABLE)
            .insert([databaseRow])
            .select()
            .single();

    if (error) {
        throw error;
    }

    if (data) {

        results.unshift(
            normaliseResult(data)
        );

    }
    else {

        results.unshift(
            normalised
        );

    }

    return normaliseResult(
        data || normalised
    );

}


/* =========================================================
   DELETE RESULT
   ========================================================= */

async function deleteResult(id) {

    if (!isSupabaseReady()) {

        throw new Error(
            "Supabase is not connected."
        );

    }

    const {
        error
    } =
        await supabaseClient
            .from(SUPABASE_TABLE)
            .delete()
            .eq("id", id);

    if (error) {
        throw error;
    }

    results =
        results.filter(
            result =>
                result.id !== id
        );

}


/* =========================================================
   REALTIME
   ========================================================= */

function setupRealtimeResults() {

    if (!isSupabaseReady()) {
        return;
    }

    try {

        if (realtimeChannel) {

            supabaseClient.removeChannel(
                realtimeChannel
            );

        }

        realtimeChannel =
            supabaseClient
                .channel(
                    "mis-art-fest-results"
                )
                .on(
                    "postgres_changes",
                    {
                        event: "*",
                        schema: "public",
                        table: SUPABASE_TABLE
                    },
                    async () => {

                        await loadResults();

                        renderEverything();

                    }
                )
                .subscribe();

    }
    catch (error) {

        console.error(
            "Realtime setup failed:",
            error
        );

    }

}


/* =========================================================
   TEACHER AUTHENTICATION
   ========================================================= */

function isTeacherLoggedIn() {

    return (
        sessionStorage.getItem(
            SESSION_KEY
        ) === "true"
    );

}


function loginTeacher(password) {

    const enteredPassword =
        String(password ?? "").trim();

    if (
        enteredPassword ===
        TEACHER_PASSWORD
    ) {

        sessionStorage.setItem(
            SESSION_KEY,
            "true"
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


function setupTeacherAuthentication() {

    const loginForm =
        document.getElementById(
            "teacher-login-form"
        ) ||
        document.getElementById(
            "login-form"
        );

    if (loginForm) {

        if (
            loginForm.dataset.authReady !==
            "true"
        ) {

            loginForm.dataset.authReady =
                "true";

            loginForm.addEventListener(
                "submit",
                function(event) {

                    event.preventDefault();

                    const passwordInput =
                        loginForm.querySelector(
                            'input[name="password"]'
                        ) ||
                        loginForm.querySelector(
                            "#teacher-password"
                        ) ||
                        loginForm.querySelector(
                            "#password"
                        ) ||
                        loginForm.querySelector(
                            'input[type="password"]'
                        );

                    if (!passwordInput) {

                        alert(
                            "Password input was not found.\n\n" +
                            'Make sure your password field has name="password".'
                        );

                        return;

                    }

                    const password =
                        passwordInput.value;

                    if (
                        loginTeacher(
                            password
                        )
                    ) {

                        window.location.reload();

                        return;

                    }

                    alert(
                        "Incorrect teacher password."
                    );

                    passwordInput.value = "";

                    passwordInput.focus();

                }
            );

        }

    }

    const logoutButton =
        document.getElementById(
            "teacher-logout"
        ) ||
        document.getElementById(
            "logout-teacher"
        ) ||
        document.getElementById(
            "logout-button"
        );

    if (
        logoutButton &&
        logoutButton.dataset.logoutReady !==
            "true"
    ) {

        logoutButton.dataset.logoutReady =
            "true";

        logoutButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                logoutTeacher();

            }
        );

    }

}


/* =========================================================
   TEACHER PAGE ACCESS
   ========================================================= */

function setupTeacherPage() {

    const teacherPage =
        document.body.classList.contains(
            "teacher-page"
        ) ||
        document.getElementById(
            "teacher-page"
        );

    if (!teacherPage) {
        return;
    }

    const loginScreen =
        firstElement(
            "teacher-login",
            "teacher-login-section",
            "login-section"
        );

    const teacherDashboard =
        firstElement(
            "teacher-dashboard",
            "teacher-panel",
            "teacher-content"
        );

    if (isTeacherLoggedIn()) {

        if (loginScreen) {
            loginScreen.hidden = true;
        }

        if (teacherDashboard) {
            teacherDashboard.hidden = false;
        }

    }
    else {

        if (loginScreen) {
            loginScreen.hidden = false;
        }

        if (teacherDashboard) {
            teacherDashboard.hidden = true;
        }

    }

}


/* =========================================================
   TEACHER PROGRAM SELECTION
   ========================================================= */

function getAllPrograms() {

    const programs = [];

    Object.entries(PROGRAMS)
        .forEach(
            ([category, sections]) => {

                Object.entries(sections)
                    .forEach(
                        ([section, items]) => {

                            items.forEach(
                                item => {

                                    programs.push({

                                        ...item,

                                        category,

                                        section

                                    });

                                }
                            );

                        }
                    );

            }
        );

    return programs;

}


function populateProgramSelect(
    select,
    category,
    section
) {

    if (!select) {
        return;
    }

    select.innerHTML =
        '<option value="">Select program</option>';

    const categoryPrograms =
        PROGRAMS[category];

    if (!categoryPrograms) {
        return;
    }

    const programs =
        categoryPrograms[section];

    if (!programs) {
        return;
    }

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
                    program.maxParticipants;

            }

            select.appendChild(
                option
            );

        }
    );

}


function setupTeacherProgramSelection() {

    const categorySelect =
        firstElement(
            "teacher-program-category",
            "program-category",
            "activity-category"
        );

    const sectionSelect =
        firstElement(
            "teacher-section",
            "result-section",
            "section"
        );

    const programSelect =
        firstElement(
            "teacher-program",
            "program",
            "event"
        );

    if (
        categorySelect &&
        sectionSelect &&
        programSelect
    ) {

        const updatePrograms =
            () => {

                populateProgramSelect(
                    programSelect,
                    categorySelect.value,
                    sectionSelect.value
                );

                selectedTeacherProgram =
                    null;

                updateTeacherProgramInfo();

            };

        categorySelect.addEventListener(
            "change",
            updatePrograms
        );

        sectionSelect.addEventListener(
            "change",
            updatePrograms
        );

        programSelect.addEventListener(
            "change",
            updateTeacherProgramInfo
        );

    }

}


function updateTeacherProgramInfo() {

    const categorySelect =
        firstElement(
            "teacher-program-category",
            "program-category",
            "activity-category"
        );

    const sectionSelect =
        firstElement(
            "teacher-section",
            "result-section",
            "section"
        );

    const programSelect =
        firstElement(
            "teacher-program",
            "program",
            "event"
        );

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
        PROGRAMS[category]?.[section]
            ?.find(
                item =>
                    item.name ===
                    programName
            );

    selectedTeacherProgram =
        program
            ? {
                ...program,
                category,
                section
            }
            : null;

    const activityType =
        firstElement(
            "teacher-activity-type",
            "activity-type"
        );

    if (activityType) {

        activityType.value =
            selectedTeacherProgram?.type ||
            "individual";

    }

    const participantCount =
        firstElement(
            "participant-count",
            "teacher-participant-count"
        );

    if (participantCount) {

        if (
            selectedTeacherProgram?.type ===
            "group"
        ) {

            participantCount.disabled =
                false;

            participantCount.min = "1";

            if (
                selectedTeacherProgram
                    .maxParticipants
            ) {

                participantCount.max =
                    String(
                        selectedTeacherProgram
                            .maxParticipants
                    );

            }

        }
        else {

            participantCount.value =
                "1";

            participantCount.disabled =
                true;

        }

    }

}


/* =========================================================
   TEACHER RESULT FORM
   ========================================================= */

function setupTeacherResultForm() {

    const form =
        document.getElementById(
            "teacher-result-form"
        );

    if (!form) {

        console.warn(
            "Teacher result form was not found."
        );

        return;

    }

    if (
        form.dataset.submitReady ===
        "true"
    ) {
        return;
    }

    form.dataset.submitReady =
        "true";

    form.addEventListener(
        "submit",
        submitTeacherResult
    );

    if (!selectedTeacherProgram) {
        form.hidden = true;
    }

}


async function submitTeacherResult(event) {

    event.preventDefault();

    const currentForm =
        document.getElementById(
            "teacher-result-form"
        );

    if (!currentForm) {

        alert(
            "The result form could not be found."
        );

        return;

    }

    if (!isTeacherLoggedIn()) {

        alert(
            "Please login as a teacher first."
        );

        return;

    }

    const formData =
        new FormData(currentForm);

    const category =
        formData.get(
            "program_category"
        ) ||
        formData.get(
            "category"
        ) ||
        firstElement(
            "teacher-program-category"
        )?.value ||
        "";

    const section =
        formData.get(
            "section"
        ) ||
        firstElement(
            "teacher-section"
        )?.value ||
        "";

    const eventName =
        formData.get(
            "event"
        ) ||
        formData.get(
            "program"
        ) ||
        firstElement(
            "teacher-program"
        )?.value ||
        "";

    const name =
        formData.get(
            "name"
        ) ||
        formData.get(
            "student_name"
        ) ||
        "";

    const studentClass =
        formData.get(
            "student_class"
        ) ||
        formData.get(
            "class"
        ) ||
        "";

    const team =
        formData.get(
            "team"
        ) ||
        "";

    const place =
        Number(
            formData.get(
                "place"
            )
        );

    const participantCount =
        Number(
            formData.get(
                "participant_count"
            ) ||
            1
        );

    let activityType =
        formData.get(
            "activity_type"
        ) ||
        "";

    if (!activityType) {

        activityType =
            selectedTeacherProgram
                ?.type ||
            "individual";

    }

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
            "Please enter the student or team name."
        );

        return;

    }

    if (!studentClass) {

        alert(
            "Please enter the class."
        );

        return;

    }

    if (
        ![1, 2, 3].includes(place)
    ) {

        alert(
            "Please select 1st, 2nd, or 3rd place."
        );

        return;

    }

    if (
        activityType === "group"
    ) {

        if (
            !participantCount ||
            participantCount < 1
        ) {

            alert(
                "Please enter the number of participants."
            );

            return;

        }

        if (
            selectedTeacherProgram
                ?.maxParticipants &&
            participantCount >
                selectedTeacherProgram
                    .maxParticipants
        ) {

            alert(
                `This group program allows a maximum of ${selectedTeacherProgram.maxParticipants} participants.`
            );

            return;

        }

    }

    const newResult = {

        id: createId(),

        name: String(name).trim(),

        studentClass:
            String(
                studentClass
            ).trim(),

        section,

        activityType,

        programCategory:
            category,

        event:
            eventName,

        team:
            String(team).trim(),

        place,

        participantCount:
            activityType === "group"
                ? participantCount
                : 1,

        createdAt:
            new Date().toISOString()

    };

    try {

        setButtonLoading(
            currentForm,
            true
        );

        await saveResult(
            newResult
        );

        currentForm.reset();

        selectedTeacherProgram =
            null;

        updateTeacherProgramInfo();

        renderEverything();

        alert(
            "Result published successfully."
        );

    }
    catch (error) {

        console.error(
            "Save result error:",
            error
        );

        alert(
            "THE RESULT COULD NOT BE SAVED.\n\n" +
            "Reason:\n" +
            (
                error?.message ||
                "Unknown error"
            )
        );

    }
    finally {

        setButtonLoading(
            currentForm,
            false
        );

    }

}


/* =========================================================
   BUTTON LOADING
   ========================================================= */

function setButtonLoading(
    form,
    loading
) {

    if (!form) {
        return;
    }

    const button =
        form.querySelector(
            'button[type="submit"]'
        );

    if (!button) {
        return;
    }

    if (loading) {

        button.dataset.originalText =
            button.textContent;

        button.disabled = true;

        button.textContent =
            "Publishing...";

    }
    else {

        button.disabled = false;

        button.textContent =
            button.dataset.originalText ||
            "Publish Result";

    }

}


/* =========================================================
   SCORING
   ========================================================= */

function calculateHouseScores() {

    const scores = {

        RED: 0,
        GREEN: 0,
        BLUE: 0,
        YELLOW: 0

    };

    results.forEach(
        result => {

            const team =
                String(
                    result.team || ""
                )
                    .trim()
                    .toUpperCase();

            if (
                !Object.prototype
                    .hasOwnProperty
                    .call(
                        scores,
                        team
                    )
            ) {
                return;
            }

            scores[team] +=
                getPointsForResult(
                    result
                );

        }
    );

    return scores;

}


/* =========================================================
   HOUSE SCORE SORTING
   ========================================================= */

function getSortedHouseScores() {

    const scores =
        calculateHouseScores();

    return Object.entries(scores)
        .sort(
            (
                [, scoreA],
                [, scoreB]
            ) =>
                scoreB - scoreA
        );

}


/* =========================================================
   RESULT FILTERS
   ========================================================= */

function setupResultFilters() {

    const filterElements =
        document.querySelectorAll(
            "[data-result-filter]"
        );

    filterElements.forEach(
        element => {

            if (
                element.dataset
                    .filterReady ===
                "true"
            ) {
                return;
            }

            element.dataset.filterReady =
                "true";

            element.addEventListener(
                "change",
                renderEverything
            );

        }
    );

}


function getActiveFilters() {

    const filters = {};

    document
        .querySelectorAll(
            "[data-result-filter]"
        )
        .forEach(
            element => {

                filters[
                    element.dataset
                        .resultFilter
                ] =
                    element.value;

            }
        );

    return filters;

}


function filterResults(
    sourceResults = results
) {

    const filters =
        getActiveFilters();

    return sourceResults.filter(
        result => {

            if (
                filters.section &&
                filters.section !==
                    "all" &&
                result.section !==
                    filters.section
            ) {

                return false;

            }

            if (
                filters.category &&
                filters.category !==
                    "all" &&
                result.programCategory !==
                    filters.category
            ) {

                return false;

            }

            if (
                filters.event &&
                filters.event !==
                    "all" &&
                result.event !==
                    filters.event
            ) {

                return false;

            }

            if (
                filters.team &&
                filters.team !==
                    "all" &&
                String(
                    result.team || ""
                ).toUpperCase() !==
                    String(
                        filters.team
                    ).toUpperCase()
            ) {

                return false;

            }

            return true;

        }
    );

}


/* =========================================================
   POPULATE FILTERS
   ========================================================= */

function populateFilterOptions() {

    const sectionFilter =
        document.querySelector(
            '[data-result-filter="section"]'
        );

    if (sectionFilter) {

        const current =
            sectionFilter.value;

        sectionFilter.innerHTML =
            '<option value="all">All Sections</option>';

        Object.keys(
            SECTION_INFO
        ).forEach(
            section => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    section;

                option.textContent =
                    sectionFullName(
                        section
                    );

                sectionFilter.appendChild(
                    option
                );

            }
        );

        sectionFilter.value =
            current || "all";

    }


    const categoryFilter =
        document.querySelector(
            '[data-result-filter="category"]'
        );

    if (categoryFilter) {

        const current =
            categoryFilter.value;

        categoryFilter.innerHTML =
            '<option value="all">All Categories</option>';

        [
            "OFF_STAGE",
            "ON_STAGE"
        ].forEach(
            category => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    category;

                option.textContent =
                    stageLabel(
                        category
                    );

                categoryFilter.appendChild(
                    option
                );

            }
        );

        categoryFilter.value =
            current || "all";

    }


    const eventFilter =
        document.querySelector(
            '[data-result-filter="event"]'
        );

    if (eventFilter) {

        const current =
            eventFilter.value;

        const events =
            [
                ...new Set(
                    results
                        .map(
                            result =>
                                result.event
                        )
                        .filter(Boolean)
                )
            ]
                .sort();

        eventFilter.innerHTML =
            '<option value="all">All Programs</option>';

        events.forEach(
            eventName => {

                const option =
                    document.createElement(
                        "option"
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
            current || "all";

    }

}


/* =========================================================
   RESULT CARD
   ========================================================= */

function createResultCard(
    result
) {

    const points =
        getPointsForResult(
            result
        );

    const house =
        String(
            result.team || ""
        ).toUpperCase();

    const houseName =
        HOUSE_INFO[house]?.name ||
        result.team ||
        "No House";

    return `
        <article class="result-card">

            <div class="result-card-medal">
                ${medal(result.place)}
            </div>

            <div class="result-card-content">

                <div class="result-card-title">
                    ${escapeHtml(result.name)}
                </div>

                <div class="result-card-program">
                    ${escapeHtml(result.event)}
                </div>

                <div class="result-card-meta">

                    <span>
                        ${escapeHtml(
                            sectionLabel(
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

            <div class="result-card-points">

                <strong>
                    ${points}
                </strong>

                <small>
                    points
                </small>

            </div>

        </article>
    `;

}


/* =========================================================
   PUBLIC RESULTS
   ========================================================= */

function renderPublicResults() {

    const container =
        firstElement(
            "public-results",
            "results-list",
            "results-container"
        );

    if (!container) {
        return;
    }

    const filtered =
        filterResults();

    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No results found</h3>
                <p>
                    Results will appear here once they are published.
                </p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        filtered
            .map(
                createResultCard
            )
            .join("");

}


/* =========================================================
   TEACHER RESULT MANAGEMENT
   ========================================================= */

function renderTeacherResults() {

    const container =
        firstElement(
            "teacher-results",
            "manage-results",
            "teacher-results-list"
        );

    if (!container) {
        return;
    }

    if (!isTeacherLoggedIn()) {

        container.innerHTML = "";

        return;

    }

    if (!results.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No results yet</h3>
                <p>
                    Published results will appear here.
                </p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        results
            .map(
                result => {

                    const points =
                        getPointsForResult(
                            result
                        );

                    return `
                        <div class="teacher-result-row">

                            <div>
                                <strong>
                                    ${escapeHtml(
                                        result.name
                                    )}
                                </strong>

                                <small>
                                    ${escapeHtml(
                                        result.event
                                    )}
                                    ·
                                    ${escapeHtml(
                                        result.studentClass
                                    )}
                                </small>
                            </div>

                            <div>
                                ${medal(result.place)}
                                ${points} points
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
                    async () => {

                        const id =
                            button.dataset
                                .deleteResult;

                        const confirmed =
                            window.confirm(
                                "Are you sure you want to delete this result?"
                            );

                        if (!confirmed) {
                            return;
                        }

                        try {

                            button.disabled =
                                true;

                            await deleteResult(
                                id
                            );

                            renderEverything();

                        }
                        catch (error) {

                            console.error(
                                error
                            );

                            alert(
                                "Could not delete the result.\n\n" +
                                (
                                    error?.message ||
                                    "Unknown error"
                                )
                            );

                            button.disabled =
                                false;

                        }

                    }
                );

            }
        );

}


/* =========================================================
   CHAMPIONSHIP / HOUSE SCORES
   ========================================================= */

function renderChampionship() {

    const container =
        firstElement(
            "championship",
            "house-scores",
            "championship-table"
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
                    [house, score],
                    index
                ) => {

                    const info =
                        HOUSE_INFO[
                            house
                        ];

                    return `
                        <div class="house-score-card">

                            <div class="house-rank">
                                ${index + 1}
                            </div>

                            <div class="house-name">
                                ${escapeHtml(
                                    info?.name ||
                                    house
                                )}
                            </div>

                            <div class="house-points">
                                ${score}
                                <small>points</small>
                            </div>

                        </div>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   DASHBOARD SUMMARY
   ========================================================= */

function renderDashboardSummary() {

    const totalResults =
        firstElement(
            "total-results",
            "dashboard-total-results"
        );

    if (totalResults) {

        totalResults.textContent =
            String(
                results.length
            );

    }


    const totalPoints =
        results.reduce(
            (
                total,
                result
            ) =>
                total +
                getPointsForResult(
                    result
                ),
            0
        );

    const pointsElement =
        firstElement(
            "total-points",
            "dashboard-total-points"
        );

    if (pointsElement) {

        pointsElement.textContent =
            String(totalPoints);

    }


    const totalPrograms =
        new Set(
            results.map(
                result =>
                    result.event
            )
        ).size;

    const programsElement =
        firstElement(
            "total-programs",
            "dashboard-total-programs"
        );

    if (programsElement) {

        programsElement.textContent =
            String(
                totalPrograms
            );

    }

}


/* =========================================================
   HOME SPOTLIGHT
   ========================================================= */

function renderHomeSpotlight() {

    const container =
        firstElement(
            "home-spotlight",
            "spotlight-results",
            "latest-results"
        );

    if (!container) {
        return;
    }

    const latest =
        results.slice(
            0,
            6
        );

    if (!latest.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>Results coming soon</h3>
                <p>
                    Stay tuned for the MIS Art Fest 2026 results.
                </p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        latest
            .map(
                createResultCard
            )
            .join("");

}


/* =========================================================
   STATUS INDICATOR
   ========================================================= */

function updateStatus(
    message
) {

    const status =
        firstElement(
            "connection-status",
            "status-indicator",
            "live-status"
        );

    if (!status) {
        return;
    }

    status.textContent =
        message;

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            "[data-scroll]"
        );

    links.forEach(
        link => {

            if (
                link.dataset
                    .navigationReady ===
                "true"
            ) {
                return;
            }

            link.dataset.navigationReady =
                "true";

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.dataset
                            .scroll;

                    const target =
                        document.getElementById(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth"
                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal, [data-reveal]"
        );

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "is-visible"
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
   KEYBOARD SUPPORT
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
                        "[open]"
                    )
                    .forEach(
                        element => {

                            if (
                                element.tagName ===
                                "DIALOG"
                            ) {

                                element.close();

                            }

                        }
                    );

            }

        }
    );

}


/* =========================================================
   PAGE DETECTION
   ========================================================= */

function detectPage() {

    const path =
        window.location.pathname
            .toLowerCase();

    if (
        path.includes(
            "teacher"
        )
    ) {

        currentPage =
            "teacher";

    }
    else if (
        path.includes(
            "about"
        )
    ) {

        currentPage =
            "about";

    }
    else {

        currentPage =
            "home";

    }

}


/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderEverything() {

    populateFilterOptions();

    renderPublicResults();

    renderTeacherResults();

    renderChampionship();

    renderDashboardSummary();

    renderHomeSpotlight();

    setupScrollReveal();

}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function setupAboutPage() {

    const year =
        document.querySelectorAll(
            "[data-current-year]"
        );

    year.forEach(
        element => {

            element.textContent =
                "2026";

        }
    );

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

function setupCurrentYear() {

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
   INITIALISE APPLICATION
   ========================================================= */

async function initialiseApp() {

    try {

        detectPage();

        setupTeacherAuthentication();

        setupTeacherPage();

        setupTeacherProgramSelection();

        setupTeacherResultForm();

        setupResultFilters();

        setupNavigation();

        setupKeyboard();

        setupAboutPage();

        setupCurrentYear();

        await loadResults();

        renderEverything();

        setupRealtimeResults();

        updateStatus(
            "Live results connected."
        );

    }
    catch (error) {

        console.error(
            "MIS Art Fest initialisation error:",
            error
        );

        updateStatus(
            "Website initialisation failed."
        );

        alert(
            "MIS Art Fest could not initialise.\n\n" +
            (
                error?.message ||
                "Unknown error"
            )
        );

    }

}


/* =========================================================
   START APPLICATION
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseApp
    );

}
else {

    initialiseApp();

}
