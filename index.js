require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
<<<<<<< Updated upstream
=======





const findMap = require('./Custom_Modules/maps')
const findChallenge = require('./Custom_Modules/challenges')
const findWeapon = require('./Custom_Modules/weapons')


// GLOBAL
let map = null;
let choosenCha = null;
let choosenWe = null;







>>>>>>> Stashed changes

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  
<<<<<<< Updated upstream
  if (msg.content === 'ShowMap' || msg.content === 'uscita')
   {
    msg.channel.send('map', {files: ["https://i.imgur.com/UDt2JJS.jpg"]});
   }
   
});


//HELP
  //Interchange
    //exits
    //stashes
    //keys
    //Boss

  //Woods
    //exits
    //stashes
    //keys
    //Boss
    
  //Customs
    //exits
    //stashes
    //keys
    //Boss

  //Labs
    //exits
    //stashes
    //keys
    //Boss

  //Shoreline
    //exits
    //stashes
    //keys
    //Boss

  //Reserve
    //exits
    //stashes
    //keys
    //Boss  

 
  
  //Bullets
  //Gear
  //Traders
  //Keys
  //Backpacks
=======
  if (responseObject.includes(msg.content))
  {
    //TUTTO QUELLO CHE NOI FACCIAMO
    // DEFINIAMO LA MAPPA
    map = findMap(); // POPOLA LA VARIABILE "map"

    //ChooseChallengeSet(map);
    choosenCha = findChallenge(map.name, getRandomHeadDistance(), getRandomkmDistance())
    

    choosenWe = findWeapon(choosenCha.type)
    
    //chooseWeapons(choosenCha);
      
   /// msg.reply('Choosedn map: ' + map + ' ' + ' Challenge: ' +  choosenCha.challenge + ' ' + ' With: ' + choosenCha.type+ ' With: ' + choosenWe.name);
    //msg.channel.send(chooseWeapons());
    msg.channel.send(createEmbed())
    
   
  }

});








// SCEGLI LA MAPPA
function choosemap() {
  let MapNo = getRandomInt(Maps.length)
  map = Maps[MapNo] 
}



// TI CREA UN INTEGERE A CASO FINO A MAXX
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function createEmbed()
{

  const challengeEmbed = new Discord.MessageEmbed()
  .setColor(map.color)
  .setTitle(map.name + '  ' + 'CHALLENGE No. ' + choosenCha.id )
  
  .setDescription(choosenCha.challenge)
  .addFields(
    
    { name: '\u200B', value: '\u200B' },
    { name: 'Weapon Class: ', value:"aksdj", inline: true },
    { name: 'Suppressed', value: 'NO', inline: true },
  )
  .setImage(map.link)
  return challengeEmbed;

}



function getRandomHeadDistance() 
{       
    let distance = null;
distance = Math.floor(Math.random() * 400);
     return distance
       
}


function getRandomkmDistance(){

  let distance = null;
  distance = Math.floor(Math.random() * 5);
       return distance
}

>>>>>>> Stashed changes




<<<<<<< Updated upstream
  //BUILDS
    //weapons
=======
const responseObject =
[
  "challenge","cH", "Ch", "Chal", "Chel", "Chellenge", "ch", "c", "gios"
]
>>>>>>> Stashed changes
