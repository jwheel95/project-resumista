
/*
TODO: 
1) refactor addWork/delWork, addVolunteer/delVolunteer, addEducation/delEducation functions
2) Work/Vol/edu history sections can probably be redone as well
3) 

*/



//JS object to store all resume info
const finalResume = []

//Query selectors for buttons
const signUpSubmit = document.querySelector("#signUpSubmit");
const workSubmit = document.querySelector("#workSubmit");
const volunteerSubmit = document.querySelector("#volunteerSubmit");
const educationSubmit = document.querySelector("#educationSubmit");
const viewResume = document.querySelector("#viewResume");
const progressSwitchWork = document.querySelectorAll(".progress-switch-work");
const progressSwitchVolunteer = document.querySelectorAll(".progress-switch-volunteer");
const progressSwitchEducation = document.querySelectorAll(".progress-switch-education");

//Event Listeners on buttons to store info
signUpSubmit.addEventListener('click', signUp);
workSubmit.addEventListener('click', workHistory);
volunteerSubmit.addEventListener('click', volunteerHistory);
educationSubmit.addEventListener('click', educationHistory);
progressSwitchWork.forEach(function(e) {
    e.addEventListener('click', workHistory);
});
progressSwitchVolunteer.forEach(function(e) {
    e.addEventListener('click', volunteerHistory);
});
progressSwitchEducation.forEach(function(e) {
    e.addEventListener('click', educationHistory);
});

//Event Listeners for populating final resume
educationSubmit.addEventListener('click', resumeGenerate);
viewResume.addEventListener('click', resumeGenerate);

//Submit Functions- save info to JS Object
function signUp() {
    finalResume.signUpFirstName = document.querySelector("#signUpFirstName").value;
    finalResume.signUpLastName = document.querySelector("#signUpLastName").value;
    finalResume.signUpPhoneNumber = document.querySelector("#signUpPhoneNumber").value;
    finalResume.signUpEmail = document.querySelector("#signUpEmail").value;
    finalResume.signUpAddress = document.querySelector("#signUpAddress").value;
    finalResume.signUpCity = document.querySelector('#signUpCity').value;
    let countrySelect = document.querySelector("#signUpCountry");
    finalResume.signUpCountry = countrySelect.options[countrySelect.selectedIndex].text;
    let stateSelect = document.querySelector("#signUpState");
    finalResume.signUpState = stateSelect.options[stateSelect.selectedIndex].text;
    finalResume.signUpZip = document.querySelector("#signUpZip").value;
}

function submitWork(num) {
    let fieldSelect = document.querySelector(`#workField${num}`);
    finalResume[`workField${num}`] = fieldSelect.options[fieldSelect.selectedIndex].text;
    finalResume[`workName${num}`] = document.querySelector(`#workName${num}`).value;
    let skillsSelect = document.querySelector(`#workSkills${num}`);
    finalResume[`workSkills${num}`] = skillsSelect.options[skillsSelect.selectedIndex].text;
    finalResume[`workAddress${num}`] = document.querySelector(`#workAddress${num}`).value;
    let countrySelect = document.querySelector(`#workCountry${num}`);
    finalResume[`workCountry${num}`] = countrySelect.options[countrySelect.selectedIndex].text;
    let stateSelect = document.querySelector(`#workState${num}`);
    finalResume[`workState${num}`] = stateSelect.options[stateSelect.selectedIndex].text;
    finalResume[`workCity${num}`] = document.querySelector(`#workCity${num}`).value;
    finalResume[`workZip${num}`] = document.querySelector(`#workZip${num}`).value;
    finalResume[`workDuties${num}`] = document.querySelector(`#workDuties${num}`).value;
}

//passes in #s for IDs based on # of work entries
function workHistory() {
    submitWork(1);
    
    let workEntry2 = document.querySelector("#workEntry2");
    if (workEntry2) {
        submitWork(2);
    };

    let workEntry3 = document.querySelector("#workEntry3");
    if (workEntry3) {
        submitWork(3);
    };
}

