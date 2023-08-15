import createHeader from "./header";
import {clearContent} from './clearContent';

const createHomePage = () => {
    clearContent();
    const content = document.querySelector('.content');
    const home = document.createElement('div');
    const header = createHeader();
    home.classList.add('home');
    content.appendChild(home);

    const homeContent = document.createElement('div');
    const about = document.createElement('div');
    homeContent.classList.add('home-content');
    about.classList.add('about');
    home.appendChild(homeContent);
    home.appendChild(about);
    homeContent.appendChild(header);

    const homeContainer = document.createElement('div');
    const homeHeading = document.createElement('h1');
    const homeParagraph = document.createElement('p');
    const homeMenuBtn = document.createElement('a');
    homeContainer.classList.add('home-container');
    homeMenuBtn.classList.add('view-menu-btn');
    homeHeading.textContent = 'Only taste is real for food';
    homeParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    homeMenuBtn.textContent = 'View Menu';
    homeContainer.appendChild(homeHeading);
    homeContainer.appendChild(homeParagraph);
    homeContainer.appendChild(homeMenuBtn);
    homeContent.appendChild(homeContainer);

    const aboutContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const aboutImg = document.createElement('img');
    const aboutInfo = document.createElement('div');
    const aboutH2 = document.createElement('h2');
    const aboutParagpraph = document.createElement('p');
    aboutContainer.classList.add('about-container');
    imgContainer.classList.add('about-img'); 
    aboutInfo.classList.add('about-info')
    aboutImg.src = "./images/about-img.jpg";
    aboutImg.alt = "Restaurant Image"; 
    aboutH2.textContent = 'Good Food';
    aboutParagpraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    aboutContainer.appendChild(imgContainer);
    aboutContainer.appendChild(aboutInfo);
    imgContainer.appendChild(aboutImg);
    aboutInfo.appendChild(aboutH2);
    aboutInfo.appendChild(aboutParagpraph);
    about.appendChild(aboutContainer);

}

export default createHomePage;



