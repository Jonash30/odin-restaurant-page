import createHeader from "./header";
import { clearContent } from "./clearContent";

const createContactPage = () => {
    clearContent();
    const content = document.querySelector('.content');
    const contact = document.createElement('div');
    const header = createHeader();
    contact.classList.add('contact');
    header.classList.add('contact-header');
    content.appendChild(contact);
    contact.appendChild(header);

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    const getInTouch = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.textContent = 'Get in touch';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    getInTouch.classList.add('get-in-touch');
    contactContent.appendChild(getInTouch);
    getInTouch.appendChild(h1);
    getInTouch.appendChild(p);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    const email = document.createElement('div');
    const address = document.createElement('div');
    const phone = document.createElement('div');
    email.classList.add('email');
    address.classList.add('address');
    phone.classList.add('phone');
    const emailh3 = document.createElement('h3');
    const addh3 = document.createElement('h3');
    const phoneh3 = document.createElement('h3');
    const emailspan = document.createElement('span');
    const addspan = document.createElement('span');
    const phonespan = document.createElement('span');
    emailh3.textContent = 'Email';
    addh3.textContent = 'Address';
    phoneh3.textContent = 'Phone';
    emailspan.textContent = 'GoodFood@sample.com';
    addspan.textContent = 'Random bldg #0000, Manila Philippines';
    phonespan.textContent = '+(63) - 999 - 0000 - 888';
    email.appendChild(emailh3);
    email.appendChild(emailspan);
    address.appendChild(addh3);
    address.appendChild(addspan);
    phone.appendChild(phoneh3);
    phone.appendChild(phonespan);
    contactInfo.appendChild(email);
    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactContainer.appendChild(contactInfo);
    contactContent.appendChild(contactContainer);


    const form = document.createElement('form');
    form.setAttribute('action', "");
    form.setAttribute('class', 'form');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Your Name*');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Your Email*');

    const subjectInput = document.createElement('input');
    subjectInput.setAttribute('type', 'text');
    subjectInput.setAttribute('placeholder', 'Your Subject*');

    const textArea = document.createElement('textarea');
    textArea.setAttribute('cols', '30');
    textArea.setAttribute('rows', '5');
    textArea.setAttribute('class', 'message-input');
    textArea.setAttribute('placeholder', 'Type your message here*');

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Send message');

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(subjectInput);
    form.appendChild(textArea);
    form.appendChild(submitBtn);
    contactContainer.appendChild(form);

    contact.appendChild(contactContent)

}

export default createContactPage;