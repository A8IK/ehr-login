// document.getElementById('logoutBtn').addEventListener('click', function() {
//     window.location.href = 'index.html'; // Redirect to login page
//   });
  
//   document.getElementById('sidebarToggleBtn').addEventListener('click', function() {
//     var sidebar = document.querySelector('.sidebar');
//     if (sidebar.style.right === '-250px') {
//       sidebar.style.right = '0';
//     } else {
//       sidebar.style.right = '-250px';
//     }
//   });
  

const labels = document.querySelectorAll(".custom-sidebar .label");

labels.forEach((label, index) => {
  label.style.transitionDelay = `${index * 50}ms`;
});

const sidebarBtn = document.querySelector(".custom-sidebar .sidebar-btn");
const customSidebar = document.querySelector(".custom-sidebar");

sidebarBtn.addEventListener("click", () => {
  customSidebar.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', function() {
  const doctorForm = document.getElementById('doctorForm');

  doctorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
  });

  const editButton = document.querySelector('.btn-edit');
  editButton.addEventListener('click', function() {
    // Add your edit button logic here
  });
});

// function toggleForm() {
//   var form = document.getElementById('doctorForm');
//   form.style.display = (form.style.display === 'block') ? 'none' : 'block';
// }

document.getElementById('/image/doctor.svg').addEventListener('click', function() {
  var container = document.getElementById('container');
  container.style.display = (container.style.display === 'block') ? 'none' : 'block';
});

