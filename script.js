// const labels = document.querySelectorAll(".custom-sidebar .label");

// labels.forEach((label, index) => {
//   label.style.transitionDelay = `${index * 50}ms`;
// });

const sidebarBtn = document.querySelector(".custom-sidebar .sidebar-btn");
const customSidebar = document.querySelector(".custom-sidebar");
const divContainer = document.querySelector('#doctorForm');
sidebarBtn.addEventListener("click", () => {
  customSidebar.classList.toggle("active");
  
});
console.log("Experiment for showing or hiding123")

function showDoctorForm() {
  var doctorFormContainer = document.getElementById('doctorFormContainer');
  console.log("Experiment for showing or hiding12344")
  if (doctorFormContainer.style.display === 'none') {
    doctorFormContainer.style.display = 'block';
    console.log("Experiment for showing or hiding12345")
  } 
  else {
    doctorFormContainer.style.display = 'none';
    console.log("Experiment for showing or hiding12346")
  }
}

function hideDoctorForm() {
  var doctorFormContainer = document.getElementById('doctorFormContainer');
  doctorFormContainer.style.display = 'none';
  document.getElementById('cancelButton').addEventListener('click', hideDoctorForm);
}


// Get references to the button and form elements
// const toggleButton = document.getElementById('doctor');
// const myForm = document.getElementById('form-container');