function volunteerHistory() {
    finalResume.volunteerTitle1 = document.querySelector("#volunteerTitle1")[volunteerTitle1.selectedIndex].text;
    finalResume.volunteerOrg1 = document.querySelector("#volunteerOrg1").value;
    finalResume.volunteerDuties1 = document.querySelector("#volunteerDuties1").value;
    finalResume.volunteerSkills1 = document.querySelector("#volunteerSkills1")[volunteerSkills1.selectedIndex].text;
    finalResume.volunteerCity1 = document.querySelector("#volunteerCity1").value;
    finalResume.volunteerYears1 = document.querySelector("#volunteerYears1")[volunteerYears1.selectedIndex].text;

    let volunteerEntry2 = document.querySelector("#volunteerEntry2");
    if (volunteerEntry2) {
        finalResume.volunteerTitle2 = document.querySelector("#volunteerTitle2")[volunteerTitle2.selectedIndex].text;
        finalResume.volunteerOrg2 = document.querySelector("#volunteerOrg2").value;
        finalResume.volunteerDuties1 = document.querySelector("#volunteerDuties1").value;
        finalResume.volunteerSkills2 = document.querySelector("#volunteerSkills2")[volunteerSkills2.selectedIndex].text;
        finalResume.volunteerCity2 = document.querySelector("#volunteerCity2").value;
        finalResume.volunteerYears2 = document.querySelector("#volunteerYears2")[volunteerYears2.selectedIndex].text;
    };

    let volunteerEntry3 = document.querySelector("#volunteerEntry3");
    if (volunteerEntry3) {
        finalResume.volunteerTitle3 = document.querySelector("#volunteerTitle3")[volunteerTitle3.selectedIndex].text;
        finalResume.volunteerOrg3 = document.querySelector("#volunteerOrg3").value;
        finalResume.volunteerDuties1 = document.querySelector("#volunteerDuties1").value;
        finalResume.volunteerSkills3 = document.querySelector("#volunteerSkills3")[volunteerSkills3.selectedIndex].text;
        finalResume.volunteerCity3 = document.querySelector("#volunteerCity3").value;
        finalResume.volunteerYears3 = document.querySelector("#volunteerYears3")[volunteerYears3.selectedIndex].text;
    };
}

function educationHistory() {
    finalResume.educationLevel1 = document.querySelector("#educationLevel1")[educationLevel1.selectedIndex].text;
    finalResume.educationSchool1 = document.querySelector("#educationSchool1").value;
    finalResume.educationStatus1 = document.querySelector("#educationStatus1")[educationStatus1.selectedIndex].text;
    finalResume.educationField1 = document.querySelector("#educationField1").value;

    let educationEntry2 = document.querySelector("#educationEntry2");
    if (educationEntry2) {
        finalResume.educationLevel2 = document.querySelector("#educationLevel2")[educationLevel2.selectedIndex].text;
        finalResume.educationSchool2 = document.querySelector("#educationSchool2").value;
        finalResume.educationStatus2 = document.querySelector("#educationStatus2")[educationStatus2.selectedIndex].text;
        finalResume.educationField2 = document.querySelector("#educationField2").value;
    };

    let educationEntry3 = document.querySelector("#educationEntry3");
    if (educationEntry3) {
        finalResume.educationLevel3 = document.querySelector("#educationLevel3")[educationLevel2.selectedIndex].text;
        finalResume.educationSchool3 = document.querySelector("#educationSchool3").value;
        finalResume.educationStatus3 = document.querySelector("#educationStatus3")[educationStatus2.selectedIndex].text;
        finalResume.educationField3 = document.querySelector("#educationField3").value;
    };
}

