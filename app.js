/* =========================================================
   SUBMIT TEACHER RESULT
   ========================================================= */

async function submitTeacherResult(submitEvent) {

    submitEvent.preventDefault();

    /* =====================================================
       GET FORM SAFELY
       ===================================================== */

    const currentForm =
        submitEvent.target?.closest('#teacher-result-form');

    if (!currentForm) {

        alert(
            'Could not find the result form. Please refresh the page and try again.'
        );

        return;
    }


    /* =====================================================
       CHECK SELECTED PROGRAM
       ===================================================== */

    if (!selectedTeacherProgram) {

        alert(
            'Please select a program first.'
        );

        return;
    }


    /* =====================================================
       READ FORM DATA
       ===================================================== */

    const formData =
        new FormData(currentForm);

    const selected =
        selectedTeacherProgram;

    const program =
        selected.program;


    /* =====================================================
       READ VALUES
       ===================================================== */

    const name =
        String(
            formData.get('name') || ''
        ).trim();

    const studentClass =
        String(
            formData.get('studentClass') || ''
        ).trim();

    const team =
        String(
            formData.get('team') || ''
        ).trim();

    const place =
        String(
            formData.get('place') || ''
        ).trim();

    const participantValue =
        formData.get('participantCount');


    const participantCount =
        participantValue !== null &&
        participantValue !== ''
            ? Number(participantValue)
            : null;


    /* =====================================================
       SECTION
       ===================================================== */

    const finalSection =
        selected.section === 'GENERAL'
            ? 'GENERAL'
            : String(
                formData.get('section') ||
                selected.section
            );


    /* =====================================================
       VALIDATE REQUIRED FIELDS
       ===================================================== */

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


    /* =====================================================
       VALIDATE GROUP PARTICIPANTS
       ===================================================== */

    if (program.type === 'group') {

        if (
            !Number.isFinite(participantCount) ||
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


    /* =====================================================
       CREATE RESULT
       ===================================================== */

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
            program.type === 'group'
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
            program.type === 'group'
                ? participantCount
                : null

    };


    /* =====================================================
       FIND BUTTON
       ===================================================== */

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


    /* =====================================================
       SAVE RESULT
       ===================================================== */

    try {

        console.log(
            'Attempting to save result:',
            item
        );


        if (
            typeof supabaseClient === 'undefined' ||
            !supabaseClient
        ) {

            throw new Error(
                'Supabase client was not created. Check that supabase.js loads before app.js.'
            );

        }


        const savedResult =
            await saveResult(item);


        console.log(
            'Result successfully saved:',
            savedResult
        );


        /* =================================================
           SUCCESS MESSAGE
           ================================================= */

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


        /* =================================================
           RELOAD DATABASE
           ================================================= */

        await loadResults();


        renderManageResults();

        renderPublicResults();

        renderChampionship();


        /* =================================================
           RESET FORM
           ================================================= */

        currentForm.reset();


        /* =================================================
           CLEAR SELECT FIELDS
           ================================================= */

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


        /* =================================================
           KEEP FORM OPEN AND FOCUS NAME
           ================================================= */

        const nameInput =
            currentForm.querySelector(
                '[name="name"]'
            );

        if (nameInput) {
            nameInput.focus();
        }


    } catch (error) {

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


    } finally {

        /* =================================================
           RE-ENABLE BUTTON
           ================================================= */

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                'Publish Result →';

        }

    }

}
