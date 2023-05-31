let itemImage; 
const test = document.getElementById('test');
itemImage = itemsArray.slice(0, 5).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true).children[0];
    const images = card.querySelector('.image');
    const name= card.querySelector('.name');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';
    name.textContent = `${item.name}`; 

    test.append(card);

    card.addEventListener('click', () => {
        window.location.href = './detail.html';
        localStorage.setItem('nameObject', item.name);
    });
});

const test2 = document.getElementById('test2');
itemImage = itemsArray.slice(6, 11).map(item => {
    const trocObject = document.querySelector('[data-troc-object]');
    const card = trocObject.content.cloneNode(true).children[0];
    const images = card.querySelector('.image');
    const name= card.querySelector('.name');

    images.style.backgroundImage = `url('${item.image}')`; 
    images.style.backgroundSize = 'cover';
    images.style.backgroundRepeat = 'no-repeat';
    name.textContent = `${item.name}`; 

    test2.append(card);

    card.addEventListener('click', () => {
        window.location.href = './detail.html';
        localStorage.setItem('nameObject', item.name);
    });
});