//Function to generate resume
function resumeGenerate() {

    //declaring variables from resume page of html
    const gName = document.querySelector("#frName");
    const gPhone = document.querySelector("#frPhone");
    const gEmail = document.querySelector("#frEmail"); 
    const gAddress = document.querySelector("#frAddress");
    const gCity = document.querySelector("#frCity");
    const gState = document.querySelector("#frState");
    const gZip = document.querySelector("#frZip");
    const gCountry = document.querySelector("#frCountry");
    const gWorkName1 = document.querySelector("#frWorkName1");
    const gWorkField1 = document.querySelector("#frWorkField1");
    const gWorkSkills1 = document.querySelector("#frWorkSkills1");
    const gWorkAddress1 = document.querySelector("#frWorkAddress1");
    const gWorkCity1 = document.querySelector("#frWorkCity1");
    const gWorkState1 = document.querySelector("#frWorkState1");
    const gWorkZip1 = document.querySelector("#frWorkZip1");
    const gWorkCountry1 = document.querySelector("#frWorkCountry1");
    const gWorkDuties1 = document.querySelector("#frWorkDuties1");
    const gWorkName2 = document.querySelector("#frWorkName2");
    const gWorkField2 = document.querySelector("#frWorkField2");
    const gWorkSkills2 = document.querySelector("#frWorkSkills2");
    const gWorkAddress2 = document.querySelector("#frWorkAddress2");
    const gWorkCity2 = document.querySelector("#frWorkCity2");
    const gWorkState2 = document.querySelector("#frWorkState2");
    const gWorkZip2 = document.querySelector("#frWorkZip2");
    const gWorkCountry2 = document.querySelector("#frWorkCountry2");
    const gWorkDuties2 = document.querySelector("#frWorkDuties2");
    const gWorkName3 = document.querySelector("#frWorkName3");
    const gWorkField3 = document.querySelector("#frWorkField3");
    const gWorkSkills3 = document.querySelector("#frWorkSkills3");
    const gWorkAddress3 = document.querySelector("#frWorkAddress3");
    const gWorkCity3 = document.querySelector("#frWorkCity3");
    const gWorkState3 = document.querySelector("#frWorkState3");
    const gWorkZip3 = document.querySelector("#frWorkZip3");
    const gWorkCountry3 = document.querySelector("#frWorkCountry3");
    const gWorkDuties3 = document.querySelector("#frWorkDuties3");
    const gVolTitle1 = document.querySelector("#frVolTitle1");
    const gVolOrg1 = document.querySelector("#frVolOrg1");
    const gVolSkills1 = document.querySelector("#frVolSkills1");
    const gVolCity1 = document.querySelector("#frVolCity1");
    const gVolYears1 = document.querySelector("#frVolYears1");
    const gVolDuties1 = document.querySelector("#frVolDuties1");
    const gVolTitle2 = document.querySelector("#frVolTitle2");
    const gVolOrg2 = document.querySelector("#frVolOrg2");
    const gVolSkills2 = document.querySelector("#frVolSkills2");
    const gVolCity2 = document.querySelector("#frVolCity2");
    const gVolYears2 = document.querySelector("#frVolYears2");
    const gVolDuties2 = document.querySelector("#frVolDuties2");
    const gVolTitle3 = document.querySelector("#frVolTitle3");
    const gVolOrg3 = document.querySelector("#frVolOrg3");
    const gVolSkills3 = document.querySelector("#frVolSkills3");
    const gVolCity3 = document.querySelector("#frVolCity3");
    const gVolYears3 = document.querySelector("#frVolYears3");
    const gVolDuties3 = document.querySelector("#frVolDuties3");
    const gEduSchool1 = document.querySelector("#frEduSchool1");
    const gEduLevel1 = document.querySelector("#frEduLevel1");
    const gEduField1 = document.querySelector("#frEduField1");
    const gEduStatus1 = document.querySelector("#frEduStatus1");
    const gEduSchool2 = document.querySelector("#frEduSchool2");
    const gEduLevel2 = document.querySelector("#frEduLevel2");
    const gEduField2 = document.querySelector("#frEduField2");
    const gEduStatus2 = document.querySelector("#frEduStatus2");
    const gEduSchool3 = document.querySelector("#frEduSchool3");
    const gEduLevel3 = document.querySelector("#frEduLevel3");
    const gEduField3 = document.querySelector("#frEduField3");
    const gEduStatus3 = document.querySelector("#frEduStatus3");


    //populating resume w/ user input
    gName.textContent = (finalResume.signUpFirstName + " " + finalResume.signUpLastName);
    gPhone.textContent = finalResume.signUpPhoneNumber;
    gEmail.textContent = finalResume.signUpEmail;
    gAddress.textContent = finalResume.signUpAddress;
    gCity.textContent = finalResume.signUpCity + ",";
    gState.textContent = finalResume.signUpState;
    gZip.textContent = finalResume.signUpZip;
    gCountry.textContent = finalResume.signUpCountry;
    gWorkName1.textContent = finalResume.workName1;
    gWorkField1.textContent = finalResume.workField1;
    gWorkSkills1.textContent = finalResume.workSkills1;
    gWorkAddress1.textContent = finalResume.workAddress1;
    gWorkCity1.textContent = finalResume.workCity1;
    gWorkState1.textContent = finalResume.workState1;
    gWorkZip1.textContent = finalResume.workZip1;
    gWorkCountry1.textContent = finalResume.workCountry1;
    gWorkDuties1.textContent = finalResume.workDuties1;

    gVolTitle1.textContent = finalResume.volunteerTitle1;
    gVolOrg1.textContent = finalResume.volunteerOrg1;
    gVolSkills1.textContent = finalResume.volunteerSkills1;
    gVolCity1.textContent = finalResume.volunteerCity1;
    gVolYears1.textContent = finalResume.volunteerYears1;
    gVolDuties1.textContent = finalResume.volunteerDuties1;

    gEduSchool1.textContent = finalResume.educationSchool1;
    gEduLevel1.textContent = finalResume.educationLevel1;
    gEduField1.textContent = finalResume.educationField1;
    gEduStatus1.textContent = finalResume.educationStatus1;

    //if user has second work experience
    let workEntry2 = document.querySelector("#workEntry2");
    if (workEntry2) {
        gWorkName2.textContent = finalResume.workName2;
        gWorkField2.textContent = finalResume.workField2;
        gWorkSkills2.textContent = finalResume.workSkills2;
        gWorkAddress2.textContent = finalResume.workAddress2;
        gWorkCity2.textContent = finalResume.workCity2;
        gWorkState2.textContent = finalResume.workState2;
        gWorkZip2.textContent = finalResume.workZip2;
        gWorkCountry2.textContent = finalResume.workCountry2;
        gWorkDuties2.textContent= finalResume.workDuties2;
        document.querySelector("#frWork2").classList.remove("hidden");
    } else {
        document.querySelector("#frWork2").classList.add("hidden");
    }

    //if user has third work experience
    let workEntry3 = document.querySelector("#workEntry3");
    if (workEntry3) {
        gWorkName3.textContent = finalResume.workName3;
        gWorkField3.textContent = finalResume.workField3;
        gWorkSkills3.textContent = finalResume.workSkills3;
        gWorkAddress3.textContent = finalResume.workAddress3;
        gWorkCity3.textContent = finalResume.workCity3;
        gWorkState3.textContent = finalResume.workState3;
        gWorkZip3.textContent = finalResume.workZip3;
        gWorkCountry3.textContent = finalResume.workCountry3;
        gWorkDuties3.textContent = finalResume.workDuties3;
        document.querySelector("#frWork3").classList.remove("hidden");
    } else {
        document.querySelector("#frWork3").classList.add("hidden");
    }

    //if user has second volunteer experience
    let volunteerEntry2 = document.querySelector("#volunteerEntry2");
    if (volunteerEntry2) {
        gVolTitle2.textContent = finalResume.volunteerTitle2;
        gVolOrg2.textContent = finalResume.volunteerOrg2;
        gVolSkills2.textContent = finalResume.volunteerSkills2;
        gVolCity2.textContent = finalResume.volunteerCity2;
        gVolYears2.textContent = finalResume.volunteerYears2;
        gVolDuties2.textContent = finalResume.volunteerDuties2;
        document.querySelector("#frVol2").classList.remove("hidden");
    } else {
        document.querySelector("#frVol2").classList.add("hidden");
    }

    //if user has third volunteer experience
    let volunteerEntry3 = document.querySelector("#volunteerEntry3");
    if (volunteerEntry3) {
        gVolTitle3.textContent = finalResume.volunteerTitle3;
        gVolOrg3.textContent = finalResume.volunteerOrg3;
        gVolSkills3.textContent = finalResume.volunteerSkills3;
        gVolCity3.textContent = finalResume.volunteerCity3;
        gVolYears3.textContent = finalResume.volunteerYears3;
        gVolDuties3.textContent = finalResume.volunteerDuties3;
        document.querySelector("#frVol3").classList.remove("hidden");
    } else {
        document.querySelector("#frVol3").classList.add("hidden");
    }

    //if user has second education experience
    let educationEntry2 = document.querySelector("#educationEntry2");
    if (educationEntry2) {
        gEduSchool2.textContent = finalResume.educationSchool2;
        gEduLevel2.textContent = finalResume.educationLevel2;
        gEduField2.textContent = finalResume.educationField2;
        gEduStatus2.textContent = finalResume.educationStatus2;
        document.querySelector("#frEdu2").classList.remove("hidden");
    } else {
        document.querySelector("#frEdu2").classList.add("hidden");
    }

    //if user has third education experience
    let educationEntry3 = document.querySelector("#educationEntry3");
    if (educationEntry3) {
        gEduSchool3.textContent = finalResume.educationSchool3;
        gEduLevel3.textContent = finalResume.educationLevel3;
        gEduField3.textContent = finalResume.educationField3;
        gEduStatus3.textContent = finalResume.educationStatus3;
        document.querySelector("#frEdu3").classList.remove("hidden");
    } else {
        document.querySelector("#frEdu3").classList.add("hidden");
    }
}

