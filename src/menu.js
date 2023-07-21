const menuHtml = () => {
    const content = document.getElementById('content');
    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    const title = newElement('h1',content);
    title.textContent = 'Menu';

}
export {menuHtml}