document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav[data-nav="open"]');
    if (nav && !nav.contains(event.target)) {
        nav.setAttribute('data-nav', 'close');
    }
  });
  
  read=()=>{
    nav = document.querySelector('nav');
    content = document.querySelector('.top-sub-content');
    navBar = content.querySelector('.fa-solid');
    currentNavState = nav.getAttribute('data-nav');
    return[nav,content,navBar,currentNavState];
  }

  function navbar() {
    const[nav,content,navBar,currentNavState]=read();
    if (currentNavState === 'open') {
        nav.setAttribute('data-nav', 'close');
        navBar.classList.add("fa-bars");
        navBar.classList.remove("fa-xmark");
    } else {
        nav.setAttribute('data-nav', 'open');
        navBar.classList.remove("fa-bars");
        navBar.classList.add("fa-xmark");
    }
  }
  // this also
  function navibar() {
    const[nav,content,navBar,currentNavState]=read();
    if (currentNavState === 'open'){
    nav.setAttribute('data-nav', 'close');
    navBar.classList.add("fa-bars");
    navBar.classList.remove("fa-xmark");
    } 
  }
  
  function scrollToSection(clickedElement) {
    const targetId = clickedElement.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    navibar();
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function toggleDarkMode() { 
    const container = document.querySelector(':root');
     const buttonDarkMode = document.querySelector('#toggleDarkMode');
     const logo = document.querySelector('.logo');
     const dataTheme = container.getAttribute('data-theme');
       logo.classList.toggle("invert");
     
     if(dataTheme === 'dark') {
       container.setAttribute('data-theme', 'light');
       buttonDarkMode.classList.add("fa-sun");
       buttonDarkMode.classList.remove("fa-moon");
     } else {
       container.setAttribute('data-theme', 'dark');
       buttonDarkMode.classList.remove("fa-sun");
       buttonDarkMode.classList.add("fa-moon");
     }
   }