//Function to Update Ids of all inputs when forms are cloned
function updateIds(clone, newNum) {
    let inputs = clone.querySelectorAll("*");
    inputs.forEach(function(input) {
        if (input.id) {
            input.setAttribute("id", input.id.slice(0, -1) + newNum);
        };
    });
}

// Updates onChange of work section when forms are cloned
function updateWorkOnChange(clone, newNum) {
    let inputs = clone.querySelectorAll("*");
    inputs.forEach(function(input) {
        if (input.hasAttribute("onchange")) {
            input.setAttribute("onchange", `changeSkillList(${newNum})`);
        };
    });
}

// Updates onChange of volunteer section when forms are cloned
function updateVolunteerOnChange(clone, newNum) {
    let inputs = clone.querySelectorAll("*");
    inputs.forEach(function(input) {
        if (input.hasAttribute("onchange")) {
            input.setAttribute("onchange", `changeVolunteerSkillsList(${newNum})`);
        };
    });
}

// Function to reset the text input when creating new form
function resetInputText (newElemCloned) {
    let initialInputs = newElemCloned.querySelectorAll("input[type=text]");
    for (let i = 0; i < initialInputs.length; i++){
        initialInputs[i].value = "";
    }
}
// Function to reset the text input when creating new form
function resetTextArea (newElemCloned) {
    let initialInputs = newElemCloned.querySelectorAll("textarea[type=text]");
    for (let i = 0; i < initialInputs.length; i++){
        initialInputs[i].value = "";
    }
}

