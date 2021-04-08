// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("#addForm");
let table = document.querySelector("#employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

const $ = (id) => {
    return document.getElementById(id);
};
// ADD EMPLOYEE

 // PREVENT FORM SUBMISSION
 $('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES

// let table = document.querySelector('#submit').value;
let row  = table.insertRow(table.lenght);
// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
const cellID = row.insertCell(0);
const cell1 = row.insertCell(1);
const cell2 = row.insertCell(2);
const cell3 = row.insertCell(3);
const cell4 = row.insertCell(4);
const cell5 = row.insertCell(5);
// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
let newText = document.createTextNode($('id').value);
cellID.appendChild(newText);
const nameID = document.createTextNode($('name').value);
cell1.appendChild(nameID);
const ext = document.createTextNode($('extension').value);
cell2.appendChild(ext);
const email = document.createTextNode($('email').value);
cell3.appendChild(email);
const dep = document.createTextNode($('department').value);
cell4.appendChild(dep);
// CREATE THE DELETE BUTTON
let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right';
deleteBtn.appendChild(document.createTextNode('X'));
cell5.appendChild(deleteBtn);

table.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this?')) {
     if(table.deleteRow(e.target.tr)) {
        row.removeChild(e.target.parentElement);
     } 
    }
  
     
 });


document.getElementById('addForm').reset();
// SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById('addForm').focus();

});
 
// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

// let btn = document.getElementById("btn");
// let disp = document.getElementById("empCount");

// btn = function () {
//     count++;
//     disp.innerHTML = count;
// }

