window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#595cb6'; 
  } else {
    navbar.style.backgroundColor = '#878bff'; 
  }
});