function printResume () {
    window.print();
}

// 

// ----------------- ADD/DELETE DUPLICATE FORM FEATURE ------------------------
// TODO: Refactor way too much copied code, not sure how....

// ADD DUPLICATE FORM QUERIES
const btnWorkAdd = document.querySelector("#btnWorkAddForm");
const btnVolunteerAdd = document.querySelector("#btnVolunteerAddForm");
const btnEducationAdd = document.querySelector("#btnEducationAddForm");

// DELETE DUPLICATE FORM QUERIES
const btnWorkDelete = document.querySelector("#btnWorkDeleteForm");
const btnVolunteerDelete = document.querySelector("#btnVolunteerDeleteForm");
const btnEducationDelete = document.querySelector("#btnEducationDeleteForm");

// PERM ENABLE ADD FORM FUNCTION, doesnt seem like its needed at all
// btnWorkAdd.disabled = false;
// btnVolunteerAdd.disabled = false;
// btnEducationAdd.disabled = false;

//DISABLE DELETE FORM BTN ON 1st FORM
btnWorkDelete.disabled = true;
btnVolunteerDelete.disabled = true;
btnEducationDelete.disabled = true;

// ADD DUPLICATE FORM FUNCTIONS
function addWork() {
    // Checks number of duplicated/form sections
    let num = document.querySelectorAll(".work-cloned-input", ".work-cloned-textarea").length;
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    let newElem = document.querySelector("#workEntry" + num);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `workEntry${newNum}`);
    // reset input values
    resetTextArea(newElemCloned);
    resetInputText(newElemCloned);
    // update childrens' ids
    updateIds(newElemCloned, newNum);
    updateWorkOnChange(newElemCloned, newNum);

    // Header Change
    let header = newElemCloned.querySelector(".heading-ref");
    header.setAttribute("id", "ID" + newNum + "_workRef");
    header.setAttribute("name", "ID" + newNum + "_workRef");
    header.innerHTML = "Job #" + newNum;

    // Insert the new element after the last "duplicatable" input field
    newElem.after(newElemCloned);

    // Enable the "remove" button. This only shows once you have a duplicated section.
    btnWorkDelete.disabled = false;

    if (newNum === 3) {
        btnWorkAdd.disabled = true;
        btnWorkAdd.setAttribute("value", "You've reached the limit");
    }
}

