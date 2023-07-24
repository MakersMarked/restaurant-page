const menuHtml = () => {
    const content = document.getElementById('content');
    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    const titleContainer = newElement('div',content);
        titleContainer.setAttribute('id', 'title-container');
        const title = newElement('h1',titleContainer)
            title.classList.add('page-title');
            title.textContent = 'Menu';
        const bodyContainer = newElement('div', content)
            bodyContainer.classList.add('body-container');
        const menuTitle1 = newElement('ul',bodyContainer);
        menuTitle1.classList.add('menu-list');
        menuTitle1.textContent = 'Appetizers';
        const items1 = ['Salad', 'Breadsticks', 'Cheesy Bread'].forEach(dish => {
            const item = newElement('li',menuTitle1)
            item.setAttribute('id',dish)
            item.textContent = dish
    })
    const menuTitle2 = newElement('ul',bodyContainer);
    menuTitle2.classList.add('menu-list');
        menuTitle2.textContent = 'Pizzas';
    const items2 = ['Pepperoni', 'Cheese', 'Hot Honey', 'Hawaiian Heat'].forEach(dish => {
        const item = newElement('li',menuTitle2);
        item.setAttribute('id',dish);
        item.textContent = dish;
})
    const menuTitle3 = newElement('ul',bodyContainer);
    menuTitle3.classList.add('menu-list');
            menuTitle3.textContent = 'Dessert';
        const items3 = ['Pizzookie', 'Peach Cobbler', 'Ice Cream', 'Twisted Cinnamon Bread'].forEach(dish => {
            const item = newElement('li',menuTitle3);
            item.setAttribute('id',dish)
            item.textContent = dish;
        })
};
export {menuHtml}