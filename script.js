// Toggle sidebar menu on mobile/tablet
document.getElementById('menu-btn').addEventListener('click', function () {
  const sidebar = document.getElementById('mySidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar.classList.contains('w3-show')) {
    sidebar.classList.remove('w3-show');
    overlay.style.display = 'none';
  } else {
    sidebar.classList.add('w3-show');
    overlay.style.display = 'block';
  }
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('mySidebar').classList.remove('w3-show');
  this.style.display = 'none';
});

// Accordion toggle function (only one open at a time)
function toggleAccordion(id) {
  const acc = document.querySelectorAll('#services > div.w3-hide.w3-show');
  acc.forEach(section => {
    if (section.id !== id) section.classList.remove('w3-show');
  });

  const element = document.getElementById(id);
  if (element.classList.contains('w3-show')) {
    element.classList.remove('w3-show');
  } else {
    element.classList.add('w3-show');
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