function addVolunteer() {
    // Checks number of duplicated/form sections
    let num = document.querySelectorAll(".vol-cloned-input",".vol-cloned-textarea").length;
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    let newElem = document.querySelector("#volunteerEntry" + num);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `volunteerEntry${newNum}`);
    // reset input values
    resetInputText(newElemCloned);
    resetTextArea(newElemCloned);
    // update childrens' ids
    updateIds(newElemCloned, newNum);
    updateVolunteerOnChange(newElemCloned, newNum);

    // Header Change
    let header = newElemCloned.querySelector(".vol-heading-ref");
    header.setAttribute("id", "ID" + newNum + "_volunteerRef");
    header.setAttribute("name", "ID" + newNum + "_volunteerRef");
    header.innerHTML = "Volunteer #" + newNum;

    // Insert the new element after the last "duplicatable" input field
    newElem.after(newElemCloned);

    // Enable the "remove" button. This only shows once you have a duplicated section.
    btnVolunteerDelete.disabled = false;

    if (newNum === 3) {
        btnVolunteerAdd.disabled = true;
        btnVolunteerAdd.setAttribute("value", "You've reached the limit");
    }
}

function addEducation() {
  
    // Checks number of duplicated/form sections
    let num = document.querySelectorAll(".edu-cloned-input").length;
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    let newElem = document.querySelector("#educationEntry" + num);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `educationEntry${newNum}`);
    // reset input values
    resetInputText(newElemCloned);
    // update childrens' ids
    updateIds(newElemCloned, newNum);

    // Header Change
    let header = newElemCloned.querySelector(".edu-heading-ref");
    header.setAttribute("id", "ID" + newNum + "_educationRef");
    header.setAttribute("name", "ID" + newNum + "_educationRef");
    header.innerHTML = "Education #" + newNum;

    // Insert the new element after the last "duplicatable" input field
    newElem.after(newElemCloned);

    // Enable the "remove" button. This only shows once you have a duplicated section.
    btnEducationDelete.disabled = false;

    if (newNum === 2) {
        btnEducationAdd.disabled = true;
        btnEducationAdd.setAttribute("value", "You've reached the limit");
    }

}

// DELETE DUPLICATE FORM FUNCTIONS
function delWork() {
    // check how many duplicated sections we currently have
    let num = document.querySelectorAll(".work-cloned-input",".work-cloned-textarea").length;

    // Confirmation dialog box
    if (confirm(`Are you sure you wish to remove Job #${num}? This cannot be undone.`)) {
        // remove last section
        document.querySelector("#workEntry" + num).remove();
        // update num
        num = document.querySelectorAll(".work-cloned-input",".work-cloned-textarea").length;
        if (num == 1) {
            btnWorkDelete.disabled = true;
        }
        if (num < 5) {
            btnWorkAdd.disabled = false;
            btnWorkAdd.setAttribute("value", "add section");
        }
    }
}

function delVolunteer() {
    //   console.log(`vol dup sections: ${num}`)
    // check how many duplicated sections we currently have
    let num = document.querySelectorAll(".vol-cloned-input",".vol-cloned-textarea").length;

    // Confirmation dialog box
    if (confirm(`Are you sure you wish to remove Volunteer #${num}? This cannot be undone.`)) {
        // remove last section
        document.querySelector("#volunteerEntry" + num).remove();
        // update num
        num = document.querySelectorAll(".vol-cloned-input",".vol-cloned-textarea").length;
        if (num == 1) {
            btnVolunteerDelete.disabled = true;
        }
        if (num < 5) {
            btnVolunteerAdd.disabled = false;
            btnVolunteerAdd.setAttribute("value", "add section");
        }
    }
}

function delEducation() {
    //   console.log(`vol dup sections: ${num}`)
    // check how many duplicated sections we currently have
    let num = document.querySelectorAll(".edu-cloned-input").length;

    // Confirmation dialog box
    if (confirm(`Are you sure you wish to remove Education #${num}? This cannot be undone.`)) {
        // remove last section
        document.querySelector("#educationEntry" + num).remove();
        // update num
        num = document.querySelectorAll(".edu-cloned-input").length;
        if (num == 1) {
            btnEducationDelete.disabled = true;
        }
        if (num < 5) {
            btnEducationAdd.disabled = false;
            btnEducationAdd.setAttribute("value", "add section");
        }
    }
}

//ADD DUPLICATE FORM LISTENERS
btnWorkAdd.addEventListener(
    "click",
    addWork
);

btnVolunteerAdd.addEventListener(
    "click",
    addVolunteer
);

btnEducationAdd.addEventListener(
    "click",
    addEducation
);

// DELETE CLONED FORM LISTENERS
btnWorkDelete.addEventListener(
    "click",
    delWork
);

