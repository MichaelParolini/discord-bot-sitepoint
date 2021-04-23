require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  
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




  //BUILDS
    //weapons