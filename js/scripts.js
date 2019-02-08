//JS object to store all resume info
const finalResume = []

//Query selectors for buttons
const signUpSubmit = document.querySelector("#signUpSubmit");
const workSubmit = document.querySelector("#workSubmit");
const volunteerSubmit = document.querySelector("#volunteerSubmit");
const educationSubmit = document.querySelector("#educationSubmit");

//Event Listeners on buttons to store info
signUpSubmit.addEventListener('click', signUp);
workSubmit.addEventListener('click', workHistory);
volunteerSubmit.addEventListener('click', volunteerHistory);
educationSubmit.addEventListener('click', educationHistory);

//Submit Functions- save info to JS Object
function signUp() {
    finalResume.signUpFirstName = document.querySelector("#signUpFirstName").value;
    finalResume.signUpLastName = document.querySelector("#signUpLastName").value;
    finalResume.signUpPhoneNumber = document.querySelector("#signUpPhoneNumber").value;
    finalResume.signUpEmail = document.querySelector("#signUpEmail").value;
    finalResume.signUpAddress = document.querySelector("#signUpAddress").value; 
    finalResume.signUpCountry = document.querySelector("#signUpCountry")[signUpCountry.selectedIndex].text;
    finalResume.signUpState = document.querySelector("#signUpState")[signUpState.selectedIndex].text;
    finalResume.signUpZip = document.querySelector("#signUpZip").value;
}

function workHistory() {

    finalResume.workField1 = document.querySelector("#workField1")[workField1.selectedIndex].text;
    finalResume.workName1 = document.querySelector("#workName1").value;
    finalResume.workSkills1 = document.querySelector("#workSkills1")[workSkills1.selectedIndex].text;
    finalResume.workAddress1 = document.querySelector("#workAddress1").value;
    finalResume.workCountry1 = document.querySelector("#workCountry1")[workCountry1.selectedIndex].text;
    finalResume.workState1 = document.querySelector("#workState1")[workState1.selectedIndex].text;
    finalResume.workCity1 = document.querySelector("#workCity1").value;
    finalResume.workZip1 = document.querySelector("#workZip1").value;
    finalResume.workingHere1 = document.querySelector("#workingHere1").checked;
}

function volunteerHistory() {
    finalResume.volunteerTitle1 = document.querySelector("#volunteerTitle1")[volunteerTitle1.selectedIndex].text;
    finalResume.volunteerOrg1 = document.querySelector("#volunteerOrg1").value;
    finalResume.volunteerSkills1 = document.querySelector("#volunteerSkills1")[volunteerSkills1.selectedIndex].text;
    finalResume.volunteerCity1 = document.querySelector("#volunteerCity1").value;
    finalResume.volunteerYears1 = document.querySelector("#volunteerYears1")[volunteerYears1.selectedIndex].text;
}

function educationHistory() {
    finalResume.educationLevel1 = document.querySelector("#educationLevel1")[educationLevel1.selectedIndex].text;
    finalResume.educationSchool1 = document.querySelector("#educationSchool1").value;
    finalResume.educationStatus1 = document.querySelector("#educationStatus1")[educationStatus1.selectedIndex].text;
    finalResume.educationField1 = document.querySelector("#educationField1").value;
}

//Function to Update Ids and onChange of all inputs when forms are cloned
function updateIds(clone, newNum) {
    let inputs = clone.querySelectorAll("*");
    console.log(inputs);
    inputs.forEach(function(input) {
        if (input.id) {
            input.setAttribute("id", input.id.slice(0, -1) + newNum);
        } 
    });
}

function updateOnChange(clone, newNum) {
    let inputs = clone.querySelectorAll("*");
    inputs.forEach(function(input) {
        if (input.hasAttribute("onchange")) {
            input.setAttribute("onchange", `changeSkillList(${newNum})`);
        }
    });
}

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
    let num = document.querySelectorAll(".work-cloned-input").length;
    console.log(`Number of form sections: ${num}`);
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    console.log(`New ID number to be incremated on next dup form: ${newNum}`);
    let newElem = document.querySelector("#workEntry" + num);
    console.log(`New ID for cloned form: ${newElem}`);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `workEntry${newNum}`);
    // update childrens' ids
    updateIds(newElemCloned, newNum);
    updateOnChange(newElemCloned, newNum);

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
    let num = document.querySelectorAll(".vol-cloned-input").length;
    console.log(`Number of form sections: ${num}`);
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    console.log(`New ID number to be incremated on next dup form: ${newNum}`);
    let newElem = document.querySelector("#volunteerEntry" + num);
    console.log(`New ID for cloned form: ${newElem}`);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `volunteerEntry${newNum}`);
    // update childrens' ids
    updateIds(newElemCloned, newNum);

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
    console.log(`Number of form sections: ${num}`);
    // Incremating the id by 1 for every new duplicate form
    let newNum = num + 1;
    console.log(`New ID number to be incremated on next dup form: ${newNum}`);
    let newElem = document.querySelector("#educationEntry" + num);
    console.log(`New ID for cloned form: ${newElem}`);
    // create new clone and change its ID using the newNum value
    let newElemCloned = newElem.cloneNode(true);
    newElemCloned.setAttribute("id", `educationEntry${newNum}`);
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

    if (newNum === 3) {
        btnEducationAdd.disabled = true;
        btnEducationAdd.setAttribute("value", "You've reached the limit");
    }
}

// DELETE DUPLICATE FORM FUNCTIONS
function delWork() {
    // check how many duplicated sections we currently have
    let num = document.querySelectorAll(".work-cloned-input").length;

    // Confirmation dialog box
    if (confirm(`Are you sure you wish to remove Job #${num}? This cannot be undone.`)) {
        // remove last section
        document.querySelector("#workEntry" + num).remove();
        // update num
        num = document.querySelectorAll(".work-cloned-input").length;
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
    let num = document.querySelectorAll(".vol-cloned-input").length;
    console.log(`vol dup sections: ${num}`)

    // Confirmation dialog box
    if (confirm(`Are you sure you wish to remove Volunteer #${num}? This cannot be undone.`)) {
        // remove last section
        document.querySelector("#volunteerEntry" + num).remove();
        // update num
        num = document.querySelectorAll(".vol-cloned-input").length;
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
    console.log(`edu dup sections: ${num}`)

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


//ADD DUPLICATE FORM LISTENERs
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
  var workFieldList = document.getElementById("workField" + num);
  var workSkillList = document.getElementById("workSkills" + num);
  var jobTitles = workFieldList.options[workFieldList.selectedIndex].value;
  while (workSkillList.options.length) {
    workSkillList.remove(0);
  }
  var jobs = jobsAndSkills[jobTitles];
  if (jobs) {
    var i;
    for (i = 0; i < jobs.length; i++) {
      var workField = new Option(jobs[i], i);
      workSkillList.options.add(workField);
    }
  }
}
