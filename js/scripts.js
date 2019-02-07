// Make sure DOM IS LOADED
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});


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
    finalResume.workField = document.querySelector("#workField")[workField.selectedIndex].text;
    finalResume.workName = document.querySelector("#workName").value;
    finalResume.workSkills = document.querySelector("#workSkills")[workSkills.selectedIndex].text;
    finalResume.workAddress = document.querySelector("#workAddress").value;
    finalResume.workCountry = document.querySelector("#workCountry")[workCountry.selectedIndex].text;
    finalResume.workState = document.querySelector("#workState")[workState.selectedIndex].text;
    finalResume.workCity = document.querySelector("#workCity").value;
    finalResume.workZip = document.querySelector("#workZip").value;
    finalResume.workingHere = document.querySelector("#workingHere").checked;
}

function volunteerHistory() {
    finalResume.volunteerTitle = document.querySelector("#volunteerTitle")[volunteerTitle.selectedIndex].text;
    finalResume.volunteerOrg = document.querySelector("#volunteerOrg").value;
    finalResume.volunteerSkills = document.querySelector("#volunteerSkills")[volunteerSkills.selectedIndex].text;
    finalResume.volunteerCity = document.querySelector("#volunteerCity").value;
    finalResume.volunteerYears = document.querySelector("#volunteerYears")[volunteerYears.selectedIndex].text;
}

function educationHistory() {
    finalResume.educationLevel = document.querySelector("#educationLevel")[educationLevel.selectedIndex].text;
    finalResume.educationSchool = document.querySelector("#educationSchool").value;
    finalResume.educationStatus = document.querySelector("#educationStatus")[educationStatus.selectedIndex].text;
    finalResume.educationField = document.querySelector("#educationField").value;
}

// Add/Duplicate Forms

// Add/Delete Duplicate Forms Queries
const btnWorkAdd = document.querySelector("#btnWorkAddForm");
const btnWorkDelete = document.querySelector("#btnWorkDeleteForm");
const btnVolunteerAdd = document.querySelector("#btnVolunteerAddForm");
const btnVolunteerDelete = document.querySelector("#btnVolunteerDeleteForm");
const btnEducationAdd = document.querySelector("#btnEducationAddForm");
const btnEducationDelete = document.querySelector("#btnEducationDeleteForm");

// Enable the "add" button(add duplicate form)
btnWorkAdd.disabled = false;
// Disable the "remove" button(delete duplicate form)
btnWorkDelete.disabled = true;

// Add Work Function
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

// Delete Work Function
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

//Add Button Listener
btnWorkAdd.addEventListener(
  "click",
  addWork
);
// Delete Button Listener
btnWorkDelete.addEventListener(
  "click",
  delWork
);

// Volunteer Forms
// Enable the "add" button(add duplicate form)
btnVolunteerAdd.disabled = false;
// Disable the "remove" button(delete duplicate form)
btnVolunteerDelete.disabled = true;

// Add Volunteer Function
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


//Delete Volunteer 
function delVolunteer() {
  console.log(`vol dup sections: ${num}`)
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

//Add Button Listener
btnVolunteerAdd.addEventListener(
  "click",
  addVolunteer
);
// Delete Button Listener
btnVolunteerDelete.addEventListener(
  "click",
  delVolunteer
);

// Education Forms
// Enable the "add" button(add duplicate form)
btnEducationAdd.disabled = false;
// Disable the "remove" button(delete duplicate form)
btnEducationDelete.disabled = true;

// Add Education Function
function addEducation() {
  // Checks number of duplicated/form sections
  let num = document.querySelectorAll(".cloned-input").length;
  console.log(`Number of form sections: ${num}`);
  // Incremating the id by 1 for every new duplicate form
  let newNum = num + 1;
  console.log(`New ID number to be incremated on next dup form: ${newNum}`);
  let newElem = document.querySelector("#educationEntry" + num);
  console.log(`New ID for cloned form: ${newElem}`);
  // create new clone and change its ID using the newNum value
  let newElemCloned = newElem.cloneNode(true);
  newElemCloned.setAttribute("id", `educationEntry${newNum}`);

  // Header Change
  let header = newElemCloned.querySelector(".heading-ref");
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


//Delete Volunteer 
function delVolunteer() {
  // check how many duplicated sections we currently have
  let num = document.querySelectorAll(".cloned-input").length;

  // Confirmation dialog box
  if (confirm(`Are you sure you wish to remove Volunteer #${num}? This cannot be undone.`)) {
    // remove last section
    document.querySelector("#volunteerEntry" + num).remove();
    // update num
    num = document.querySelectorAll(".cloned-input").length;
    if (num == 1) {
      btnVolunteerDelete.disabled = true;
    }
    if (num < 5) {
      btnVolunteerAdd.disabled = false;
      btnVolunteerAdd.setAttribute("value", "add section");
    }
  }
}

//Add Button Listener
btnVolunteerAdd.addEventListener(
  "click",
  addVolunteer
);
// Delete Button Listener
btnVolunteerDelete.addEventListener(
  "click",
  delVolunteer
);