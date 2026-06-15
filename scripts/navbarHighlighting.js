//wait for page to be fully load before running any script
document.addEventListener("DOMContentLoaded", () => {

  // Active link highlighting (Makes current page look bold in navbar)
  const links = document.querySelectorAll('.nav-link');

  //find what page the current page is
  links.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkFile = linkHref.split('/').pop().split('?')[0];
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    const isHome = (linkFile === 'index.html' || linkFile === '') &&
      (currentFile === '' || currentFile === 'index.html');
    const isMatch = isHome || (linkFile !== '' && linkFile === currentFile);

    //make navbar page text bold for current page
    if (isMatch) {
      link.classList.add('active-link', 'font-bold');
      link.setAttribute('aria-current', 'page');

      // show purple highlighting rectangle
      if (!link.closest('#mobileMenu')) {
        link.classList.add(
          'relative',
          'before:content-[""]',
          'before:absolute',
          'before:top-[-26px]', 
          'before:left-0',
          'before:w-full',
          'before:h-[8px]',
          'before:bg-middle-purple', 
        );
      }


    }
  })
});