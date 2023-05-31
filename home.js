let itemImage; 
const test = document.getElementById('test');
itemImage = itemsArray.slice(0, 5).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true);
    const images = card.querySelector('.image');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';

    test.append(card);

    card.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('hello'); 
    });
});

const test2 = document.getElementById('test2');
itemImage = itemsArray.slice(6, 11).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true);
    const images = card.querySelector('.image');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';

    test2.append(card);

    card.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('hello'); 
    });
});