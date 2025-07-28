// ==UserScript==
// @name         BetterRadius
// @namespace    https://mshkodra.com/
// @version      0.1.1
// @description  Better version of Radius.  
// @author       mshkodra
// @match        https://radius.mathnasium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mathnasium.com
// @updateURL    https://mshkodra.com/better-radius.js
// @downloadURL  https://mshkodra.com/better-radius.js
// @grant        none
// ==/UserScript==

const assessmentDict = {
    "Checkup #0 Assessment": ['PK-1001-CA', 'PK-1003-CA', 'PK-1002-CA', 'PK-1004-CA', 'PK-1007-CA', 'PK-1008-CA', 'PK-1011-CA'],
  "Extension Checkup #0 Assessment": ['PK-1006-CA', 'PK-1010-CA'],

    "Checkup #1 Assessment": ['PK-3008-CA', 'PK-3014-CA', 'PK-3001-CA', 'PK-3015-CA', 'PK-3013-CA', 'PK-3006-CA', 'PK-3016-CA', 'PK-3011-CA', 'PK-3014-CA', 'PK-3009-CA', 'PK-3010-CA', 'PK-3004-CA', 'PK-3005-CA', 'PK-3017-CA', 'PK-3007-CA', 'PK-3002-CA', 'PK-A053-CA', 'PK-3003-CA', 'PK-3012-CA', 'PK-3018-CA', 'PK-3173-CA', 'PK-3019-CA', 'PK-3036-CA'],
  "Extension Checkup #1 Assessment": ['PK-3041-CA', 'PK-3152-CA', 'PK-3164-CA', 'PK-3057-CA', 'PK-3079-CA', 'PK-3153-CA'],

    "Checkup #2 Assessment": ['PK-3015-CA', 'PK-3021-CA', 'PK-3009-CA', 'PK-3016-CA', 'PK-3022-CA', 'PK-3010-CA', 'PK-3006-CA', 'PK-3004-CA', 'PK-3013-CA', 'PK-3011-CA', 'PK-3002-CA', 'PK-3003-CA', 'PK-3007-CA', 'PK-3048-CA', 'PK-3025-CA', 'PK-3049-CA', 'PK-3040-CA', 'PK-A054-CA', 'PK-3030-CA', 'PK-3012-CA', 'PK-3020-CA', 'PK-A053-CA', 'PK-3026-CA', 'PK-3018-CA', 'PK-3051-CA', 'PK-3173-CA', 'PK-3019-CA', 'PK-3033-CA', 'PK-3036-CA', 'PK-3042-CA', 'PK-3052-CA', 'PK-3047-CA', 'PK-3226-CA'],
  "Extension Checkup #2 Assessment": ['PK-3041-CA', 'PK-3164-CA', 'PK-3152-CA', 'PK-3050-CA', 'PK-3160-CA', 'PK-3057-CA', 'PK-3080-CA', 'PK-3165-CA', 'PK-3163-CA', 'PK-3153-CA', 'PK-3479-CA'],

    "Checkup #3 Assessment": ['PK-3034-CA', 'PK-3048-CA', 'PK-3023-CA', 'PK-3038-CA', 'PK-3035-CA', 'PK-3076-CA', 'PK-3049-CA', 'PK-3037-CA', 'PK-3056-CA', 'PK-3042-CA', 'PK-3073-CA', 'PK-3026-CA', 'PK-3051-CA', 'PK-3031-CA', 'PK-3077-CA', 'PK-3030-CA', 'PK-3027-CA', 'PK-3069-CA', 'PK-A096-CA', 'PK-3043-CA', 'PK-3032-CA', 'PK-3028-CA', 'PK-3061-CA', 'PK-3052-CA', 'PK-A093-CA', 'PK-3151-CA', 'PK-0183-00', 'PK-3039-CA', 'PK-3326-CA', 'PK-3252-CA', 'PK-3062-CA', 'PK-3029-CA', 'PK-3066-CA', 'PK-0185-00', 'PK-3156-CA', 'PK-3033-CA', 'PK-3095-CA', 'PK-3092-CA', 'PK-3247-CA'],
  "Extension Checkup #3 Assessment": ['PK-3539-CA', 'PK-3160-CA', 'PK-3070-CA', 'PK-3181-CA', 'PK-3057-CA', 'PK-3163-CA', 'PK-3085-CA', 'PK-3080-CA', 'PK-3165-CA', 'PK-3291-CA', 'PK-3154-CA', 'PK-3089-CA', 'PK-3479-CA', 'PK-3081-CA', 'PK-3155-CA'],

    "Checkup #4 Assessment": ['PK-3065-CA', 'PK-3055-CA', 'PK-3061-CA', 'PK-3071-CA', 'PK-3069-CA', 'PK-3027-CA', 'PK-3062-00', 'PK-3067-CA', 'PK-3115-00', 'PK-3063-CA', 'PK-3078-00', 'PK-3147-CA', 'PK-3066-CA', 'PK-3060-CA', 'PK-3073-CA', 'PK-3139-CA', 'PK-3148-CA', 'PK-3100-00', 'PK-3095-CA', 'PK-3156-CA', 'PK-3149-CA', 'PK-3064-CA', 'PK-A105-CA', 'PK-3125-CA', 'PK-3138-CA', 'PK-3101-00', 'PK-3122-CA', 'PK-3473-CA', 'PK-3074-CA', 'PK-3117-CA', 'PK-3098-00', 'PK-3039-CA', 'PK-3075-CA'],
  "Extension Checkup #4 Assessment": ['PK-3539-CA', 'PK-3181-CA', 'PK-3082-CA', 'PK-3202-CA', 'PK-3081-CA', 'PK-3203-CA', 'PK-3097-CA', 'PK-3221-CA', 'PK-3128-CA', 'PK-3199-CA'],

    "Checkup #5 Assessment": ['PK-3159-CA', 'PK-3301-CA', 'PK-3100-00', 'PK-3147-CA', 'PK-3114-CA', 'PK-3140-CA', 'PK-3149-CA', 'PK-3125-CA', 'PK-3142-CA', 'PK-3122-CA', 'PK-A175-CA', 'PK-3110-CA', 'PK-3313-CA', 'PK-3102-CA', 'PK-3121-CA', 'PK-3101-00', 'PK-3130-CA', 'PK-3161-CA', 'PK-3235-CA', 'PK-3473-CA', 'PK-3172-00', 'PK-3123-CA', 'PK-3211-CA', 'PK-3124-00', 'PK-3186-CA', 'PK-3117-CA', 'PK-3213-00', 'PK-3182-CA', 'PK-3171-CA', 'PK-3127-CA', 'PK-3131-CA', 'PK-3135-CA', 'PK-3162-CA'],
  "Extension Checkup #5 Assessment": ['PK-3504-CA', 'PK-3359-CA', 'PK-3288-CA', 'PK-3204-CA', 'PK-3083-CA', 'PK-3128-CA', 'PK-3295-CA', 'PK-3199-CA', 'PK-3058-CA', 'PK-3523-CA', 'PK-3514-CA'],

    "Checkup #6 Assessment": ['PK-3159-CA', 'PK-3298-CA', 'PK-3121-CA', 'PK-3320-CA', 'PK-3302-CA', 'PK-3161-CA', 'PK-3130-CA', 'PK-3111-CA', 'PK-3323-CA', 'PK-3306-CA', 'PK-3218-CA', 'PK-3166-CA', 'PK-3177-CA', 'PK-3172-00', 'PK-3307-00', 'PK-3167-CA', 'PK-3169-CA', 'PK-3176-CA', 'PK-3256-CA', 'PK-3119-CA', 'PK-3232-CA', 'PK-3309-00', 'PK-3206-CA', 'PK-3184-CA', 'PK-3171-CA', 'PK-3145-CA', 'PK-3384-CA', 'PK-3308-00', 'PK-3236-00', 'PK-3209-CA', 'PK-3315-00', 'PK-3222-CA', 'PK-3213-00', 'PK-3120-CA', 'PK-3207-CA', 'PK-3317-00', 'PK-3190-CA', 'PK-3224-CA', 'PK-3205-CA', 'PK-3217-CA', 'PK-3157-CA', 'PK-3174-CA'],
  "Extension Checkup #6 Assessment": ['PK-3219-CA', 'PK-3359-CA', 'PK-3538-CA', 'PK-3188-CA', 'PK-3109-CA', 'PK-3504-CA', 'PK-3187-CA', 'PK-3099-CA', 'PK-3373-CA', 'PK-3364-CA', 'PK-3523-CA', 'PK-3524-CA', 'PK-3501-CA', 'PK-3514-CA', 'PK-3591-CA', 'PK-3342-CA', 'PK-3058-CA'],

    "Checkup #7 Assessment": ['PK-3323-CA', 'PK-3230-CA', 'PK-3308-00', 'PK-3179-00', 'PK-3218-CA', 'PK-3304-CA', 'PK-3180-00', 'PK-3146-00', 'PK-3255-00', 'PK-3182-CA', 'PK-3220-CA', 'PK-3312-CA', 'PK-3236-00', 'PK-3209-CA', 'PK-3178-CA', 'PK-3263-CA', 'PK-3206-CA', 'PK-3314-CA', 'PK-3205-CA', 'PK-3212-CA', 'PK-3317-00', 'PK-3222-CA', 'PK-3384-CA', 'PK-3207-CA', 'PK-3238-00', 'PK-3224-CA', 'PK-3223-CA', 'PK-3260-00', 'PK-H119-CA', 'PK-3254-CA', 'PK-3237-00', 'PK-3370-CA', 'PK-H120-CA', 'PK-3367-CA', 'PK-3353-CA'],
  "Extension Checkup #7 Assessment": ['PK-3360-CA', 'PK-3208-CA', 'PK-3331-CA', 'PK-3187-CA', 'PK-3364-CA', 'PK-3523-CA', 'PK-3524-CA', 'PK-3274-CA', 'PK-3188-CA', 'PK-3373-CA', 'PK-3591-CA', 'PK-3341-00', 'PK-3365-CA', 'PK-3526-CA', 'PK-3507-CA', 'PK-3525-CA', 'PK-3183-CA', 'PK-3189-CA', 'PK-3593-CA', 'PK-3342-CA', 'PK-3374-CA', 'PK-3509-CA', 'PK-3510-CA', 'PK-3511-CA'],

    "Checkup #8 Assessment": ['PK-3314-CA', 'PK-3293-00', 'PK-3280-CA', 'PK-3341-00', 'PK-3236-00', 'PK-3281-CA', 'PK-3178-CA', 'PK-3275-CA', 'PK-3370-CA', 'PK-3279-00', 'PK-3316-00', 'PK-3366-CA', 'PK-3263-CA', 'PK-3268-00', 'PK-3318-CA', 'PK-3347-CA', 'PK-3269-00', 'PK-3282-CA', 'PK-H237-CA', 'PK-3355-CA', 'PK-3215-00', 'PK-3223-CA', 'PK-3346-CA', 'PK-3258-CA', 'PK-3348-CA', 'PK-3480-CA', 'PK-3350-CA', 'PK-3271-CA', 'PK-3357-CA', 'PK-3254-CA', 'PK-3358-CA', 'PK-3367-CA', 'PK-3361-CA', 'PK-3363-CA', 'PK-3343-CA', 'PK-3356-CA', 'PK-3411-CA', 'PK-3262-CA'],
  "Extension Checkup #8 Assessment": ['PK-3331-CA', 'PK-3195-CA', 'PK-3344-CA', 'PK-3580-CA', 'PK-3455-CA', 'PK-3518-CA', 'PK-3365-CA', 'PK-3193-CA', 'PK-3382-CA', 'PK-3509-CA', 'PK-3325-CA', 'PK-3511-CA', 'PK-3510-CA', 'PK-3527-CA', 'PK-3512-CA', 'PK-3528-CA', 'PK-3567-CA', 'PK-3587-CA'],
};


