//! VARIABLES-----

const PAGINATION = document.querySelector('.menu-btn__container');
const collectionCard = document.querySelectorAll('.menu__card')
const collectionCoffeeCard = document.querySelectorAll('.card-coffee');

const collectionBtnFilter = document.querySelectorAll('.tab-item');
const menuCard = document.querySelectorAll('.menu__card')
const btnCoffee = document.querySelector('.btn_coffee');
const btnTea = document.querySelector('.btn_tea');
const btnDessert = document.querySelector('.btn_dessert');

//!  DATA ------

const dataCardTea = [
    {
        id: 'moroccan',
        className: "menu__card card-tea",
        imgToSource: './assets/png/tea-1.png',
        imgAlt:'Moroccan',
        title:'Moroccan',
        textCard: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
        priceCard:'$4.50'
    },
    {
        id: 'ginger',
        className: "menu__card card-tea",
        imgToSource: './assets/png/tea-2.png',
        imgAlt:'Ginger',
        title : 'Ginger',
        textCard: 'Original black tea with fresh ginger, lemon and honey',
        priceCard:'$5.00'
    },
    {
        id: 'cranberry',
        className: "menu__card card-tea",
        imgToSource: './assets/png/tea-3.png',
        imgAlt:'Cranberry',
        title: 'Cranberry',
        textCard: 'Invigorating black tea with cranberry and honey',
        priceCard:'$5.00'
    },
    {
        id: 'sea-buckthorn',
        className: "menu__card card-tea",
        imgToSource: './assets/png/tea-4.png',
        imgAlt:'Sea buckthorn',
        title:'Sea buckthorn',
        textCard: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
        priceCard:'$5.50'
    }
]
const dataCardDesserts = [
    {
        id: 'marble-cheesecake',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-1.png',
        imgAlt:'Marble cheesecake',
        title:'Marble cheesecake',
        textCard: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
        priceCard:'$3.50'
    },
    {
        id: 'red-velvet',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-2.png',
        imgAlt:'Red velvet',
        title:'Red velvet',
        textCard: 'Layer cake with cream cheese frosting',
        priceCard:'$4.00'
    },
    {
        id: 'cheesecakes',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-3.png',
        imgAlt:'Cheesecakes',
        title:'Cheesecakes',
        textCard: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
        priceCard:'$4.50'
    },
    {
        id: 'creme-brulee',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-4.png',
        imgAlt:'Creme brulee',
        title:'Creme brulee',
        textCard: 'Delicate creamy dessert in a caramel basket with wild berries',
        priceCard:'$4.00'
    },
    {
        id: 'pancakes',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-5.png',
        imgAlt:'Pancakes',
        title:'Pancakes',
        textCard: 'Tender pancakes with strawberry jam and fresh strawberries',
        priceCard:'$4.50'
    },
    {
        id: 'honey-cake',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-6.png',
        imgAlt:'Honey cake',
        title:'Honey cake',
        textCard: 'Classic honey cake with delicate custard',
        priceCard:'$4.50'
    },
    {
        id: 'chocolate-cake',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-7.png',
        imgAlt:'Chocolate cake',
        title:'Chocolate cake',
        textCard: 'Cake with hot chocolate filling and nuts with dried apricots',
        priceCard:'$5.50'
    },
    {
        id: 'black-forest',
        className: "menu__card card-desserts",
        imgToSource: './assets/png/dessert-8.png',
        imgAlt:'Black forest',
        title:'Black forest',
        textCard: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
        priceCard:'$6.50'
    },
]


window.onload = function() {
    btnCoffee.classList.add('btnFilter-active')
    filterChecked();



}




//! FUNCTIONS-----

const filterChecked = () => {             //* when check filter button to menu
    PAGINATION.addEventListener('click',(el) => {
        const menuCard = document.querySelectorAll('.menu__card');
        const collectionDessertsCard = document.querySelectorAll('.card-desserts');
        const menuCatalog = document.querySelector('.menu__catalog');
        const checking = el.target;
        if(el.composedPath().includes()){
            console.log(checking)
        }
        switch (checking) {
            case  btnTea:
                collectionBtnFilter.forEach(el => {el.classList.remove("btnFilter-active")})
                btnTea.classList.add('btnFilter-active')
                collectionCoffeeCard.forEach(el => {el.classList.add('hiddenCard')})
                collectionDessertsCard.forEach(el => {el.classList.add('hiddenCard')})
                if(!checkForAvailability(menuCard, 'card-tea')){
                    cardToCatalogGenerated(dataCardTea);
                    const collectionTeaCard = document.querySelectorAll('.card-tea');

                }else {
                    collectionTeaCard.forEach(el => { el.classList.remove('hiddenCard') })
                }
                break;

                case btnCoffee:
                    collectionBtnFilter.forEach(el => {el.classList.remove("btnFilter-active")});
                    btnCoffee.classList.add('btnFilter-active');
                    collectionTeaCard.forEach(el => {el.classList.add('hiddenCard')});
                    collectionDessertsCard.forEach(el => {el.classList.add('hiddenCard')});
                    collectionCoffeeCard.forEach(el => { el.classList.remove('hiddenCard') });
                    break;
                case btnDessert:
                    collectionBtnFilter.forEach(el => {el.classList.remove("btnFilter-active")})
                    btnDessert.classList.add('btnFilter-active')
                    collectionCoffeeCard.forEach(el => {el.classList.add('hiddenCard')})
                    collectionTeaCard.forEach(el => {el.classList.add('hiddenCard')})
                    if(!checkForAvailability(menuCard, 'card-desserts')){
                        cardToCatalogGenerated(dataCardDesserts);
                    }else {
                        collectionDessertsCard.forEach(el => { el.classList.remove('hiddenCard') })
                    }
                    break;
        }

    })
}
const checkForAvailability = (collection, str) => {
    for( let i = 0; i < collection.length; i++) {
        if( collection[i].classList.contains(str)){
            return true;
        }

    }
    return false;
}

const constructorMenuCard = (id,className,urlImg,alt,title,text,price) => {
    const div = document.createElement('div');
    div.id = id;
    div.className = className;
    document.querySelector('.menu__catalog').appendChild(div);

    const divToImg = document.createElement('div');
    divToImg.className = 'card__block';
    div.appendChild(divToImg);

    const imgCard = document.querySelector('img');
    imgCard.src = urlImg;
    imgCard.alt = alt;
    divToImg.appendChild(imgCard);

    const describe = document.createElement('div');
    describe.className = 'menu-description';
    div.appendChild(describe);

    const titleCard = document.createElement('h4');
    titleCard.className = 'card__subTitle';
    titleCard.textContent = title;
    describe.appendChild(titleCard);

    const textCard = document.querySelector('p');
    textCard.className = 'card__text';
    textCard.textContent = text;
    describe.appendChild(textCard);

    const priceCard = document.createElement('span');
    priceCard.className = 'card__price';
    priceCard.textContent = price;
    describe.appendChild(priceCard);
}

const cardToCatalogGenerated = (data) => {
    data.forEach(ob => {
        constructorMenuCard(ob.id,ob.className,ob.imgToSource,ob.imgAlt,ob.title,ob.textCard,ob.priceCard)
    });
}