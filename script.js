let itemImage; 
const test = document.getElementById('test');


window.addEventListener('load', () => {
    console.log('hey');

    itemImage = itemsArray.map(item => {
        const trocObject = document.querySelector('[data-troc-object]');
        const card = trocObject.content.cloneNode(true);
        const images = card.querySelector('.image');
        const name = card.querySelector('.name');
        const description = card.querySelector('.description');
        const category = card.querySelector('.category');

        images.style.backgroundImage = `url('${item.image}')`; 
        images.style.backgroundSize = 'cover';
        images.style.backgroundRepeat = 'no-repeat';
        category.textContent = `${item.category}`; 
        name.textContent = `${item.name}`; 
        description.textContent = `${item.description}`;

        test.append(card);

        card.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('hello'); 
        });
    });
});