function OrderLPButton() {
    console.log("Reached Order LP Button");

    const missing_barcode = document.createElement("style");
    missing_barcode.innerHTML = `
    tr.missing-barcode td {
        background-color: #FFB3B3 !important;
    }`;

    document.head.appendChild(missing_barcode);


    var formGroup = document.querySelectorAll('div[class="form-group"]')[15].children

    var order_lp_button = document.createElement("button");
    order_lp_button.textContent = "Order LP";
    order_lp_button.className = "btn btn-default searchGridBtn leftJustBtnSpacer";
    order_lp_button.id = "btnOrderLp";


    order_lp_button.addEventListener("click", function () {
        const grid = $("#gridLP").data("kendoGrid");
        if (!grid) return alert("Learning Plan not found.");

        const data = grid.dataSource.data().slice(); // clone
        const assessmentName = data[0].AssessmentList; // get name of assessment (every PK in grid should be from same assessment)
        const predefinedOrder = assessmentDict[assessmentName]; // get the PK ordering from dictionary

        if (!predefinedOrder) {
            return alert("No predefined order found for this assessment.");
        }

        // sort the PK's
        const sortedData = [...data].sort((a, b) => {
            const indexA = predefinedOrder.indexOf(a.Barcode);
            const indexB = predefinedOrder.indexOf(b.Barcode);
            // If not found, put those items at the end
            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        });

        const tbody = grid.element.find("tbody");
        const rowsByUid = {};
        tbody.children("tr").each(function () {
            const $row = $(this);
            rowsByUid[$row.data("uid")] = $row;
        });

        const sortedRows = sortedData.map(item => rowsByUid[item.uid]);



        tbody.children("tr").removeClass("k-state-selected k-state-moved");
        sortedRows.forEach(row => tbody.append(row));
        tbody.find(".sort-order").each((i, e) => $(e).text(1 + i));
        sortedRows.forEach(row => row.addClass("k-state-moved"));

        setTimeout(() => {
            saveGridChanges(grid);
            loadOrderHistory(grid, 0);
        }, 0);
    });

    formGroup[5].parentNode.insertBefore(order_lp_button, formGroup[6]);
}

