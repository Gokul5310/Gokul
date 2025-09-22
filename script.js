// Navbar motion
const navbar = document.querySelector('.navbar'); // or '#navbar' if you have id

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    navbar.style.transform = 'translateY(-100%)'; // slide up out of view
  } else {
    // scrolling up
    navbar.style.transform = 'translateY(0)'; // slide back down
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});