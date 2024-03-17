document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to login page
  });
  
  document.getElementById('sidebarToggleBtn').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.style.right === '-250px') {
      sidebar.style.right = '0';
    } else {
      sidebar.style.right = '-250px';
    }
  });
  