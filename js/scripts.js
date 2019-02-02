function addJob(){
    const form1 =document.getElementById('workForm');
    const cln = form1.cloneNode(true); document.getElementById('workForm').appendChild(cln);
}

const finalResume = []

const signUpSubmit = document.querySelector("#signUpSubmit");

signUpSubmit.addEventListener('click', signUp);

function signUp() {
    finalResume.firstName = firstName.value;
    finalResume.lastName = lastName.value;
    finalResume.phoneNumber = phoneNumber.value;
    finalResume.email = email.value;
    finalResume.address = address.value; 
}