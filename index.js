// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
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

// part 1 - review
// done

// PART 2 - ADDING ADDITIONAL HTML AND CSS
// modify html
// add provided files

// PART 3 - CREATING THE SUBMENU

// step 1 
const subMenuEl =  document.querySelector("#sub-menu");

// step 2
subMenuEl.style.height = "100%";

// step 3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// step 4
subMenuEl.classList.add("flex-around");

// step 5 - hide subMenuEl
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


