function addJob(){
    const form1 =document.getElementById('workForm');
    const cln = form1.cloneNode(true); document.getElementById('workForm').appendChild(cln);
}
