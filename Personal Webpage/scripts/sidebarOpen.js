const toggleBtn = document.querySelector('.togglebtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar-open');
});