import homeHtml from "./home";
import { menuHtml } from "./menu";
import { contactHtml } from "./contact";

const mainHtml = (() => {
    const body = document.querySelector('body');
    const content = document.getElementById('content');
    

    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    homeHtml()
    const header = newElement('div', body)
        body.insertBefore(header, body.firstChild);
    const homeBtn = newElement('button',header)
        homeBtn.textContent = 'Home'
        homeBtn.addEventListener('click',() => {
            content.textContent = "";
        homeHtml()
    });
        
    const menuBtn = newElement('button',header)
        menuBtn.addEventListener('click',  ()=> {
            content.textContent = "";
           return menuHtml()
        });
        menuBtn.textContent = 'Menu'
    const contactBtn = newElement('button',header)
        contactBtn.addEventListener('click',()=> {
            content.textContent = "";
            contactHtml()
        });
        contactBtn.textContent = 'Contact'
})()


