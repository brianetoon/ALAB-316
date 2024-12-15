// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about'},

  { text: 'catalog', href: '#', 
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },

  { text: 'orders', href: '#' , 
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  
  { text: 'account', href: '#', 
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// DOM MANIPULATION (PART ONE)

// PART 1 - GETTING STARTED

// step 1 select main, store in mainEl
const mainEl = document.querySelector("main");

// step 2 set bg color to
mainEl.style.backgroundColor = "var(--main-bg)";

// step 3
const title = document.createElement("h1");
title.textContent = "Dom Manipulation";
mainEl.appendChild(title);

// step 4
mainEl.classList.add("flex-ctr");


// PART 2 - CREATING A MENU BAR

// step 1
const topMenuEl = document.querySelector("#top-menu");
// step 2
topMenuEl.style.height = "100%";
// step 3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// step 4 
topMenuEl.classList.add("flex-around");


// PART 3 - ADDING MENU BUTTONS

// step 1
menuLinks.forEach(link => {
  // step 2
  const a = document.createElement("a");
  // step 3
  a.setAttribute("href", link.href);
  // step 4
  a.textContent = link.text;
  // step 5
  topMenuEl.appendChild(a);
});


// DOM MANIPULATION (PART TWO)

// PART 1 - REVIEW
// done

// PART 2 - ADDING ADDITIONAL HTML AND CSS
// modify html
// add provided files

// PART 3 - CREATING THE SUBMENU

// step 1 
const subMenuEl = document.querySelector("#sub-menu");

// step 2
subMenuEl.style.height = "100%";

// step 3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// step 4
subMenuEl.classList.add("flex-around");

// step 5 
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// PART 4 - ADDING MENU INTERACTION

const topMenuLinks = document.querySelectorAll("#top-menu a");

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  // cached for later
  const link = e.target;

  if (e.target.localName !== "a") {
    return;
  }

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }

  topMenuLinks.forEach((link) => {
    if (link.textContent !== e.target.textContent) {
      link.classList.remove("active");
    }
  });

  // PART 5 - ADDING SUBMENU INTERACTION

  menuLinks.forEach(link => {
    if (link.text === e.target.textContent) {
      if (link.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubmenu(link.subLinks);
      } else {
        subMenuEl.style.top = "0";
      }
    }
  });

  if (e.target.textContent === "about") {
    title.textContent = e.target.textContent;
  }
});

function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';

  // iterate over sublinks
  subLinks.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;

    subMenuEl.appendChild(a);
  });
}

subMenuEl.addEventListener("click", e => {
  e.preventDefault();

  if (e.target.localName !== "a") {
    return;
  }

  subMenuEl.style.top = "0";

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  title.textContent = e.target.textContent;
});
