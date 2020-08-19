const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: '',
  name: 'Pacifficbot'
});

// Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  /*bot.postMessageToGroup(
    'pacssific',
    ':github: Github repo and :townhall: Townhall needs to be reviewed for Wednesday`s team meeting. I will select 2 names soon!',
    params
  );*/
  newSpin();
  townHall();
});

// Error Handle
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
    //console.log(data);
  }

  handleMessage(data.text);
});

// Response to Data
/*function handleMessage(message) {
  //
  if (message.includes(':nzts:')) {
    newSpin();

  } else if (message.includes(':letsgo:')) {
    townHall();
  }*/

// Pick a team member randomly
function newSpin() {

  const params = {
    icon_emoji: ':laughing:'
  };

  //let assignee = members[Math.floor(Math.random() * members.length)];

  bot.postMessageToGroup('pacssific', `:siren:  Github Review to talk about over team meeting --> https://fellow.link/RI1v7 :github:`, params);

}


function townHall() {
  const params = {
    icon_emoji: ':laughing:'
  };
  //let members=[];
  let members = ['Nick', 'Smit', 'Anthony', 'Cameron', 'Joey', 'Fern', 'Josh'];
  let assignee = members[Math.floor(Math.random() * members.length)];

  bot.postMessageToGroup('pacssific', ` ${assignee} needs to review Townhall :siren: https://align.ustream.tv/channel/21467912`, params);

}



// Show Help Text
function runHelp() {
  const params = {
    icon_emoji: ':question:'
  };

  bot.postMessageToGroup(
    'taskbot',
    `Type @paccificbot with either 'spin it' for new spinning again, 'results'`,
    params
  );
}