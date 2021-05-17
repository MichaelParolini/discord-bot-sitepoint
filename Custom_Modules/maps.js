let maps = [
{ 
    "id":0,
    "name":"Woods",
    "link": "https://i.ibb.co/fDpBKPL/Woods.png",
    "color": '#103812'
},
{
    "id":1,
    "name":"Customs",
    "link": "https://i.ibb.co/JtsCyB7/Customs.png",
    "color": '#8f8f77'
},
{
    "id":2,
    "name":"Interchange",
    "link": "https://i.ibb.co/XCT4kzf/Interchange.png",
    "color": '#852f20'

},
{
    "id":3,
    "name":"Labs",
    "link": "https://i.ibb.co/xXJ6s91/Labs.png",
    "color": '#4a83a8'

},
{
    "id":4,
    "name":"Shoreline",
    "link": "https://i.ibb.co/YX1nhdk/Shoreline.png",
    "color": '#404040'

},
{
    "id":5,
    "name":"Reserve",
    "link": "https://i.ibb.co/SyjfydK/Reserve.png",
    "color": '#995d25'
 

},
{
    "id":6,
    "name":"Factory",
    "link": "https://i.ibb.co/MDrBsJv/Factory.png",
    "color": '#ff00d4'
}

]

let map = null;
function findMap()
{    map = maps[getRandomInt(maps.length)]
    //map = maps[4]
    return map;
}

module.exports = findMap




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  