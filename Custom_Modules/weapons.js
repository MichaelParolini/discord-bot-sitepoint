let weapons = [
{
    "id": "",
    "type":"LONG",
    "name": "AKM"
},
{
    "id": "",
    "type":"long",
    "name": "AK74"
},
{
    "id": "",
    "type":"short",
    "name": "M4"
},
{
    "id": "",
    "type":"short",
    "name": "PMM"
}

]

let choosenWeapon = null;

function chooseWeapon(type){

    let filteredWeapons = weapons.filter(we => we.type === type)
   
    choosenWeapon = filteredWeapons[getRandomInt(filteredWeapons.length)]

    return choosenWeapon;
}

module.exports = chooseWeapon



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  