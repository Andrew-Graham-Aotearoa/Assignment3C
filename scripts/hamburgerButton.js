//wait for page to be fully load before running any script
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');

  // function to show menu when pressing button on closed menu
  function openMenu() {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  }

  // function to close menu when  pressing button on open menu
  function closeMenu() {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }

  //function to check if menu is open
  function isMenuOpen() {
    return !menu.classList.contains('hidden');
  }

  //listens for if the button is pressed
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    isMenuOpen() ? closeMenu() : openMenu();
  });

  //closes menu automatically if the menu is clicked off of
  document.addEventListener('click', (e) => {
    if (isMenuOpen() && !menu.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });

  //closes menu and hides button if page is resized to larger than mobile
  const observer = new ResizeObserver(() => {
    if (window.innerWidth >= 768 && isMenuOpen()) {
      closeMenu();
    }
  });
  observer.observe(document.body);
});
