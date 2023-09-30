document.addEventListener('click', function (event) {
    content = document.querySelector('.top-sub-content');
    navBar = content.querySelector('.fa-solid');
    const nav = document.querySelector('nav[data-nav="open"]');
    if (nav && !nav.contains(event.target)) {
        nav.setAttribute('data-nav', 'close');
navBar.classList.add("fa-bars");
        navBar.classList.remove("fa-xmark");
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
     const dataTheme = container.getAttribute('data-theme');

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

   // Get references to the button and car type menu
const button = document.querySelector('.car-type');
const menu = document.getElementById('car-type-menu');
const carTypeOptions = menu.querySelectorAll('li');

// Add a click event listener to each car type option
carTypeOptions.forEach(function(option) {
    option.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Update the button's innerHTML with the selected car type
        button.innerHTML = `${option.textContent}`;
        
        // Hide the car type menu
        menu.style.display = 'none';
        menu.style.opacity = '0';
    });
});

// Add a click event listener to the button to toggle the menu
button.addEventListener('click', function(event) {
    // Toggle the display of the car type menu
    if (menu.style.opacity === '0' || menu.style.opacity === '') {
        menu.style.opacity = '1';
        menu.style.display = 'flex';
    } else {
        menu.style.opacity = '0';
        menu.style.display = 'none';
    }
});
