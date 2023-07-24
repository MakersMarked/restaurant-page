'use strict'
import pizza1 from './pizza1.png';
 const homeHtml = () => {
    const content = document.getElementById('content');
    const newElement = (element, parentToAppend) => {
        const create = document.createElement(element);
        parentToAppend.append(create);
        return create;
    }
    // Hero container
    const titleContainer = newElement('div',content);
        titleContainer.setAttribute('id', 'title-container');
        const title = newElement('h1',titleContainer)
        title.classList.add('page-title');
            title.textContent = 'Home';
        // Body container
    const bodyContainer = newElement('div', content)
    bodyContainer.classList.add('body-container');
        const aboutUs = newElement('p', bodyContainer);
        aboutUs.setAttribute('id','about-para');
            aboutUs.textContent = `A classy but relaxed sports bar and pizza restaurant
                awaits when you visit Jordan's Pizza. We feature a diverse menu,
                and a large selection of beers at our sports bar in San Diego, CA,
                where you can feel at home while visiting with friends and watching the game
                on one of our many TVs screens, all while enjoying some fine foods made fresh
                each day in our kitchen.`;
        // const homeImg = new Image();
        // homeImg.setAttribute('id','home-img')
        // homeImg.src = pizza1
        // homeImg.style = ('height: 50vh;')
        // bodyContainer.append(homeImg)
        // const ghLogo = newElement('');
};

export default homeHtml