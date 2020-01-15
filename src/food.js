const imgSushi = require('./imgs/Sushi.jpg')
const imgfriedRice = require('./imgs/friedrice.jpg')
const imgLaksa = require('./imgs/laksa.jpg')
const imgBcm = require('./imgs/bcm.jpg')
const imgBkt = require('./imgs/bkt.jpg')
const imgbanMian = require('./imgs/banmian.jpg')
const imgCharKt = require('./imgs/charkwayteow.jpg')
const imgChickenRice = require('./imgs/chickenrice.jpg')
const imgMacs = require('./imgs/mcdonalds.jpg')
const imgDuckRice = require('./imgs/duckrice.jpg')
const imgBeeHoon = require('./imgs/beehoon.jpg')
const imgCarrotCake = require('./imgs/carrotcake.jpg')
const imgCaiFan = require('./imgs/caifan.jpg')
const imgHokkienMee = require('./imgs/hokkienmee.jpg')
const imgKwayChap = require('./imgs/kwaychap.jpg')
const imgMala = require('./imgs/mala.jpg')
const imgMeeRebus = require('./imgs/meerebus.jpg')
const imgMeeSiam = require('./imgs/meesiam.jpeg')
const imgNasiLemak = require('./imgs/nasilemak.jpg')
const imgOysterOm = require('./imgs/oysterom.jpg')
const imgPrawnMee = require('./imgs/prawnmee.jpg')
const imgRotiPrata = require('./imgs/rotiprata.jpg')
const imgZiChar = require('./imgs/zichar.jpg')
const imgSatay = require('./imgs/satay.jpg')
const imgWantonMee = require('./imgs/wantonmee.jpg')
const imgKfc = require('./imgs/kfc.jpg')
const imgBurgerKing = require('./imgs/burgerking.jpg')
const imgThai = require('./imgs/padthai.jpg');
const imgDtf = require('./imgs/dintaifung.jpg')
const imgPasta = require('./imgs/pasta.jpg')
const imgPizza = require('./imgs/pizza.jpg')
const imgKoreanChicken = require('./imgs/koreanchicken.jpg');
const imgRamen = require('./imgs/ramen.jpg')
const imgKoreanBbq = require('./imgs/koreanbbq.jpg')
const imgGerman = require('./imgs/german.jpg')
const imgVietnamese = require('./imgs/vietnamese.jpg')
const imgSteak = require('./imgs/steak.jpg')
const imgBurger = require('./imgs/burger.jpg');
const imgPorridge = require('./imgs/porridge.jpg')
const imgLjs = require('./imgs/ljs.jpg');
const imgSubway = require('./imgs/subway.jpg')
const imgSlicedFishSoup = require('./imgs/slicedfishsoup.jpg')


//default cases
const sushi = {
    name: 'Sushi',
    img: imgSushi,
    atas: 1
}

const friedRice = {
    name: 'Fried Rice',
    img: imgfriedRice,
    atas: 0
}

const laksa = {
    name: 'Laksa',
    img: imgLaksa,
    atas: 0
}

const bcm = {
    name: 'Bak Chor Mee',
    img: imgBcm,
    atas: 0
}

//creating foodFactory
const foodFactory = (name, img, atas) => {
    return  {
        name : name,
        img: img,
        atas: atas
    }
}
const asian = [sushi, friedRice, laksa, bcm];
const atas = [];
const cheap = [];

asian.push(foodFactory('Bak Kut Teh', imgBkt, 0))
asian.push(foodFactory('Ban Mian', imgbanMian, 0))
asian.push(foodFactory('Char Kway Teow', imgCharKt, 0))
asian.push(foodFactory('Chicken Rice', imgChickenRice, 0))
asian.push(foodFactory('Mcdonald\'s', imgMacs, 0))
asian.push(foodFactory('Duck Rice', imgDuckRice, 0))
asian.push(foodFactory('Bee Hoon Soup', imgBeeHoon, 0))
asian.push(foodFactory('Carrot Cake', imgCarrotCake, 0))
asian.push(foodFactory('Cai Fan', imgCaiFan, 0))
asian.push(foodFactory('Hokkien Mee', imgHokkienMee, 0))
asian.push(foodFactory('Kway Chap', imgKwayChap, 0))
asian.push(foodFactory('Mala Xiang Guo', imgMala, 0))
asian.push(foodFactory('Mee Rebus', imgMeeRebus, 0))
asian.push(foodFactory('Mee Siam', imgMeeSiam, 0))
asian.push(foodFactory('Nasi Lemak', imgNasiLemak, 0))
asian.push(foodFactory('Oyster Omelette', imgOysterOm, 0))
asian.push(foodFactory('Prawn Mee', imgPrawnMee, 0))
asian.push(foodFactory('Roti Prata', imgRotiPrata, 0))
asian.push(foodFactory('Zi Char', imgZiChar, 0))
asian.push(foodFactory('Satay', imgSatay, 0))
asian.push(foodFactory('Wanton Mee', imgWantonMee, 0))
asian.push(foodFactory('KFC', imgKfc, 0))
asian.push(foodFactory('Burger King', imgBurgerKing, 0))
asian.push(foodFactory('Thai', imgThai, 1))
asian.push(foodFactory('Dim Sum', imgDtf, 1))
asian.push(foodFactory('Italian Pasta', imgPasta, 1))
asian.push(foodFactory('Pizza', imgPizza, 1))
asian.push(foodFactory('Korean Fried Chicken', imgKoreanChicken, 1))
asian.push(foodFactory('Ramen', imgRamen, 1))
asian.push(foodFactory('Korean BBQ', imgKoreanBbq, 1))
asian.push(foodFactory('German Sausages', imgGerman, 1))
asian.push(foodFactory('Vietnamese', imgVietnamese, 1))
asian.push(foodFactory('Steak', imgSteak, 1))
asian.push(foodFactory('Premium Burgers', imgBurger, 1))
asian.push(foodFactory('Porridge', imgPorridge, 0))
asian.push(foodFactory('Subway', imgSubway, 0))
asian.push(foodFactory('Long John\'s Silver', imgLjs, 0))
asian.push(foodFactory('Sliced Fish Soup', imgSlicedFishSoup, 0))

asian.forEach(element => {
    if (element.atas === 1) {
        atas.push(element)
    }
});

asian.forEach(element => {
    if (element.atas === 0){
        cheap.push(element);
    }
})

export {asian, atas, cheap};

