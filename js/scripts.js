//JS object to store all resume info
const finalResume = []

//Query selectors for buttons
const signUpSubmit = document.querySelector("#signUpSubmit");

//Event Listeners on buttons to store info
signUpSubmit.addEventListener('click', signUp);

//Submit Functions
function signUp() {
    finalResume.firstName = document.querySelector("#firstName").value;
    finalResume.lastName = document.querySelector("#lastName").value;
    finalResume.phoneNumber = document.querySelector("#phoneNumber").value;
    finalResume.email = document.querySelector("#email").value;
    finalResume.address = document.querySelector("#address").value; 
    finalResume.country = document.querySelector("#country").value;
    finalResume.state = document.querySelector("#state").value;
    finalResume.zip = document.querySelector("#zip").value;
}