btnVolunteerDelete.addEventListener(
    "click",
    delVolunteer
);

btnEducationDelete.addEventListener(
    "click",
    delEducation
);

var jobsAndSkills = {};
// student
jobsAndSkills['inputGroupSelect1'] = ['','Communication', 'Ability to work under pressure', 'Decision making', 'Time management','Self-motivating','Conflict resolution', 'Leadership','Adaptability','Teamwork','Creativity'];
// food service
jobsAndSkills['inputGroupSelect2'] = ['','Ability to learn quickly', 'Customer Service', 'Detail oriented', 'Flexible','Food Preparation','Handle cash and credit transactions', 'Multitasking','Adaptability','Team player','Upbeat'];
// custodial
jobsAndSkills['inputGroupSelect3'] = ['','Ability to work quickly', 'Safety Cautious', 'Excellent work ethic', 'Critical thinking','Proficient in using manual and power tools','Self starter', 'Organized','Stock management','Attention to Detail','Reliable'];
// landscaping-Ag
jobsAndSkills['inputGroupSelect4'] = ['','Lawn care', 'Irrigation', 'Ability to operate machinery', 'Livestock upkeep','Harvesting','Inventory control', 'Hard working','Flexible','Project management','Efficient'];
// factory-warehouse
jobsAndSkills['inputGroupSelect5'] = ['','Goal oriented', 'Effective interpersonal Communication', 'Hands on', 'Physical Stamina','Shipping and recieving','Catolog inventory', 'Operates heavy machinery','Reliable','Time mangement','Multitasking'];

function changeSkillList(num) {
  const workFieldList = document.getElementById("workField" + num);
  const workSkillList = document.getElementById("workSkills" + num);
  const jobTitles = workFieldList.options[workFieldList.selectedIndex].value;
  while (workSkillList.options.length) {
    workSkillList.remove(0);
  }
  let jobs = jobsAndSkills[jobTitles];
  if (jobs) {
    var i;
    for (i = 0; i < jobs.length; i++) {
      let workField = new Option(jobs[i], i);
      workSkillList.options.add(workField);
    }
  }
}

var volTitleAndSkills = {};
// foodbank
volTitleAndSkills['inputGroupSelect1'] = ['','Communication', 'Workplace Flexibility', 'Great Organisational Skills', "Enthusiasm", "Ability to work with variety of people", "Public Relations"];
// church
volTitleAndSkills['inputGroupSelect2'] = ['', 'Detail oriented', 'Flexible', 'Multitasking','Adaptability','Team player', 'Event Planning', "Musical", "Audio and Visual Aptitude"];
// community service
volTitleAndSkills['inputGroupSelect3'] = ['', 'Safety Cautious', 'Excellent work ethic', 'Critical thinking','Self starter', 'Organized','Attention to Detail','Reliable', 'Work Ethic'];
// mentoring
volTitleAndSkills['inputGroupSelect4'] = ['','Foster Ideas', 'Positive Role Model', 'Willingness to Share Knowledge and Skills', 'Provide Constructive Feedback','Values Others Opinions','Flexible'];
// teaching/tutoring
volTitleAndSkills['inputGroupSelect5'] = ['','Goal oriented', 'Effective interpersonal Communication', 'Hands on', 'Patience and Persistence','Willingness to Listen','Provide Constructive Feedback'];
// youth-work
volTitleAndSkills['inputGroupSelect6'] = ['','Goal oriented', 'Effective interpersonal Communication', 'Hands on', 'Provide Constructive Feedback','Work Ethic','Positive Role Model', 'Ability to Build Relationships','Reliable'];

function changeVolunteerSkillsList(num) {
  const volunteerTitleList = document.getElementById("volunteerTitle" + num);
  const volunteerSkillsList = document.getElementById("volunteerSkills" + num);
  const volTitles = volunteerTitleList.options[volunteerTitleList.selectedIndex].value;
  while (volunteerSkillsList.options.length) {
    volunteerSkillsList.remove(0);
  }
  let jobs = volTitleAndSkills[volTitles];
  if (jobs) {
    var i;
    for (i = 0; i < jobs.length; i++) {
      let volunteerTitle = new Option(jobs[i], i);
      volunteerSkillsList.options.add(volunteerTitle);
    }
  }
}

function printResume () {
    window.print();
}

let btnPrint = document.querySelector("#printBtn");
btnPrint.addEventListener(
    "click",
    printResume)