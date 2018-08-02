var body = document.querySelector('body');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var sidebar = document.querySelector('.sidebar');

hamburgerMenu.addEventListener('click', function() {
  if (sidebar.classList.contains('sidebar-hide')) {
    sidebar.classList.remove('sidebar-hide');
    body.classList.remove('body-sidebar-collapse');
  } else {
    sidebar.classList.add('sidebar-hide');
    body.classList.add('body-sidebar-collapse');
  }
})