let itemImage; 
const test = document.getElementById('test');

window.addEventListener('load', () => {
    console.log('hey');

let Item21 = new Items("./assets/plancha-electrique", "Plancha électrique", "Plancha électrique pour griller et cuisiner des aliments de manière saine et savoureuse.", "cuisine");
let Item22 = new Items("./assets/appareil-fitness", "Appareil de fitness", "Appareil d'exercice pour le cardio-training et le renforcement musculaire à domicile.", "Sport");
let Item23 = new Items("./assets/sac-a-main", "Sac à main", "Sac à main élégant et intemporel en cuir de haute qualité.", "Esthétique");
let Item24 = new Items("./assets/imprimante-multifonction", "Imprimante multifonction", "Imprimante, scanner et photocopieur sans cartouches d'encre, avec une grande capacité de réservoir.", "Electronique");
let Item25 = new Items("./assets/table-de-ping-pong", "Table de ping-pong", "Table de ping-pong de qualité professionnelle pour des parties amusantes en intérieur ou en extérieur.", "Sport");
let Item26 = new Items("./assets/kit-peinture-artistique", "Kit de peinture artistique", "Ensemble complet de peintures, pinceaux et toiles pour les amateurs d'art.", "Art");
let Item27 = new Items("./assets/parfum-luxe", "Parfum de luxe", "Parfum féminin élégant et raffiné avec des notes florales et orientales.", "Esthétique");
let Item28 = new Items("./assets/talkie-walkie", "Talkie-walkie", "Talkie-walkie étanche pour une communication fiable lors des activités en plein air.", "Electronique");
let Item29 = new Items("./assets/enceinte-intelligente", "Enceinte intelligente", "Enceinte connectée avec commande vocale et intégration d'assistants virtuels.", "Electronique");
let Item30 = new Items("./assets/zelda-botw", "Jeu vidéo", "Jeu d'aventure épique dans un vaste monde ouvert, rempli d'exploration et de défis.", "Jeu");

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
    test.innerHTML = html;
});
