const contactHtml = () => {
    const content = document.getElementById('content');
    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    const title = newElement('h1',content);
    title.classList.add('page-title');
    title.textContent = 'Contact Us';
    
}
export { contactHtml }