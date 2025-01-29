var FirstName = prompt("Type your first name: ");
var LastName = prompt("Type your Last name: ");
var BirthYear = parseInt(prompt("Type your birth year: "));

document.getElementById("GFA").innerText="Hello " +FirstName+ " " +LastName+"! How does it feel to be " +(2025-BirthYear)+ " years old?"; 