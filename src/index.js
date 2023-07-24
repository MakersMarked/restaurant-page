import homeHtml from './home';
import { menuHtml } from './menu';
import { contactHtml } from "./contact";
import './style.css';

const mainHtml = (() => {
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    

    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    homeHtml()
    const header = newElement('nav', body)
    header.setAttribute('id','header');
        body.insertBefore(header, body.firstChild);
    const footer = newElement('div', content);
    footer.setAttribute('id','footer');
        body.insertBefore(footer,body.lastChild)
    const homeBtn = newElement('div',header)
        homeBtn.textContent = 'Home'
        homeBtn.addEventListener('click',() => {
            content.textContent = "";
        homeHtml()
    });
    const menuBtn = newElement('div',header)
        menuBtn.addEventListener('click',  ()=> {
            content.textContent = "";
           return menuHtml()
        });
        menuBtn.textContent = 'Menu'
    const contactBtn = newElement('div',header)
        contactBtn.addEventListener('click',()=> {
            content.textContent = "";
            contactHtml()
        });
        contactBtn.textContent = 'Contact';

})()


