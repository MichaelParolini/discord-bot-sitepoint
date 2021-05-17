
const random = require('./random')
let challenge = null;





///////////MAIN
function findChallenge(map, NewDistance, kmDistance){


FilteredChallenges = NewDistanceFunc(NewDistance, kmDistance).filter(cha => cha.map === map);
challenge = FilteredChallenges[getRandomInt(FilteredChallenges.length)]


return challenge;   

}



module.exports = findChallenge

///////////MAIN

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  


function NewDistanceFunc(NewDistance, kmDistance)
{
    headShotdistance =  NewDistance
    walkDistance  = kmDistance

    let challenges = [
    
        {
            "id":"1",        
            "map": "Woods",
            "type": "long",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!",            
        },
        {
            "id":"2",
            "map": "Woods",
            "type": "long",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"3",
            "map": "Woods",
            "type": "short",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"4",
            "map": "Woods",
            "type": "short",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"5",
            "map": "Woods",
            "type": "long",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"6",
            "map": "Interchange",
            "type": "short",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"7",
            "map": "Labs",
            "type": "short",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"8",
            "map": "Reserve",
            "type": "long",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"9",
            "map": "Shoreline",
            "type": "long",
            "challenge" : "Achieve a Headshot on a scav from no less than "  + headShotdistance  + "m"
        },
        {
            "id":"10",
            "map": "Shoreline",
            "type": "long",
            "challenge" : "Achieve a Headsdassdahot on a scav from no less than "  + headShotdistance + "m"
        },
        {
            "id":"11",
            "map": "Shoreline",
            "type": "long",
            "challenge" : "Achieve a asdads on a scav from no less than "  + headShotdistance + "m"
        },
        {
            "id":"10",
            "map": "Factory",
            "type": "short",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        },
        {
            "id":"11",
            "map": "Customs",
            "type": "long",
            "challenge" : "Corri per " + walkDistance + " km e prendi a testate uno scav!"
        }
    
    ]
    
    return challenges;
}