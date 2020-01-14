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

//default cases
const sushi = {
    name: 'Sushi',
    img: imgSushi
}

const friedRice = {
    name: 'Fried Rice',
    img: imgfriedRice
}

const laksa = {
    name: 'Laksa',
    img: imgLaksa
}

const bcm = {
    name: 'Bak Chor Mee',
    img: imgBcm
}

//creating foodFactory
const foodFactory = (name, img) => {
    return  {
        name : name,
        img: img
    }
}
const asian = [sushi, friedRice, laksa, bcm]

asian.push(foodFactory('Bak Kut Teh', imgBkt))
asian.push(foodFactory('Ban Mian', imgbanMian))
asian.push(foodFactory('Char Kway Teow', imgCharKt))
asian.push(foodFactory('Chicken Rice', imgChickenRice))
asian.push(foodFactory('Mcdonald\'s', imgMacs))
asian.push(foodFactory('Duck Rice', imgDuckRice))
asian.push(foodFactory('Bee Hoon Soup', imgBeeHoon))
asian.push(foodFactory('Carrot Cake', imgCarrotCake))
asian.push(foodFactory('Cai Fan', imgCaiFan))
asian.push(foodFactory('Hokkien Mee', imgHokkienMee))
asian.push(foodFactory('Kway Chap', imgKwayChap))
asian.push(foodFactory('Mala Xiang Guo', imgMala))
asian.push(foodFactory('Mee Rebus', imgMeeRebus))
asian.push(foodFactory('Mee Siam', imgMeeSiam))
asian.push(foodFactory('Nasi Lemak', imgNasiLemak))
asian.push(foodFactory('Oyster Omelette', imgOysterOm))
asian.push(foodFactory('Prawn Mee', imgPrawnMee))
asian.push(foodFactory('Roti Prata', imgRotiPrata))
asian.push(foodFactory('Zi Char', imgZiChar))
asian.push(foodFactory('Satay', imgSatay))
asian.push(foodFactory('Wanton Mee', imgWantonMee))
asian.push(foodFactory('Kfc', imgKfc))
asian.push(foodFactory('Burger King', imgBurgerKing))



module.exports = asian;

