const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Sou um bot 🤖');
    }
  });
}
