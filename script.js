// Responsive top navigation
const menuButton = document.getElementById('menu-btn');
const siteNavigation = document.getElementById('site-navigation');
menuButton.addEventListener('click', function () {
  const isOpen = siteNavigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.innerHTML = `<i class="fa fa-${isOpen ? 'times' : 'bars'}" aria-hidden="true"></i>`;
});
siteNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNavigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
}));

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

// Hero slideshow: auto-advance, manual controls, dots, and pause on interaction.
const heroSlides = Array.from(document.querySelectorAll('.mySlides'));
const heroDots = Array.from(document.querySelectorAll('.hero-dot'));
let heroIndex = 0;
let heroTimer;

function showHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => {
    slide.style.display = i === heroIndex ? 'block' : 'none';
    slide.setAttribute('aria-hidden', String(i !== heroIndex));
  });
  heroDots.forEach((dot, i) => {
    dot.classList.toggle('is-active', i === heroIndex);
    dot.setAttribute('aria-pressed', String(i === heroIndex));
  });
}

function changeHeroSlide(direction) {
  showHeroSlide(heroIndex + direction);
  restartHeroTimer();
}

function restartHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 5000);
}

const heroSlideshow = document.querySelector('.hero-slideshow');
if (heroSlideshow && heroSlides.length) {
  showHeroSlide(0);
  restartHeroTimer();
  heroSlideshow.addEventListener('mouseenter', () => window.clearInterval(heroTimer));
  heroSlideshow.addEventListener('mouseleave', restartHeroTimer);
  heroSlideshow.addEventListener('focusin', () => window.clearInterval(heroTimer));
  heroSlideshow.addEventListener('focusout', restartHeroTimer);
}

//Clients JS
var slideIndex = 1;
showDivs(slideIndex);
let clientTimer;

function startClientAutoSlide() {
  window.clearInterval(clientTimer);
  if (document.querySelectorAll('.mySlide').length > 1) {
    clientTimer = window.setInterval(() => showDivs(slideIndex + 1), 4000);
  }
}

          function plusDivs(n) {
            showDivs(slideIndex += n);
          }

          function currentDiv(n) {
            showDivs(slideIndex = n);
          }

          function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlide");
            var dots = document.getElementsByClassName("demo");
            if (!x.length || !dots.length) return;
            if (n > x.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
              dots[i].classList.remove("is-active");
            }
            x[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].classList.add("is-active");
          }

const clientShowcase = document.querySelector('.client-showcase');
if (clientShowcase && document.querySelectorAll('.mySlide').length) {
  startClientAutoSlide();
  clientShowcase.addEventListener('mouseenter', () => window.clearInterval(clientTimer));
  clientShowcase.addEventListener('mouseleave', startClientAutoSlide);
  clientShowcase.addEventListener('focusin', () => window.clearInterval(clientTimer));
  clientShowcase.addEventListener('focusout', startClientAutoSlide);
  document.querySelectorAll('.client-controls .demo').forEach(dot => dot.addEventListener('click', startClientAutoSlide));
}

// Show the back-to-top control when the footer enters the viewport.
const backToTop = document.getElementById('back-to-top');
const siteFooter = document.getElementById('site-footer');
if ('IntersectionObserver' in window) {
  const footerObserver = new IntersectionObserver(entries => {
    backToTop.classList.toggle('is-visible', entries[0].isIntersecting);
  }, { threshold: 0.1 });
  footerObserver.observe(siteFooter);
} else {
  window.addEventListener('scroll', () => {
    const footerTop = siteFooter.getBoundingClientRect().top;
    backToTop.classList.toggle('is-visible', footerTop < window.innerHeight);
  }, { passive: true });
}
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
