const mobileNav = () => {
  const headerbtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  // state
  let isMobileNavOpen = false;

  headerbtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;

    if(isMobileNavOpen){
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
      }
    else{
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () =>{
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  );
});

};

export {mobileNav};
