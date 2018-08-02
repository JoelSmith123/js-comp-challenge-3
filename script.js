var body = document.querySelector('body');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var sidebar = document.querySelector('.sidebar');

window.addEventListener('load', sidebarCollapse)
window.addEventListener('resize', sidebarCollapse)

hamburgerMenu.addEventListener('click', function() {
  if (sidebar.classList.contains('sidebar-hide')) {
    sidebar.classList.remove('sidebar-hide');
    body.classList.remove('body-sidebar-collapse');
  } else {
    sidebar.classList.add('sidebar-hide');
    body.classList.add('body-sidebar-collapse');
  }
})

 function sidebarCollapse() {
  if ( $(window).width() < 900) {      
    sidebar.classList.add('sidebar-hide');
    body.classList.add('body-sidebar-collapse');
  } else if ( $(window).width() > 900) {
    sidebar.classList.remove('sidebar-hide');
    body.classList.remove('body-sidebar-collapse');
  }
}