function highlightMissingBarcodes() {
    const grid = $("#gridLP").data("kendoGrid");
    if (!grid) return;

    const data = grid.dataSource.data();
    const rows = grid.tbody.find("tr");

    rows.each(function (index) {
        const item = data[index];
        const assessment = data[0].AssessmentList;
        const barcode = item.Barcode;
        const isMastered = item && item.IsMastered;

        if(!isMastered && Object.keys(assessmentDict).includes(assessment)) {
            const validBarcodes = assessmentDict[assessment] || [];

            if (!validBarcodes.includes(barcode)) {
                $(this).addClass("missing-barcode");
            } else {
                $(this).removeClass("missing-barcode");
            }
        }

    });
}


function GetStudentLevelUp() {
    // Trigger the data reload
    var grid = $("#gridEnrollmentReportExcel").data("kendoGrid");
    grid.dataSource.read();

    // Wait for the data to be fully loaded
    grid.dataSource.one("change", function() {
        var students = grid.dataSource._pristineData;
        console.log(students);

        const today = new Date();
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const daysLeftInMonth = endOfMonth.getDate() - today.getDate();

        // Create the display div
        var displayDiv = document.createElement('div');

        var header = document.createElement('h2');
        var month = today.toLocaleString('default', { month: 'long' });
        header.textContent = `${month} Level Ups`;
        header.style.marginLeft = '15px';
        header.style.fontWeight = 'bold';
        displayDiv.appendChild(header);

        // Create an array to store students and their leveling-up dates
        var studentsWithLevelUpDates = [];

        // Loop through students and filter based on level-up criteria
        for (let i = 0; i < students.length; i++) {

            if(students[i].StudentLengthofStay >= 5){
                const monthsTillLevelUp = 6 - (students[i].StudentLengthofStay % 6);
                if (monthsTillLevelUp * endOfMonth.getDate() <= daysLeftInMonth) {

                    // Calculate the future date when the student will level up
                    const levelUpDate = new Date();
                    levelUpDate.setDate(levelUpDate.getDate() + monthsTillLevelUp * endOfMonth.getDate());

                    studentsWithLevelUpDates.push({
                        student: students[i],
                        levelUpDate: levelUpDate
                    });
                }


                const monthsAfterLevelUp = students[i].StudentLengthofStay % 6;

                if(monthsAfterLevelUp * endOfMonth.getDate() <= today.getDate()) {
                    const levelUpDate = new Date();
                    levelUpDate.setDate(levelUpDate.getDate() - monthsAfterLevelUp * endOfMonth.getDate());

                    studentsWithLevelUpDates.push({
                        student: students[i],
                        levelUpDate: levelUpDate
                    });
                }

            }
        }

        // Sort the students by the level-up date (earliest first)
        studentsWithLevelUpDates.sort(function(a, b) {
            return a.levelUpDate - b.levelUpDate;
        });

        // Loop through the sorted students and create paragraphs to display them
        studentsWithLevelUpDates.forEach(function(item) {
            const formattedDate = item.levelUpDate.toLocaleString('default', { month: 'long', day: 'numeric' });

            var studentParagraph = document.createElement('h4');

            // Wrap the name and date in spans
            var nameSpan = document.createElement('span');
            nameSpan.textContent = `${item.student.StudentFirstName} ${item.student.StudentLastName}`;
            nameSpan.style.fontWeight = 'bold'; // Emphasize the name

            var dateSpan = document.createElement('span');
            dateSpan.textContent = `:     ${formattedDate}`;
            dateSpan.style.fontWeight = '300'; // Lighter font weight for the date

            // Append both spans to the h4
            studentParagraph.appendChild(nameSpan);
            studentParagraph.appendChild(dateSpan);

            studentParagraph.style.marginLeft = '15px';
            displayDiv.appendChild(studentParagraph);
        });

        // Minimal styling: Border only
        displayDiv.className = "student-level-up-box";
        displayDiv.style.border = "2px solid #000000"; // Border only
        displayDiv.style.borderRadius = "15px"; // Rounded corners
        displayDiv.style.marginBottom = "10px"; // Padding on bottom
        //displayDiv.style.width = "33%";

        // Find the button with id 'btnExport' and insert the displayDiv in front of it
        const exportButton = document.querySelector('#btnExport');

        // Remove any existing student-level-up-box before appending the new one
        const existingBox = document.querySelector('.student-level-up-box');
        if (existingBox) {
            existingBox.remove();
        }

        // Append the new displayDiv in front of the button
        if (exportButton && exportButton.parentNode) {
            exportButton.parentNode.insertBefore(displayDiv, exportButton);
        }

        console.log("reached");
    });
}


const Pages = {
    LEARNING_PLAN: 'learningplan',
    LEVEL_UP_REPORT: 'enrollmentreport',
    OTHER: 'other'
};

function getCurrentPageEnum(path) {
    path = path.toLowerCase();
    if (path.includes(Pages.LEARNING_PLAN)) return Pages.LEARNING_PLAN;
    if (path.includes(Pages.LEVEL_UP_REPORT)) return Pages.LEVEL_UP_REPORT;
    return Pages.OTHER;
}

(function () {

    const currentPage = getCurrentPageEnum(location.pathname);

    switch (currentPage) {
        case Pages.LEARNING_PLAN:
            window.allowReorder = function () {
                return true;
            };
            setTimeout(OrderLPButton, 3000);
            setInterval(highlightMissingBarcodes, 1500);
            break;
        case Pages.LEVEL_UP_REPORT:
            $(".searchDashBtn #btnsearch").on("click", function () {
                setTimeout(GetStudentLevelUp, 300);
            });
            break;
        default:
            break;
    }
})();
