import createHeader from "./header";
import {clearContent} from "./clearContent";

const createMenuPage = () => {
    clearContent();
    const content = document.querySelector('.content');
    const menu = document.createElement('div');
    const header = createHeader();
    menu.classList.add('menu')
    menu.appendChild(header);
    content.appendChild(menu);

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    const menuLinks = document.createElement('div');
    menuLinks.classList.add('menu-links');
    const ul = document.createElement('ul');

    const menuItemLinks = [
        { text: 'Drinks', href: '#', class: 'drinks'},
        { text: 'Lunch', href: '#', class: 'lunch'},
        { text: 'Dinner', href: '#', class: 'dinner'}
    ]

    menuItemLinks.forEach(items => {
        const itemLinks = document.createElement('li');
        const a = document.createElement('a');

        a.href = items.href;
        a.textContent = items.text;
        a.classList = items.class;

        itemLinks.appendChild(a);
        ul.appendChild(itemLinks);
    })

    menuLinks.appendChild(ul);
    menuContent.appendChild(menuLinks);
    menu.appendChild(menuContent);

    const menuCategories = [
        {
            className: 'drink-items menu-items',
            items: [
                './images/lemonade-img.jpg',
                './images/margarita-img.jpg',
                './images/beer-img.jpg'
            ]
        }
    ]

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    menuCategories.forEach((category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = category.className;

        category.items.forEach((itemSrc) => {
            const image = document.createElement('img');
            image.src = itemSrc;
            image.alt = ' ';
            image.className = 'items';
            categoryDiv.appendChild(image);
        })

        menuItemsContainer.appendChild(categoryDiv);
    })
    
    menuContent.appendChild(menuItemsContainer);

}

export default createMenuPage;