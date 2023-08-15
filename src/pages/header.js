import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const logo = document.createElement('img');
    logo.src = "./icons/logo.svg";
    logo.alt = "Restaurant logo";
    header.appendChild(logoContainer);
    logoContainer.appendChild(logo)

    const navLinks = document.createElement('div');
    const ul = document.createElement('ul');
    navLinks.classList.add('nav-links');
    
    
    const navItems = [
        { text: 'Home', href: '#', class: 'home-link'},
        { text: 'Menu', href: '#', class: 'menu-link'},
        { text: 'Contact', href: '#', class: 'contact-link'}
    ];

    navItems.forEach(items => {
        const navItem = document.createElement('li');
        const a = document.createElement('a');
        a.href = items.href;
        a.textContent = items.text;
        a.classList = items.class;

        a.addEventListener('click', (event) => {
            event.preventDefault();
            handleSwitch(items.class);
        });

        navItem.appendChild(a);
        ul.appendChild(navItem);
    })

    header.appendChild(navLinks);
    navLinks.appendChild(ul);


    return header;
}


function handleSwitch(tabClass){
    const logo = document.querySelector('.logo-container');

    if(tabClass === 'home-link'){
        createHomePage();
    } else if (tabClass === 'menu-link'){
        createMenuPage();
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => link.classList.add('active'));
        logo.classList.toggle('logo-black');
    } else if (tabClass === 'contact-link'){
        createContactPage();
    }
}



export default createHeader;